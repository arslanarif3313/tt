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

export default function EndpointSecurityrHelps() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-center uppercase font-bold text-2xl lg:text-4xl">
                    How Tymor Technologies Can Help
                </h2>

                <div className="mt-10 grid lg:grid-cols-2 gap-6">
                    <Slab
                        number="1"
                        title="Comprehensive Protection"
                        items={[
                            {
                                head: "Advanced Threat Detection",
                                body:
                                    "Utilizing industry-leading technologies from Cisco, WatchGuard, SonicWall, Microsoft, Trend Micro, Barracuda Networks, and Palo Alto Networks, Tymor Technologies provides robust defense mechanisms against a wide range of cyber threats.",
                            },
                            {
                                head: "Proactive Threat Hunting",
                                body:
                                    "Our cybersecurity experts actively search for threats and vulnerabilities within your network to prevent potential breaches.",
                            },
                        ]}
                    />

                    <Slab
                        number="2"
                        title="Continuous Monitoring and Incident Response"
                        items={[
                            {
                                head: "24/7 Monitoring",
                                body:
                                    "Our team continuously monitors your network and endpoints for suspicious activities, ensuring immediate detection of potential threats.",
                            },
                            {
                                head: "Rapid Incident Response",
                                body:
                                    "In the event of a security incident, our experts quickly respond to contain and mitigate the threat, minimizing potential damage and downtime.",
                            },
                        ]}
                    />

                    <Slab
                        number="3"
                        title="Data Encryption and Secure Access"
                        items={[
                            {
                                head: "Automated Updates",
                                body:
                                    "Tymor Technologies ensures all your endpoint devices receive regular updates and patches to address known vulnerabilities.",
                            },
                            {
                                head: "Patch Management",
                                body:
                                    "Our managed services include patch management to keep all systems up-to-date and secure",
                            },
                        ]}
                    />

                    <Slab
                        number="4"
                        title="Employee Training and Awareness"
                        items={[
                            {
                                head: "Security Training",
                                body:
                                    "We provide comprehensive training programs to educate your employees on best practices for endpoint security.",
                            },
                            {
                                head: "Phishing Simulations",
                                body:
                                    "Our phishing simulation exercises help employees recognize and avoid phishing attempts, reducing the risk of successful social engineering attacks.",
                            },
                        ]}
                    />

                    <Slab
                        number="5"
                        title="Customized Security Solutions"
                        items={[
                            {
                                head: "Tailored Strategies",
                                body:
                                    "Tymor Technologies works with you to develop a customized endpoint security strategy that aligns with your specific business needs and security requirements.",
                            },
                            {
                                head: "Scalable Solutions",
                                body:
                                    "Our solutions are scalable, ensuring they can grow with your business and adapt to evolving threats.",
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
