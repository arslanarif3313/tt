import { NextResponse } from 'next/server';

// Dynamics 365 Configuration
const DYNAMICS_CONFIG = {
  tenantId: process.env.DYNAMICS_TENANT_ID,
  clientId: process.env.DYNAMICS_CLIENT_ID,
  clientSecret: process.env.DYNAMICS_CLIENT_SECRET,
  resource: process.env.DYNAMICS_RESOURCE,
  apiUrl: process.env.DYNAMICS_API_URL,
};

// Validate required environment variables
function validateEnvironmentVariables() {
  const requiredVars = ['DYNAMICS_TENANT_ID', 'DYNAMICS_CLIENT_ID', 'DYNAMICS_CLIENT_SECRET', 'DYNAMICS_RESOURCE', 'DYNAMICS_API_URL'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}

/**
 * Get access token from Azure AD using client credentials flow
 */
async function getAccessToken() {
  const tokenEndpoint = `https://login.microsoftonline.com/${DYNAMICS_CONFIG.tenantId}/oauth2/v2.0/token`;
  
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: DYNAMICS_CONFIG.clientId,
    client_secret: DYNAMICS_CONFIG.clientSecret,
    scope: `${DYNAMICS_CONFIG.resource}/.default`,
  });

  try {
    console.log('Requesting access token from:', tokenEndpoint);
    console.log('Resource:', DYNAMICS_CONFIG.resource);
    
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Token request failed:', response.status, errorData);
      throw new Error(`Failed to get access token: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    console.log('Access token obtained successfully');
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

/**
 * Create a new Lead in Dynamics 365 CRM
 */
async function createLead(accessToken, leadData) {
  const leadsEndpoint = `${DYNAMICS_CONFIG.apiUrl}/leads`;

  // Map form data to Dynamics 365 Lead fields
  const dynamicsLead = {
    companyname: leadData.companyName,
    address1_line1: leadData.companyAddress,
    firstname: leadData.firstName,
    lastname: leadData.lastName,
    emailaddress1: leadData.email,
    telephone1: leadData.phone,
    description: leadData.message,
    subject: leadData.service,
    leadsourcecode: mapLeadSourceToCode(leadData.leadSource),
    // Add lead source field if you have a custom field for it
    // new_leadsource: leadData.leadSource,
  };

  try {
    console.log('Creating lead at:', leadsEndpoint);
    // Removed sensitive data logging for security
    
    const response = await fetch(leadsEndpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'OData-MaxVersion': '4.0',
        'OData-Version': '4.0',
        'Accept': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify(dynamicsLead),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Lead creation failed:', response.status, errorData);
      throw new Error(`Failed to create lead: ${response.status} - ${errorData}`);
    }

    console.log('Lead created successfully');
    
    // Check if response has content
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    // Return success without body
    return { success: true, id: response.headers.get('OData-EntityId') };
  } catch (error) {
    console.error('Error creating lead:', error);
    throw error;
  }
}

/**
 * Map lead source to Dynamics 365 lead source code
 */
function mapLeadSourceToCode(leadSource) {
  const mapping = {
    'Website Contact Form': 4, // Web
    'Website': 4, // Web
    'Google': 4, // Web
    'Referral': 3, // Referral
    'LinkedIn': 4, // Web
    'Event / Conference': 5, // Trade Show
    'Other': 1, // Advertisement
  };
  return mapping[leadSource] || 4; // Default to Web (4) for website forms
}

/**
 * POST handler for creating a new lead
 */
export async function POST(request) {
  try {
    // Validate environment variables
    validateEnvironmentVariables();
    
    console.log('=== New form submission received ===');
    
    // Parse the request body
    const formData = await request.json();
    // Removed sensitive data logging for security

    // Validate required fields
    const requiredFields = ['companyName', 'companyAddress', 'firstName', 'lastName', 'email', 'phone', 'service', 'referral', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      console.log('Missing fields:', missingFields);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields', 
          missingFields 
        },
        { status: 400 }
      );
    }

    // Get access token
    console.log('Getting access token...');
    const accessToken = await getAccessToken();

    // Create lead in Dynamics 365
    console.log('Creating lead in Dynamics 365...');
    const result = await createLead(accessToken, formData);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Lead created successfully in Dynamics 365',
      data: result,
    });

  } catch (error) {
    console.error('Error in POST /api/dynamics-crm:', error);
    console.error('Error stack:', error.stack);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create lead in Dynamics 365',
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}