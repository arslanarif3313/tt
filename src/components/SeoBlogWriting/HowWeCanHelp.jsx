// components/HowWeCanHelp.jsx
"use client";

import Image from "next/image";
import { CircleDot } from "lucide-react";

export default function HowWeCanHelp() {
    const points = [
        {
            title: "Content Strategy",
            desc:
                "We will create a content calendar that aligns with your business objectives and targets your audience's interests.",
        },
        {
            title: "Keyword Research",
            desc:
                "Using advanced tools, we'll identify high-traffic keywords relevant to your industry to drive organic traffic.",
        },
        {
            title: "SEO Optimization",
            desc:
                "Every blog post will be meticulously optimized for SEO, ensuring maximum visibility on search engines.",
        },
        {
            title: "Engaging Writing",
            desc:
                "Our talented writers will craft compelling, informative, and engaging content that resonates with your audience.",
        },
        {
            title: "Performance Tracking",
            desc:
                "We'll monitor the performance of your blog posts and make data-driven adjustments to continually improve your SEO strategy.",
        },
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="mb-10 text-center text-3xl font-bold md:mb-14 md:text-5xl">
                    HOW TYMOR TECHNOLOGIES CAN HELP
                </h2>

                <div className="grid gap-10 lg:grid-cols-12">
                    {/* Left: Text list */}
                    <div className="lg:col-span-7">
                        <p className="mb-8 text-base-content/80">
                            At Tymor Technologies, we understand the nuances of SEO and content
                            marketing. Our team of expert writers and SEO specialists will work
                            closely with you to develop a customized blog strategy tailored to
                            your business goals. Here’s how we can help:
                        </p>

                        <ul className="space-y-7">
                            {points.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <CircleDot className="mt-1 h-5 w-5 text-primary" />
                                    <div>
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="mt-1 text-base-content/80">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Image + small overlay image */}
                    <div className="lg:col-span-5">
                        {/* Main Image */}
                        <figure className="overflow-hidden rounded-xl border border-base-200 bg-base-100 shadow-xl h-full">
                            <Image
                                src="/marketing/kwa.webp" // <-- replace with your asset
                                alt="Keyword research board"
                                width={1100}
                                height={800}
                                className="h-full w-full object-cover"
                                priority
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}
