'use client';

import { CircleArrowRight } from 'lucide-react';

export default function ResultsAchievements() {
    return (
        <section className="py-24 bg-base-100">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center mb-12">
                    Results and Achievements:
                </h2>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card
                        title="Website Performance:"
                        bullets={[
                            'Increased website traffic by 40% within the first three months post-launch.',
                            'Achieved a 30% improvement in average session duration and a 20% decrease in bounce rate.',
                            'Enhanced online visibility and brand recognition through improved search engine rankings.',
                        ]}
                    />

                    <Card
                        title="SEO Success:"
                        bullets={[
                            'Improved keyword rankings for targeted search terms resulting in increased organic search traffic.',
                            'Generated a significant increase in leads and online sales through improved SEO performance.',
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

/* Reusable Card Component */
function Card({ title, bullets }) {
    return (
        <div className="rounded-xl border border-base-300 bg-base-200/50 p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold uppercase mb-6">
                {title}
            </h3>
            <ul className="space-y-5">
                {bullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <CircleArrowRight className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                        <span className="text-base-content/90">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
