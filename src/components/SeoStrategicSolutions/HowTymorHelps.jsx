

import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

const Point = ({ title, children }) => (
    <li className="flex items-start gap-3">
        <ArrowRightCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
        <div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-base-content/70">{children}</p>
        </div>
    </li>
);

export default function HowWeHelpContent() {
    return (
        <section className="py-24">

            <div className="container mx-auto px-4">

                <h2 className="mb-10 text-3xl font-bold text-center">
                    HOW TYMOR TECHNOLOGIES CAN HELP
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Left image — responsive Next.js Image */}
                    <div className="overflow-hidden rounded-2xl">
                        <Image
                            src="/marketing/Content-marketing-scaled.webp"
                            alt="Content marketing laptop"
                            width={1200}
                            height={800}
                            priority
                            className="h-auto w-full object-cover"
                        />
                    </div>

                    {/* Right text */}
                    <div className="rounded-2xl bg-base-200 p-6">
                        <p className="mb-6 text-base-content/80">
                            At Tymor Technologies, we understand that every business is unique.
                            Our content marketing services are tailored to your specific needs and goals.
                            Here’s how we help:
                        </p>

                        <ul className="space-y-4">
                            <Point title="Strategic Planning">
                                We build a comprehensive content strategy aligned with your goals and audience.
                            </Point>
                            <Point title="Content Creation">
                                Skilled writers, designers, and videographers produce compelling content that resonates.
                            </Point>
                            <Point title="Distribution and Promotion">
                                We ensure your content reaches the right people via effective channels and tactics.
                            </Point>
                            <Point title="Performance Tracking">
                                We monitor performance and make data‑driven adjustments to maximize results.
                            </Point>
                        </ul>

                        <p className="mt-6 text-base-content/80">
                            Ready to elevate your content marketing?{" "}
                            <a href="/contact-us" className="link link-primary">Contact us</a>{" "}
                            or learn more at{" "}
                            <a href="https://tymortech.com" className="link link-primary" target="_blank" rel="noreferrer">
                                tymortech.com
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
