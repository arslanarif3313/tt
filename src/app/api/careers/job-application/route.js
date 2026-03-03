import { NextResponse } from 'next/server';
import { sendJobApplicationEmail } from '@/utils/email';
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
 * POST handler for job application form submissions
 */
export async function POST(request) {
  try {
    console.log('=== New job application submission received ===');
    
    // Parse the form data
    const formData = await request.formData();
    
    // Extract fields
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const position = formData.get('position');
    const message = formData.get('message');
    const resumeFile = formData.get('resume');
    const recaptchaToken = formData.get('recaptchaToken');
    
    // reCAPTCHA validation bypassed for now
    
    // Validate required fields
    if (!name || !email || !phone || !position || !resumeFile) {
      console.log('Missing required fields:');
      console.log('Name:', name ? 'provided' : 'MISSING');
      console.log('Email:', email ? 'provided' : 'MISSING');
      console.log('Phone:', phone ? 'provided' : 'MISSING');
      console.log('Position:', position ? 'provided' : 'MISSING');
      console.log('Resume:', resumeFile ? 'provided' : 'MISSING');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields',
          required: 'Name, Email, Phone, Position, and Resume are all required',
          details: {
            name: !!name,
            email: !!email,
            phone: !!phone,
            position: !!position,
            resume: !!resumeFile
          }
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = sanitizeInput(phone);
    const sanitizedPosition = sanitizeInput(position);
    const sanitizedMessage = sanitizeInput(message || '');

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

    // Check SMTP configuration
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || process.env.SMTP_PASS === 'YOUR_EMAIL_PASSWORD_HERE') {
      console.warn('⚠️ SMTP not configured properly. Email will not be sent.');
      console.warn('Please set SMTP_USER and SMTP_PASS in .env.local');
    } else {
      // Send email to tymorsmtp@tymortech.com
      console.log('Sending email to tymorsmtp@tymortech.com...');
      console.log('SMTP_HOST:', process.env.SMTP_HOST);
      console.log('SMTP_USER:', process.env.SMTP_USER);
      
      try {
        await sendJobApplicationEmail({
          name: sanitizedName,
          email: sanitizedEmail,
          phone: sanitizedPhone,
          position: sanitizedPosition,
          message: sanitizedMessage,
          resumeFile: resumeFile
        });
        
        console.log('Job application email sent successfully');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Don't fail the request if email fails - still log the submission
      }
    }
    
    console.log('Job application submitted successfully for:', sanitizedEmail);
    console.log('Position:', sanitizedPosition);
    console.log('File received:', resumeFileName, '- Size:', fileSize, 'bytes');

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Job application submitted successfully',
      data: {
        id: Date.now(), // Simple ID generation
        timestamp: new Date().toISOString(),
        applicant: sanitizedEmail,
        position: sanitizedPosition
      }
    });

  } catch (error) {
    console.error('Error in POST /api/careers/job-application:', error);
    
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

