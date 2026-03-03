import GridSection from '@/components/ui/GridSection/GridSection'
import Heading from '@/components/ui/Heading/Heading'
import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading heading={'Data Security'}></Heading>
            <section className="py-24">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
                    {/* Image */}
                    <div>
                        <Image
                            src="/itServices/Data-Backup.webp"
                            alt="Data Security"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="uppercase font-bold text-2xl lg:text-4xl mb-4">
                            Data Security
                        </h2>
                        <p className="mt-5">
                            Data is the lifeblood of modern business. Data Security encompasses the policies, procedures, and technologies deployed to protect your organization's digital assets from unauthorized access, corruption, or theft throughout their entire lifecycle.
                        </p>
                        <p className='mt-5'>
                            We help you maintain the confidentiality, integrity, and availability of your most sensitive information, ensuring business continuity and regulatory adherence.
                        </p>
                    </div>
                </div>
            </section>
            <GridSection
                title={'Why Should You Be Concerned?'}
                grid={[
                    {
                        title: "Reputational Damage",
                        desc: "A data breach erodes customer and partner trust, potentially causing long-term damage to your brand and market standing, which can be difficult to recover from.",
                        icon: "assets/icons/reputation.webp",
                    },
                    {
                        title: "Regulatory Fines",
                        desc: "Non-compliance with data protection laws like GDPR, HIPAA, or CCPA can lead to significant financial penalties, legal action, and mandatory public disclosure.",
                        icon: "assets/icons/compliant.webp",
                    },
                    {
                        title: "Business Disruption",
                        desc: "Data loss or corruption from a cyberattack, ransomware incident, or system failure can halt operations, leading to lost revenue and costly recovery efforts.",
                        icon: "/assets/icons/bui.webp",
                    },
                    {
                        title: "Competitive Loss",
                        desc: "Sensitive proprietary data, if stolen, can give competitors an unfair advantage, jeopardizing your market position, intellectual property, and innovation efforts.",
                        icon: "/assets/icons/ss.webp",
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
                                At Tymor Technologies, we offer comprehensive Data Security services designed to protect your organization's most critical asset—its information. Our approach includes:
                            </p>

                            <ul className="mt-6 space-y-6 text-base">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Data Loss Prevention (DLP)</p>
                                        <p className="opacity-80">
                                            Implementing solutions to identify, monitor, and protect sensitive data in use, in motion, and at rest across your network, endpoints, and cloud environments.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Encryption and Key Management</p>
                                        <p className="opacity-80">
                                            Applying robust encryption techniques for data both in storage and transmission, alongside secure, auditable key management policies.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Access Controls (Zero Trust)</p>
                                        <p className="opacity-80">
                                            Designing and implementing strict role-based access control (RBAC) and Zero Trust architectures to ensure only authorized users and devices can access specific data.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Database Security</p>
                                        <p className="opacity-80">
                                            Securing database infrastructure against injection attacks, unauthorized queries, and internal threats through advanced monitoring and hardening.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Compliance Alignment</p>
                                        <p className="opacity-80">
                                            Assisting you in meeting regulatory requirements and industry standards specific to data handling, ensuring your practices remain compliant with relevant laws and guidelines.
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <p className="mt-8 text-base opacity-85">
                                Are you confident in your ability to protect proprietary and customer data from an ever-increasing array of threats? Are your data handling practices fully compliant with current regulatory mandates?
                            </p>

                            <p className="mt-3 text-base">
                                <a href="/contact-us" className="text-[var(--color-primary)] underline underline-offset-4">
                                    Click here
                                </a>{" "}
                                to book a security appointment and learn how Tymor Technologies can build an impenetrable defense around your critical data assets.
                            </p>
                        </div>

                        {/* Right: Images */}
                        <div className="relative">
                            {/* Main image */}
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src="/itServices/cloud-backup.webp"
                                    alt="Data Security Solutions"
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

