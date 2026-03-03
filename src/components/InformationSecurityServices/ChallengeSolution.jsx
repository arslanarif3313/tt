// app/(site)/components/ChallengeSolution.jsx
'use client';

import { Check } from 'lucide-react';

const solutions = [
    {
        title: 'Risk Assessment and Planning',
        body:
            "Tymor Technologies began with a comprehensive cybersecurity risk assessment to identify vulnerabilities and areas for improvement within MSTE Enterprises' network infrastructure, endpoint devices, and cloud services.",
    },
    {
        title: 'Network Security Upgrade',
        body:
            "Using Cisco and Palo Alto Networks technologies, Tymor Technologies upgraded MSTE Enterprises' network security infrastructure. This included implementing next-generation firewalls, intrusion prevention systems (IPS), and secure VPNs for remote access.",
    },
    {
        title: 'Endpoint Protection',
        body:
            "Tymor Technologies deployed Trend Micro and Microsoft Defender solutions for advanced endpoint protection, ensuring all devices connected to MSTE Enterprises' network were safeguarded against malware and other threats.",
    },
    {
        title: 'Email and Data Security',
        body:
            'Barracuda Networks solutions were integrated to provide robust email security and data protection, including advanced spam filtering, phishing protection, and data encryption.',
    },
    {
        title: 'Multi-Factor Authentication (MFA)',
        body:
            "WatchGuard's MFA solutions were implemented across all critical systems and applications to enhance access security and prevent unauthorized access.",
    },
    {
        title: 'Continuous Monitoring and Response',
        body:
            'Tymor Technologies employed SonicWall and its own SOC services for continuous network monitoring and rapid incident response, ensuring that any anomalies or threats were quickly detected and addressed.',
    },
];

export default function ChallengeSolution() {
    return (
        <section className="py-10 bg-black text-white">
            <div className="container mx-auto px-4">
                {/* Challenge */}
                <div className="text-center max-w-5xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-3">
                        CHALLENGE
                    </h3>
                    <p className="text-white/80">
                        MSTE Enterprises faced a growing number of cyber threats, including phishing attacks,
                        ransomware, and data breaches. The company needed to enhance its cybersecurity posture to
                        protect sensitive manufacturing data, ensure compliance with industry regulations, and
                        maintain operational continuity.
                    </p>
                </div>

                {/* Solution */}
                <div className="text-center mt-12">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-wide">
                        SOLUTION
                    </h3>
                </div>

                <div className="mt-8 grid gap-6 md:gap-8 lg:grid-cols-2">
                    {solutions.map((card, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl bg-white/5 border border-white/10 overflow-hidden"
                        >
                            <div className="flex">
                                {/* Left icon block */}
                                <div className="bg-black/80 p-6 flex items-center justify-center">
                                    <div className="h-10 w-10 rounded-md flex items-center justify-center">
                                        <Check className="h-7 w-7 text-[var(--color-primary)]" strokeWidth={2.5} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h4 className="font-semibold text-lg mb-2">{card.title}</h4>
                                    <p className="text-white/80 leading-relaxed">{card.body}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
