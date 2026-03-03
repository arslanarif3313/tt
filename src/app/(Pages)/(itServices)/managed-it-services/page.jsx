// app/managed-it-services/page.jsx
"use client";
import ManagedITServicesOffered from "@/components/ManagedITServices/ManagedITServicesOffered";
import Heading from "@/components/ui/Heading/Heading";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";

// Note: Client component - metadata should be in layout.jsx

export default function ManagedITServices() {
    return (
        <div>
            <Heading heading={'Managed IT Services'}></Heading>
            
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Managed IT Services for Reliable Business Operations
                    </h1>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/itServices/what-are-managed-services.webp" // replace with actual image path
                                alt="Managed IT Services"
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>

                        {/* Text Content */}
                        <div>
                            <h2 className="uppercase font-bold text-2xl lg:text-4xl">
                                What Are the Types of Managed IT Services Offered by Tymor Technologies?
                            </h2>
                            <p className="mt-4 text-base md:text-lg opacity-80">
                                Tymor Technologies provides a comprehensive array of IT services and solutions
                                designed to support organizations that lack the time or in-house resources to
                                effectively manage and maintain their technology infrastructure.
                            </p>
                            <p className="mt-4 text-base md:text-lg opacity-80">
                                We offer various flexible packages, including fully outsourced IT for organizations
                                without internal IT expertise, and a co-managed IT model for those seeking
                                supplemental support for their existing IT teams.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ManagedITServicesOffered />
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-center font-bold uppercase text-2xl lg:text-4xl">
                        How Does Tymor Technologies Deliver Managed IT Services?
                    </h2>

                    <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/itServices/AdobeStock.webp"
                                alt="Managed IT Services"
                                width={800}
                                height={500}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>

                        {/* Content slab */}
                        <div className="rounded-xl border border-black/10 bg-white p-6">
                            <h3 className="uppercase font-bold text-lg lg:text-xl">
                                Choose the Managed IT Support Plan that Meets Your Budget
                            </h3>
                            <p className="mt-3 text-base md:text-lg opacity-80">
                                Tymor Technologies offers IT service plans tailored to your needs and budget.
                                With managed IT solutions starting as low as $27 per user per month, our fixed
                                monthly plans include services such as 24/7 service desk support, network
                                monitoring and management, enhanced email security, and backup and disaster
                                recovery management.
                            </p>
                            <a href="/contact-us" className="mt-4 inline-block text-primary hover:underline">
                                Click here for more information
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* We'll Guide You Through */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-center font-bold uppercase text-2xl lg:text-4xl">
                        We’ll Guide You Through the MSP Onboarding Process
                    </h2>
                    <p className="mt-3 text-center max-w-3xl mx-auto text-base md:text-lg opacity-80">
                        At Tymor Technologies, we pride ourselves on delivering an exceptional customer
                        experience from day one, and our comprehensive onboarding process is a critical
                        component of this experience.
                    </p>

                    <h3 className="mt-10 font-semibold uppercase">
                        Our Onboarding Process Consists of Four Stages:
                    </h3>

                    <ul className="mt-6 space-y-6 text-base">
                        <li className="flex items-start gap-3">

                            <CircleArrowRight className="text-primary w-4 h-4 mt-1.5" />
                            <span>
                                <strong>Stage 1: Managed Service Definition</strong>
                                At the outset of client onboarding, defining managed IT services is crucial. We discuss every service outlined in the signed Service Agreement to gain a thorough understanding of your business, preparing for onsite data gathering, process documentation, and ongoing managed IT support services.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CircleArrowRight className="text-primary w-4 h-4 mt-1.5" />
                            <span>
                                <strong>Stage 2: IT Data Collection</strong>
                                Our IT technicians visit your site to gather information about your IT environment and begin the documentation process. This includes a thorough network investigation, security assessment, backup verification, server room inspections, and policy documentation.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CircleArrowRight className="text-primary w-4 h-4 mt-1.5" />
                            <span>
                                <strong>Stage 3: Internal Information Review</strong>
                                The primary goal of this stage is to ensure that your IT environment and infrastructure will meet your needs and support business growth. We review the information collected in Stage 2 with your dedicated team and, if necessary, with our specialized senior IT technicians.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CircleArrowRight className="text-primary w-4 h-4 mt-1.5" />
                            <span>
                                <strong>Stage 4: Orientation Meeting & IT Service Handoff</strong>
                                Your Tymor Technologies team meets with you to review your new client manual, discussing all findings and any recommendations for additional changes. This stage includes finalizing managed IT support procedures, scheduling recurring onsite visits, and setting up regular meetings with your MSP Account Manager.
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
