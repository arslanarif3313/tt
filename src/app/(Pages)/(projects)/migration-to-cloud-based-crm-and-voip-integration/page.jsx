
import ProjectScope from '@/components/MigrationToCloudBasedCRM/ProjectScope'
import GridSection from '@/components/ui/GridSection/GridSection'
import Heading from '@/components/ui/Heading/Heading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading
                heading={'Migration to Cloud-Based CRM and VoIP Integration'}
            ></Heading>

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <div>
                            <h3 className="text-4xl font-bold mb-4 uppercase">Client Overview</h3>
                            <p className="mb-4">
                                Tymor Technologies collaborated with a medium-sized manufacturing company with offices across multiple locations.
                            </p>
                            <p>
                                The client sought to modernize their customer relationship management (CRM) system and enhance communication efficiency by migrating their on-premise network to a cloud-based solution.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center">
                            <Image
                                src="/projects/Business-VoIP-phone-service.webp" // save to /public/images
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
            <ProjectScope></ProjectScope>

            <GridSection
                title={'Project Outcome'}
                grid={[
                    {
                        title: "Improved Efficiency",
                        desc: "Streamlined CRM processes and automated workflows resulted in faster response times and improved customer satisfaction.",
                        icon: "/assets/icons/scale.webp",
                    },
                    {
                        title: "Enhanced Communication",
                        desc: "Cloud-based VoIP system enabled seamless communication across multiple locations, with advanced features enhancing employee collaboration.",
                        icon: "assets/icons/cust.webp",
                    },
                    {
                        title: "Scalability and Cost Savings",
                        desc: "Azure migration provided scalability to accommodate future growth and reduced infrastructure maintenance costs.",
                        icon: "/assets/icons/cost.webp",
                    },
                    {
                        title: "User Adoption",
                        desc: "Comprehensive training and support ensured smooth adoption of new CRM and VoIP systems by employees, enhancing productivity.",
                        icon: "/assets/icons/per.webp",
                    },
                ]}
            ></GridSection>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    {/* Heading */}
                    <h2 className="text-center uppercase font-bold tracking-wide text-2xl md:text-4xl">
                        Client Feedback
                    </h2>

                    {/* Quote */}
                    <p className="mt-8 md:mt-10 max-w-5xl mx-auto text-center text-lg md:text-xl leading-relaxed">
                        &quot;The migration to Microsoft Dynamics CRM and integration of VoIP
                        services by Tymor Technologies has transformed our business
                        operations. We now have a streamlined approach to customer management
                        and more efficient communication channels, which has significantly
                        boosted our overall productivity.&quot;
                    </p>

                    {/* Next Steps band */}
                    <div className="mt-16 rounded-xl bg-base-200 border border-black/5 p-6 md:p-8">
                        <p className="text-base md:text-lg">
                            <span className="font-semibold">Next Steps:</span>{" "}
                            To learn more about how Tymor Technologies can help your company
                            achieve similar transformations through CRM migration, VoIP
                            integration, and cloud solutions, visit{" "}
                            <Link href="/" className="link link-primary">
                                Tymor Technologies
                            </Link>{" "}
                            or{" "}
                            <Link href="/contact-us" className="link link-primary">
                                contact us
                            </Link>{" "}
                            to schedule a consultation.
                        </p>
                    </div>
                </div>
            </section>




        </div>
    )
}
