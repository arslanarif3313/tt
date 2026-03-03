"use client";

import { ArrowRightCircle } from "lucide-react";

export default function KeywordResearchTools() {
    const tools = [
        {
            title: "SEMRUSH",
            points: [
                "SEMrush is a powerful tool that provides in-depth keyword analysis. It helps identify high-traffic keywords, track keyword rankings, and analyze competitors’ keyword strategies.",
                "Example: By using SEMrush, Tymor Technologies can identify keywords with high search volume and low competition that are relevant to your business, ensuring you can capture valuable traffic.",
            ],
        },
        {
            title: "AHREFS",
            points: [
                "Ahrefs is known for its extensive backlink database and keyword research capabilities. It provides insights into keyword difficulty, search volume, and potential traffic.",
                "Example: Ahrefs allows Tymor Technologies to uncover keyword opportunities and track your keyword performance over time, helping to refine your SEO strategy continually.",
            ],
        },
        {
            title: "GOOGLE KEYWORD PLANNER:",
            points: [
                "Google Keyword Planner is a free tool from Google that provides data on keyword search volumes, competition levels, and suggested bid prices for pay-per-click campaigns.",
                "Example: Tymor Technologies uses Google Keyword Planner to gain insights into which keywords are most relevant and cost-effective for your business, ensuring your content aligns with what your audience is searching for.",
            ],
        },
        {
            title: "MOZ KEYWORD EXPLORER:",
            points: [
                "Moz Keyword Explorer offers keyword suggestions, difficulty scores, and organic CTR data. It helps prioritize keywords based on potential impact.",
                "Example: By leveraging Moz Keyword Explorer, Tymor Technologies can recommend keywords that not only attract traffic but also lead to higher engagement and conversions.",
            ],
        },
        {
            title: "KEYWORDTOOL.IO",
            points: [
                "KeywordTool.io is excellent for finding long-tail keywords and generating keyword ideas from various search engines, including Google, YouTube, Bing, and Amazon.",
                "Example: Tymor Technologies uses KeywordTool.io to expand your keyword list with long-tail keywords that have less competition and are more likely to convert.",
            ],
        },
    ];

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12">
                    TYPES OF SOFTWARE USED FOR KEYWORD RESEARCH
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {tools.map((tool, i) => (
                        <div key={i} className="bg-white text-black p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <h3 className="font-bold text-lg mb-4">{tool.title}</h3>
                            <ul className="space-y-3">
                                {tool.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <ArrowRightCircle
                                            size={20}
                                            className="text-primary mt-1 shrink-0"
                                        />
                                        <span className="text-base">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
