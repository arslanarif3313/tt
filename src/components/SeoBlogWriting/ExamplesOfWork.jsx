// components/ExamplesOfWork.jsx
"use client";

import Image from "next/image";
import { CircleDot } from "lucide-react";

export default function ExamplesOfWork() {
    const items = [
        {
            title: "Tech Innovators Blog",
            desc:
                "We helped a leading tech company increase their organic traffic by 50% within six months through strategic SEO blog writing and content marketing.",
        },
        {
            title: "Health and Wellness Blog",
            desc:
                "Our team created a series of well-researched articles for a wellness brand, resulting in a 30% increase in online engagement and a significant boost in search engine rankings.",
        },
        {
            title: "E-commerce Insights Blog",
            desc:
                "For an e-commerce client, we developed a comprehensive blog strategy that led to a 40% increase in conversion rates and enhanced customer loyalty.",
        },
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="mb-10 text-center text-3xl font-bold md:mb-14 md:text-5xl">
                    EXAMPLES OF OUR WORK
                </h2>

                <div className="grid gap-8 md:gap-10 lg:grid-cols-12">
                    {/* Left: Image */}
                    <div className="lg:col-span-6">
                        <figure className="overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-xl h-full">
                            <Image
                                src="/marketing/eCommerce.webp" // <-- replace with your image path
                                alt="E-commerce strategy visualization"
                                width={1200}
                                height={800}
                                priority
                                className="w-full object-cover h-full"
                            />
                        </figure>
                    </div>

                    {/* Right: List Panel */}
                    <div className="lg:col-span-6">
                        <div className="rounded-2xl border border-base-200 bg-base-200/40 p-6 md:p-10">
                            <ul className="space-y-8">
                                {items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <span className="mt-1 shrink-0">
                                            <CircleDot className="h-5 w-5 text-primary" />
                                        </span>
                                        <div>
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="mt-1 text-base-content/80">{item.desc}</p>
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
