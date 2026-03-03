/**
 * Validates a reCAPTCHA token with Google's API
 * Supports both reCAPTCHA Enterprise and standard reCAPTCHA v3
 * @param {string} token - The reCAPTCHA token to validate
 * @param {number} minScore - Minimum score threshold for v3 (default: 0.5)
 * @param {string} action - The action name (default: 'submit')
 * @returns {Promise<{success: boolean, score?: number, error?: string}>}
 */
export async function validateRecaptcha(token, minScore = 0.5, action = 'submit') {
  // Development mode bypass
  if (process.env.NODE_ENV === 'development' && token === 'dev-bypass-token') {
    console.warn('⚠️  DEVELOPMENT MODE: reCAPTCHA validation bypassed');
    console.warn('⚠️  This should NOT be used in production!');
    return {
      success: true,
      score: 1.0,
      developmentMode: true,
      warning: 'reCAPTCHA bypassed in development mode'
    };
  }
  
  if (!token) {
    return { success: false, error: 'reCAPTCHA token is missing' };
  }

  // Check if using Enterprise (has API key and project ID)
  const apiKey = process.env.RECAPTCHA_API_KEY;
  const projectId = process.env.RECAPTCHA_PROJECT_ID || 'tymor-website-1761944602871';
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  console.log('reCAPTCHA Validation Config:', {
    hasApiKey: !!apiKey && apiKey !== 'YOUR_RECAPTCHA_API_KEY_HERE',
    apiKeyPreview: apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT SET',
    projectId: projectId,
    hasSecretKey: !!secretKey && secretKey !== 'YOUR_RECAPTCHA_SECRET_KEY_HERE',
    siteKey: siteKey ? `${siteKey.substring(0, 10)}...` : 'NOT SET',
    tokenLength: token?.length || 0
  });

  // Try Enterprise API first if API key is configured
  if (apiKey && apiKey !== 'YOUR_RECAPTCHA_API_KEY_HERE') {
    console.log('Attempting Enterprise API validation...');
    try {
      const enterpriseUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`;
      
      const requestBody = {
        event: {
          token: token,
          expectedAction: action,
          siteKey: siteKey
        }
      };

      const response = await fetch(enterpriseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      // Log full response for debugging
      console.log('reCAPTCHA Enterprise API Response:', JSON.stringify(data, null, 2));
      console.log('Response Status:', response.status);

      if (!response.ok) {
        console.error('reCAPTCHA Enterprise API Error:', data);
        const errorMessage = data.error?.message || `API returned status ${response.status}`;
        return {
          success: false,
          error: `reCAPTCHA Enterprise API error: ${errorMessage}`,
          details: data.error
        };
      }

      if (data.tokenProperties) {
        const isValid = data.tokenProperties.valid;
        const score = data.riskAnalysis?.score ?? 0;
        const actionMatch = data.tokenProperties.action === action;

        console.log('Token Properties:', {
          valid: isValid,
          action: data.tokenProperties.action,
          expectedAction: action,
          actionMatch: actionMatch,
          score: score,
          hostname: data.tokenProperties.hostname
        });

        if (!isValid) {
          console.error('Invalid token - tokenProperties:', data.tokenProperties);
          console.log('Enterprise API returned invalid token. This might be because standard reCAPTCHA tokens are not compatible with Enterprise API.');
          console.log('Falling back to standard reCAPTCHA API...');
          // Fall through to standard API - don't return error yet
        } else {
          // Token is valid, continue with Enterprise validation

          if (!actionMatch) {
            console.warn(`Action mismatch: expected "${action}", got "${data.tokenProperties.action}"`);
            // Don't fail on action mismatch in development, just warn
            if (process.env.NODE_ENV === 'production') {
              return {
                success: false,
                error: 'reCAPTCHA action mismatch',
                score: score
              };
            }
          }

          if (score < minScore) {
            console.warn(`reCAPTCHA Enterprise score (${score}) is below threshold (${minScore})`);
            return {
              success: false,
              score: score,
              error: `reCAPTCHA score (${score.toFixed(2)}) is below threshold (${minScore})`
            };
          }

          console.log(`✅ reCAPTCHA Enterprise validation successful with score: ${score}`);
          return {
            success: true,
            score: score,
            hostname: data.tokenProperties.hostname
          };
        }
      } else {
        console.error('reCAPTCHA Enterprise validation failed - no tokenProperties:', data);
        console.log('Falling back to standard reCAPTCHA API...');
        // Fall through to standard API
      }
    } catch (error) {
      console.error('Error validating reCAPTCHA Enterprise:', error);
      console.error('Error details:', error.message, error.stack);
      // Fall through to standard API if Enterprise fails
      console.log('Falling back to standard reCAPTCHA API...');
    }
  }

  // Fallback to standard reCAPTCHA API
  // Note: Standard reCAPTCHA tokens from frontend may not work with Enterprise API
  // If Enterprise failed, we need standard secret key to validate standard tokens
  if (!secretKey || secretKey === 'YOUR_RECAPTCHA_SECRET_KEY_HERE') {
    // Development mode: Allow form to work without reCAPTCHA (ONLY IN DEVELOPMENT)
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️  DEVELOPMENT MODE: reCAPTCHA validation is bypassed');
      console.warn('⚠️  Enterprise API validation failed or not compatible with standard tokens');
      console.warn('⚠️  This should NOT be used in production!');
      console.warn('⚠️  To fix: Get the standard reCAPTCHA SECRET KEY from https://www.google.com/recaptcha/admin');
      console.warn('⚠️  Then set RECAPTCHA_SECRET_KEY in .env.local');
      return {
        success: true,
        score: 1.0,
        developmentMode: true,
        warning: 'reCAPTCHA bypassed in development mode - Enterprise API not compatible with standard tokens'
      };
    }
    
    console.error('RECAPTCHA_SECRET_KEY is not set. Enterprise API may not work with standard reCAPTCHA tokens.');
    console.error('Please get the standard reCAPTCHA SECRET KEY from https://www.google.com/recaptcha/admin');
    console.error('Then set RECAPTCHA_SECRET_KEY in your .env.local file');
    return { 
      success: false, 
      error: 'reCAPTCHA configuration error: Standard reCAPTCHA tokens require RECAPTCHA_SECRET_KEY. Enterprise API may not be compatible with standard tokens. Please get the SECRET KEY from reCAPTCHA admin panel.' 
    };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();

    if (data.success) {
      // For v3, check the score
      if (data.score !== undefined) {
        if (data.score < minScore) {
          console.warn(`reCAPTCHA score (${data.score}) is below threshold (${minScore})`);
          return {
            success: false,
            score: data.score,
            error: `reCAPTCHA score (${data.score.toFixed(2)}) is below threshold (${minScore})`
          };
        }
        console.log(`reCAPTCHA v3 validation successful with score: ${data.score}`);
        return {
          success: true,
          score: data.score,
          challenge_ts: data.challenge_ts,
          hostname: data.hostname
        };
      }
      // For v2, no score is returned but success indicates valid
      console.log('reCAPTCHA v2 validation successful');
      return {
        success: true,
        score: 1.0,
        challenge_ts: data.challenge_ts,
        hostname: data.hostname
      };
    } else {
      const errorCodes = data['error-codes'] || [];
      console.error('reCAPTCHA validation failed:', errorCodes);
      console.error('Full response:', JSON.stringify(data, null, 2));
      
      // Provide more helpful error messages
      let errorMessage = 'reCAPTCHA validation failed';
      if (errorCodes.includes('invalid-input-secret')) {
        errorMessage = 'Invalid reCAPTCHA secret key. Please check your RECAPTCHA_SECRET_KEY in .env.local';
      } else if (errorCodes.includes('invalid-input-response')) {
        errorMessage = 'Invalid reCAPTCHA token. Please try again.';
      } else if (errorCodes.length > 0) {
        errorMessage = `reCAPTCHA validation failed: ${errorCodes.join(', ')}`;
      }
      
      return {
        success: false,
        error: errorMessage,
        errorCodes
      };
    }
  } catch (error) {
    console.error('Error validating reCAPTCHA:', error);
    return {
      success: false,
      error: 'Failed to validate reCAPTCHA token'
    };
  }
}
