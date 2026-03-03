"use client";
import Image from "next/image";
import { CircleCheck } from "lucide-react";

export default function ManagedCybersecurityIntro() {
    const bullets = [
        "Cybersecurity Solutions and Services for Enterprises",
        "Types of Cybersecurity Services Offered by Tymor Technologies",
        "Delivery of Cybersecurity Solutions by Tymor Technologies",
        "Enhancing Your Cybersecurity with Tymor Technologies",
        "Cost of Managed Cybersecurity Services",
        "MSTE Enterprises Managed Cybersecurity Case Study",
        "Understanding Managed Cybersecurity Service Providers",
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: images */}
                <div className="rounded-xl  h-full overflow-hidden">

                    <Image
                        src="/cybersSecurityServices/npl.webp"
                        alt="Cybersecurity visualization"
                        width={900}
                        height={1100}
                        className="w-full h-full object-cover"
                        priority
                    />



                </div>

                {/* Right: content */}
                <div>
                    <h1 className="font-bold text-3xl lg:text-4xl mb-4">
                        Cybersecurity Solutions for Enterprises
                    </h1>
                    
                    <p className="font-semibold text-lg text-primary mb-4">
                        Complete Cybersecurity Services from Tymor Technologies
                    </p>

                    <p className="mt-4 opacity-90 text-lg leading-relaxed">
                        Tymor Technologies delivers comprehensive cybersecurity services. We protect your 
                        business from threats 24/7. Our team handles everything from initial security 
                        assessments to ongoing threat management.
                    </p>

                    <p className="mt-4 opacity-90 text-lg leading-relaxed">
                        You get round-the-clock security monitoring. Our experts watch over your systems 
                        continuously. We use Security Operations Centers (SOC) and advanced threat detection. 
                        We also provide virtual Chief Information Security Officer (vCISO) services. Our 
                        cloud security protects your data wherever it lives.
                    </p>

                    <ul className="mt-8 space-y-4">
                        {bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3">

                                <CircleCheck className="mt-1 w-5 h-5 text-[var(--color-primary)] shrink-0" />
                                <span className="font-semibold">{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
