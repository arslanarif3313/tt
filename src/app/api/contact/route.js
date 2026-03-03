import { NextResponse } from 'next/server';
import { validateRecaptcha } from '@/utils/recaptcha';

// Input validation and sanitization
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/[<>]/g, '');
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

/**
 * POST handler for contact form submissions
 */
export async function POST(request) {
  try {
    console.log('=== New contact form submission received ===');
    
    // Parse the request body
    const formData = await request.json();
    
    // Validate required fields
    const requiredFields = ['companyName', 'contactName', 'region', 'country', 'address', 'email', 'phone', 'service'];
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

    // Validate reCAPTCHA token
    const recaptchaToken = formData.recaptchaToken;
    if (!recaptchaToken) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'reCAPTCHA token is missing' 
        },
        { status: 400 }
      );
    }

    // Validate reCAPTCHA token with score threshold (0.5 is recommended for v3)
    const recaptchaValidation = await validateRecaptcha(recaptchaToken, 0.5);
    if (!recaptchaValidation.success) {
      console.error('reCAPTCHA validation failed:', recaptchaValidation.error);
      console.log('Score:', recaptchaValidation.score);
      return NextResponse.json(
        { 
          success: false, 
          error: 'reCAPTCHA validation failed. Please try again.' 
        },
        { status: 400 }
      );
    }
    
    // Log score for monitoring (v3 only)
    if (recaptchaValidation.score !== undefined) {
      console.log(`reCAPTCHA v3 score: ${recaptchaValidation.score}`);
    }

    // Sanitize and validate inputs
    const sanitizedData = {
      companyName: sanitizeInput(formData.companyName),
      contactName: sanitizeInput(formData.contactName),
      region: sanitizeInput(formData.region),
      country: sanitizeInput(formData.country),
      address: sanitizeInput(formData.address),
      email: sanitizeInput(formData.email),
      whatsapp: sanitizeInput(formData.whatsapp || ''),
      phone: sanitizeInput(formData.phone),
      service: sanitizeInput(formData.service),
    };

    // Validate email format
    if (!validateEmail(sanitizedData.email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email format' 
        },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!validatePhone(sanitizedData.phone)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid phone format' 
        },
        { status: 400 }
      );
    }

    // Here you would typically save to database or send to CRM
    // For now, we'll just log success and return a success response
    console.log('Contact form submitted successfully for:', sanitizedData.email);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: Date.now(), // Simple ID generation
        timestamp: new Date().toISOString(),
      }
    });

  } catch (error) {
    console.error('Error in POST /api/contact:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process contact form',
        details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
