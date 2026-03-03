'use client';

import { CircleArrowRight } from 'lucide-react';

export default function ProjectScopeImplementation() {
    return (
        <section className="py-24 bg-base-100">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center mb-12">
                    Project Scope and Implementation:
                </h2>

                {/* Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <Card
                        title="Discovery and Planning:"
                        bullets={[
                            'Conducted initial consultations to understand client objectives, target audience, and key performance indicators (KPIs).',
                            'Defined project milestones, deliverables, and timelines for both website redevelopment and SEO initiatives.',
                        ]}
                    />

                    <Card
                        title="Website Redevelopment Phase:"
                        bullets={[
                            'Designed wireframes and mockups based on client feedback and industry best practices.',
                            'Developed a custom WordPress website leveraging responsive design principles.',
                            'Implemented a user-friendly interface with intuitive navigation and clear calls-to-action (CTAs).',
                            'Integrated e-commerce functionalities for seamless online transactions.',
                        ]}
                    />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card
                        title="SEO Implementation Phase:"
                        bullets={[
                            'Conducted a comprehensive SEO audit to identify existing issues and opportunities.',
                            'Implemented on-page optimizations including keyword optimization, meta tags, and schema markup.',
                            'Improved site architecture and navigation for better user experience and search engine indexing.',
                            'Developed and executed a content strategy focusing on high-quality, SEO-optimized content creation and blog posts.',
                        ]}
                    />

                    <Card
                        title="Testing and Launch:"
                        bullets={[
                            'Conducted rigorous testing across various devices and browsers to ensure functionality and performance.',
                            'Implemented necessary security measures and SSL certification for data protection.',
                            'Conducted user acceptance testing (UAT) to validate functionalities and usability.',
                        ]}
                    />

                    <Card
                        title="Post-Launch Support and Optimization:"
                        bullets={[
                            'Monitored website performance metrics including traffic, conversions, and bounce rates.',
                            'Continued SEO monitoring and adjustments based on analytics insights and search engine algorithm updates.',
                            'Provided training and support to client teams for ongoing content management and website maintenance.',
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
