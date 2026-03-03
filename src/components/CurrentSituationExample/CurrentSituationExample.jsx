"use client";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

export default function CurrentSituationExample() {
    const impacts = [
        {
            title: "Operational Disruption",
            desc: "Critical systems, including patient records and appointment scheduling, were encrypted and inaccessible, leading to the cancellation of appointments and delayed treatments.",
        },
        {
            title: "Financial Loss",
            desc: "The healthcare provider faced significant financial strain due to the ransom payment, costs associated with system restoration, and potential fines for data privacy violations.",
        },
        {
            title: "Reputational Damage",
            desc: "The breach eroded patient trust and confidence in the provider’s ability to protect sensitive health information.",
        },
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-center uppercase font-bold text-2xl lg:text-4xl">
                    Current Situation Example
                </h2>

                {/* Content */}
                <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left Image */}
                    <div className="h-full">
                        <Image
                            src="/cybersSecurityServices/CurrentSituationExample.webp" // Replace with your image path
                            alt="Lock on circuit board"
                            width={1000}
                            height={1000}
                            className="h-full rounded-lg object-cover"
                        />
                    </div>

                    {/* Right Text */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg uppercase">
                            Healthcare Provider Ransomware Attack
                        </h3>
                        <p className="mt-2 text-sm md:text-base">
                            <span className="font-bold">Incident:</span> A major healthcare
                            provider experienced a ransomware attack where attackers
                            infiltrated the network through an unsecured endpoint—a laptop
                            used by an employee working remotely.
                        </p>

                        <h4 className="mt-6 font-bold uppercase">Impact</h4>
                        <div className="mt-4 space-y-4">
                            {impacts.map((impact, i) => (
                                <div key={i} className="flex gap-3">
                                    <CircleArrowRight className="w-5 h-5 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h5 className="font-semibold">{impact.title}</h5>
                                        <p className="text-sm opacity-80">{impact.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
