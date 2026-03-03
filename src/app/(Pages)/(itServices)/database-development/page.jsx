import GridSectionThree from '@/components/ui/GridSection/GridSectionThree'
import Heading from '@/components/ui/Heading/Heading'
import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className="bg-white">
            <Heading heading={'Database Development'}></Heading>
            {/* HERO */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image src="/database-development-coding.png" alt="Database Development" fill className="object-cover" priority />
                        </div>
                        <div>
                            <h1 className="uppercase font-bold leading-tight text-2xl sm:text-3xl md:text-4xl">
                                Build a Strong Foundation<br />for Your Data
                            </h1>
                            <div className="mt-4 space-y-4 text-gray-700 leading-7">
                                <p>
                                    At Tymor Technologies, we design, develop, and manage robust, secure, and scalable database systems that form the backbone of modern business operations. Whether you're dealing with structured or unstructured data, on-premises or in the cloud, our team ensures your data environment is optimized for performance, reliability, and insight.
                                </p>
                                <p>
                                    Our experts focus on building databases that are customized to your business logic, enabling smooth data flow, faster processing, and seamless integration with your existing applications. With our emphasis on data governance, security, and disaster recovery, you can trust your critical information to be safe, consistent, and always accessible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THREE FEATURES */}
            <GridSectionThree
                grid={[
                    {
                        title: "Performance Optimization",
                        desc: "Our database solutions are tuned for efficiency, ensuring faster processing and query response times for your critical business operations.",
                        icon: "assets/icons/cog.webp",
                    },
                    {
                        title: "Data Security",
                        desc: "We implement comprehensive security measures, backup strategies, and disaster recovery plans to protect your critical information.",
                        icon: "assets/icons/security.webp",
                    },
                    {
                        title: "Scalable Architecture",
                        desc: "Our database designs grow with your business, supporting increasing data volumes and user demands without compromising performance.",
                        icon: "/assets/icons/scale.webp",
                    }
                ]}
            ></GridSectionThree>

            {/* OUR EXPERTISE */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-center uppercase font-bold text-2xl sm:text-3xl md:text-4xl mb-10">
                        Our Expertise Includes
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left: List */}
                        <div>
                            <ul className="space-y-6 text-base">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Custom Database Design, Modeling, and Architecture</p>
                                        <p className="opacity-80 text-gray-700">
                                            Tailored database structures designed to match your specific business requirements and workflows.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Data Migration, Integration, and Transformation</p>
                                        <p className="opacity-80 text-gray-700">
                                            Seamlessly transfer and integrate data from legacy systems to modern platforms without data loss or downtime.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Performance Optimization and Tuning for Efficiency</p>
                                        <p className="opacity-80 text-gray-700">
                                            Fine-tune database performance to handle high-volume transactions and complex queries efficiently.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Backup, Recovery, and Data Security Management</p>
                                        <p className="opacity-80 text-gray-700">
                                            Comprehensive backup strategies and disaster recovery plans to ensure business continuity.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Cloud and Hybrid Database Deployment</p>
                                        <p className="opacity-80 text-gray-700">
                                            Deploy databases in cloud, on-premises, or hybrid environments based on your specific needs.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Real-time Monitoring and Maintenance</p>
                                        <p className="opacity-80 text-gray-700">
                                            Continuous monitoring and proactive maintenance to ensure optimal database health and performance.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right: Image */}
                        <div className="relative">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src="/itServices/AWS-Cloud-1024x683.webp"
                                    alt="Database Development Solutions"
                                    width={920}
                                    height={1080}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLACK STRIP */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="uppercase font-bold text-white text-2xl sm:text-3xl md:text-4xl">
                        Strategic Database Solutions
                    </h2>
                    <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
                        With Tymor's Database Development Services, your data isn't just stored — it's structured, safeguarded, and strategically aligned with your growth goals.
                    </p>
                    <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
                        Unlock the full potential of your data for decision-making, automation, and innovation.
                    </p>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/Utilizing-Google-Cloud-and-AI-Advantage.webp" alt="Database solutions" fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="uppercase font-bold text-xl md:text-2xl mb-4">
                                Transform Your Data into Strategic Assets
                            </h3>
                            <p className="text-gray-700 leading-7">
                                Ready to build a database infrastructure that drives business value? Our team specializes in creating data environments that support your operational needs today while scaling for tomorrow's growth.
                            </p>
                            <p className="mt-4 text-gray-700 leading-7">
                                Contact Tymor Technologies to discuss how our database development services can empower your organization with better data management, enhanced security, and improved performance.
                            </p>
                            <div className="mt-6">
                                <a
                                    href="/contact-us"
                                    className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-black transition"
                                >
                                    GET STARTED
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

