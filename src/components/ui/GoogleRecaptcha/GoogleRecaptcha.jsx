"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

export default function GoogleRecaptcha({ onValidationChange, error, action = 'submit' }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const scriptLoadedRef = useRef(false);
  const tokenRef = useRef(null);

  // Load standard reCAPTCHA v3 script
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set in environment variables');
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector(`script[src*="recaptcha/api.js"]`);
    if (existingScript && window.grecaptcha && window.grecaptcha.ready) {
      setIsLoaded(true);
      scriptLoadedRef.current = true;
      return;
    }

    // Load the standard reCAPTCHA v3 script
    if (!scriptLoadedRef.current) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setIsLoaded(true);
        scriptLoadedRef.current = true;
      };
      script.onerror = () => {
        console.error('Failed to load reCAPTCHA script');
      };
      document.head.appendChild(script);
      scriptLoadedRef.current = true;
    }
  }, []);

  // Execute reCAPTCHA v3 when loaded
  const executeRecaptcha = useCallback(async () => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey || !isLoaded || !window.grecaptcha || isExecuting) {
      return;
    }

    try {
      setIsExecuting(true);
      
      // Wait for grecaptcha to be ready
      await new Promise((resolve) => {
        window.grecaptcha.ready(resolve);
      });

      // Execute reCAPTCHA v3
      const token = await window.grecaptcha.execute(siteKey, { action });
      
      if (token) {
        tokenRef.current = token;
        onValidationChange(true, token);
      }
    } catch (err) {
      console.error('reCAPTCHA execution error:', err);
      onValidationChange(false, null);
    } finally {
      setIsExecuting(false);
    }
  }, [isLoaded, action, onValidationChange, isExecuting]);

  // Execute when loaded
  useEffect(() => {
    if (isLoaded && window.grecaptcha && !tokenRef.current) {
      executeRecaptcha();
    }
  }, [isLoaded, executeRecaptcha]);

  // Re-execute when error occurs or when explicitly triggered
  useEffect(() => {
    if (error && isLoaded && window.grecaptcha) {
      tokenRef.current = null;
      executeRecaptcha();
    }
  }, [error, isLoaded, executeRecaptcha]);

  // Expose execute function for form submission
  useEffect(() => {
    if (typeof window !== 'undefined' && isLoaded) {
      window.executeRecaptchaOnSubmit = async () => {
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
        if (siteKey && window.grecaptcha) {
          try {
            const token = await window.grecaptcha.execute(siteKey, { action: 'submit' });
            if (token) {
              tokenRef.current = token;
              onValidationChange(true, token);
              return token;
            }
          } catch (err) {
            console.error('reCAPTCHA execution error on submit:', err);
          }
        }
        return null;
      };
    }
  }, [isLoaded, onValidationChange, action]);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    return (
      <div className="rounded-lg bg-base-200 p-4">
        <p className="text-xs text-error">
          reCAPTCHA configuration error. Please contact the administrator.
          <br />
          <span className="text-xs">Site key not found. Please check your .env.local file and restart the dev server.</span>
        </p>
      </div>
    );
  }

  // Ensure badge is visible (positioning is handled by Google via badge parameter)
  useEffect(() => {
    if (isLoaded) {
      // Small delay to ensure badge is rendered
      setTimeout(() => {
        const badge = document.querySelector('.grecaptcha-badge');
        if (badge) {
          badge.style.visibility = 'visible';
        }
      }, 500);
    }
  }, [isLoaded]);

  // reCAPTCHA v3 is invisible, so we show privacy notice
  return (
    <div className="text-xs text-gray-500 mt-2">
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline ml-1">
        Privacy Policy
      </a> and
      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline ml-1">
        Terms of Service
      </a> apply.
      {error && (
        <p className="mt-2 text-xs text-error">
          reCAPTCHA verification is required. Please refresh the page if needed.
        </p>
      )}
    </div>
  );
}
