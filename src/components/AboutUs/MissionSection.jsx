"use client";

import { Target, UserCheck } from "lucide-react";

export default function MissionSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Our Mission */}
                    <div className="bg-black rounded-xl p-10 text-center flex flex-col items-center justify-center">
                        <Target className="h-12 w-12 text-primary mb-6" />
                        <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                        <p className="text-base text-gray-200 leading-relaxed">
                            Our mission at Tymor Technologies is to revolutionize the way
                            businesses leverage technology to drive growth and success.
                            Through our commitment to innovation, integrity, and customer
                            satisfaction, we aim to be the trusted partner of choice for
                            organizations seeking to harness the full potential of technology
                            to achieve their goals.
                        </p>
                    </div>

                    {/* Who We Are */}
                    <div className="bg-black rounded-xl p-10 text-center flex flex-col items-center justify-center">
                        <UserCheck className="h-12 w-12 text-primary mb-6" />
                        <h3 className="text-2xl font-bold text-primary mb-4">Who We Are</h3>
                        <p className="text-base text-gray-200 leading-relaxed">
                            Tymor Technologies comprises a team of highly skilled
                            professionals with expertise across various domains, including
                            software development, cloud computing, artificial intelligence,
                            cybersecurity, and more. Our team members are not only technical
                            experts but also strategic thinkers, dedicated to understanding
                            the unique challenges and opportunities facing each client and
                            delivering tailored solutions that address their specific needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
