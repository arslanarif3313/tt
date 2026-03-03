// pages/network-security.jsx
import HowTymorHelps from "@/components/NetworkSecurity/HowTymorHelps";
import Heading from "@/components/ui/Heading/Heading";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Network Security Solutions – Tymor Technologies",
  description: "Advanced network security solutions to protect your business from cyber threats. Firewalls, intrusion detection, encryption, and 24/7 monitoring services.",
};

export default function NetworkSecurity() {
    return (
        <div>
            <Heading heading={'Network Security'}></Heading>
            
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Comprehensive Network Security to Safeguard Your Business
                    </h1>
                </div>
            </section>

            {/*  What is Network Security */}
            <section className="py-24">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-startr">
                    {/* Left Images */}
                    <div className="space-y-6">

                        <Image
                            src="/cybersSecurityServices/npl (1).webp"
                            alt="Managed IT Services"
                            width={800}
                            height={500}
                            className=" w-full h-auto object-cover"
                            priority
                        />
                    </div>

                    {/* Right Text */}
                    <div>
                        <h2 className="uppercase font-bold text-2xl lg:text-4xl mb-4">
                            What is Network Security?
                        </h2>
                        <p className="mb-6 opacity-80">
                            Network security involves measures and protocols designed to protect the integrity,
                            confidentiality, and accessibility of computer networks and data. It encompasses
                            various layers of defense, including:
                        </p>

                        <ul className="space-y-3">
                            {[
                                "Firewalls – Prevent unauthorized access to or from a private network.",
                                "Intrusion Detection Systems (IDS) – Monitor network traffic for suspicious activity and potential threats.",
                                "Antivirus and Anti-Malware Software – Detect and eliminate malicious software.",
                                "Encryption – Protect data in transit and at rest by converting it into a secure format.",
                                "Access Control – Restrict network access to authorized users and devices.",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Your Company Should Be Concerned */}
            <section className="py-24 bg-black text-white">
                <div className="container mx-auto px-4">
                    <h2 className="uppercase font-bold text-center text-2xl lg:text-4xl mb-12">
                        Why Your Company Should Be Concerned
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Data Protection",
                                desc: "Protecting sensitive data, such as customer information, intellectual property, and financial records, is critical to prevent data breaches and identity theft.",
                                icon: "assets/icons/secure-data.webp",
                            },
                            {
                                title: "Business Continuity",
                                desc: "Cyber attacks can disrupt operations, leading to downtime and financial losses. Strong network security helps maintain business operations without interruption.",
                                icon: "assets/icons/de.webp",
                            },
                            {
                                title: "Reputation Management",
                                desc: "A security breach can damage a company’s reputation, eroding customer trust and leading to loss of business.",
                                icon: "assets/icons/reputation.webp",
                            },
                            {
                                title: "Compliance Requirements",
                                desc: "Many industries have regulatory requirements (e.g., GDPR, HIPAA) for data protection. Non-compliance can result in significant fines and legal consequences.",
                                icon: "assets/icons/compliant.webp",
                            },
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white text-black rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer"
                            >
                                <img
                                    src={card.icon}
                                    alt={card.title}
                                    className="mx-auto w-16 h-16 mb-4"
                                />
                                <h3 className="font-semibold mb-2">{card.title}</h3>
                                <p className="text-sm opacity-80">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Current Situations */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    {/* Heading */}
                    <h2 className="text-center uppercase font-bold text-2xl lg:text-4xl">
                        Current Situations Highlighting Network Security Importance
                    </h2>

                    {/* Content */}
                    <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
                        {/* Left image */}
                        <div className="rounded-xl overflow-hidden h-full">
                            <Image
                                src="/cybersSecurityServices/SolarWinds Attack.webp"
                                alt="Network security lock on circuit board"
                                width={1200}
                                height={1000}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>

                        {/* Right  */}
                        <div className="rounded-xl border border-black/10 bg-white p-6">
                            <h3 className="uppercase font-bold text-lg lg:text-xl">
                                1. SolarWinds Attack
                            </h3>

                            <p className="mt-3 text-base md:text-lg opacity-80">
                                <span className="font-semibold">SolarWinds Attack:</span> In a recent
                                high‑profile incident, the SolarWinds cyber attack compromised the Orion
                                software used by many organizations globally, including government agencies and
                                large corporations. Hackers inserted malicious code into a software update,
                                which was then distributed to SolarWinds’ clients, allowing the attackers to
                                access sensitive data and systems undetected for several months.
                            </p>

                            <h4 className="mt-6 uppercase font-bold">
                                Impact of the SolarWinds Attack:
                            </h4>

                            <ul className="mt-4 space-y-5 text-base">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Data Breaches</p>
                                        <p className="opacity-80">
                                            Sensitive information from numerous organizations, including emails and
                                            proprietary data, was accessed.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Operational Disruption</p>
                                        <p className="opacity-80">
                                            Organizations had to take critical systems offline, disrupting business
                                            operations and incurring significant downtime.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Financial Losses</p>
                                        <p className="opacity-80">
                                            Companies faced substantial costs for incident response, legal fees, and
                                            mitigating the breach’s impact.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Erosion of Trust</p>
                                        <p className="opacity-80">
                                            The attack damaged the trust and credibility of affected organizations,
                                            impacting their relationships with customers and partners.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
                        {/* Left image */}
                        <div className="rounded-xl border border-black/10 bg-white p-6">
                            <h3 className="uppercase font-bold text-lg lg:text-xl">
                                2. Colonial Pipeline Ransomware Attack
                            </h3>

                            <p className="mt-3 text-base md:text-lg opacity-80">
                                In May 2021, Colonial Pipeline, a major fuel pipeline operator in the U.S., fell victim to a ransomware attack. The attack forced the company to shut down its operations to contain the breach, leading to widespread fuel shortages and panic buying across the East Coast.

                            </p>

                            <h4 className="mt-6 uppercase font-bold">
                                Impact of the SolarWinds Attack:
                            </h4>

                            <ul className="mt-4 space-y-5 text-base">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Operational Shutdown</p>
                                        <p className="opacity-80">
                                            The pipeline's operations were halted for several days, causing fuel supply disruptions.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Economic Impact</p>
                                        <p className="opacity-80">
                                            The attack led to significant economic losses, with millions of dollars spent on restoring operations and paying the ransom.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Public Panic</p>
                                        <p className="opacity-80">
                                            The disruption in fuel supply caused panic buying and long queues at gas stations, highlighting the broader societal impact of cyber attacks.
                                        </p>
                                    </div>
                                </li>


                            </ul>
                        </div>

                        {/* Right copy */}



                        <div className="rounded-xl overflow-hidden h-full">
                            <Image
                                src="/cybersSecurityServices/Ransomware.webp"
                                alt="Network security lock on circuit board"
                                width={1200}
                                height={1000}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                    {/* Content */}
                    <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
                        {/* Left image */}
                        <div className="rounded-xl overflow-hidden h-full">
                            <Image
                                src="/cybersSecurityServices/JBSMeatProcessor.webp"
                                alt="Network security lock on circuit board"
                                width={1200}
                                height={1000}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>

                        {/* Right copy */}
                        <div className="rounded-xl border border-black/10 bg-white p-6">
                            <h3 className="uppercase font-bold text-lg lg:text-xl">
                                3. JBS Meat Processor Ransomware Attack
                            </h3>

                            <p className="mt-3 text-base md:text-lg opacity-80">
                                In June 2021, JBS, the world’s largest meat processing company, was hit by a ransomware attack that affected its IT systems in North America and Australia. The attack forced the company to shut down operations temporarily.
                            </p>

                            <h4 className="mt-6 uppercase font-bold">
                                Impact of the JBS Attack:
                            </h4>

                            <ul className="mt-4 space-y-5 text-base">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Supply Chain Disruption</p>
                                        <p className="opacity-80">
                                            The shutdown disrupted the supply chain, leading to meat shortages and increased prices
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Economic Costs</p>
                                        <p className="opacity-80">
                                            JBS paid an $11 million ransom to the attackers to regain access to its systems.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Operational Downtime</p>
                                        <p className="opacity-80">
                                            The company faced significant operational challenges, impacting its production and distribution capabilities.
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <HowTymorHelps></HowTymorHelps>
        </div>
    );
}
