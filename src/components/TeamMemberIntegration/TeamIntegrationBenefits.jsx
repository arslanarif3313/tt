"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const points = [
    {
        title: "Cost Savings",
        body:
            "Safely integrating new team members and managing departures can take up your IT department’s valuable time. By outsourcing these to Tymor Technologies, you can keep your team focused on key business priorities.",
    },
    {
        title: "Enhanced Productivity",
        body:
            "The integration process can be confusing for new team members. Our 24/7 support ensures they get the answers they need quickly so they can be more productive at work.",
    },
    {
        title: "Data Security",
        body:
            "Transitional moments like integration and departure management can pose a risk to your data. Our services are designed to keep it secure, even as your team members come and go.",
    },
];

export default function TeamIntegrationBenefits() {
    return (
        <section className="py-14 sm:py-16 lg:py-24 bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center max-w-5xl mx-auto">
                    <h2 className="uppercase font-bold tracking-tight leading-tight text-2xl sm:text-3xl lg:text-4xl">
                        Team Member Integration and Departure
                        <br className="hidden sm:block" />
                        <span className="block">Management Benefits</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="mt-10 lg:mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
                    {/* Left: Image */}
                    <div className="lg:col-span-6">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                            <Image
                                src="/itServices/Benefits.webp" // <-- replace with your path
                                alt="Security lock on circuit board"
                                width={1400}
                                height={900}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right: Card with bullets */}
                    <div className="lg:col-span-6">
                        <div className="rounded-2xl bg-neutral-100 p-6 sm:p-8 lg:p-10 shadow-sm ring-1 ring-black/5">
                            <p className="text-neutral-700 mb-6">
                                Tymor Technologies’ integration and departure management services
                                help keep your organization’s data secure—and that’s not the only
                                benefit. Here are more advantages you’ll enjoy when you work with us:
                            </p>

                            <ul className="space-y-6">
                                {points.map((p, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#FF4500] shrink-0" />
                                        <div>
                                            <p className="font-semibold text-black/90">{p.title}</p>
                                            <p className="mt-1 text-neutral-700 text-sm sm:text-[15px] leading-relaxed">
                                                {p.body}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
