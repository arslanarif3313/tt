import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

export default function Objectives() {
    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 items-center md:grid-cols-2">

                    {/* Left: Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-wide uppercase mb-8">
                            Objectives
                        </h2>

                        <ul className="space-y-6 text-base/7 md:text-lg/8">

                            <li className="flex gap-4">
                                <CircleArrowRight className="h-5 w-5 mt-1 shrink-0 text-orange-500" />
                                <div>
                                    <p className="font-semibold">Cost Efficiency</p>
                                    <p className="text-gray-700">
                                        Reduce IT operational costs and overhead expenses.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-4">
                                <CircleArrowRight className="h-5 w-5 mt-1 shrink-0 text-orange-500" />
                                <div>
                                    <p className="font-semibold">Enhanced Expertise</p>
                                    <p className="text-gray-700">
                                        Access to a broader range of IT expertise and specialized skills.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-4">
                                <CircleArrowRight className="h-5 w-5 mt-1 shrink-0 text-orange-500" />
                                <div>
                                    <p className="font-semibold">Improved Security</p>
                                    <p className="text-gray-700">
                                        Strengthen cybersecurity measures and ensure compliance with industry standards.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-4">
                                <CircleArrowRight className="h-5 w-5 mt-1 shrink-0 text-orange-500" />
                                <div>
                                    <p className="font-semibold">Scalability</p>
                                    <p className="text-gray-700">
                                        Scale IT services easily as the company expands.
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>

                    {/* Right: Image */}
                    <div className="relative">
                        <Image
                            src="/projects/management-objectives.webp" // replace with your actual image
                            alt="Objectives"
                            width={900}
                            height={560}
                            priority
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
