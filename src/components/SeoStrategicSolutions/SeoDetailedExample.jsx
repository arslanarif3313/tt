"use client";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react"; // Lucide icon

export default function SeoDetailedExample() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-8 lg:grid-cols-12">
                    {/* Left: Image */}
                    <div className="lg:col-span-5 overflow-hidden rounded-xl h-full">
                        <Image
                            src="/marketing/Detailed-Example.webp" // replace with your actual image
                            alt="SEO analytics dashboard"
                            width={900}
                            height={600}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>

                    {/* Right: Content Card */}
                    <div className="lg:col-span-7">
                        <div className="rounded-xl bg-base-200 p-6 sm:p-8 lg:p-10">
                            <h2 className="mb-6 font-bold leading-tight tracking-wide text-2xl sm:text-3xl lg:text-4xl uppercase">
                                Detailed Example: How Tymor <br className="hidden sm:block" />
                                Technologies Helped a Client
                            </h2>

                            <ul className="space-y-6">
                                {/* Client */}
                                <li className="flex items-start gap-4">
                                    <ArrowRightCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                                    <div>
                                        <p className="font-semibold uppercase tracking-wide">
                                            Client
                                        </p>
                                        <p className="text-base-content/80">
                                            ABC Electronics, an online retailer specializing in consumer
                                            electronics.
                                        </p>
                                    </div>
                                </li>

                                {/* Challenge */}
                                <li className="flex items-start gap-4">
                                    <ArrowRightCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                                    <div>
                                        <p className="font-semibold uppercase tracking-wide">
                                            Challenge
                                        </p>
                                        <p className="text-base-content/80">
                                            ABC Electronics faced significant challenges in driving
                                            organic traffic to their website. Despite having a wide
                                            range of products, their site struggled to rank for
                                            competitive keywords, resulting in low visibility and
                                            reduced sales.
                                        </p>
                                    </div>
                                </li>

                                {/* Solution */}
                                <li className="flex items-start gap-4">
                                    <ArrowRightCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                                    <div>
                                        <p className="font-semibold uppercase tracking-wide">
                                            Solution
                                        </p>
                                        <p className="text-base-content/80">
                                            Tymor Technologies implemented a comprehensive SEO strategy
                                            for ABC Electronics, leveraging the following steps:
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Right */}
                </div>
            </div>
        </section>
    );
}
