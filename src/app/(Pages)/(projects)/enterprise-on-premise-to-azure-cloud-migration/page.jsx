import GridSection from "@/components/ui/GridSection/GridSection";
import Heading from "@/components/ui/Heading/Heading";
import { CircleDot } from "lucide-react";
import Image from "next/image";


export default function page() {
    return (
        <div>
            <Heading heading={'Enterprise On-Premise to Azure Cloud Migration'}></Heading>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Seamless On-Premise to Azure Cloud Migration Services
                    </h1>
                </div>
            </section>

            <section className="py-16 bg-base-200">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-snug">
                        Enterprise On-Premise to Azure Cloud Migration <br />
                        and Managed Services Implementation for a Beverage Company
                    </h2>
                </div>
            </section>


            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <div>
                            <h3 className="text-4xl font-bold mb-4 uppercase">Overview</h3>
                            <p className="mb-4">
                                Tymor Technologies executed a comprehensive project to migrate a large beverage company’s extensive on-premise network infrastructure, including enterprise web-based accounting software, to a cloud-based solution using Microsoft Azure.
                            </p>
                            <p>
                                This project encompassed meticulous planning, detailed architecture design, and the implementation of robust managed services to ensure scalability, security, and operational efficiency.
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

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-center mb-12">PROJECT SCOPE</h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Column 1 - Assessment and Planning */}
                        <div className="bg-white border border-gray-200 p-6 shadow-md rounded-lg">
                            <h3 className="text-lg font-bold mb-4 uppercase">Assessment and Planning</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Infrastructure Assessment</span>
                                        <p className="text-sm">
                                            Conducted a detailed assessment of the beverage company's on-premise
                                            infrastructure, including servers, networking equipment, and storage systems.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Workload Analysis</span>
                                        <p className="text-sm">
                                            Analyzed application workloads, data volumes, and usage patterns to prioritize
                                            migration strategies, including enterprise web-based accounting software.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Business Alignment</span>
                                        <p className="text-sm">
                                            Aligned technical strategies with business objectives, compliance requirements,
                                            and operational needs.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 - Design and Architecture */}
                        <div className="bg-white border border-gray-200 p-6 shadow-md rounded-lg">
                            <h3 className="text-lg font-bold mb-4 uppercase">Design and Architecture</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Cloud Architecture Design</span>
                                        <p className="text-sm">
                                            Developed a scalable cloud architecture on Microsoft Azure, leveraging Azure
                                            VMs, AKS, SQL Database, and Blob Storage.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Migration Strategy</span>
                                        <p className="text-sm">
                                            Designed a phased migration approach to minimize disruption, focusing on
                                            enterprise web-based accounting software.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Security and Compliance</span>
                                        <p className="text-sm">
                                            Implemented network segmentation, encryption, and compliance controls to meet
                                            industry standards.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 - Migration Execution */}
                        <div className="bg-white border border-gray-200 p-6 shadow-md rounded-lg">
                            <h3 className="text-lg font-bold mb-4 uppercase">Migration Execution</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Data and Application Migration</span>
                                        <p className="text-sm">
                                            Used Azure Data Factory & Database Migration Service for seamless migration of
                                            databases and apps with minimal downtime.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Infrastructure Migration</span>
                                        <p className="text-sm">
                                            Leveraged Azure Site Recovery for VM migration with failover & failback
                                            capabilities.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Testing and Validation</span>
                                        <p className="text-sm">
                                            Conducted extensive post-migration testing to verify functionality, performance,
                                            and user acceptance.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4 - Managed Services Implementation */}
                        <div className="bg-white border border-gray-200 p-6 shadow-md rounded-lg">
                            <h3 className="text-lg font-bold mb-4 uppercase">Managed Services Implementation</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Operational Monitoring</span>
                                        <p className="text-sm">
                                            Implemented Azure Monitor for real-time monitoring and performance tracking.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Cost Optimization</span>
                                        <p className="text-sm">
                                            Used Azure Cost Management & Advisor to reduce costs and maximize ROI.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Managed Security Services</span>
                                        <p className="text-sm">
                                            Deployed Azure Security Center for threat detection and incident response.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Training and Knowledge Transfer */}
                        <div className="bg-white border border-gray-200 p-6 shadow-md rounded-lg">
                            <h3 className="text-lg font-bold mb-4 uppercase">Training and Knowledge Transfer</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">End-User Training</span>
                                        <p className="text-sm">
                                            Conducted customized training sessions for the beverage company's IT teams on Azure management tools, best practices, and operational procedures, with a specific focus on managing and utilizing the accounting software in the Azure environment.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CircleDot className="text-primary w-5 h-5 shrink-0" />
                                    <div>
                                        <span className="font-semibold text-primary">Documentation</span>
                                        <p className="text-sm">
                                            Developed comprehensive documentation, including runbooks and support guidelines, to facilitate smooth transition and ongoing support post-implementation, emphasizing the accounting software's configuration and management in Azure.
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            <GridSection
                title={'Outcome'}
                subtitle={'The migration project led by Tymor Technologies delivered substantial benefits to the beverage company:'}
                grid={[
                    {
                        title: "Scalability and Flexibility",
                        desc: "Achieved scalable IT infrastructure on Azure, enabling the company to adapt quickly to changing business demands and seasonal fluctuations.",
                        icon: "/assets/icons/scale.webp",
                    },
                    {
                        title: "Enhanced Communication",
                        desc: "Cloud-based VoIP system enabled seamless communication across multiple locations, with advanced features enhancing employee collaboration.",
                        icon: "assets/icons/security.webp",
                    },
                    {
                        title: "Operational Efficiency",
                        desc: "Streamlined IT operations with automated management and monitoring, reducing administrative overheads and improving resource utilization.",
                        icon: "/assets/icons/cog.webp",
                    },
                    {
                        title: "Business Continuity",
                        desc: "Established robust disaster recovery capabilities and high availability of critical applications, ensuring uninterrupted business operations, including seamless access to the accounting software.",
                        icon: "/assets/icons/bui.webp",
                    },
                ]}
            ></GridSection>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                        Client Feedback
                    </h2>

                    {/* Quote */}
                    <blockquote className="mt-8 max-w-5xl mx-auto text-base md:text-lg lg:text-xl text-base-content/80 leading-relaxed">
                        “Our partnership with Tymor Technologies has been pivotal in modernizing our IT infrastructure and financial operations.
                        The migration to Azure has significantly enhanced our operational agility and security posture, enabling us to focus
                        more on innovation and customer satisfaction.”
                    </blockquote>
                </div>

                {/* Lower descriptive band */}
                <div className="mt-16 bg-base-200">
                    <div className="container mx-auto px-4 py-10 md:py-12">
                        <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
                            This detailed project exemplifies Tymor Technologies’ expertise in executing complex cloud migration projects and
                            delivering comprehensive managed services tailored to the unique needs of enterprise clients in the beverage industry,
                            particularly focusing on enterprise web-based accounting software migration to Azure.
                        </p>
                    </div>
                </div>
            </section>


        </div>
    )
}
