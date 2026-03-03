import ColonialPipelineIncident from '@/components/CriticalInfrastructureSecurity/ColonialPipelineIncident'
import CriticalInfrastructureSecurityHelp from '@/components/CriticalInfrastructureSecurity/CriticalInfrastructureSecurityHelp'
import GridSection from '@/components/ui/GridSection/GridSection'
import Heading from '@/components/ui/Heading/Heading'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading heading={'Critical infrastructure security'}></Heading>

            <section className="py-24">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
                    {/* Image */}
                    <div>
                        <Image
                            src="/cybersSecurityServices/critical-infrastructure-security.webp" // update path to your image
                            alt="Critical Infrastructure Security"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="uppercase font-bold text-2xl lg:text-4xl mb-4">
                            In-Depth Look at Critical Infrastructure Security
                        </h2>
                        <p className="text-base leading-relaxed">
                            <span className="font-bold">Critical infrastructure security</span>{" "}
                            is the practice of protecting vital systems and assets that are essential
                            for societal functions, economic stability, and public safety. This
                            includes a wide range of sectors such as energy, water, transportation,
                            communications, and financial services. The goal is to ensure that these
                            systems remain operational, resilient, and secure from various threats.
                        </p>
                    </div>
                </div>
            </section>
            <GridSection
                title={"Key Concerns for Your Company"}
                grid={[
                    {
                        title: "Increased Cyber Threats",
                        desc: "The rise in sophisticated cyberattacks, such as ransomware, advanced persistent threats (APTs), and denial-of-service (DoS) attacks, poses significant risks to critical infrastructure.",
                        icon: "assets/icons/per.webp",
                    },
                    {
                        title: "Proven Technologies",
                        desc: "We utilize proven technologies from leading vendors to ensure the highest level of protection.",
                        icon: "assets/icons/wrr.webp",
                    },
                    {
                        title: "Commitment to Excellence",
                        desc: "We are committed to providing exceptional service and support to our clients, ensuring their security needs are met effectively and efficiently.",
                        icon: "/assets/icons/cost.webp",
                    },
                    {
                        title: "Commitment to Excellence",
                        desc: "We are committed to providing exceptional service and support to our clients, ensuring their security needs are met effectively and efficiently.",
                        icon: "/assets/icons/cost.webp",
                    },

                ]}
            ></GridSection>
            <ColonialPipelineIncident></ColonialPipelineIncident>
            <CriticalInfrastructureSecurityHelp></CriticalInfrastructureSecurityHelp>





        </div>
    )
}
