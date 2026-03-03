import { NextResponse } from 'next/server';
import { validateRecaptcha } from '@/utils/recaptcha';

export async function GET() {
  try {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const apiKey = process.env.RECAPTCHA_API_KEY;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const projectId = process.env.RECAPTCHA_PROJECT_ID;
    
    const isSiteKeySet = !!siteKey && siteKey !== '';
    const isApiKeySet = !!apiKey && apiKey !== 'YOUR_RECAPTCHA_API_KEY_HERE' && apiKey !== '';
    const isSecretKeySet = !!secretKey && secretKey !== 'YOUR_RECAPTCHA_SECRET_KEY_HERE' && secretKey !== '';
    const isConfigured = isSiteKeySet && (isApiKeySet || isSecretKeySet);
    
    // Test with a dummy token to see what error we get
    let testResult = null;
    if (isConfigured) {
      try {
        testResult = await validateRecaptcha('test-token-for-diagnostics', 0.5, 'submit');
      } catch (err) {
        testResult = { error: err.message };
      }
    }
    
    return NextResponse.json({
      configured: isConfigured,
      usingEnterprise: isApiKeySet,
      usingStandard: isSecretKeySet && !isApiKeySet,
      environment: {
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY: isSiteKeySet ? `${siteKey.substring(0, 10)}...` : 'NOT SET',
        RECAPTCHA_API_KEY: isApiKeySet ? 'SET (hidden)' : 'NOT SET',
        RECAPTCHA_SECRET_KEY: isSecretKeySet ? 'SET (hidden)' : 'NOT SET',
        RECAPTCHA_PROJECT_ID: projectId || 'NOT SET',
        NODE_ENV: process.env.NODE_ENV,
      },
      status: {
        siteKey: isSiteKeySet ? '✅ Configured' : '❌ Not configured',
        apiKey: isApiKeySet ? '✅ Configured (Enterprise)' : '❌ Not configured',
        secretKey: isSecretKeySet ? '✅ Configured (Standard)' : '❌ Not configured',
      },
      testValidation: testResult,
      message: isConfigured
        ? `reCAPTCHA configuration is complete! Using ${isApiKeySet ? 'Enterprise' : 'Standard'} mode.`
        : isSiteKeySet
        ? 'Site key is set, but API key or Secret key is missing. Please add RECAPTCHA_API_KEY (Enterprise) or RECAPTCHA_SECRET_KEY (Standard) to your .env.local file.'
        : 'reCAPTCHA is not configured. Please set both keys in your .env.local file.',
      instructions: !isConfigured ? [
        'Option 1 - Enterprise (Recommended):',
        '1. Go to https://console.cloud.google.com/apis/credentials',
        '2. Select project: ' + (projectId || 'your-project-id'),
        '3. Create or find an API key',
        '4. Copy the API key',
        '5. Update RECAPTCHA_API_KEY in .env.local',
        '',
        'Option 2 - Standard reCAPTCHA:',
        '1. Go to https://www.google.com/recaptcha/admin',
        '2. Find your site with Site Key: ' + (siteKey || 'your-site-key'),
        '3. Click Settings or view details',
        '4. Copy the SECRET KEY (not the site key)',
        '5. Uncomment and update RECAPTCHA_SECRET_KEY in .env.local',
        '',
        'After updating, restart your dev server (npm run dev)'
      ] : []
    });
  } catch (error) {
    return NextResponse.json({
      configured: false,
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}

