"use client";
import { CircleArrowRight } from "lucide-react";

const Bullet = ({ title, text }) => (
    <li className="flex items-start gap-2">
        <CircleArrowRight className="text-primary w-4 h-4 mt-1 shrink-0" />
        <div>
            <p className="font-semibold">{title}</p>
            <p className="opacity-80">{text}</p>
        </div>
    </li>
);

const HelpCard = ({ number, title, items }) => (
    <div className="rounded-lg bg-white border border-black/10 p-6">
        <h3 className="uppercase font-bold">
            {number}. {title}
        </h3>
        <ul className="mt-4 space-y-4">
            {items.map((it, i) => (
                <Bullet key={i} title={it.title} text={it.text} />
            ))}
        </ul>
    </div>
);

export default function HowTymorHelps() {
    const cards = [
        {
            number: 1,
            title: "Advanced Threat Detection and Prevention",
            items: [
                {
                    title: "Firewalls and IDS",
                    text:
                        "Deploying next‑generation firewalls and intrusion detection systems to detect and block threats.",
                },
                {
                    title: "Antivirus and Anti‑Malware",
                    text:
                        "Using sophisticated software to continuously scan and remove malicious software.",
                },
            ],
        },
        {
            number: 2,
            title: "24/7 Monitoring and Response",
            items: [
                {
                    title: "Security Operations Center (SOC)",
                    text:
                        "Our SOC team monitors network traffic around the clock to identify and respond to threats in real‑time.",
                },
                {
                    title: "Automated Alerts and Incident Response",
                    text:
                        "Immediate alerts and a structured response plan to mitigate threats quickly.",
                },
            ],
        },
        {
            number: 3,
            title: "Data Encryption and Secure Access",
            items: [
                {
                    title: "Encryption",
                    text:
                        "Ensuring all sensitive data is encrypted during transmission and when stored.",
                },
                {
                    title: "Access Control",
                    text:
                        "Implementing MFA and strict access controls to limit data access to authorized personnel only.",
                },
            ],
        },
        {
            number: 4,
            title: "Regular Security Audits and Assessments",
            items: [
                {
                    title: "Vulnerability Assessments",
                    text:
                        "Regularly scanning for vulnerabilities and applying patches to keep systems secure.",
                },
                {
                    title: "Compliance Audits",
                    text:
                        "Ensuring adherence to industry regulations and best practices.",
                },
            ],
        },
        {
            number: 5,
            title: "Incident Response and Recovery",
            items: [
                {
                    title: "Incident Response Plan",
                    text:
                        "A comprehensive plan to quickly address and mitigate any security incidents.",
                },
                {
                    title: "Disaster Recovery",
                    text:
                        "Ensuring data backups and recovery plans are in place to restore operations swiftly after an attack.",
                },
            ],
        },
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-center uppercase font-bold text-2xl lg:text-4xl">
                    How Tymor Technologies Can Help
                </h2>

                {/* Intro copy */}
                <p className="mt-4 max-w-5xl mx-auto text-sm md:text-base opacity-80 text-center">
                    Tymor Technologies offers robust network security solutions through its Managed Cybersecurity Services,
                    utilizing industry‑leading technologies from Cisco, WatchGuard, SonicWall, Microsoft, Trend Micro,
                    Barracuda Networks, and Palo Alto Networks. Here’s how we can specifically help:
                </p>

                <p className="mt-2 max-w-5xl mx-auto text-center text-sm md:text-base">
                    <a href="/contact-us" className="text-primary hover:underline">Click Here</a> to learn more about how Tymor
                    Technologies can protect your business with our comprehensive network security solutions.
                </p>

                <p className="mt-2 max-w-5xl mx-auto text-center text-sm md:text-base opacity-80">
                    By partnering with Tymor Technologies, you can safeguard your business against cyber threats,
                    ensuring the security and integrity of your data and maintaining business continuity.
                </p>

                {/* Cards */}
                <div className="mt-10 grid lg:grid-cols-2 gap-6">
                    {cards.map((c) => (
                        <HelpCard key={c.number} {...c} />
                    ))}
                </div>
            </div>
        </section>
    );
}
