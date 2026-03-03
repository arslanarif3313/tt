

import Objectives from '@/components/TransitionFrominHouse/Objectives'
import SolutionSection from '@/components/TransitionFrominHouse/SolutionSection'
import GridSection from '@/components/ui/GridSection/GridSection'
import Heading from '@/components/ui/Heading/Heading'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading heading={'Transition from In-House IT to Outsourced Managed Services'}></Heading>
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-6">
                        CLIENT OVERVIEW
                    </h3>

                    <ul className="space-y-2 text-lg">
                        <li>
                            <span className="font-semibold">Industry:</span> Financial Services
                        </li>
                        <li>
                            <span className="font-semibold">Company Size:</span> Medium (150 employees)
                        </li>
                        <li>
                            <span className="font-semibold">Location:</span> New York, USA
                        </li>
                    </ul>
                </div>
            </section>
            <GridSection
                title={'Challenge'}
                subtitle={'The client, a growing financial services firm, faced several challenges with their in-house IT management'}
                grid={[
                    {
                        title: "Resource Constraints",
                        desc: "Difficulty in maintaining a dedicated IT team capable of handling diverse technological needs.",
                        icon: "assets/icons/decision-making.webp",
                    },
                    {
                        title: "Regulatory Compliance",
                        desc: "Many industries have stringent compliance requirements. Failure to secure applications can result in non-compliance, attracting hefty fines and penalties.",
                        icon: "assets/icons/scope.webp",
                    },
                    {
                        title: "Operational Disruptions",
                        desc: "Cyberattacks can cause significant downtime, affecting business operations and leading to lost revenue.",
                        icon: "/assets/icons/frd.webp",
                    },


                ]}

            ></GridSection>
            <Objectives></Objectives>
            <SolutionSection></SolutionSection>
            <GridSection
                title={'Results'}
                subtitle={''}
                grid={[
                    {
                        title: "Cost Savings",
                        desc: "Achieved a 20% reduction in IT operational costs within the first year.",
                        icon: "assets/icons/cost.webp",
                    },
                    {
                        title: "Enhanced Security",
                        desc: "Strengthened cybersecurity posture, reducing incidents by 30%.",
                        icon: "assets/icons/security.webp",
                    },
                    {
                        title: "Improved Efficiency",
                        desc: "Streamlined IT processes and improved response times for IT issues.",
                        icon: "/assets/icons/wrr.webp",
                    },
                    {
                        title: "Scalability",
                        desc: "Easily scaled IT services to accommodate business growth without additional hiring or infrastructure investment.",
                        icon: "/assets/icons/scale.webp",
                    },


                ]}

            ></GridSection>
            {/* ConclusionSection */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold tracking-wide uppercase mb-6">
                        Conclusion
                    </h2>

                    {/* Paragraphs */}
                    <p className="text-gray-800 mb-4">
                        The transition from in-house IT to outsourced managed services provided the client with a robust, scalable, and cost-effective IT solution.
                    </p>
                    <p className="text-gray-800">
                        Tymor Technologies’ expertise in managed services ensured seamless integration and ongoing support, enabling the client to focus on core business objectives while maintaining a secure and efficient IT environment.
                    </p>
                </div>
            </section>
        </div>

    )
}
