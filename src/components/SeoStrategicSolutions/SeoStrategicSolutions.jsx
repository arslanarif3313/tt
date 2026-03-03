// components/SeoStrategicSolutions.jsx
"use client";

import Image from "next/image";

export default function SeoStrategicSolutions() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid gap-10 md:grid-cols-2 md:items-start">
                    {/* Left: image */}
                    <div>
                        <Image
                            src="/marketing/SEO-Strategic.webp" // <- replace with your image path
                            width={900}
                            height={700}
                            alt="SEO strategic solutions diagram"
                            className="w-full h-auto rounded-xl object-contain"
                            priority
                        />
                    </div>

                    {/* Right: content */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wide leading-tight text-base-content mb-6">
                            SEO Strategic
                            <br className="hidden md:block" /> Solutions
                        </h2>

                        <p className="text-base-content/80 mb-6 max-w-3xl">
                            In the digital age, having a robust SEO strategy is essential for
                            businesses aiming to improve their online visibility, attract more
                            visitors, and convert leads into customers.
                        </p>

                        <p className="text-base-content/80 max-w-3xl">
                            At Tymor Technologies, we offer comprehensive SEO strategic
                            solutions that leverage the latest software and techniques to help
                            your business achieve top search engine rankings and sustained
                            online success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
