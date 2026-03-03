// components/SeoConsultingCases.jsx
"use client";

import Image from "next/image";

export default function SeoConsultingCases() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="mb-12 text-center text-3xl font-black uppercase leading-tight tracking-wide md:text-5xl">
                    Examples of Our SEO Consulting Success
                </h2>

                {/* Row 1: Image Left, Text Right */}
                <div className="grid items-stretch gap-8 md:grid-cols-2 lg:gap-12">
                    {/* Image */}
                    <div className="w-full">
                        <Image
                            src="/marketing/e-commerce-whats-in-store.webp"
                            alt="E-commerce SEO case study"
                            width={1200}
                            height={700}
                            className="h-full w-full rounded-xl object-cover shadow-lg"
                            priority
                        />
                    </div>

                    {/* Text Card */}
                    <div className="flex">
                        <div className="w-full rounded-xl bg-base-200 p-6 shadow-lg md:p-8">
                            <h3 className="mb-4 text-xl font-bold uppercase md:text-2xl">
                                Case Study 1: E-Commerce Store
                            </h3>
                            <div className="space-y-4 text-base-content/80">
                                <p>
                                    An e-commerce store was struggling with low organic traffic and
                                    poor sales. After our detailed SEO audit using SEMrush and
                                    Ahrefs, we identified critical issues with their site structure
                                    and content.
                                </p>
                                <p>
                                    By implementing targeted keyword strategies and improving their
                                    backlink profile, we increased their organic traffic by{" "}
                                    <span className="font-semibold">60% within six months</span>,
                                    leading to a significant boost in sales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Text Left, Image Right */}
                <div className="mt-10 grid items-stretch gap-8 md:mt-16 md:grid-cols-2 lg:gap-12">
                    {/* Text Card */}
                    <div className="order-2 flex md:order-1">
                        <div className="w-full rounded-xl bg-base-200 p-6 shadow-lg md:p-8">
                            <h3 className="mb-4 text-xl font-bold uppercase md:text-2xl">
                                Case Study 2: Local Service Provider
                            </h3>
                            <div className="space-y-4 text-base-content/80">
                                <p>
                                    A local service provider needed to improve their visibility in
                                    local search results.
                                </p>
                                <p>
                                    Using Moz Pro and Google Analytics, we optimized their website
                                    for local SEO, focusing on location-specific keywords and
                                    improving their Google My Business profile.
                                </p>
                                <p>
                                    As a result, they saw a{" "}
                                    <span className="font-semibold">
                                        45% increase in local search traffic
                                    </span>{" "}
                                    and a{" "}
                                    <span className="font-semibold">30% rise in service inquiries</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 w-full md:order-2">
                        <Image
                            src="/marketing/tech-savvy-professional.png"
                            alt="Local SEO case study"
                            width={1200}
                            height={700}
                            className="h-full w-full rounded-xl object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
