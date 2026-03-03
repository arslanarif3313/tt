"use client";

import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

export default function CommitmentToExcellence() {
    const points = [
        {
            title: "Proactive Monitoring and Maintenance",
            text:
                "We continuously monitor your IT infrastructure 24/7 to detect and address potential issues before they escalate. Regular maintenance and updates are performed to keep your systems running smoothly and securely.",
        },
        {
            title: "Advanced Remote Support",
            text:
                "Utilizing state-of-the-art remote monitoring and management tools, we resolve most issues without the need for an onsite visit. Our secure remote access ensures quick and efficient problem-solving while maintaining the highest standards of data security.",
        },
        {
            title: "Transparent Communication",
            text:
                "We maintain clear and consistent communication, keeping you informed about the status of your systems and any necessary actions. Detailed reports and documentation help you understand the health and performance of your IT infrastructure.",
        },
        {
            title: "Client Education and Training",
            text:
                "We offer regular webinars and training sessions to empower your team with the knowledge and skills to handle common IT issues. Customized programs address your specific needs and enhance your team’s technical capabilities.",
        },
        {
            title: "Automated Backup and Recovery Solutions",
            text:
                "Our automated backup systems protect your data and enable quick restoration in emergencies. We provide robust disaster recovery plans that can be executed remotely to minimize downtime and data loss.",
        },
    ];

    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">


                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left: stacked images */}
                    <div className="space-y-6">

                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                            <Image
                                src="/itServices/Onsite-Support.webp"
                                alt="Team monitoring IT systems"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                            <Image
                                src="/itServices/Guy-at-Server-min-scaled.webp"
                                alt="Engineer working in a data center"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: content list */}
                    <div>
                        <h2 className="text-xl md:text-3xl font-bold uppercase mb-5">
                            Commitment to Excellence
                        </h2>
                        <p className="">
                            At Tymor Technologies, our goal is to provide the highest level of
                            support and ensure your satisfaction with our services. To achieve
                            this, we’re committed to the following:
                        </p>

                        <ul className="mt-6 space-y-6 font-sans">
                            {points.map((p, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CircleArrowRight className="mt-1 h-5 w-5 text-primary shrink-0" />
                                    <div>
                                        <h3 className="font-semibold">{p.title}</h3>
                                        <p>{p.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
