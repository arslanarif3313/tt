// components/HowWeHelpBusiness.jsx
"use client";

import Image from "next/image";

const Bullet = () => (
    <svg
        className="h-5 w-5 flex-shrink-0 text-primary"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
        />
    </svg>
);

export default function HowWeHelpBusiness() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wide leading-tight text-base-content mb-6">
                    How Tymor Technologies Can Help Your Business
                </h2>

                {/* Intro */}
                <p className="text-base-content/80 mb-10 max-w-5xl">
                    At Tymor Technologies, we understand that every business is unique. Our
                    SEO consulting services are customized to meet your specific needs and
                    objectives. Here’s how we can help you:
                </p>

                {/* Content */}
                <div className="grid gap-10 md:grid-cols-2 md:items-start">
                    {/* Left – bullet list */}
                    <div className="space-y-8">
                        {/* Item */}
                        <div className="flex items-start gap-4">
                            <Bullet />
                            <div>
                                <h3 className="font-bold text-lg">Comprehensive SEO Audit</h3>
                                <p className="text-base-content/80">
                                    We perform an in‑depth analysis of your website to identify
                                    strengths, weaknesses, and opportunities for improvement.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Bullet />
                            <div>
                                <h3 className="font-bold text-lg">Keyword Research &amp; Strategy</h3>
                                <p className="text-base-content/80">
                                    We identify high‑value keywords that your target audience is
                                    searching for and develop a strategic plan to rank for those
                                    terms.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Bullet />
                            <div>
                                <h3 className="font-bold text-lg">On‑Page Optimization</h3>
                                <p className="text-base-content/80">
                                    We optimize your website’s content, meta tags, and structure to
                                    make it search‑engine friendly.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Bullet />
                            <div>
                                <h3 className="font-bold text-lg">Content Strategy</h3>
                                <p className="text-base-content/80">
                                    We create high‑quality, engaging content that attracts and
                                    retains your audience.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Bullet />
                            <div>
                                <h3 className="font-bold text-lg">Link Building</h3>
                                <p className="text-base-content/80">
                                    We develop a robust backlink strategy to improve your site’s
                                    authority and ranking.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Bullet />
                            <div>
                                <h3 className="font-bold text-lg">Performance Monitoring</h3>
                                <p className="text-base-content/80">
                                    We continuously monitor your site’s performance using advanced
                                    analytics tools and adjust strategies as needed.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right – image */}
                    <div className="w-full">
                        <Image
                            src="/marketing/seo-consulting-services-help.webp" // replace with your asset
                            alt="SEO consulting on laptop with analytics icons"
                            width={1280}
                            height={800}
                            className="w-full h-full rounded-xl object-cover shadow-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
