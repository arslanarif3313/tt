import { NextResponse } from 'next/server';
import { sendGeneralApplicationEmail } from '@/utils/email';
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

/**
 * POST handler for general career application form submissions
 */
export async function POST(request) {
  try {
    console.log('=== New general application submission received ===');
    
    // Parse the form data
    const formData = await request.formData();
    
    // Extract fields
    const name = formData.get('name');
    const email = formData.get('email');
    const skills = formData.get('skills');
    const resumeFile = formData.get('resume');
    const recaptchaToken = formData.get('recaptchaToken');
    
    // Validate reCAPTCHA token
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
      console.log('Error codes:', recaptchaValidation.errorCodes);
      return NextResponse.json(
        { 
          success: false, 
          error: recaptchaValidation.error || 'reCAPTCHA validation failed. Please try again.' 
        },
        { status: 400 }
      );
    }
    
    // Log score for monitoring (v3 only)
    if (recaptchaValidation.score !== undefined) {
      console.log(`reCAPTCHA v3 score: ${recaptchaValidation.score}`);
    }
    
    // Validate required fields
    if (!name || !email || !skills || !resumeFile) {
      console.log('Missing required fields');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields',
          required: 'Name, Email, Skills, and Resume are all required'
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedSkills = sanitizeInput(skills);

    // Validate email format
    if (!validateEmail(sanitizedEmail)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email format' 
        },
        { status: 400 }
      );
    }

    // Validate resume file
    const resumeFileName = resumeFile.name;
    const allowedExtensions = ['.pdf', '.doc', '.docx'];
    const fileExtension = resumeFileName.substring(resumeFileName.lastIndexOf('.')).toLowerCase();
    
    if (!allowedExtensions.includes(fileExtension)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid file format. Only PDF, DOC, and DOCX files are allowed.' 
        },
        { status: 400 }
      );
    }

    // Check file size (5MB limit)
    const fileSize = resumeFile.size;
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    
    if (fileSize > maxSize) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'File size exceeds 5MB limit' 
        },
        { status: 400 }
      );
    }

    // Send email to tymorsmtp@tymortech.com
    console.log('Sending email to tymorsmtp@tymortech.com...');
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    console.log('SMTP_USER:', process.env.SMTP_USER);
    
    try {
      await sendGeneralApplicationEmail({
        name: sanitizedName,
        email: sanitizedEmail,
        skills: sanitizedSkills,
        resumeFile: resumeFile
      });
      
      console.log('General application email sent successfully');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Don't fail the request if email fails - still log the submission
    }
    
    console.log('General application submitted successfully for:', sanitizedEmail);
    console.log('File received:', resumeFileName, '- Size:', fileSize, 'bytes');

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'General application submitted successfully',
      data: {
        id: Date.now(), // Simple ID generation
        timestamp: new Date().toISOString(),
        applicant: sanitizedEmail
      }
    });

  } catch (error) {
    console.error('Error in POST /api/careers/general-application:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process application',
        details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}

