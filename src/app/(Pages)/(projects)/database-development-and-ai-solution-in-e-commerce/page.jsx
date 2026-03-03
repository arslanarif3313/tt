
import GridSectionThree from '@/components/ui/GridSection/GridSectionThree'
import Heading from '@/components/ui/Heading/Heading'
import { CircleArrowRight, Link } from 'lucide-react'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading
                heading={'Database Development and AI Solution in E-commerce'}>
            </Heading>
            <section className="py-16 bg-base-200">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-snug">
                        Enterprise On-Premise to Azure Cloud Migration <br />
                        and Managed Services Implementation for a Beverage Company
                    </h2>
                    <p>
                        Tymor Technologies collaborated with a leading e-commerce retailer looking to enhance their customer experience through advanced database management and AI-driven solutions.
                    </p>
                </div>
            </section>
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <div>
                            <h3 className="text-4xl font-bold mb-4 uppercase">Client Project Scope</h3>
                            <p className="mb-4">
                                The project aimed to modernize the client’s existing e-commerce platform by integrating robust database architecture and implementing AI technologies for personalized customer interactions and operational efficiency.
                            </p>

                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center">
                            <Image
                                src="/projects/database-development.webp" // save to /public/images
                                alt="Azure Virtual Desktop setup"
                                width={600}
                                height={350}
                                className="rounded-lg shadow-lg"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Key Objectives */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                        Key Objectives
                    </h2>

                    {/* Cards */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-base-100 border border-base-200 rounded-xl shadow-sm p-6 md:p-8">
                            <h3 className="uppercase font-bold tracking-wide mb-4">
                                Database Development:
                            </h3>

                            <ul className="space-y-4 text-base-content/80">
                                <li className="flex gap-3">
                                    <CircleArrowRight className="h-5 w-5 shrink-0 text-(--color-primary) mt-1" />
                                    <span>
                                        Design and deploy a scalable database architecture using SQL Server for handling
                                        large volumes of transactional data.
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CircleArrowRight className="h-5 w-5 shrink-0 text-(--color-primary) mt-1" />
                                    <span>
                                        Implement data warehousing solutions for centralized data storage and efficient
                                        analytics processing.
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CircleArrowRight className="h-5 w-5 shrink-0 text-(--color-primary) mt-1" />
                                    <span>
                                        Ensure data security and compliance with industry standards (e.g., GDPR, CCPA).
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-base-100 border border-base-200 rounded-xl shadow-sm p-6 md:p-8">
                            <h3 className="uppercase font-bold tracking-wide mb-4">
                                AI Solution Integration
                            </h3>

                            <ul className="space-y-4 text-base-content/80">
                                <li className="flex gap-3">
                                    <CircleArrowRight className="h-5 w-5 shrink-0 text-(--color-primary) mt-1" />
                                    <span>
                                        Develop AI algorithms and machine learning models to analyze customer behavior,
                                        preferences, and trends.
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CircleArrowRight className="h-5 w-5 shrink-0 text-(--color-primary) mt-1" />
                                    <span>
                                        Implement recommendation engines for personalized product suggestions based on
                                        user interactions and historical data.
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CircleArrowRight className="h-5 w-5 shrink-0 text-(--color-primary) mt-1" />
                                    <span>
                                        Integrate natural language processing (NLP) for customer service automation through
                                        chatbots and virtual assistants.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-base-100 border border-base-200 rounded-xl shadow-sm p-6 md:p-8">
                            <h3 className="uppercase font-bold tracking-wide mb-4">
                                E-Commerce Enhancement
                            </h3>

                            <ul className="space-y-4 text-base-content/80">
                                <li className="flex gap-3">
                                    <CircleArrowRight className="h-5 w-5 shrink-0 text-(--color-primary) mt-1" />
                                    <span>
                                        Enhance search functionality with AI-powered semantic search capabilities to
                                        improve product discoverability.
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CircleArrowRight className="h-5 w-5 shrink-0 text-(--color-primary) mt-1" />
                                    <span>
                                        Optimize inventory management and supply chain operations using predictive
                                        analytics to forecast demand and reduce stockouts.
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CircleArrowRight className="h-5 w-5 shrink-0 text-(--color-primary) mt-1" />
                                    <span>
                                        Implement AI-driven pricing strategies for dynamic pricing based on market trends
                                        and customer demand patterns.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Technologies Used */}
            <GridSectionThree
                title={'Technologies Used'}
                grid={[
                    {
                        title: "Database Technologies",
                        desc: "SQL Server for transactional databases, AWS Redshift for data warehousing.",
                        icon: "assets/icons/wrr.webp",
                    },
                    {
                        title: "AI and Machine Learning Tools",
                        desc: "Python, TensorFlow, scikit-learn for model development and deployment.",
                        icon: "assets/icons/auto.webp",
                    },
                    {
                        title: "E-commerce Platforms",
                        desc: "Custom integration with existing platforms using APIs and microservices architecture.",
                        icon: "/assets/icons/decision-making.webp",
                    },
                ]}
            ></GridSectionThree>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                        Outcome
                    </h2>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left Card */}
                        <div className="bg-base-100 border border-base-200 rounded-xl shadow-sm p-6 md:p-8">
                            <h3 className="uppercase font-bold tracking-wide mb-4">
                                Website Performance:
                            </h3>

                            <ul className="space-y-6">
                                <li className="space-y-1">
                                    <div className="flex items-start gap-3">
                                        <CircleArrowRight className="h-5 w-5 shrink-0 text-(--color-primary) mt-1" />
                                        <span className="font-semibold">Improved Customer Engagement</span>
                                    </div>
                                    <p className="text-base-content/80 pl-8">
                                        Personalized shopping experiences led to increased customer satisfaction and retention.
                                    </p>
                                </li>

                                <li className="space-y-1">
                                    <div className="flex items-start gap-3">
                                        <CircleArrowRight className="h-5 w-5 shrink-0 text-(--color-primary) mt-1" />
                                        <span className="font-semibold">Operational Efficiency</span>
                                    </div>
                                    <p className="text-base-content/80 pl-8">
                                        AI-driven automation reduced manual workload in customer support and inventory management.
                                    </p>
                                </li>

                                <li className="space-y-1">
                                    <div className="flex items-start gap-3">
                                        <CircleArrowRight className="h-5 w-5 shrink-0 text-(--color-primary) mt-1" />
                                        <span className="font-semibold">Business Growth</span>
                                    </div>
                                    <p className="text-base-content/80 pl-8">
                                        Enhanced scalability and performance of the e-commerce platform supported business growth
                                        and expansion into new markets.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* Right Illustration */}
                        <div className="bg-base-100 border border-base-200 rounded-xl shadow-sm flex items-center justify-center p-4">
                            <Image
                                src="/projects/improve-speed.webp"
                                alt="Website performance improvement illustration"
                                width={900}
                                height={540}
                                className="w-full h-auto rounded-lg"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 ">
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                        Conclusion
                    </h2>

                    {/* Copy */}
                    <div className="mt-6 space-y-5 text-base leading-relaxed">
                        <p>
                            Tymor Technologies successfully transformed the client’s e-commerce operations by leveraging
                            advanced database development and AI solutions. The project not only enhanced customer engagement
                            and operational efficiency but also positioned the client as a leader in digital innovation within
                            the retail industry.
                        </p>

                        <p>
                            For more details on how Tymor Technologies can implement similar solutions for your company, visit <a className='text-primary' href="https://tymortech.com/" target="_blank" rel="noopener noreferrer"> TymorTech.com</a>
                            to schedule a consultation.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}
