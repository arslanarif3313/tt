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
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
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


async function createNewsletterLead(accessToken, newsletterData) {
  const leadsEndpoint = `${DYNAMICS_CONFIG.apiUrl}/leads`;
  const dynamicsLead = {
    firstname: newsletterData.email,
    emailaddress1: newsletterData.email,
    subject: 'Newsletter Subscription',
    leadsourcecode: 4, // Web
  };

  try {
    console.log('Creating newsletter lead at:', leadsEndpoint);
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
      console.error('Newsletter lead creation failed:', response.status, errorData);
      throw new Error(`Failed to create newsletter lead: ${response.status} - ${errorData}`);
    }
    console.log('Newsletter lead created successfully');
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    return { success: true, id: response.headers.get('OData-EntityId') };
  } catch (error) {
    console.error('Error creating newsletter lead:', error);
    throw error;
  }
}

export async function POST(request) {
  try {
    // Validate environment variables
    validateEnvironmentVariables();
    
    console.log('=== New newsletter subscription received ===');
    const newsletterData = await request.json();
    // Removed sensitive data logging for security
    
    const requiredFields = ['email'];
    const missingFields = requiredFields.filter(field => !newsletterData[field]);
    if (missingFields.length > 0) {
      console.log('Missing fields:', missingFields);
      return NextResponse.json({ success: false, error: 'Missing required fields', missingFields }, { status: 400 });
    }
    
    console.log('Getting access token...');
    const accessToken = await getAccessToken();
    console.log('Creating newsletter lead in Dynamics 365...');
    const result = await createNewsletterLead(accessToken, newsletterData);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Newsletter subscription created successfully in Dynamics 365', 
      data: result 
    });
  } catch (error) {
    console.error('Error in POST /api/newsletter:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create newsletter subscription in Dynamics 365',
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
