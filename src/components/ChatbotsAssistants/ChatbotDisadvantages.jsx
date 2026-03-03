// components/ChatbotDisadvantages.jsx
"use client";

import Image from "next/image";
import { CircleDot } from "lucide-react";

export default function ChatbotDisadvantages() {
    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* Left: text */}
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-wide mb-8">
                            Disadvantages of Not Using Chatbots and Virtual Assistants
                        </h2>

                        <ul className="space-y-6">
                            <Item
                                title="Limited Customer Support"
                                desc="Restricted Hours: Without chatbots, customer support is limited to business hours, potentially leaving customers without assistance during evenings, weekends, and holidays."
                            />
                            <Item
                                title="Higher Operational Costs"
                                desc="Increased Staffing Needs: Managing customer support solely with human agents requires a larger team, leading to higher payroll expenses, especially during peak times."
                            />
                            <Item
                                title="Slower Response Times"
                                desc="Longer Wait Times: Manual handling of all customer interactions can result in longer wait times, frustrating customers and negatively impacting their experience."
                            />
                            <Item
                                title="Missed Business Opportunities"
                                desc="Lead Nurturing and Sales: Without automated tools, businesses may miss out on opportunities to capture leads, provide personalized recommendations, and drive sales through timely and relevant interactions."
                            />
                        </ul>
                    </div>

                    {/* Right: image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <Image
                            src="/aiServices/chatbot-2.webp" // replace with your asset path
                            alt="Chatbot illustration"
                            width={600}
                            height={600}
                            className="rounded-xl shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Item({ title, desc }) {
    return (
        <li className="flex items-start gap-3">
            <span className="mt-1 shrink-0">
                <CircleDot className="h-5 w-5 text-primary" />
            </span>
            <div>
                <p className="font-semibold">{title}</p>
                <p className="text-gray-700">{desc}</p>
            </div>
        </li>
    );
}
