"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const items = [
    {
        no: "1.",
        title: "Custom Development:",
        bullets: [
            {
                subtitle: "Tailored Solutions",
                text:
                    "We design and develop chatbots that are customized to meet your specific business needs, ensuring seamless integration with your existing systems and platforms.",
            },
        ],
    },
    {
        no: "2.",
        title: "Technology Expertise",
        bullets: [
            {
                subtitle: "Leading Technologies",
                text:
                    "Leveraging industry-leading technologies, we ensure that your chatbots and virtual assistants are robust, secure, and scalable, capable of handling a wide range of customer interactions.",
            },
        ],
    },
    {
        no: "3.",
        title: "Implementation and Support",
        bullets: [
            {
                subtitle: "End-to-End Support",
                text:
                    "Our team provides comprehensive implementation support, from initial setup to ongoing maintenance, ensuring that your chatbots perform optimally and evolve with your business needs.",
            },
        ],
    },
    {
        no: "4.",
        title: "Data Analytics",
        bullets: [
            {
                subtitle: "Actionable Insights",
                text:
                    "We help you harness the power of data collected by chatbots to gain valuable insights into customer behavior, enabling you to make data-driven decisions that enhance your business strategy.",
            },
        ],
    },
];

export default function TymorCanHelp() {
    return (
        <section className="py-14 sm:py-16 lg:py-24 bg-neutral-50">
            <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
                {/* Title + intro */}
                <header className="text-center mb-8 sm:mb-10">
                    <h2
                        className="uppercase font-bold tracking-tight leading-tight
                       text-2xl sm:text-3xl lg:text-4xl"
                    >
                        How Tymor Technologies Can Help
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-neutral-700 max-w-3xl mx-auto">
                        <span className="font-semibold">Tymor Technologies</span> offers a comprehensive
                        suite of services to help businesses integrate chatbots and virtual assistants into
                        their operations. Here’s how we can assist:
                    </p>
                </header>

                {/* Grid: content / image */}
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                    {/* Left: content list */}
                    <div className="lg:col-span-7">
                        <div className="space-y-8">
                            {items.map((block) => (
                                <div key={block.no} className="space-y-3">
                                    <div className="flex items-start gap-2">
                                        <span className="font-bold text-black/90">{block.no}</span>
                                        <h3 className="font-bold text-black/90">{block.title}</h3>
                                    </div>

                                    <ul className="space-y-4 pl-7">
                                        {block.bullets.map((b, i) => (
                                            <li key={i} className="relative">
                                                {/* orange bullet */}
                                                <span className="absolute -left-7 top-1">
                                                    <CheckCircle2 className="h-4 w-4 text-[#FF4500]" />
                                                </span>

                                                <p className="font-semibold text-black/90">{b.subtitle}</p>
                                                <p className="text-sm sm:text-base text-neutral-700">
                                                    {b.text}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Footer text */}
                        <div className="mt-8 sm:mt-10 text-sm sm:text-base text-neutral-700">
                            <p>
                                By partnering with Tymor Technologies, you can elevate customer satisfaction,
                                improve operational efficiency, and maintain a competitive edge in the market
                                with cutting-edge chatbot and virtual assistant solutions.
                            </p>
                            <p className="mt-3">
                                For more information on how Tymor Technologies can help transform your business
                                with chatbots and virtual assistants,{" "}
                                <Link
                                    href="/contact-us"
                                    className="text-primary underline underline-offset-2 hover:opacity-80"
                                >
                                    click here
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    {/* Right: image */}
                    <div className="lg:col-span-5">
                        <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 sm:max-w-lg lg:max-w-none">
                            <Image
                                src="/aiServices/Can-Help.webp"
                                alt="How Tymor Technologies can help"
                                width={1100}
                                height={800}
                                priority
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
