
"use client";

import Image from "next/image";

export default function SeoConsultingIntro() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-16">
                    {/* Left: Image */}
                    <div className="w-full ">
                        <Image
                            src="/marketing/seo.webp" // <-- replace with your exact asset
                            alt="SEO Consulting"
                            width={1200}
                            height={800}
                            className="w-full rounded-xl shadow-lg "
                            priority
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full">
                        <h2 className="mb-6 text-3xl font-black uppercase leading-tight tracking-wide md:text-5xl lg:text-6xl">
                            What is SEO Consulting?
                        </h2>

                        <div className="space-y-5 text-base-content/80">
                            <p>
                                SEO Consulting involves a detailed analysis of your website’s
                                current standing, identifying opportunities for improvement, and
                                implementing strategies to boost your search engine rankings. Our
                                experts at Tymor Technologies use cutting‑edge techniques and tools
                                to provide tailored solutions that align with your business goals.
                            </p>

                            <p className="font-semibold">
                                <a href="/contact-us" className="text-primary hover:underline">
                                    Unlock Your Business Potential with Expert SEO Consulting.
                                </a>
                            </p>

                            <p>
                                In the digital age, having a robust online presence is paramount to
                                business success. Search Engine Optimization (SEO) is the cornerstone
                                of any effective online strategy, ensuring your website ranks highly
                                on search engines and attracts the right audience. Tymor Technologies
                                offers comprehensive SEO consulting services designed to enhance your
                                visibility, drive organic traffic, and convert visitors into loyal
                                customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
