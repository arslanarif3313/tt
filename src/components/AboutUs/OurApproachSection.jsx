"use client";

import Image from "next/image";

const items = [
    {
        title: "Collaboration",
        text:
            "We believe in working closely with our clients as strategic partners, fostering open communication and collaboration throughout the project lifecycle.",
        img: "/about-us/Collaboration.webp",
    },
    {
        title: "Innovation",
        text:
            "We are committed to staying at the forefront of technological innovation, constantly exploring new tools, techniques, and methodologies to deliver best‑in‑class solutions.",
        img: "/about-us/Innovation.webp",
    },
    {
        title: "Agility",
        text:
            "We embrace agile principles and practices to adapt quickly to changing requirements and deliver value incrementally, ensuring our solutions remain flexible and responsive to evolving business needs.",
        img: "/about-us/Agility.webp",
    },
    {
        title: "Quality",
        text:
            "We are dedicated to delivering high‑quality solutions that meet the highest standards of performance, reliability, and security, providing our clients with peace of mind and confidence in the reliability of our work.",
        img: "/about-us/Quality.webp",
    },
];

export default function OurApproachSection() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-primary uppercase">
                        Our Approach
                    </h2>
                    <p className="mt-4 max-w-4xl mx-auto text-white">
                        At Tymor Technologies, we take a client‑centric approach to
                        everything we do, placing the needs and goals of our clients at the
                        forefront of our operations. Our approach is characterized by:
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden"
                        >

                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                priority={false}
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                className="object-cover"
                            />

                            {/* Bottom gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                            {/* Text content */}
                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                                <h3 className="text-white text-2xl font-bold mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-100 leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
