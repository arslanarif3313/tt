

import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

export default function CurrentSituationsSection() {
    const items = [
        {
            title: "Customized Keyword Strategies:",
            text:
                "We develop tailored keyword strategies that align with your business goals and target audience. By understanding your industry and competitors, we identify keywords that offer the best opportunities for growth.",
        },
        {
            title: "Comprehensive Keyword Analysis:",
            text:
                "Our team conducts thorough keyword analysis using the latest software tools. We identify primary and secondary keywords, long-tail keywords, and LSI (Latent Semantic Indexing) keywords to ensure your content covers all relevant search queries.",
        },
        {
            title: "Competitive Benchmarking:",
            text:
                "We analyze your competitors’ keyword strategies to uncover gaps and opportunities. This allows us to position your content more effectively and stay ahead in search engine rankings.",
        },
        {
            title: "Content Optimization:",
            text:
                "Our experts optimize your website content, blog posts, and other digital assets with the identified keywords. This enhances your search engine visibility and improves your chances of ranking higher in search results.",
        },
        {
            title: "Continuous Monitoring and Adjustment:",
            text:
                "Keyword trends can change rapidly. We continuously monitor your keyword performance and adjust strategies as needed to ensure sustained SEO success.",
        },
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-center font-bold text-3xl lg:text-4xl">
                    CURRENT SITUATIONS HIGHLIGHTING NETWORK
                </h2>
                <h2 className="text-center font-bold text-3xl lg:text-4xl mb-6">
                    SECURITY IMPORTANCE
                </h2>

                <p className="text-center max-w-4xl mx-auto mb-10">
                    At Tymor Technologies, our keyword research services are designed to provide actionable
                    insights that enhance your SEO strategy. Here’s how we can help:
                </p>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch ">
                    {/* Left: Full height image */}
                    <div className="relative w-full h-full ">
                        <Image
                            src="/marketing/SEO-Keyword-Research.webp"
                            alt="Keywords research visual"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full bg-base-200 p-6 md:p-10 flex flex-col justify-center">
                        <ul className="space-y-6">
                            {items.map((item) => (
                                <li key={item.title} className="flex items-start gap-4">
                                    <ArrowRightCircle className="text-primary mt-1 shrink-0" size={22} />
                                    <div>
                                        <h3 className="font-semibold mb-1">{item.title}</h3>
                                        <p className="leading-relaxed">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
