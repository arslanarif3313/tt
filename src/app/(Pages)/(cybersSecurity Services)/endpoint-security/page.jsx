import CurrentSituationExample from '@/components/CurrentSituationExample/CurrentSituationExample';
import EndpointSecurityrHelps from '@/components/EndpointSecurity/EndpointSecurityrHelps';
import GridSection from '@/components/ui/GridSection/GridSection';
import Heading from '@/components/ui/Heading/Heading'
import { Asterisk, Star } from 'lucide-react';
import React from 'react'

export const metadata = {
  title: "Endpoint Security & Threat Protection – Tymor Technologies",
  description: "Comprehensive endpoint security services to protect your devices from cyber threats. Advanced threat detection, malware protection, and device management.",
};

export default function page() {
    const EndpointCard = ({ icon: Icon, title, body }) => (
        <div className="bg-black text-white rounded-xl p-8 flex flex-col items-center text-center">
            <Icon className="text-primary w-8 h-8 mb-4" />
            <h3 className="font-semibold uppercase">{title}</h3>
            <p className="mt-3 text-sm md:text-base opacity-80">{body}</p>
        </div>
    );



    return (
        <div>
            <Heading heading={'Endpoint Security'}></Heading>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Advanced Endpoint Security for Complete Business Protection
                    </h1>
                </div>
            </section>

            {/* Understanding Endpoint Security */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-center font-bold text-2xl lg:text-3xl uppercase mb-10">
                        Understanding Endpoint Security:
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <EndpointCard
                            icon={Asterisk}
                            title="Definition"
                            body="Endpoint security involves securing end-user devices like desktops, laptops, smartphones, and tablets from cyber threats. These devices are entry points to an organization’s network, making them critical to protect."
                        />
                        <EndpointCard
                            icon={Star}
                            title="Importance"
                            body="As the number of devices accessing organizational networks increases, each device represents a potential entry point for cyber threats. Effective endpoint security ensures the integrity, confidentiality, and availability of data and network resources."
                        />
                    </div>
                </div>
            </section>

            <GridSection
                title={"Types of Endpoint Security Solutions"}
                grid={[
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

                ]}
            ></GridSection>
            <CurrentSituationExample></CurrentSituationExample>
            <EndpointSecurityrHelps></EndpointSecurityrHelps>
            <GridSection
                title={"Why Choose Tymor Technologies"}
                grid={[
                    {
                        title: "Expertise",
                        desc: "Our team of cybersecurity professionals has extensive experience and expertise in endpoint security.",
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
                        icon: "/assets/icons/reputation.webp",
                    },

                ]}
            ></GridSection>
        </div>
    )
}
