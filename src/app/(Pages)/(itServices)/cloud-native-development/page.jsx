import GridSectionThree from '@/components/ui/GridSection/GridSectionThree'
import Heading from '@/components/ui/Heading/Heading'
import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className="bg-white">
            <Heading heading={'Cloud Native Development'}></Heading>
            {/* HERO */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/AWS-Cloud-1024x683.webp" alt="Cloud Native Development" fill className="object-cover" priority />
                        </div>
                        <div>
                            <h1 className="uppercase font-bold leading-tight text-2xl sm:text-3xl md:text-4xl">
                                Empower Your Business<br />with the Agility of the Cloud
                            </h1>
                            <div className="mt-4 space-y-4 text-gray-700 leading-7">
                                <p>
                                    Modern businesses demand flexibility and scalability — and that's exactly what Tymor Technologies' Cloud-Native Development delivers. We specialize in building and deploying applications that are resilient, scalable, and optimized for performance across cloud environments.
                                </p>
                                <p>
                                    Our approach harnesses the power of microservices architecture, containerization, and DevOps automation, allowing you to innovate faster and adapt quickly to market demands. Whether you're modernizing legacy systems or developing from the ground up, we ensure your cloud ecosystem is secure, future-ready, and cost-efficient.
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
                        title: "Rapid Innovation",
                        desc: "Accelerate your development cycles with modern DevOps practices and cloud-native architectures that enable faster time-to-market.",
                        icon: "assets/icons/tine.webp",
                    },
                    {
                        title: "Scalability & Resilience",
                        desc: "Build applications that automatically scale with demand and recover quickly from failures, ensuring high availability.",
                        icon: "assets/icons/scale.webp",
                    },
                    {
                        title: "Cost Efficiency",
                        desc: "Optimize cloud resource usage and reduce infrastructure costs through intelligent architecture and automated resource management.",
                        icon: "/assets/icons/cost.webp",
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
                                        <p className="font-semibold">Cloud-Native Application Design and End-to-End Deployment</p>
                                        <p className="opacity-80 text-gray-700">
                                            Build applications specifically designed for cloud environments with modern architectures and best practices.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Microservices and Serverless Architecture Implementation</p>
                                        <p className="opacity-80 text-gray-700">
                                            Deploy flexible, independently scalable services that reduce complexity and increase development velocity.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Containerization using Docker & Kubernetes</p>
                                        <p className="opacity-80 text-gray-700">
                                            Package and orchestrate your applications for consistent deployment across any environment.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Continuous Integration/Continuous Delivery (CI/CD) Pipelines</p>
                                        <p className="opacity-80 text-gray-700">
                                            Automate testing and deployment for faster, more reliable software releases.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Multi-Cloud and Hybrid Environment Solutions</p>
                                        <p className="opacity-80 text-gray-700">
                                            Design and manage applications across multiple cloud providers and on-premises infrastructure.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Cloud Monitoring, Governance, and Cost Optimization</p>
                                        <p className="opacity-80 text-gray-700">
                                            Continuous oversight and optimization to ensure performance, compliance, and cost-effectiveness.
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
                                    alt="Cloud Native Development Solutions"
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
                        Cloud Innovation for Business Growth
                    </h2>
                    <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
                        With Tymor Technologies as your partner, you can leverage cloud innovation to boost agility, reduce downtime, and accelerate growth.
                    </p>
                    <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
                        We help your business stay ahead — today, tomorrow, and beyond.
                    </p>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/cloud-backup.webp" alt="Cloud native solutions" fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="uppercase font-bold text-xl md:text-2xl mb-4">
                                Ready to Embrace Cloud-Native Development?
                            </h3>
                            <p className="text-gray-700 leading-7">
                                Transform your applications and infrastructure with cloud-native technologies. Our team specializes in building resilient, scalable solutions that drive innovation and business value.
                            </p>
                            <p className="mt-4 text-gray-700 leading-7">
                                Contact Tymor Technologies to discover how our cloud-native development services can modernize your applications and accelerate your digital transformation journey.
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

