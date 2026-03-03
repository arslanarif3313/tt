// app/components/SolutionSection.jsx
import { CircleArrowRight } from "lucide-react";

export default function SolutionSection() {
    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide uppercase text-center">
                    Solution
                </h2>

                {/* Subtitle */}
                <p className="mt-4 text-center text-sm md:text-base text-gray-700 max-w-4xl mx-auto">
                    Tymor Technologies proposed a comprehensive transition plan to shift from in-house IT management to outsourced managed services.
                </p>

                {/* Grid */}
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl border border-black/10 shadow-sm p-6">
                        <h3 className="font-semibold tracking-wide uppercase text-gray-900">
                            1. Assessment Phase
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li className="flex gap-3">
                                <CircleArrowRight className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <p className="text-gray-800">
                                    Conducted a thorough audit of existing IT infrastructure, systems, and security protocols.
                                </p>
                            </li>
                            <li className="flex gap-3">
                                <CircleArrowRight className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <p className="text-gray-800">
                                    Identified pain points, gaps in service delivery, and potential areas for improvement.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl border border-black/10 shadow-sm p-6">
                        <h3 className="font-semibold tracking-wide uppercase text-gray-900">
                            2. Transition Strategy
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li className="flex gap-3">
                                <CircleArrowRight className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <p className="text-gray-800">
                                    Designed a phased migration plan to minimize disruption to daily operations.
                                </p>
                            </li>
                            <li className="flex gap-3">
                                <CircleArrowRight className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <p className="text-gray-800">
                                    Scheduled transition stages to ensure smooth integration of managed services.
                                </p>
                            </li>
                            <li className="flex gap-3">
                                <CircleArrowRight className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <p className="text-gray-800">
                                    Provided training sessions for employees to familiarize them with new IT support workflows and service providers.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl border border-black/10 shadow-sm p-6">
                        <h3 className="font-semibold tracking-wide uppercase text-gray-900">
                            3. Implementation
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li className="flex gap-3">
                                <CircleArrowRight className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-900">Help Desk Support</p>
                                    <p className="text-gray-800">24/7 support for end-user technical issues.</p>
                                </div>
                            </li>

                            <li className="flex gap-3">
                                <CircleArrowRight className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-900">Network and Infrastructure Management</p>
                                    <p className="text-gray-800">
                                        Monitoring, maintenance, and optimization of network infrastructure.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-3">
                                <CircleArrowRight className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-900">Cybersecurity Services</p>
                                    <p className="text-gray-800">
                                        Managed firewall, threat detection, and response services.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-3">
                                <CircleArrowRight className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-900">Cloud Services</p>
                                    <p className="text-gray-800">
                                        Migration to cloud-based solutions for enhanced flexibility and scalability.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-3">
                                <CircleArrowRight className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-900">Vendor Management</p>
                                    <p className="text-gray-800">
                                        Coordination with third-party vendors and service providers.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-xl border border-black/10 shadow-sm p-6">
                        <h3 className="font-semibold tracking-wide uppercase text-gray-900">
                            4. Monitoring and Optimization
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li className="flex gap-3">
                                <CircleArrowRight className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <p className="text-gray-800">
                                    Implemented ongoing monitoring and performance analysis to ensure service levels met or exceeded client expectations.
                                </p>
                            </li>
                            <li className="flex gap-3">
                                <CircleArrowRight className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <p className="text-gray-800">
                                    Regularly reviewed service metrics and KPIs to optimize IT performance and cost-effectiveness.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
