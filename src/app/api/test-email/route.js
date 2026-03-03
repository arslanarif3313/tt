import { NextResponse } from 'next/server';
import { verifyEmailConnection } from '@/utils/email';

export async function GET() {
  try {
    console.log('Testing email configuration...');
    
    const isConfigured = await verifyEmailConnection();
    
    return NextResponse.json({
      configured: isConfigured,
      environment: {
        SMTP_HOST: process.env.SMTP_HOST || 'NOT SET',
        SMTP_PORT: process.env.SMTP_PORT || 'NOT SET',
        SMTP_USER: process.env.SMTP_USER || 'NOT SET',
        SMTP_FROM: process.env.SMTP_FROM || 'NOT SET',
        SMTP_TO: process.env.SMTP_TO || 'NOT SET',
        SMTP_PASS_SET: process.env.SMTP_PASS ? 'YES' : 'NO'
      },
      message: isConfigured 
        ? 'Email configuration is working!' 
        : 'Email configuration failed. Check your .env.local file.'
    });
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({
      configured: false,
      error: error.message,
      environment: {
        SMTP_HOST: process.env.SMTP_HOST || 'NOT SET',
        SMTP_PORT: process.env.SMTP_PORT || 'NOT SET',
        SMTP_USER: process.env.SMTP_USER || 'NOT SET',
        SMTP_FROM: process.env.SMTP_FROM || 'NOT SET',
        SMTP_TO: process.env.SMTP_TO || 'NOT SET',
        SMTP_PASS_SET: process.env.SMTP_PASS ? 'YES' : 'NO'
      }
    }, { status: 500 });
  }
}

