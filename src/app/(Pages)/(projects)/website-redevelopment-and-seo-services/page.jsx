import Heading from '@/components/ui/Heading/Heading'
import ProjectScopeImplementation from '@/components/WebsiteRedevelopmentAndSeoServices/ProjectScopeImplementation'
import ResultsAchievements from '@/components/WebsiteRedevelopmentAndSeoServices/ResultsAndAchievements'
import { CircleArrowRight } from 'lucide-react'
import React from 'react'

export const metadata = {
  title: "Website Redevelopment & SEO Services – Tymor Technologies",
  description: "Professional website redevelopment and SEO services to maximize conversions, improve user experience, and boost search rankings.",
};

export default function page() {
    return (
        <div>
            <Heading
                heading={'Website Redevelopment and SEO Services'}
            ></Heading>
            
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Website Redevelopment & SEO Services to Maximize Conversions
                    </h1>
                </div>
            </section>

            {/* Client Overview */}
            <section className="py-24 bg-base-100">
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-6">
                        Client Overview
                    </h2>

                    {/* Description */}
                    <p className="text-base md:text-lg text-base-content/80 max-w-5xl">
                        Tymor Technologies was approached by a mid-sized retail company specializing in outdoor gear and equipment.
                        The client sought to enhance their online presence, improve user experience, and increase organic search
                        visibility through a comprehensive website redevelopment and SEO strategy.
                    </p>
                </div>
            </section>

            {/* Project Goals */}
            <section className="py-24 bg-base-100">
                <div className="container mx-auto px-4">
                    {/* Section Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center mb-12">
                        Project Goals
                    </h2>

                    {/* Two Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Website Redevelopment */}
                        <div className="rounded-xl border border-base-300 bg-base-200/50 p-6 md:p-8 shadow-sm">
                            <h3 className="text-lg md:text-xl font-bold uppercase mb-6">
                                Website Redevelopment:
                            </h3>

                            <ul className="space-y-5">
                                {[
                                    'Enhance user experience (UX) to improve customer engagement and conversion rates.',
                                    'Modernize the website design to reflect current industry standards and brand identity.',
                                    'Implement responsive design for optimal viewing across all devices.',
                                    'Integrate robust backend functionalities for efficient content management and scalability.',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CircleArrowRight className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                                        <span className="text-base-content/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* SEO Services */}
                        <div className="rounded-xl border border-base-300 bg-base-200/50 p-6 md:p-8 shadow-sm">
                            <h3 className="text-lg md:text-xl font-bold uppercase mb-6">
                                SEO Services:
                            </h3>

                            <ul className="space-y-5">
                                {[
                                    'Increase organic search traffic and keyword rankings.',
                                    'Optimize on-page SEO elements including meta tags, headings, and content.',
                                    'Conduct keyword research to identify high-potential search terms relevant to the client’s products and services.',
                                    'Implement technical SEO enhancements to improve site speed, mobile usability, and crawlability.',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CircleArrowRight className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                                        <span className="text-base-content/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Project Scope  */}
            <ProjectScopeImplementation></ProjectScopeImplementation>
            {/* Results and Achievements */}
            <ResultsAchievements></ResultsAchievements>
            {/* Conclusion */}
            <section className="py-24 bg-base-100">
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-6">
                        Conclusion
                    </h2>

                    {/* Paragraphs */}
                    <p className="text-base md:text-lg text-base-content/90 mb-6">
                        The project successfully achieved the client’s objectives of enhancing their
                        online presence and improving user engagement through a combination of website
                        redevelopment and strategic SEO services. Tymor Technologies continues to support
                        the client in optimizing their digital strategy to sustain long-term growth and
                        profitability.
                    </p>

                    <p className="text-base md:text-lg text-base-content/90">
                        For more information on how Tymor Technologies can assist your company with
                        similar solutions, visit{" "}
                        <a
                            href="https://tymortech.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:underline"
                        >
                            tymortech.com
                        </a>{" "}
                        to schedule a consultation.
                    </p>
                </div>
            </section>




        </div>
    )
}
