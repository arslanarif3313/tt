"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function ThreeCXChat() {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        // Intercept fetch requests to proxy through our API
        const originalFetch = window.fetch;
        window.fetch = function(url, options = {}) {
            if (typeof url === 'string' && (url.includes('3cx.us') || url.includes('3cx.com')) && !url.includes('/api/3cx-proxy')) {
                const proxyUrl = `/api/3cx-proxy?url=${encodeURIComponent(url)}`;
                const proxyOptions = {
                    ...options,
                    headers: {
                        'Content-Type': 'text/xml; charset=utf-8',
                        'SOAPAction': '""',
                        ...options.headers
                    },
                    // Ensure body exists for POST requests
                    body: options.body || (options.method === 'POST' ? '' : undefined)
                };
                return originalFetch(proxyUrl, proxyOptions);
            }
            return originalFetch(url, options);
        };

        if (!scriptLoaded) return;

        console.log('3CX script loaded, initializing chat widget...');

        const initializeChatWidget = setInterval(() => {
            const chatElement = document.querySelector('call-us-selector') || document.querySelector('call-us') || document.querySelector('#wp-live-chat-by-3CX');

            if (chatElement) {
                console.log('Chat element found, applying styles...');

                chatElement.style.cssText = `
          position: fixed !important;
          font-size: 16px !important;
          line-height: 17px !important;
          z-index: 9999 !important;
          right: 20px !important;
          bottom: 20px !important;
          pointer-events: auto !important;
          opacity: 1 !important;
          visibility: visible !important;
          display: block !important;
          --call-us-main-accent-color: #3397D4 !important;
          --call-us-main-background-color: #FFFFFF !important;
          --call-us-plate-background-color: #373737 !important;
          --call-us-plate-font-color: #E6E6E6 !important;
          --call-us-main-font-color: #292929 !important;
          --call-us-agent-bubble-color: #29292910 !important;
        `;

                const shadowRoot = chatElement.shadowRoot;
                if (shadowRoot) {
                    const style = document.createElement('style');
                    style.textContent = `
            :host, * {
              pointer-events: auto !important;
            }
            button, .chat-button, .chat-widget {
              pointer-events: auto !important;
              opacity: 1 !important;
              visibility: visible !important;
              cursor: pointer !important;
            }
            button[disabled] {
              pointer-events: auto !important;
              opacity: 1 !important;
              visibility: visible !important;
            }
            button:hover {
              opacity: 1 !important;
              filter: brightness(1.1) !important;
            }
          `;
                    shadowRoot.appendChild(style);

                    // Remove disabled attribute from any button inside shadow DOM
                    const buttons = shadowRoot.querySelectorAll('button[disabled]');
                    buttons.forEach(btn => btn.removeAttribute('disabled'));
                }

                clearInterval(initializeChatWidget);
                console.log('Chat widget initialized successfully');
            }
        }, 100);

        const timeout = setTimeout(() => {
            clearInterval(initializeChatWidget);
        }, 10000);

        return () => {
            clearInterval(initializeChatWidget);
            clearTimeout(timeout);
        };
    }, [scriptLoaded]);
    return (
        <>
            {/* 3CX Live Chat Widget */}
            <call-us-selector
                phonesystem-url="https://tymortechnologies-phone-system.pa.3cx.us"
                party="LiveChat777148"
            ></call-us-selector>

            {/* 3CX Script */}
            <Script
                src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
                id="tcx-callus-js"
                charset="utf-8"
                strategy="afterInteractive"
                onLoad={() => {
                    console.log('3CX script loaded');
                    setScriptLoaded(true);
                }}
                onError={(e) => {
                    console.error('Failed to load 3CX script:', e);
                }}
            />
        </>
    );
}

