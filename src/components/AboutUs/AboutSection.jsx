

import { CircleCheck } from "lucide-react";

export default function AboutSection() {
    return (
        <>
            {/* Introductory Content Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
                            About Tymor Technologies - Leading IT Services Provider
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                            Founded on the principles of innovation, excellence, and customer-centric service, Tymor Technologies 
                            has established itself as a premier provider of comprehensive IT solutions for businesses of all sizes. 
                            From managed IT services and cloud solutions to cybersecurity, AI integration, and digital transformation, 
                            we deliver technology solutions that drive business growth and operational efficiency.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                            With offices in Pennsylvania, Florida, and Dubai, we serve clients across the United States and 
                            internationally, providing 24/7/365 support and expertise in database development, cloud native 
                            development, VoIP solutions, API development, network security, and digital marketing. Our team 
                            of certified professionals brings decades of combined experience in enterprise technology, 
                            ensuring your business stays competitive in today's fast-paced digital economy.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-startr">

                {/* Left side images */}
                <div className="flex flex-col gap-6">
                    <img
                        src="/about-us/abimg.webp"
                        alt="Technology team working"
                        className="rounded-lg shadow-lg"
                    />

                </div>

                {/* Right side content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        WHO WE ARE - TYMOR TECHNOLOGIES
                    </h2>
                    <p className="mb-4 text-base md:text-lg leading-relaxed">
                        Tymor Technologies is a forward-thinking technology company committed to
                        delivering innovative solutions that empower businesses to thrive in an
                        ever-evolving digital landscape. Our comprehensive suite of services includes 
                        managed IT support, cloud infrastructure management, advanced cybersecurity solutions, 
                        artificial intelligence integration, database design and development, and strategic 
                        digital marketing services.
                    </p>
                    <p className="mb-8 text-base md:text-lg leading-relaxed">
                        With a relentless focus on excellence and a passion for pushing the boundaries
                        of what's possible, we specialize in providing cutting-edge technology services
                        tailored to meet the diverse needs of our clients. Whether you're an enterprise 
                        looking to scale or seeking digital transformation, Tymor Technologies 
                        has the expertise, tools, and dedicated team to help you succeed.
                    </p>

                    {/* Features grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            "Custom Software Development",
                            "IT Consulting",
                            "Web Design and Development",
                            "Digital Marketing",
                            "Collaboration",
                            "Innovation",
                            "Customer Satisfaction",
                            "Reliability & Agility",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">

                                <CircleCheck className="text-primary w-5 h-5" />
                                <span className="font-semibold">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
