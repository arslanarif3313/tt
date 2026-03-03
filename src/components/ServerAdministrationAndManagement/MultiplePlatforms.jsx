"use client";

import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

export default function MultiplePlatforms() {
    const platforms = [
        "WordPress",
        "Microsoft",
        "Google Cloud Platform",
        "Jenkins",
        "Docker",
        "AWS CloudFormation",
        "CloudFlare",
        "Webmin",
        "OpenStack",
        "Linux",
    ];

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
                {/* Left Image */}
                <div >
                    <Image
                        src="/itServices/AWS-Cloud-1024x683.webp"
                        alt="Cloud support platforms"
                        width={600}
                        height={400}
                        className="rounded-lg shadow"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-xl md:text-3xl font-bold uppercase">
                        We Support Multiple Platforms
                    </h2>
                    <p className="mt-4 ">
                        Tymor Technologies provides comprehensive support for various server and
                        data center platforms.
                    </p>

                    <h3 className="mt-6 font-semibold">We support:</h3>

                    <ul className="mt-4 space-y-3 font-sans">
                        {platforms.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 ">
                                <CircleArrowRight className="h-5 w-5 text-primary shrink-0" />
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 ">
                        With Tymor Technologies, you can ensure your servers and platforms are expertly
                        managed, secured, and optimized for peak performance.
                    </p>
                </div>
            </div>
        </section>
    );
}
