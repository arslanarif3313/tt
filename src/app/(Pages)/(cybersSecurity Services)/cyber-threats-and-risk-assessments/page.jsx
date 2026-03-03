import GridSection from '@/components/ui/GridSection/GridSection'
import Heading from '@/components/ui/Heading/Heading'
import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading heading={'Cyber Threats & Risk Assessments'}></Heading>
            <section className="py-24">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
                    {/* Image */}
                    <div>
                        <Image
                            src="/cybersSecurityServices/CurrentSituationExample.webp"
                            alt="Cyber Threats & Risk Assessments"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="uppercase font-bold text-2xl lg:text-4xl mb-4">
                            Cyber Threats & Risk Assessments
                        </h2>
                        <p className="mt-5">
                            In an era of escalating and sophisticated attacks, understanding your organizational risk is the foundation of effective cybersecurity. Our Cyber Threats & Risk Assessments service provides a systematic, proactive evaluation of your entire IT landscape to identify, analyze, and prioritize potential security risks.
                        </p>
                        <p className='mt-5'>
                            This service translates technical vulnerabilities into clear business context, empowering leadership to make informed, risk-based decisions on security investments.
                        </p>
                    </div>
                </div>
            </section>
            <GridSection
                title={'Why Should You Be Concerned?'}
                grid={[
                    {
                        title: "Unknown Vulnerabilities",
                        desc: "Without regular, comprehensive assessments, hidden security gaps in your systems, network, and applications remain open, waiting to be exploited by attackers.",
                        icon: "assets/icons/security.webp",
                    },
                    {
                        title: "Inefficient Spending",
                        desc: "Investing in security tools without a proper risk assessment can lead to wasted budget on solutions that don't effectively address your most critical threats.",
                        icon: "assets/icons/cost.webp",
                    },
                    {
                        title: "Board-Level Blind Spots",
                        desc: "IT and security risks often fail to be communicated clearly to the executive board, leaving leadership uninformed and unprepared for major, high-impact incidents.",
                        icon: "/assets/icons/per.webp",
                    },
                    {
                        title: "Evolving Threat Landscape",
                        desc: "Cyber threats are constantly changing. Yesterday's defenses are inadequate for today's advanced persistent threats, supply chain risks, and sophisticated zero-day exploits.",
                        icon: "/assets/icons/wrr.webp",
                    },

                ]}

            ></GridSection>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <h2 className="text-center uppercase font-bold text-2xl lg:text-4xl">
                        How Tymor Technologies Can Help
                    </h2>

                    <div className="mt-10 grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Copy */}
                        <div>
                            <p className="text-base md:text-lg opacity-85">
                                At Tymor Technologies, we provide a holistic view of your threat landscape, enabling you to manage risk effectively. Our comprehensive assessment services include:
                            </p>

                            <ul className="mt-6 space-y-6 text-base">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Vulnerability Assessments (VAs)</p>
                                        <p className="opacity-80">
                                            Comprehensive scanning and analysis of your internal and external infrastructure to identify and rank technical weaknesses by severity.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Penetration Testing (Pen-Testing)</p>
                                        <p className="opacity-80">
                                            Simulating real-world attacks (external, internal, social engineering) to evaluate the effectiveness of your security controls and incident response capabilities.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Risk Quantification</p>
                                        <p className="opacity-80">
                                            Applying industry-standard frameworks (like NIST, ISO 27001) to measure the potential business impact of identified risks in clear, financial terms.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Threat Modeling</p>
                                        <p className="opacity-80">
                                            Systematically identifying potential threats, vulnerabilities, and countermeasure requirements for specific, mission-critical applications or business processes.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Security Program Maturity Review</p>
                                        <p className="opacity-80">
                                            Evaluating the overall effectiveness and maturity of your security strategy, governance, and operating procedures against industry best practices.
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <p className="mt-8 text-base opacity-85">
                                Are you operating with uncertainty about your true cybersecurity exposure? Does your security roadmap lack clear, risk-prioritized guidance for investment?
                            </p>

                            <p className="mt-3 text-base">
                                <a href="/contact-us" className="text-[var(--color-primary)] underline underline-offset-4">
                                    Click here
                                </a>{" "}
                                to book a security appointment and let Tymor Technologies transform your potential weaknesses into a defined, defensible security strategy.
                            </p>
                        </div>

                        {/* Right: Images */}
                        <div className="relative">
                            {/* Main image */}
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src="/cybersSecurityServices/critical-infrastructure-security.webp"
                                    alt="Cyber Threats & Risk Assessments Solutions"
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
        </div>
    )
}

