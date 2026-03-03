import GridSectionThree from '@/components/ui/GridSection/GridSectionThree'
import Heading from '@/components/ui/Heading/Heading'
import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className="bg-white">
            <Heading heading={'VoIP Solutions'}></Heading>
            {/* HERO */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image src="/voip-communication-systems.png" alt="VoIP Solutions" fill className="object-cover" priority />
                        </div>
                        <div>
                            <h1 className="uppercase font-bold leading-tight text-2xl sm:text-3xl md:text-4xl">
                                Smarter Communication<br />for a Connected Business
                            </h1>
                            <div className="mt-4 space-y-4 text-gray-700 leading-7">
                                <p>
                                    Clear communication is at the heart of every successful organization. At Tymor Technologies, we bring you advanced VoIP (Voice over Internet Protocol) solutions designed to enhance connectivity and collaboration across teams, offices, and geographies.
                                </p>
                                <p>
                                    Our VoIP systems are built for crystal-clear audio, reliability, and scalability, ensuring your communication channels are always available and secure. From setup to integration, we tailor every solution to match your organization's workflow, helping you cut costs while improving efficiency.
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
                        title: "Crystal-Clear Quality",
                        desc: "Experience superior voice quality and reliability with our advanced VoIP infrastructure designed for professional communication.",
                        icon: "assets/icons/wrr.webp",
                    },
                    {
                        title: "Cost Savings",
                        desc: "Reduce communication costs significantly compared to traditional phone systems while gaining advanced features.",
                        icon: "assets/icons/cost.webp",
                    },
                    {
                        title: "Unified Communications",
                        desc: "Integrate voice, video, messaging, and collaboration tools into one seamless platform for enhanced productivity.",
                        icon: "/assets/icons/per.webp",
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
                                        <p className="font-semibold">VoIP System Setup, Customization, and Integration</p>
                                        <p className="opacity-80 text-gray-700">
                                            Complete deployment and integration of VoIP systems tailored to your business needs.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Unified Communication Platforms for Teams and Enterprises</p>
                                        <p className="opacity-80 text-gray-700">
                                            Comprehensive communication solutions that bring together voice, video, and collaboration tools.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Call Routing, IVR, Conferencing, and Voicemail Systems</p>
                                        <p className="opacity-80 text-gray-700">
                                            Advanced features to manage calls efficiently and provide professional customer experiences.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">SIP Trunking, Hosted PBX, and Hybrid Solutions</p>
                                        <p className="opacity-80 text-gray-700">
                                            Flexible deployment options that work with your existing infrastructure or as a complete cloud solution.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">24/7 Monitoring, Management, and Technical Support</p>
                                        <p className="opacity-80 text-gray-700">
                                            Round-the-clock support to ensure your communication systems are always operational.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Security, Compliance, and Performance Optimization</p>
                                        <p className="opacity-80 text-gray-700">
                                            Ensure your VoIP systems meet security standards and deliver optimal performance.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right: Image */}
                        <div className="relative">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src="/itServices/remote-support.webp"
                                    alt="VoIP Solutions"
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
                        Transform Your Communication Infrastructure
                    </h2>
                    <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
                        With Tymor's VoIP solutions, we help your teams stay connected, collaborate smarter, and communicate without limits — anytime, anywhere.
                    </p>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/customer_rep.webp" alt="VoIP customer support" fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="uppercase font-bold text-xl md:text-2xl mb-4">
                                Ready to Upgrade Your Communication Systems?
                            </h3>
                            <p className="text-gray-700 leading-7">
                                Experience the benefits of modern VoIP technology. Our team will help you design and implement a communication solution that enhances collaboration, reduces costs, and supports your business growth.
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

