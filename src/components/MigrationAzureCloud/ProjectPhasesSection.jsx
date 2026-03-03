'use client';

import { CheckCircle } from 'lucide-react';

export default function ProjectPhasesSection() {
    return (
        <section className="py-24 bg-black text-white ">
            <div className="container mx-auto px-4 ">

                {/* Heading */}
                <h2 className="text-center font-bold tracking-wide mb-12
                       text-2xl md:text-3xl">
                    PROJECT PHASES
                </h2>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-2">

                    {/* Card 1 */}
                    <div className="rounded-xl bg-white text-black p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <h3 className="font-bold uppercase tracking-wide mb-4">
                            Assessment and Planning
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                                <span>
                                    Conducted thorough assessment of existing on‑premise infrastructure,
                                    including network architecture, hardware, and software dependencies.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Defined project scope, objectives, and migration strategy aligned with
                                    client’s business goals.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Identified regulatory compliance requirements and data governance
                                    considerations.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl bg-white text-black p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <h3 className="font-bold uppercase tracking-wide mb-4">
                            Design and Architecture
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Designed Azure Virtual Desktop environment tailored to client’s
                                    specific needs, ensuring scalability, security, and performance
                                    optimization.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Developed architecture for shared cloud storage to centralize and
                                    streamline data access across the organization.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Integrated Azure Active Directory for robust identity and access
                                    management.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-xl bg-white text-black p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <h3 className="font-bold uppercase tracking-wide mb-4">
                            Migration Execution
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Implemented phased migration approach to minimize disruption to
                                    ongoing operations.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Migrated applications, databases, and critical data from on‑premise
                                    servers to Azure Cloud Storage and Azure Virtual Desktop.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Ensured data integrity and security during migration through
                                    encryption and secure transfer protocols.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 4 */}
                    <div className="rounded-xl bg-white text-black p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <h3 className="font-bold uppercase tracking-wide mb-4">
                            Testing and Validation
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Conducted rigorous testing of Azure Virtual Desktop and cloud storage
                                    infrastructure to validate performance, compatibility, and user experience.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Executed user acceptance testing (UAT) to gather feedback and address
                                    any usability issues prior to final deployment.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 5 */}
                    <div className="rounded-xl bg-white text-black p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <h3 className="font-bold uppercase tracking-wide mb-4">
                            Deployment and Managed Services
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Deployed Azure Virtual Desktop environment across client’s workforce,
                                    ensuring proper configuration and user access management.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Implemented managed services for continuous monitoring, maintenance,
                                    and optimization of Azure infrastructure.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Provided training and support to the client’s IT team for effective
                                    management and troubleshooting of Azure‑based solutions.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 6 */}
                    <div className="rounded-xl bg-white text-black p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <h3 className="font-bold uppercase tracking-wide mb-4">
                            Post‑Migration Support
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Established ongoing support framework to address post‑migration
                                    challenges and optimize Azure environment based on operational feedback.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Conducted regular performance reviews and implemented enhancements
                                    to meet evolving business requirements.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[var(--color-primary,#FF4500)]" />
                                <span>
                                    Ensured compliance with industry standards and best practices for cloud
                                    security and data management.
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
