import GridSectionThree from '@/components/ui/GridSection/GridSectionThree'
import Heading from '@/components/ui/Heading/Heading'
import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className="bg-white">
            <Heading heading={'API Development'}></Heading>
            {/* HERO */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image src="/api-development.png" alt="API Development" fill className="object-cover" priority />
                        </div>
                        <div>
                            <h1 className="uppercase font-bold leading-tight text-2xl sm:text-3xl md:text-4xl">
                                Seamless Integration.<br />Limitless Possibilities.
                            </h1>
                            <div className="mt-4 space-y-4 text-gray-700 leading-7">
                                <p>
                                    In today's interconnected digital world, APIs are the bridges that make systems talk, share, and evolve. Tymor Technologies offers end-to-end API development services that ensure your business systems, applications, and third-party platforms communicate efficiently and securely.
                                </p>
                                <p>
                                    We design APIs that are high-performing, scalable, and secure, empowering you to extend your product capabilities and integrate seamlessly with external services. From strategy and design to deployment and documentation, we manage the entire lifecycle to ensure smooth interoperability and long-term maintainability.
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
                        title: "Seamless Integration",
                        desc: "Connect your systems, applications, and third-party services effortlessly with well-designed, robust API solutions.",
                        icon: "assets/icons/cog.webp",
                    },
                    {
                        title: "High Performance",
                        desc: "Build APIs optimized for speed, reliability, and scalability to handle high-volume transactions and requests.",
                        icon: "assets/icons/wrr.webp",
                    },
                    {
                        title: "Security First",
                        desc: "Implement strong authentication, authorization, and encryption to protect sensitive data in transit and at rest.",
                        icon: "/assets/icons/security.webp",
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
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-(--color-primary)" />
                                    <div>
                                        <p className="font-semibold">RESTful, SOAP, and GraphQL API Design and Development</p>
                                        <p className="opacity-80 text-gray-700">
                                            Expert development across all major API architectures to meet your specific integration needs.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-(--color-primary)" />
                                    <div>
                                        <p className="font-semibold">Third-Party API Integration for Enhanced Connectivity</p>
                                        <p className="opacity-80 text-gray-700">
                                            Seamlessly connect with external services, payment gateways, CRMs, and enterprise platforms.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-(--color-primary)" />
                                    <div>
                                        <p className="font-semibold">API Testing, Versioning, and Comprehensive Documentation</p>
                                        <p className="opacity-80 text-gray-700">
                                            Thorough testing and clear documentation to ensure reliability and ease of use for developers.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-(--color-primary)" />
                                    <div>
                                        <p className="font-semibold">Authentication, Authorization, and Data Security</p>
                                        <p className="opacity-80 text-gray-700">
                                            Implement OAuth, JWT, and other security protocols to protect your API endpoints and data.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-(--color-primary)" />
                                    <div>
                                        <p className="font-semibold">Scalable Architecture and Performance Tuning</p>
                                        <p className="opacity-80 text-gray-700">
                                            Design APIs that handle growing traffic and maintain performance under heavy loads.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-(--color-primary)" />
                                    <div>
                                        <p className="font-semibold">API Monitoring, Analytics, and Lifecycle Management</p>
                                        <p className="opacity-80 text-gray-700">
                                            Continuous monitoring and management to ensure optimal API performance and availability.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right: Image */}
                        <div className="relative">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src="/itServices/Utilizing-Google-Cloud-and-AI-Advantage.webp"
                                    alt="API Development Solutions"
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
                        Build Digital Ecosystems
                    </h2>
                    <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
                        At Tymor Technologies, we don't just build APIs — we build digital ecosystems that enable innovation, scalability, and business continuity.
                    </p>
                    <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
                        Connect, automate, and accelerate your business with our custom API solutions.
                    </p>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/seobw.webp" alt="API development solutions" fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="uppercase font-bold text-xl md:text-2xl mb-4">
                                Ready to Build Powerful API Solutions?
                            </h3>
                            <p className="text-gray-700 leading-7">
                                Whether you need to integrate existing systems, expose your services to partners, or build a platform API, our team has the expertise to deliver secure, scalable solutions.
                            </p>
                            <p className="mt-4 text-gray-700 leading-7">
                                Contact Tymor Technologies to discuss how our API development services can enable seamless connectivity and unlock new business opportunities.
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

