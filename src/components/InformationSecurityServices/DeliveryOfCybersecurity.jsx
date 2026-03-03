// components/DeliveryOfCybersecurity.jsx
"use client";

import Image from "next/image";


export default function DeliveryOfCybersecurity() {
    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-center font-bold uppercase text-2xl lg:text-4xl">
                    Delivery of Cybersecurity Solutions by Tymor Technologies
                </h2>

                {/* Top Section */}
                <div className="grid lg:grid-cols-2 gap-8 mt-10 items-center">
                    {/* Image */}
                    <div className="h-full">
                        <Image
                            src="/cybersSecurityServices/SolarWinds Attack.webp"
                            alt="Cybersecurity visualization"
                            width={900}
                            height={1100}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>

                    {/* Text Content */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold uppercase text-lg mb-2">
                            Managed Security Services
                        </h3>
                        <p className="mb-4">
                            Tymor Technologies offers Managed Security Services packages for
                            small- and medium-sized businesses (SMBs) that cannot afford to
                            maintain an in-house cybersecurity team.
                        </p>
                        <h4 className="font-bold uppercase text-md mb-2">
                            Guiding You Through the MSP Onboarding Process
                        </h4>
                        <p>
                            When you partner with Tymor Technologies for your cybersecurity
                            needs, we begin our collaboration with a proprietary,
                            four-stage onboarding process. Our dedicated Tymor Technologies
                            Onboarding Team, including a project manager and onboarding
                            engineer, guides you through each stage.
                        </p>
                        <p className="mt-3">
                            We start with an IT infrastructure discovery, proceed to IT data
                            collection, conduct an internal information review, and conclude
                            with implementation and go-live.
                        </p>
                    </div>
                </div>

                {/* Four Phases */}
                <div className="grid lg:grid-cols-2 gap-6 mt-10">
                    <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Phase 1: Managed Services Definition</h4>
                        <p>
                            Defining services is crucial during the onboarding process. We
                            discuss every service outlined in the signed Service Agreement to
                            ensure our team understands your business before on-site data
                            gathering, process documentation, and ongoing support.
                        </p>
                    </div>
                    <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Phase 2: IT Data Collection</h4>
                        <p>
                            Our technicians visit your site to gather information about your IT
                            environment and start the documentation process, including network
                            investigation, security assessment, backup verification, server
                            room inspections, and policy documentation.
                        </p>
                    </div>
                    <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Phase 3: Internal Information Review</h4>
                        <p>
                            This phase ensures your IT environment meets current and future
                            business needs. Findings and recommendations are reviewed with your
                            dedicated team and senior technicians if necessary.
                        </p>
                    </div>
                    <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">
                            Phase 4: Orientation Meeting and Service Handoff
                        </h4>
                        <p>
                            Your Tymor Technologies team meets with you to review your client
                            manual, discuss recurring services, finalize support procedures,
                            and set the cadence for ongoing meetings.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
