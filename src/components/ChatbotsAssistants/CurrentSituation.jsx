// components/CurrentSituation.jsx
"use client";

import Image from "next/image";

export default function CurrentSituation() {
    return (
        <section className="py-14 sm:py-16 lg:py-24">
            <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
                    {/* Image (stacks first on mobile, left on desktop) */}
                    <div className="lg:col-span-5">
                        <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 sm:max-w-lg lg:max-w-none">
                            <Image
                                src="/aiServices/current-situation.webp" // ← replace with your asset path
                                alt="Chatbot use in business"
                                width={900}
                                height={900}
                                priority
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7">
                        <header className="mb-6 sm:mb-8">
                            <h2
                                className="font-bold uppercase leading-tight tracking-tight
                           text-3xl sm:text-4xl lg:text-5xl"
                            >
                                Current Situation: Use in Business
                            </h2>
                        </header>

                        <div className="space-y-4 text-sm sm:text-base text-neutral-800">
                            <p>
                                <span className="font-semibold">Case Study:</span> E-commerce Industry
                            </p>

                            <p>
                                <span className="font-semibold">Scenario:</span> An online retail store
                                faced challenges in managing the high volume of customer queries related
                                to product availability, order tracking, and return policies.
                            </p>

                            <p className="pb-2">
                                <span className="font-semibold">Implementation:</span> The store
                                integrated a chatbot into its website and mobile app to handle common
                                customer inquiries and support requests.
                            </p>
                        </div>

                        <h3 className="mt-6 mb-4 text-lg font-bold sm:text-xl">Impact</h3>

                        {/* Impact Cards */}
                        <div
                            className="grid gap-4 sm:gap-5
                         grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            <ImpactCard
                                title="Efficiency"
                                desc="The chatbot handled up to 80% of customer inquiries autonomously, freeing human agents to focus on complex issues."
                            />
                            <ImpactCard
                                title="Customer Satisfaction"
                                desc="Response times were significantly reduced, leading to higher customer satisfaction and loyalty."
                            />
                            <ImpactCard
                                title="Sales Growth"
                                desc="Instant product help and recommendations increased sales and conversion rates."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ImpactCard({ title, desc }) {
    return (
        <article
            className="group h-full rounded-xl bg-black text-white p-5 sm:p-6
                 shadow-lg ring-1 ring-black/10 transition
                 hover:-translate-y-0.5 hover:shadow-xl"
        >
            <h4 className="mb-2 text-base font-bold sm:text-lg">{title}</h4>
            <p className="text-xs leading-relaxed text-white/90 sm:text-sm">
                {desc}
            </p>
        </article>
    );
}
