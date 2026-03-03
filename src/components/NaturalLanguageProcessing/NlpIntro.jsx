// components/NlpIntro.jsx
"use client";

import Image from "next/image";
import { CircleCheck } from "lucide-react";

export default function NlpIntro() {
    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* Left: image collage */}
                    <div className="lg:col-span-5 relative">
                        {/* Big image */}
                        <div className="rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/aiServices/npl.webp" // <- replace with your path
                                alt="AI head visualization"
                                width={900}
                                height={1100}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>



                        {/* Simple dotted decoration (optional) */}
                        <div className="hidden md:block absolute -right-10 top-6">
                            <div className="grid grid-cols-4 gap-1 opacity-40">
                                {Array.from({ length: 24 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className="h-1.5 w-1.5 rounded-full bg-gray-300 inline-block"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: text */}
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-wide mb-6">
                            What is Natural Language Processing?
                        </h2>

                        <p className="text-gray-700 mb-8 max-w-3xl">
                            Natural Language Processing (NLP) is a branch of artificial
                            intelligence that focuses on the interaction between computers
                            and humans through natural language. The goal of NLP is to
                            enable computers to understand, interpret, and generate human
                            language in a way that is both valuable and meaningful. This
                            encompasses a range of activities, including:
                        </p>

                        {/* Bullets */}
                        <ul className="space-y-5">
                            <Bullet
                                title="Text analysis"
                                desc="Breaking down and analyzing text to understand its structure and meaning."
                            />
                            <Bullet
                                title="Sentiment analysis"
                                desc="Determining the sentiment or emotional tone behind a piece of text."
                            />
                            <Bullet
                                title="Machine translation"
                                desc="Translating text or speech from one language to another."
                            />
                            <Bullet
                                title="Speech recognition"
                                desc="Converting spoken language into text."
                            />
                            <Bullet
                                title="Information retrieval"
                                desc="Finding relevant information within large datasets."
                            />
                            <Bullet
                                title="Text generation"
                                desc="Creating new text based on specific criteria or prompts."
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Bullet({ title, desc }) {
    return (
        <li className="flex items-start gap-3">
            <span className="mt-1 shrink-0">
                {/* Use primary so it matches your brand color (orange in your design) */}
                <CircleCheck className="h-5 w-5 text-primary" />
            </span>
            <div>
                <p className="font-semibold">{title}</p>
                <p className="text-gray-700">{desc}</p>
            </div>
        </li>
    );
}
