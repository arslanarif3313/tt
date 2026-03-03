"use client";

import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

export default function ClientResponsibilities() {
    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
                {/* Heading (your standard style) */}


                <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
                    {/* Left: Image */}
                    <div className="h-full">
                        <Image
                            src="/itServices/support-delivery-overview.webp"
                            alt="Network engineer working on rack"
                            width={1200}
                            height={900}
                            className="w-full h-full rounded-lg object-cover shadow-md"
                            priority
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="">
                        <h2 className="text-xl md:text-3xl font-bold uppercase">
                            Client Responsibilities
                        </h2>
                        <p className="text-sm md:text-base font-sans">
                            To ensure the effectiveness of our services and to avoid
                            unnecessary onsite visits, clients must agree to the following:
                        </p>

                        <ul className="mt-6 space-y-6 font-sans">
                            {/* Item 1 */}
                            <li className="flex items-start gap-3">
                                <span className="mt-1 shrink-0">
                                    <CircleArrowRight className="h-5 w-5 text-primary" />
                                </span>
                                <div>
                                    <h3 className="font-semibold text-base md:text-lg">
                                        Mandatory Updates
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600">
                                        Clients must agree to all required updates for
                                        non-compliant hardware and software. Failure to comply with
                                        necessary updates can trigger issues that may require an
                                        onsite visit.
                                    </p>
                                </div>
                            </li>

                            {/* Item 2 */}
                            <li className="flex items-start gap-3">
                                <span className="mt-1 shrink-0">
                                    <CircleArrowRight className="h-5 w-5 text-primary" />
                                </span>
                                <div>
                                    <h3 className="font-semibold text-base md:text-lg">
                                        Replacement of Outdated Hardware/Software
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600">
                                        Clients must agree to the replacement of outdated or
                                        non-compliant hardware and software. Continuing to use
                                        outdated or non-compliant components can lead to performance
                                        issues and security vulnerabilities, necessitating onsite
                                        support.
                                    </p>
                                </div>
                            </li>

                            {/* Item 3 */}
                            <li className="flex items-start gap-3">
                                <span className="mt-1 shrink-0">
                                    <CircleArrowRight className="h-5 w-5 text-primary" />
                                </span>
                                <div>
                                    <h3 className="font-semibold text-base md:text-lg">
                                        Collaboration
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600">
                                        Clients are expected to collaborate with our team, providing
                                        necessary access and information to facilitate remote
                                        support and maintenance activities.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <p className="mt-6 text-sm md:text-base font-sans">
                            By adhering to these commitments, we aim to provide the highest
                            level of service and support, ensuring your IT systems are always
                            performing at their best. If an onsite visit is necessary, we will
                            handle it efficiently and professionally, at no additional cost to
                            you if the remote resolution fails.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
