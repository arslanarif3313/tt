"use client";

import Image from "next/image";

export default function ContentMarketing() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                {/* Left: Image */}
                <Image
                    src="/marketing/7-Steps-to-Create-a-Victorious-B2B-Content-Marketing-Strategy.webp"
                    alt="Content Marketing"
                    width={600}   // intrinsic width
                    height={400}  // intrinsic height
                    className="rounded-lg shadow-lg w-full h-auto"
                    priority
                />

                {/* Right: Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                        CONTENT MARKETING <br /> SOLUTIONS BY TYMOR TECHNOLOGIES
                    </h2>

                    <p className="text-base mb-4">
                        In today’s digital age, effective content marketing is essential for businesses
                        looking to engage their audience, build brand awareness, and drive conversions.
                    </p>

                    <p className="text-base mb-4">
                        Tymor Technologies offers comprehensive content marketing services that help
                        your company create, distribute, and manage high-quality content tailored to
                        your target audience.
                    </p>

                    <p className="text-base">
                        Here’s how we do it and the tools we use to ensure success.
                    </p>
                </div>

            </div>
        </section>
    );
}
