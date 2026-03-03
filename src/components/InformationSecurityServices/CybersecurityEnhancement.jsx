"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const improvements = [
    "Upgrade Your Network Security Infrastructure",
    "Perform Regular Software Updates and Patches",
    "Secure the Network Edge",
    "Improve Physical Security",
    "Implement Cybersecurity Awareness Training",
    "Conduct Cybersecurity Risk Assessments"
];

export default function CybersecurityEnhancement() {
    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">

                {/* Left Image Section */}
                <div className="flex flex-col gap-6 h-full">
                    <Image
                        src="/cybersSecurityServices/npl.webp"
                        alt="Cybersecurity AI"
                        width={600}
                        height={600}
                        className="rounded-lg h-full"
                    />

                </div>

                {/* Right Text Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        ENHANCING YOUR CYBERSECURITY WITH TYMOR TECHNOLOGIES
                    </h2>
                    <p className="mb-4">
                        Cybersecurity is crucial to keeping your business not only secure but competitive.
                        As a top-tier IT services provider for over a decade, we have seen the security
                        landscape evolve. Our solutions are specifically designed to meet the needs of SMBs.
                    </p>
                    <p className="mb-6">
                        Unlike most security providers, Tymor Technologies works with SMB clients daily.
                        We understand your environment, risks, and budget constraints. Our affordable
                        solutions collectively create a comprehensive cybersecurity program to safeguard
                        your data, meet compliance requirements, and provide a significant competitive
                        advantage.
                    </p>

                    <h3 className="font-bold text-lg mb-4">IMPROVE YOUR CYBERSECURITY:</h3>
                    <ul className="space-y-3">
                        {improvements.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="text-primary mt-1" size={20} />
                                <span className="font-semibold">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
