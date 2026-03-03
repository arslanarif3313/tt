import ClientScopeSection from '@/components/MigrationAzureCloud/ClientScopeSection'
import ProjectPhasesSection from '@/components/MigrationAzureCloud/ProjectPhasesSection'
import GridSectionThree from '@/components/ui/GridSection/GridSectionThree'

import Heading from '@/components/ui/Heading/Heading'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading
                heading={'Migration to Azure Virtual Desktop and Cloud-Based Solutions'}
            ></Heading>
            <ClientScopeSection></ClientScopeSection>
            <ProjectPhasesSection></ProjectPhasesSection>
            <GridSectionThree
                title={'Cost Savings and Benefits'}
                grid={[
                    {
                        title: "Reduced Infrastructure Costs",
                        desc: "By migrating to Azure Virtual Desktop and cloud-based storage, the client significantly reduced upfront capital expenditures on hardware and ongoing maintenance costs associated with on-premise infrastructure.",
                        icon: "assets/icons/cost.webp",
                    },
                    {
                        title: "Operational Efficiency",
                        desc: "Outsourcing the project to Tymor Technologies enabled the client to leverage our expertise and resources, reducing the burden on internal IT teams and allowing them to focus on core business activities.",
                        icon: "assets/icons/cog.webp",
                    },
                    {
                        title: "Scalability and Flexibility",
                        desc: "Azure's pay-as-you-go model and scalable infrastructure provided the client with flexibility to adjust resources based on demand, optimizing costs and improving resource utilization.",
                        icon: "/assets/icons/scale.webp",
                    },
                ]}
            ></GridSectionThree>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">CONCLUSION</h2>
                    <p className="mb-4">
                        Tymor Technologies’ expertise in Azure Virtual Desktop migration and cloud-based solutions not only enabled our
                        client to achieve greater operational flexibility, efficiency, and security but also resulted in significant cost
                        savings and enhanced IT resilience.
                    </p>
                    <p className="mb-4">
                        The successful execution of this project underscores our commitment to delivering value-driven IT solutions that
                        align with business objectives.
                    </p>
                    <p>
                        For more information on how Tymor Technologies can assist your organization in migrating to cloud-based
                        solutions, including Azure Virtual Desktop and managed services, please visit{" "}
                        <Link
                            href="https://TymorTech.com"
                            className="text-red-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TymorTech.com
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </div >
    )
}
