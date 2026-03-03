"use client";

import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

export default function BackupSolutions() {
    const advantages = [
        {
            title: "Keep Your Business Running",
            body: "Data loss stops your work. It hurts productivity. Our backup plan keeps your business running smoothly. You avoid major disruptions.",
        },
        {
            title: "Fast Recovery",
            body: "Quick recovery is critical after an outage or attack. We back up your data regularly. This means fast restoration when you need it.",
        },
        {
            title: "Build Customer Trust",
            body: "Losing data damages trust. Clients worry about their information. Our backup services protect customer confidence. You stay reliable.",
        },
    ];
    const backups = [
        {
            title: "Check Your Readiness",
            body: "We review your current backup systems. We find weak spots. Then we suggest improvements to keep your data safe.",
        },
        {
            title: "Plan for Disasters",
            body: "Problems happen. Human errors, cyber attacks, and power failures are common. We help you prepare. Your business stays protected.",
        },
        {
            title: "Assess Impact",
            body: "Not all business areas are equally affected by problems. We analyze which parts need priority protection. This saves critical operations first.",
        },
        {
            title: "Create Backup Systems",
            body: "We build the right backup infrastructure for you. Quick recovery is guaranteed. Your data stays protected from all threats.",
        },
    ];

    return (
        <section className="bg-base-200">
            <div className="container mx-auto grid lg:grid-cols-2 gap-8 px-6 py-12 items-center">

                {/* Left Side - Image */}
                <div className="rounded-lg overflow-hidden shadow-md h-full">
                    <Image
                        src="/itServices/AdvantagesofManaged.webp"
                        alt="Advantages of Managed"
                        width={700}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side - Text */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Benefits of Managed Backup Solutions
                    </h2>
                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                        Big companies struggle with IT needs. Small teams can't do everything. 
                        Your IT staff should grow your business. But data protection is also vital.
                    </p>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                        Tymor Technologies handles your backups. We bring expert knowledge. 
                        Your data stays safe. Here are three key benefits:
                    </p>

                    {/* List */}
                    <ul className="space-y-6">
                        {advantages.map((item) => (
                            <li key={item.title} className="flex gap-4">

                                <CircleArrowRight
                                    className="text-primary shrink-0 mt-1"
                                    size={22}
                                    strokeWidth={2.2}
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="mt-1 text-gray-700">{item.body}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="container mx-auto grid lg:grid-cols-2 gap-8 px-6 py-12 items-center">

                {/* Left Side - Image */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Types of Backup Services
                    </h2>
                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                        Businesses trust us for backup services. We have years of experience. 
                        We help you recover fast from data loss. Normal operations resume quickly.
                    </p>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                        Your needs depend on your business. Different companies need different solutions. 
                        Here are common backup services that help any organization:
                    </p>

                    {/* List */}
                    <ul className="space-y-6">
                        {backups.map((item) => (
                            <li key={item.title} className="flex gap-4">

                                <CircleArrowRight
                                    className="text-primary shrink-0 mt-1"
                                    size={22}
                                    strokeWidth={2.2}
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="mt-1 text-gray-700">{item.body}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Right Side - Text */}
                <div className="rounded-lg overflow-hidden shadow-md h-full">
                    <Image
                        src="/itServices/Ransomware.webp"
                        alt="Ransomware"
                        width={700}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
