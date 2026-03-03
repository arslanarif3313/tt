// components/SeoImportance.jsx
"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function SeoImportance() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    {/* LEFT: Illustrations */}
                    <div className=" lg:col-span-5 h-full ">
                        {/* Base image */}

                        <Image
                            src="/marketing/seobw.webp"   // <-- replace with your image path
                            alt="SEO workspace"
                            width={920}
                            height={680}
                            priority
                            className=" w-full object-cover h-full rounded-2xl border border-base-200 shadow-xl"
                        />



                    </div>

                    {/* RIGHT: Content */}
                    <div className="lg:col-span-7">
                        <h2 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                            THE IMPORTANCE OF SEO <br className="hidden md:block" />
                            BLOG WRITING
                        </h2>

                        <p className="mb-8 max-w-3xl text-base/relaxed text-base-content/80">
                            SEO (Search Engine Optimization) blog writing involves creating content
                            that is both valuable to readers and optimized for search engines.
                            This dual focus ensures that your blog posts rank higher in search
                            results, drive organic traffic to your website, and establish your brand
                            as an authority in your industry.
                        </p>

                        <p className="mb-4 font-semibold">Key Benefits of SEO Blog Writing</p>

                        <ul className="space-y-6">
                            <Benefit
                                title="Increased Visibility"
                                desc="Well-optimized blog posts help your website rank higher on search engines, making it easier for potential customers to find you."
                            />
                            <Benefit
                                title="Enhanced Engagement"
                                desc="Engaging content keeps visitors on your site longer, reducing bounce rates and increasing the chances of conversions."
                            />
                            <Benefit
                                title="Authority Building"
                                desc="Regularly publishing insightful and relevant content establishes your brand as an industry leader."
                            />
                            <Benefit
                                title="Cost-Effective Marketing"
                                desc="SEO blog writing is a cost-effective way to reach a large audience without the need for expensive advertising campaigns."
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Benefit({ title, desc }) {
    return (
        <li className="flex gap-4">
            <span className="mt-1 shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary" />
            </span>
            <div>
                <p className="font-semibold">{title}</p>
                <p className="text-base-content/80">{desc}</p>
            </div>
        </li>
    );
}
