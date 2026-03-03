"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (faqId) => {
        setActiveFAQ(activeFAQ === faqId ? null : faqId);
    };

    const faqData = [
        {
            id: 1,
            question: "Do you experience frequent Downtime and Unresolved Issues?",
            answer: "Your business has faced multiple unplanned downtimes, causing significant productivity losses and missed deadlines. Despite submitting many support tickets, your current IT provider offers temporary fixes instead of timely, long-term solutions, leading to repeated disruptions. This forces your team to manage IT problems constantly, diverting focus from core business activities.\n\nTymor Technologies provides a dedicated team of specialists who resolve technical issues swiftly, minimizing downtime and ensuring business continuity. They schedule regular maintenance checks and system updates, using advanced monitoring tools for real-time insights. Their robust ticketing system tracks all issues from submission to resolution."
        },
        {
            id: 2,
            question: "Do you experience Poor Response Times and Ineffective Support?",
            answer: "When you encounter IT problems, your current IT provider takes an average of 48 hours to respond, leading to prolonged outages, frustrated employees, and missed business opportunities. Their support team often provides temporary fixes instead of permanent solutions.\n\nTymor Technologies offers rapid response times (under 15 minutes), 24/7 monitoring and support, and dedicated account managers with private phone extensions for each client.\n\nTheir experienced technicians provide permanent solutions through thorough root cause analyses and proactive maintenance to keep systems optimized and secure. Tymor Technologies actively seeks client feedback to continuously improve their services."
        },
        {
            id: 3,
            question: "Do you experience Reactive rather than Proactive IT Support?",
            answer: "Our current IT provider responds only after issues arise, causing prolonged downtime and recurring problems. They don't conduct regular maintenance or monitor systems, leading to unexpected disruptions, higher costs, and decreased productivity.\n\nTymor Technologies takes a proactive approach to IT support, monitoring systems 24/7, performing regular maintenance, and addressing potential issues before they impact your business."
        },
        {
            id: 4,
            question: "Do you experience Security Breaches and Data Vulnerabilities?",
            answer: "In the last year, your business has suffered security breaches under the management of your current IT provider, compromising sensitive customer data and incurring substantial recovery costs. The IT company has not implemented effective security protocols or conducted regular security audits, leaving your systems vulnerable to future attacks.\n\nTymor Technologies implements robust security measures, including advanced threat detection, encryption protocols, and regular security audits, to safeguard your data and protect against cyber threats."
        },
        {
            id: 5,
            question: "Do you experience recommendations for implementing modern technology solutions to address your evolving business?",
            answer: "Your IT company is not keeping up with the latest technological advancements, leading to outdated solutions that hinder your business growth. They focus on fixing problems instead of proactively recommending new technologies to enhance productivity. They don't understand your specific business goals, resulting in generic solutions and lack regular consultations to identify opportunities for improvement.\n\nTymor Technologies stays updated with the latest advancements, proactively recommending and implementing innovative solutions tailored to your business needs, driving efficiency and success."
        },
        {
            id: 6,
            question: "Do you experience Opaque Pricing and Unexpected Charges?",
            answer: "Over the past year, you've noticed unexpected charges on your IT provider's invoices for services that were not clearly explained or agreed upon. Despite raising concerns, the provider hasn't given transparent billing explanations.\n\nTymor Technologies clearly outlines service expectations, response times, and costs in initial discussions and agreements, ensuring mutual understanding. We offer transparent and straightforward pricing models, such as fixed-rate or tiered pricing. You will always have a dedicated account manager who understands your business needs and can promptly address any concerns."
        }
    ];

    return (
        <section className="py-8 sm:py-10 lg:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide sm:tracking-widest slide-up leading-tight">
                        LOOKING FOR A BETTER IT SERVICES EXPERIENCE?
                    </h2>
                    <p className="glass-shimmer mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg opacity-70 max-w-3xl mx-auto">
                        If you struggle with any of these common challenges, you&apos;re not alone!
                    </p>
                </div>

                {/* Image and FAQ Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                    {/* Image on Left */}
                    <div className="hidden lg:block relative">
                        <div className="h-full overflow-hidden rounded-2xl group">
                            <Image
                                src="/home/faq.webp"
                                alt="IT Services FAQ"
                                width={600}
                                height={800}
                                className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    </div>

                    {/* Mobile Image */}
                    <div className="lg:hidden">
                        <Image
                            src="/home/faq.webp"
                            alt="IT Services FAQ"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-xl shadow-lg"
                            priority
                        />
                    </div>

                    {/* FAQ Section on Right */}
                    <div className="flex items-stretch">
                        <div className="w-full bg-white/95 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-white/20 flex flex-col">
                            <div className="space-y-4 flex-1">
                                {faqData.map((faq) => (
                                    <div
                                        key={faq.id}
                                        className={`border rounded-xl overflow-hidden transition-all duration-500 ${activeFAQ === faq.id
                                            ? 'border-primary/50 shadow-[0_0_25px_rgba(255,69,0,0.15)] bg-primary/2'
                                            : 'border-gray-100 hover:border-gray-300 hover:shadow-md'
                                            }`}
                                    >
                                        <div
                                            className={`transition-colors duration-500 ${activeFAQ === faq.id
                                                ? 'bg-linear-to-r from-primary/90 to-primary'
                                                : 'bg-linear-to-r from-[#29465B] to-[#1e3a4a]'
                                                } text-white`}
                                        >
                                            <div
                                                className="flex items-center justify-between p-4 lg:p-6 cursor-pointer"
                                                onClick={() => toggleFAQ(faq.id)}
                                            >
                                                <h3 className="text-sm lg:text-base font-semibold leading-relaxed pr-4">
                                                    {faq.question}
                                                </h3>
                                                <ChevronDown
                                                    className={`h-5 w-5 lg:h-6 lg:w-6 shrink-0 transition-transform duration-500 ${activeFAQ === faq.id ? 'rotate-180 scale-110' : ''
                                                        } text-white`}
                                                />
                                            </div>
                                        </div>

                                        <div className={`grid transition-all duration-500 ease-in-out ${activeFAQ === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                            }`}>
                                            <div className="overflow-hidden">
                                                <div className={`p-4 lg:p-6 text-gray-700 text-sm lg:text-base leading-relaxed transform transition-transform duration-700 ${activeFAQ === faq.id ? 'translate-y-0' : 'translate-y-4'
                                                    }`}>
                                                    {faq.answer.split('\n\n').map((paragraph, index) => (
                                                        <p key={index} className={index > 0 ? 'mt-4' : ''}>
                                                            {paragraph}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}