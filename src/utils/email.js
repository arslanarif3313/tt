import nodemailer from 'nodemailer';

// Create transporter with Office 365 settings
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.office365.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false
  }
});

// Log configuration (without password)
console.log('Email config loaded:', {
  host: process.env.SMTP_HOST || 'smtp.office365.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  user: process.env.SMTP_USER || 'NOT SET',
  from: process.env.SMTP_FROM || 'NOT SET',
  to: process.env.SMTP_TO || 'NOT SET'
});

// Verify connection
export async function verifyEmailConnection() {
  try {
    await transporter.verify();
    console.log('✅ Email server is ready to take messages');
    return true;
  } catch (error) {
    console.error('❌ Email server connection failed:', error);
    return false;
  }
}

/**
 * Send job application email
 */
export async function sendJobApplicationEmail(applicationData) {
  const { name, email, phone, position, message, resumeFile } = applicationData;

  const attachments = [];
  
  // Convert resume file to buffer if provided
  if (resumeFile) {
    try {
      const arrayBuffer = await resumeFile.arrayBuffer();
      attachments.push({
        filename: resumeFile.name,
        content: Buffer.from(arrayBuffer),
      });
    } catch (error) {
      console.error('Error processing resume file:', error);
    }
  }

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: `New Job Application: ${position || 'General Application'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #FF4500; border-bottom: 2px solid #FF4500; padding-bottom: 10px;">
          New Job Application Received
        </h2>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p style="margin: 5px 0;"><strong>Position:</strong> ${position || 'General Application'}</p>
          ${message ? `<p style="margin: 5px 0;"><strong>Cover Note:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
          ${resumeFile ? `<p style="margin: 5px 0;"><strong>Resume:</strong> ${resumeFile.name} (${(resumeFile.size / 1024).toFixed(2)} KB)</p>` : ''}
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p style="color: #666; font-size: 12px;">
          <em>This email was sent from the Tymor Technologies Careers page.</em>
        </p>
        
        <p style="color: #666; font-size: 12px;">
          <em>Reply to the applicant at: ${email}</em>
        </p>
      </div>
    `,
    attachments: attachments.length > 0 ? attachments : undefined
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
}

/**
 * Send general application email
 */
export async function sendGeneralApplicationEmail(applicationData) {
  const { name, email, skills, resumeFile } = applicationData;

  const attachments = [];
  
  // Convert resume file to buffer if provided
  if (resumeFile) {
    try {
      const arrayBuffer = await resumeFile.arrayBuffer();
      attachments.push({
        filename: resumeFile.name,
        content: Buffer.from(arrayBuffer),
      });
    } catch (error) {
      console.error('Error processing resume file:', error);
    }
  }

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: `New General Application from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #FF4500; border-bottom: 2px solid #FF4500; padding-bottom: 10px;">
          New General Application Received
        </h2>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>Skills/Interest:</strong> ${skills.replace(/\n/g, '<br>')}</p>
          ${resumeFile ? `<p style="margin: 5px 0;"><strong>Resume:</strong> ${resumeFile.name} (${(resumeFile.size / 1024).toFixed(2)} KB)</p>` : ''}
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p style="color: #666; font-size: 12px;">
          <em>This email was sent from the Tymor Technologies Careers page.</em>
        </p>
        
        <p style="color: #666; font-size: 12px;">
          <em>Reply to the applicant at: ${email}</em>
        </p>
      </div>
    `,
    attachments: attachments.length > 0 ? attachments : undefined
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
}

export default transporter;

