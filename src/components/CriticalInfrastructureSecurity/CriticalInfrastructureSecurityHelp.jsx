"use client";
import { CircleArrowRight } from "lucide-react";

const Bullet = ({ children }) => (
    <li className="flex items-start gap-2">
        <CircleArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
        <span>{children}</span>
    </li>
);

const Slab = ({ number, title, items }) => (
    <div className="rounded-xl border border-black/10 bg-white p-6">
        <h3 className="font-bold uppercase text-sm md:text-base mb-4">
            {number}. {title}
        </h3>
        <div className="space-y-3 text-sm md:text-base opacity-90">
            {items.map((it, i) => (
                <Bullet key={i}>
                    <div className="font-semibold">{it.head}</div>
                    <div className="opacity-80">{it.body}</div>
                </Bullet>
            ))}
        </div>
    </div>
);

export default function CriticalInfrastructureSecurityHelp() {
    return (
        <section className="py-24 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-center uppercase font-bold text-2xl lg:text-4xl">
                    How Tymor Technologies Can Help
                </h2>
                <p className="p-5 text-xl"><strong>Tymor Technologies</strong> Managed Cybersecurity Services offers comprehensive solutions to protect your critical infrastructure from a wide range of threats. Here’s how we can help:</p>
                <div className="mt-10 grid lg:grid-cols-2 gap-6">
                    <Slab
                        number="1"
                        title="Advanced Threat Detection and Prevention"
                        items={[
                            {
                                head: "Technologies",
                                body:
                                    "We use cutting-edge solutions from Cisco, WatchGuard, SonicWall, Microsoft, Trend Micro, Barracuda Networks, and Palo Alto Networks.",
                            },
                            {
                                head: "Capabilities",
                                body:
                                    "Our tools provide real-time threat detection, automated threat response, and advanced threat intelligence to prevent attacks before they cause damage..",
                            },
                        ]}
                    />

                    <Slab
                        number="2"
                        title="Compliance and Regulatory Support"
                        items={[
                            {
                                head: "Expertise",
                                body:
                                    "Our team stays updated on the latest regulatory requirements and ensures your infrastructure complies with industry standards and government mandates.",
                            },
                            {
                                head: "Assessments",
                                body:
                                    "We conduct regular security assessments and audits to identify and address compliance gaps.",
                            },
                        ]}
                    />

                    <Slab
                        number="3"
                        title="Incident Response and Recovery"
                        items={[
                            {
                                head: "Rapid Response",
                                body:
                                    "In the event of a cyber incident, our incident response team acts quickly to contain the threat, mitigate damage, and restore operations.",
                            },
                            {
                                head: "Recovery Plans",
                                body:
                                    "We develop and implement robust recovery plans to ensure business continuity and minimize downtime.",
                            },
                        ]}
                    />

                    <Slab
                        number="4"
                        title="Continuous Monitoring and Maintenance"
                        items={[
                            {
                                head: "Security Training",
                                body:
                                    "Our security operations center (SOC) provides round-the-clock monitoring to detect and respond to threats in real-time.",
                            },
                            {
                                head: "Proactive Maintenance",
                                body:
                                    "We perform regular maintenance and updates to ensure your systems are secure and resilient against emerging threats.",
                            },
                        ]}
                    />

                    <Slab
                        number="5"
                        title="Customized Security Solutions"
                        items={[
                            {
                                head: "Tailored Approach",
                                body:
                                    "We understand that every organization is unique, and we customize our security solutions to meet your specific needs and challenges.",
                            },
                            {
                                head: "Holistic Protection",
                                body:
                                    "Our comprehensive approach ensures that all aspects of your critical infrastructure, from physical assets to cyber systems, are protected.",
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
