"use client";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

export default function ColonialPipelineIncident() {
    const points = [
        {
            head: "Attack Vector",
            body:
                "The attackers gained access to Colonial Pipeline’s network using compromised credentials, likely obtained through phishing or another form of social engineering.",
        },
        {
            head: "Ransomware Deployment",
            body:
                "Once inside the network, the attackers deployed ransomware to encrypt sensitive data, effectively locking the company out of their systems.",
        },
        {
            head: "Operational Shutdown",
            body:
                "In response to the attack, Colonial Pipeline preemptively shut down its operations to prevent the ransomware from spreading further.",
        },
        {
            head: "Ransom Payment",
            body:
                "Colonial Pipeline decided to pay the ransom of $4.4 million to the attackers in exchange for a decryption tool, although the recovery process was slow and complex.",
        },
    ];
    const point2 = [
        {
            head: "Fuel Supply Disruption",
            body:
                "The shutdown caused significant disruptions in fuel supply along the East Coast, leading to shortages, increased prices, and panic buying.",
        },
        {
            head: "Economic Ripple Effect",
            body:
                "The attack not only impacted fuel suppliers but also had broader economic implications, affecting industries reliant on fuel transportation.",
        },
        {
            head: "Regulatory Changes",
            body:
                "The incident prompted the U.S. government to implement stricter cybersecurity regulations for critical infrastructure, emphasizing the need for improved resilience.",
        },

    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-center uppercase font-bold text-2xl lg:text-4xl">
                    Recent Incident: Colonial Pipeline Ransomware Attack
                </h2>

                {/* Content */}
                <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left - Image */}
                    <div className=" h-full">
                        <Image
                            src="/cybersSecurityServices/Ransomware.webp"
                            alt="Ransomware on laptop screen"
                            width={1200}
                            height={800}
                            className="w-full rounded-lg object-cover h-full"
                            priority
                        />
                    </div>

                    {/* Right - Details panel */}
                    <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="uppercase font-bold text-lg mb-4">
                            Detailed Incident Overview:
                        </h3>

                        <ul className="space-y-6">
                            {points.map((p, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 text-primary mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">{p.head}</p>
                                        <p className="opacity-80 text-sm md:text-base">{p.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left - Image */}
                    <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="uppercase font-bold text-lg mb-4">
                            Consequences
                        </h3>

                        <ul className="space-y-6">
                            {point2.map((p, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 text-primary mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">{p.head}</p>
                                        <p className="opacity-80 text-sm md:text-base">{p.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right - Details panel */}


                    <div className=" h-full">
                        <Image
                            src="/cybersSecurityServices/supply_interrupted.webp"
                            alt="Ransomware on laptop screen"
                            width={1200}
                            height={800}
                            className="w-full rounded-lg object-cover h-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
