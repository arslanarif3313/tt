// app/components/TechnologiesStrategies.jsx
"use client";

import { CircleArrowRight } from "lucide-react";

export default function TechnologiesStrategies() {
    const blocks = [
        {
            title: "1. Remote Monitoring and Management (RMM)",
            items: [
                {
                    label: "24/7 Monitoring",
                    text:
                        "Our RMM tools continuously monitor your IT infrastructure, identifying and addressing issues before they become critical.",
                },
                {
                    label: "Automated Alerts",
                    text:
                        "Instant alerts for any irregularities, allowing us to resolve problems remotely and promptly.",
                },
                {
                    label: "Proactive Maintenance",
                    text:
                        "Regular updates and patches are applied remotely, ensuring your systems are always up-to-date and secure.",
                },
            ],
        },
        {
            title: "2. Advanced Diagnostic Tools",
            items: [
                {
                    label: "Real-Time Diagnostics",
                    text:
                        "We use sophisticated software to diagnose issues in real-time, reducing the need for physical intervention.",
                },
                {
                    label: "Comprehensive Reporting",
                    text:
                        "Detailed reports on system health and performance help in preemptively identifying potential issues.",
                },
            ],
        },
        {
            title: "3. Secure Remote Access",
            items: [
                {
                    label: "Encrypted Connections",
                    text:
                        "All remote sessions are conducted over secure, encrypted connections to protect your data and privacy.",
                },
                {
                    label: "Access Control",
                    text:
                        "Strict access controls ensure that only authorized personnel can access your systems remotely.",
                },
            ],
        },
        {
            title: "4. Virtual Consultation and Support",
            items: [
                {
                    label: "Video Conferencing",
                    text:
                        "For complex issues that require in-depth discussion, our experts can consult with you via video conferencing.",
                },
                {
                    label: "Live Chat Support",
                    text:
                        "Immediate assistance through live chat to resolve minor issues and provide guidance.",
                },
            ],
        },
        {
            title: "5. Comprehensive Documentation and Knowledge Base",
            items: [
                {
                    label: "Detailed Guides",
                    text:
                        "Extensive documentation and guides are available for self-service troubleshooting.",
                },
                {
                    label: "FAQ and Tutorials",
                    text:
                        "Regularly updated FAQs and tutorial videos help you resolve common issues on your own.",
                },
            ],
        },
        {
            title: "6. Automated Backup and Recovery Solutions",
            items: [
                {
                    label: "Regular Backups",
                    text:
                        "Automated, scheduled backups to ensure your data is always safe and can be restored remotely.",
                },
                {
                    label: "Disaster Recovery Planning",
                    text:
                        "Robust disaster recovery solutions that can be executed remotely to minimize downtime.",
                },
            ],
        },
        {
            title: "7. Client Education and Training",
            items: [
                {
                    label: "Webinars and Training Sessions",
                    text:
                        "Regular webinars and training sessions to educate your team on best practices and common troubleshooting techniques.",
                },
                {
                    label: "Personalized Training",
                    text:
                        "Customized training sessions tailored to your specific needs and IT environment.",
                },
            ],
        },
    ];

    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-3xl font-bold uppercase text-center">
                    Technologies and Strategies Used by Tymor Technologies to Prevent Onsite Costs
                </h2>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blocks.map((block, idx) => (
                        <div
                            key={idx}
                            className="rounded-lg border border-base-300 bg-base-100 p-5 md:p-6 shadow-sm"
                        >
                            <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide mb-4">
                                {block.title}
                            </h3>

                            <ul className="space-y-4 font-sans">
                                {block.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CircleArrowRight className="mt-1 h-5 w-5 text-primary shrink-0" />
                                        <div>
                                            <p className="font-semibold">{item.label}</p>
                                            <p >{item.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
