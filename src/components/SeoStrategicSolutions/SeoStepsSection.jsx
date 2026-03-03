

const steps = [
    {
        icon: "/assets/icons/seo.webp", // your image path
        title: "SEO Audit:",
        description:
            "Conducted a thorough audit using SEMrush and Screaming Frog SEO Spider to identify technical issues, such as broken links, duplicate content, and slow page loading times.",
    },
    {
        icon: "/assets/icons/accc.webp",
        title: "Keyword Research and Optimization:",
        description:
            "Utilized Ahrefs and Moz Pro to identify high-value keywords relevant to ABC Electronics’ products. Optimized product descriptions, meta tags, and blog content to target these keywords.",
    },
    {
        icon: "/assets/icons/scope.webp",
        title: "Content Strategy and Creation",
        description:
            "Developed a content plan that included product reviews, buying guides, and how-to articles. Created engaging and informative content that addressed common customer queries and showcased ABC Electronics’ expertise in consumer electronics.",
    },
    {
        icon: "/assets/icons/hiref.webp",
        title: "Link Building",
        description:
            "Implemented a link-building campaign to acquire backlinks from authoritative tech blogs and industry websites. This improved the site’s domain authority and boosted search engine rankings.",
    },
    {
        icon: "/assets/icons/seo.webp",
        title: "Technical SEO Enhancements",
        description:
            "Addressed technical issues identified in the audit, such as optimizing images for faster loading times, implementing structured data, and ensuring mobile-friendliness.",
    },
    {
        icon: "/assets/icons/de.webp",
        title: "Ongoing Monitoring and Reporting",
        description:
            "Used Google Analytics and SEMrush to monitor the site’s performance continuously. Provided regular reports to ABC Electronics, highlighting progress and making data-driven recommendations for further improvement.",
    },
];

export default function SeoStepsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg"
                        >
                            {/* Icon Image */}
                            <div className="mb-4 flex justify-center">
                                <img
                                    src={step.icon}
                                    alt={step.title}
                                    className="h-14 w-14 object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="mb-2 text-center text-lg font-semibold">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-center text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
