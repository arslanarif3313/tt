"use client";
import { CircleArrowRight } from "lucide-react";

const cards = [
    {
        title: "1. Risk Assessment",
        items: [
            "Identify Assets — List all critical assets including hardware, software, data, and network components.",
            "Threat Identification — identify potential threats such as cyber-attacks, natural disasters, system failures, and insider threats.",
            "Vulnerability Assessment — identify vulnerabilities in the system that could be exploited by threats.",
            "Impact Analysis — assess the potential impact of different types of threats on the organization.",
            "Likelihood Estimation — estimate the likelihood of various threats occurring to prioritize risk.",
        ],
    },
    {
        title: "2. Asset Inventory",
        items: [
            "Hardware Inventory — document physical devices used within the organization.",
            "Software Inventory — list all applications and their versions.",
            "Data Inventory — catalog all types of data, including sensitive and non-sensitive.",
            "Network Mapping — create a detailed map of the network architecture.",
        ],
    },
    {
        title: "3. Compliance Check",
        items: [
            "Regulatory Requirements — identify relevant standards (e.g., GDPR, HIPAA, PCI-DSS).",
            "Compliance Gaps — conduct a gap analysis to find where current practices do not meet requirements.",
            "Documentation Review — review and update documentation to ensure compliance.",
        ],
    },
    {
        title: "4. Threat Modeling",
        items: [
            "Scenario Analysis — develop potential threat scenarios and implications.",
            "Attack Surface Analysis — identify all points of entry that could be exploited.",
            "Adversary Profiles — understand potential adversaries, capabilities, and methods.",
        ],
    },
    {
        title: "5. Security Posture Assessment",
        items: [
            "Current Security Measures — evaluate effectiveness of current controls.",
            "Security Controls Evaluation — assess adequacy of existing controls (e.g., firewalls, EDR, access controls).",
            "Benchmarking — compare posture against industry standards and best practices.",
        ],
    },
    {
        title: "6. Gap Analysis",
        items: [
            "Identify Gaps — compare current practices to desired security posture.",
            "Prioritize Gaps — prioritize based on risk and impact.",
            "Action Plan — develop a plan to address identified gaps.",
        ],
    },
    {
        title: "7. Penetration Testing",
        items: [
            "Internal Penetration Testing — simulate attacks from within to identify internal weaknesses.",
            "External Penetration Testing — simulate external attacks to identify perimeter weaknesses.",
            "Remediation Recommendations — provide remediation guidance for identified issues.",
        ],
    },
    {
        title: "8. Security Metrics and Reporting",
        items: [
            "Key Performance Indicators (KPIs) — define metrics to measure security program effectiveness.",
            "Regular Reporting — communicate security metrics to stakeholders.",
            "Continuous Monitoring — track posture changes over time.",
        ],
    },
    {
        title: "9. Threat Intelligence",
        items: [
            "Threat Intelligence Sources — use intelligence feeds to stay informed about emerging threats.",
            "Information Sharing — participate in sharing with peers and relevant organizations.",
            "Threat Analysis — analyze intelligence to understand potential impacts.",
        ],
    },
    {
        title: "10. Business Impact Analysis (BIA)",
        items: [
            "Critical Business Functions — identify critical functions and dependencies.",
            "Impact Assessment — assess impact of disruptions on operations.",
            "Prioritize recovery efforts based on the criticality of business functions.",
        ],
    },
];

function InfoCard({ title, items }) {
    return (
        <div className="rounded-xl border border-black/10 bg-white p-6">
            <h3 className="font-bold uppercase text-sm md:text-base mb-4">{title}</h3>
            <ul className="space-y-3 text-sm md:text-base opacity-90">
                {items.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                        <CircleArrowRight className="w-4 h-4 mt-1 shrink-0 text-[var(--color-primary)]" />
                        <span>{t}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function AssessmentAndAnalysis() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="uppercase font-bold text-2xl lg:text-4xl text-center">
                    Assessment and Analysis for Cybersecurity
                </h2>
                <p className="mt-2 text-center max-w-3xl mx-auto opacity-80">
                    Assessment and analysis are crucial steps in developing a robust cybersecurity strategy.
                    Here are the key components:
                </p>

                <div className="mt-10 grid lg:grid-cols-2 gap-6">
                    {cards.map((card) => (
                        <InfoCard key={card.title} {...card} />
                    ))}
                </div>

                <p className="mt-8 text-sm md:text-base opacity-80">
                    By systematically conducting these assessments and analyses, an organization can gain a
                    comprehensive understanding of its cybersecurity risks, prioritize them effectively, and
                    implement appropriate measures to mitigate them.
                </p>
            </div>
        </section>
    );
}
