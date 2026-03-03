import MobileSecurityHelps from '@/components/MobileSecurity/MobileSecurityHelps'
import GridSection from '@/components/ui/GridSection/GridSection'
import Heading from '@/components/ui/Heading/Heading'
import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function page() {
    const grid = [
        {
            title: "Data Protection",
            desc: "Protecting sensitive data, such as customer information, intellectual property, and financial records, is critical to prevent data breaches and identity theft.",
            icon: "assets/icons/mob.webp",
        },
        {
            title: "Business Continuity",
            desc: "Cyber attacks can disrupt operations, leading to downtime and financial losses. Strong network security helps maintain business operations without interruption.",
            icon: "assets/icons/pp.webp",
        },
        {
            title: "Reputation Management",
            desc: "A security breach can damage a company’s reputation, eroding customer trust and leading to loss of business.",
            icon: "/assets/icons/ss.webp",
        },

    ]
    return (
        <div>
            <Heading heading={'Mobile Security'}></Heading>
            {/* Importance and Current Situations */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        {/* Left image */}
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/cybersSecurityServices/mobile-security-modern.avif" // replace with your image path
                                alt="Mobile security"
                                width={1000}
                                height={650}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>

                        {/* Right content */}
                        <div>
                            <h2 className="uppercase font-bold text-2xl lg:text-4xl">
                                Importance and
                                <br className="hidden md:block" />
                                Current Situations
                            </h2>

                            <p className="mt-4 text-base md:text-lg opacity-80">
                                Mobile Security refers to the protection of smartphones, tablets, and other
                                portable computing devices, and the networks they connect to, from threats and
                                vulnerabilities. This includes safeguarding personal and corporate information
                                from unauthorized access, data breaches, malware, and other forms of cyber
                                attacks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Your Company Should Be Concerned */}
            <GridSection
                title={"Why Your Company Should Be Concerned"}
                grid={grid}
            ></GridSection>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    {/* Heading */}
                    <h2 className="text-center uppercase font-bold text-2xl lg:text-4xl">
                        Current Situation
                        <br className="hidden md:block" />
                        WhatsApp Pegasus Spyware Attack
                    </h2>

                    {/* Content */}
                    <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
                        {/* Left: copy */}
                        <div>
                            {/* Incident */}
                            <p className="text-base md:text-lg">
                                <span className="font-semibold">Incident:</span> In 2019, it was discovered that
                                the Pegasus spyware, developed by the Israeli cyber arms firm NSO Group, exploited a
                                vulnerability in WhatsApp, a widely used messaging app. The spyware could be
                                installed on a device by simply placing a WhatsApp call to the target phone, even if
                                the call was not answered. Once installed, Pegasus gave the attacker complete access
                                to the phone’s data and functions.
                            </p>

                            {/* Details & Impact */}
                            <h3 className="mt-8 uppercase font-bold">
                                Details and Impact:
                            </h3>

                            <ul className="mt-4 space-y-6 text-base">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Global Reach</p>
                                        <p className="opacity-80">
                                            This attack affected individuals and organizations worldwide, including human
                                            rights activists, journalists, and government officials.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Data Compromise</p>
                                        <p className="opacity-80">
                                            The spyware could read text messages, track calls, collect passwords, track
                                            location, access the microphone and camera, and gather information from apps.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Legal and Financial Repercussions</p>
                                        <p className="opacity-80">
                                            WhatsApp and its parent company, Facebook, faced significant legal challenges
                                            and scrutiny from governments. The cost of legal fees, compensation to affected
                                            users, and the need to patch the vulnerability amounted to substantial
                                            financial losses.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Reputational Damage</p>
                                        <p className="opacity-80">
                                            The incident significantly damaged the trust in WhatsApp’s security, leading
                                            to a temporary decrease in user engagement and concerns over privacy.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right: images */}
                        <div className="relative ">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src="/cybersSecurityServices/ps.webp"   // replace with your main image
                                    alt="Pegasus spyware phone"
                                    width={900}
                                    height={640}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <MobileSecurityHelps></MobileSecurityHelps>


        </div>
    )
}
