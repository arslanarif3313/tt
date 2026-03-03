
import {
    CircleArrowRight,
    CircleDot,
} from "lucide-react";



export default function ContentMarketingSoftware() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-wide mb-10">
                    TYPES OF SOFTWARE USED IN CONTENT MARKETING
                </h2>

                {/* 2-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left column */}
                    <div className="space-y-8">
                        {/* CMS */}
                        <div className="rounded-xl border border-neutral-200 bg-white p-6">
                            <h3 className="text-lg font-bold mb-6">
                                CONTENT MANAGEMENT SYSTEMS (CMS)
                            </h3>

                            <ul className="space-y-5">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">WordPress</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            A versatile platform for creating and managing content‑rich websites.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">HubSpot CMS</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            An integrated solution that combines content management with marketing automation.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">Drupal</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            A robust CMS for larger enterprises needing complex content structures.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* SEO Tools */}
                        <div className="rounded-xl border border-neutral-200 bg-white p-6">
                            <h3 className="text-lg font-bold mb-6">SEO TOOLS</h3>

                            <ul className="space-y-5">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">Ahrefs</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            A comprehensive toolset for SEO analysis, keyword research, and backlink tracking.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">SEMrush</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            An all‑in‑one marketing toolkit for improving online visibility and discovering marketing insights.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">Yoast SEO</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            A popular WordPress plugin that helps optimize content for search engines.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-8">
                        {/* Content Creation Tools */}
                        <div className="rounded-xl border border-neutral-200 bg-white p-6">
                            <h3 className="text-lg font-bold mb-6">CONTENT CREATION TOOLS</h3>

                            <ul className="space-y-5">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">Canva</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            A graphic design tool for creating visually appealing images and infographics.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">Adobe Creative Cloud</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            Professional‑grade apps for content creation, including Photoshop, Illustrator, and Premiere Pro.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">Grammarly</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            An AI‑powered writing assistant for clear, engaging, and error‑free content.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media Management */}
                        <div className="rounded-xl border border-neutral-200 bg-white p-6">
                            <h3 className="text-lg font-bold mb-6">SOCIAL MEDIA MANAGEMENT</h3>

                            <ul className="space-y-5">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">Hootsuite</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            Manage and schedule social posts across multiple networks.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">Buffer</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            Plan and publish social media content easily.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">Sprout Social</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            Advanced analytics and management for social media performance.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Analytics and Reporting */}
                        <div className="rounded-xl border border-neutral-200 bg-white p-6">
                            <h3 className="text-lg font-bold mb-6">Analytics and Reporting</h3>

                            <ul className="space-y-5">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">Google Analytics</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            Tracks and reports website traffic and user behavior.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">HubSpot Analytics</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            Provides detailed insights into your content marketing efforts and performance.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary" />
                                    <div>
                                        <p className="font-semibold">Tableau</p>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            A powerful analytics platform that helps visualize and understand your content data.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
