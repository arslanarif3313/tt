// components/SeoSoftwareGrid.jsx
"use client";

export default function SeoSoftwareGrid() {
    const tools = [
        {
            no: "1",
            title: "SEMrush",
            desc:
                "SEMrush is a versatile SEO tool that provides insights into keyword research, site audits, backlink analysis, and competitive benchmarking.",
            example:
                "Tymor Technologies uses SEMrush to conduct detailed site audits, identifying technical issues that may hinder your SEO performance, and to track keyword rankings and competitor strategies.",
        },
        {
            no: "2",
            title: "Ahrefs",
            desc:
                "Ahrefs excels in backlink analysis, keyword research, and content exploration, offering a comprehensive suite of SEO tools.",
            example:
                "With Ahrefs, Tymor Technologies can analyze your backlink profile, identify high‑quality link‑building opportunities, and discover content gaps that can be filled to improve your site’s SEO.",
        },
        {
            no: "3",
            title: "Moz Pro",
            desc:
                "Moz Pro offers tools for keyword research, link building, and site audits, with features like Keyword Explorer and Link Explorer.",
            example:
                "Tymor Technologies uses Moz Pro to track keyword rankings, perform in‑depth link analysis, and run comprehensive site audits to ensure your website meets SEO best practices.",
        },
        {
            no: "4",
            title: "Google Analytics",
            desc:
                "Google Analytics provides valuable insights into website traffic, user behavior, and conversion tracking.",
            example:
                "Tymor Technologies leverages Google Analytics to monitor your website’s performance, track user engagement, and identify areas for improvement in your SEO strategy.",
        },
        {
            no: "5",
            title: "Screaming Frog SEO Spider",
            desc:
                "Screaming Frog SEO Spider is a powerful website crawler that helps identify technical SEO issues, such as broken links, duplicate content, and missing meta descriptions.",
            example:
                "Tymor Technologies uses Screaming Frog to conduct thorough technical audits, ensuring that your website is free from SEO errors that could impact search engine rankings.",
        },
        {
            no: "6",
            title: "Yoast SEO",
            desc:
                "Yoast SEO is a popular WordPress plugin that helps optimize website content for search engines, offering real‑time content analysis and SEO suggestions.",
            example:
                "Tymor Technologies implements Yoast SEO to optimize your website’s on‑page elements, such as meta titles, descriptions, and keyword usage, ensuring that each page is search‑engine friendly.",
        },
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-center text-3xl md:text-5xl font-black uppercase tracking-wide leading-tight text-base-content mb-10">
                    Types of Software Used for SEO
                    <br className="hidden md:block" />
                    Strategic Solutions
                </h2>

                {/* Grid */}
                <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                    {tools.map((t) => (
                        <div
                            key={t.no}
                            className="rounded-xl border border-base-300 bg-base-100 p-6 md:p-8 shadow-sm"
                        >
                            {/* Number + Title */}
                            <h3 className="text-base-content font-bold uppercase tracking-wide mb-4">
                                <span className="mr-2">{t.no}.</span>
                                {t.title}
                            </h3>

                            {/* Description bullet */}
                            <div className="flex items-start gap-3 mb-4">
                                <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                                <p className="text-base-content/80">{t.desc}</p>
                            </div>

                            {/* Example bullet */}
                            <div className="flex items-start gap-3">
                                <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                                <div>
                                    <p className="font-semibold text-primary mb-1">Example</p>
                                    <p className="text-base-content/80">{t.example}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
