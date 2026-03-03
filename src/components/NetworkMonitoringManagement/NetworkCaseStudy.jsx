"use client";

import { CircleArrowRight } from "lucide-react";

export default function NetworkCaseStudy() {
    const challenges = [
        "Limited physical space for traditional IT hardware",
        "Need for robust security measures",
        "Minimizing downtime during the move",
        "Scalability for future growth",
    ];

    const solution = [
        {
            k: "Cloud Migration",
            v: "Moved all applications, data, and workloads to a secure cloud platform.",
        },
        {
            k: "Thin Client Technology",
            v: "Implemented thin clients to reduce hardware footprint.",
        },
        {
            k: "24/7 Monitoring and Management",
            v: "Provided continuous network monitoring to ensure seamless operations.",
        },
        {
            k: "Enhanced Security",
            v: "Applied advanced security protocols, including encryption and multi-factor authentication.",
        },
        {
            k: "Scalability",
            v: "Ensured the cloud infrastructure could scale with the company’s growth.",
        },
    ];

    const implementation = [
        { k: "Assessment", v: "Evaluated existing IT infrastructure." },
        { k: "Planning", v: "Developed a detailed migration plan." },
        { k: "Migration", v: "Transferred data and applications to the cloud." },
        { k: "Deployment", v: "Set up thin clients for employees." },
        { k: "Monitoring", v: "Implemented continuous network monitoring." },
    ];

    const results = [
        { k: "Space Optimization", v: "Freed up office space." },
        { k: "Enhanced Security", v: "Protected sensitive data." },
        { k: "Minimal Downtime", v: "Ensured smooth transition with no major disruptions." },
        { k: "Scalability", v: "Provided flexible IT resources for future growth." },
    ];

    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-xl md:text-3xl font-bold uppercase ">
                        Network Monitoring &amp; Management Services
                        <br className="hidden md:block" />
                        <span className="block mt-1">Case Study</span>
                    </h2>
                </div>

                {/* Client overview */}
                <div className="max-w-4xl mx-auto mb-8 md:mb-12 text-sm md:text-base font-sans">
                    <p><span className="font-semibold">Client:</span> Apex Investments</p>
                    <p><span className="font-semibold">Industry:</span> Investment Management</p>
                    <p><span className="font-semibold">Location:</span> Multiple states</p>
                    <p className="mt-2">
                        <span className="font-semibold">Background:</span> Apex Investments needed to relocate
                        to a new office in Chicago with limited space, posing a challenge
                        for their existing IT infrastructure.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 font-sans">
                    <Card title="Challenges">
                        <List bullets={challenges} />
                    </Card>

                    <Card title="Solution by Tymor Technologies">
                        <ListKV items={solution} />
                    </Card>

                    <Card title="Implementation Process">
                        <ListKV items={implementation} />
                    </Card>

                    <Card title="Results">
                        <ListKV items={results} />
                    </Card>
                </div>
            </div>
        </section>
    );
}

/* ---------- Helper components ---------- */

function Card({ title, children }) {
    return (
        <div className="rounded-xl bg-base-200 border border-base-300 p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-bold uppercase mb-4">{title}</h3>
            {children}
        </div>
    );
}

function List({ bullets }) {
    return (
        <ul className="space-y-3">
            {bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                    <CircleArrowRight className="mt-1 h-5 w-5 text-primary shrink-0" />
                    <span className="text-base-content/90">{b}</span>
                </li>
            ))}
        </ul>
    );
}

function ListKV({ items }) {
    return (
        <ul className="space-y-3">
            {items.map(({ k, v }, i) => (
                <li key={i} className="flex gap-3">
                    <CircleArrowRight className="mt-1 h-5 w-5 text-primary shrink-0" />
                    <p className="text-base-content/90">
                        <span className="font-semibold">{k}:</span> {v}
                    </p>
                </li>
            ))}
        </ul>
    );
}
