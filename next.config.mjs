import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:'export',
    outputFileTracingRoot: __dirname,
    allowedDevOrigins: [
        'vigorless-ramona-pitchable.ngrok-free.dev',
        'continentally-defrayable-pearlie.ngrok-free.dev'
    ],
    async redirects() {
        return [
            {
                source: '/ai-for-small-business',
                destination: '/ai-for-enterprises',
                permanent: true,
            },
        ]
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(self), geolocation=()',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google.com https://www.gstatic.com https://mm-uxrv.com https://downloads-global.3cx.com https://*.3cx.com https://*.3cx.us; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; media-src 'self' data: https://*.3cx.com https://*.3cx.us; connect-src 'self' https: wss: https://www.google.com https://www.gstatic.com https://*.3cx.com https://*.3cx.us wss://*.3cx.com wss://*.3cx.us; frame-src 'self' https://www.google.com https://maps.google.com https://*.3cx.com https://*.3cx.us; frame-ancestors 'self';",
                    },
                ],
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dashboard.tymortech.com',
            },
            {
                protocol: 'https',
                hostname: 'tymordashboard-bxbwe5dbedaccmdt.eastus-01.azurewebsites.net',
            },
            {
                protocol: 'https',
                hostname: '**.azurewebsites.net',
            },
            {
                protocol: 'https',
                hostname: '**.vercel.app',
            },
            {
                protocol: 'https',
                hostname: '**.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: '**.amazonaws.com',
            },
        ],
    },
};

export default nextConfig;
