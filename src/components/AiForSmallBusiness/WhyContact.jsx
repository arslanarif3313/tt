"use client";

import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

const points = [
    {
        title: "Inventory Management",
        body:
            "The store used an AI-powered inventory management system that predicted demand for products based on historical sales data, seasonal trends, and market analysis. This helped them maintain optimal stock levels, reduce overstock and stockouts, and save on storage costs.",
    },
    {
        title: "Customer Service",
        body:
            "The store integrated an AI chatbot on their website to handle customer inquiries. The chatbot used natural language processing to understand and respond to questions about product availability, order status, and returns. It handled multiple queries simultaneously and provided instant responses, improving the overall experience.",
    },
    {
        title: "Personalized Marketing",
        body:
            "The AI system analyzed customer purchase history and browsing behavior to create personalized product recommendations. This increased the relevance of marketing emails and ads, leading to higher conversion rates and customer satisfaction.",
    },
    {
        title: "Sales Forecasting",
        body:
            "By analyzing sales data and external factors such as market trends and economic indicators, the AI system provided accurate sales forecasts. This allowed the store to plan marketing campaigns and manage cash flow more effectively.",
    },
];

export default function WhyContact() {
    return (
        <section className="py-14 sm:py-16 lg:py-24 bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="uppercase font-bold tracking-tight leading-tight text-2xl sm:text-3xl lg:text-4xl">
                        Why Contact Tymor Technologies
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="mt-10 lg:mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
                    {/* Left: Image */}

                    <div className="lg:col-span-6 h-full shadow-xl space-y-5">
                        <Image
                            src="/aiServices/ai-in-business.webp"
                            alt="AI in action for enterprises"
                            width={1400}
                            height={900}
                            className="w-full h-full object-cover rounded-md"
                            priority
                        />
                    </div>


                    {/* Right: Content card */}
                    <div className="lg:col-span-6">
                        <div className="rounded-2xl bg-neutral-100 p-6 sm:p-8 lg:p-10 shadow-sm ring-1 ring-black/5">
                            <div>
                                <p>Implementing AI can be complex, but with the right expertise, it can bring substantial benefits to your enterprise. Tymor Technologies offers comprehensive AI solutions tailored to your business needs. Here's why you should consider us:  </p>
                            </div>
                            <ul className="space-y-6">
                                {points.map((p, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="mt-1 shrink-0">
                                            <CircleArrowRight className="h-4 w-4 text-[#FF4500]" />
                                        </span>
                                        <div>
                                            <p className="font-semibold text-black/90">{p.title}</p>
                                            <p className="mt-1 text-neutral-700 text-sm sm:text-[15px] leading-relaxed">
                                                {p.body}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-5">
                                <p>
                                    Ready to transform your business with AI? <Link href={'/contact-us'} className="text-primary">Contact Tymor Technologies</Link> today to set up a consultation and see how we can help you leverage AI to achieve your business goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
