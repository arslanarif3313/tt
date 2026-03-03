"use client";

import Image from "next/image";

export default function ManagedNetworkMonitoring() {
    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
                {/* LEFT: two stacked images */}
                <div className="space-y-6">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md">
                        <Image
                            src="/itServices/itServices.webp"
                            alt="Dashboard monitoring"
                            width={1000}
                            height={1000}
                            className=" w-full h-full"
                            priority
                        />
                    </div>

                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md">
                        <Image
                            src="/itServices/support-delivery-overview.webp"
                            alt="Technicians in server room"
                            width={1000}
                            height={1000}
                            className=" w-full h-full"

                        />
                    </div>
                </div>

                {/* RIGHT: heading + paragraphs */}
                <div>
                    <h2 className="text-xl md:text-3xl  font-bold uppercase  mb-6 ">
                        Managed Network
                        <br />
                        Monitoring Solutions
                    </h2>

                    <p className="text-base md:text-lg  mb-5 font-sans">
                        Network monitoring and management are essential to safeguarding your
                        business from potential threats. Tymor Technologies’ IT management
                        services empower your business with tools to proactively identify
                        and mitigate network threats. With 24/7/365 monitoring, you can
                        avoid costly downtime and maintain customer trust.
                    </p>

                    <p className="text-base md:text-lg  mb-5 font-sans">
                        Tymor Technologies adopts a comprehensive strategy to monitor
                        networks and mitigate threats, starting with proactive monitoring
                        and troubleshooting. By detecting potential issues early, we
                        minimize their impact. Analyzing network trends allows us to
                        identify patterns that could indicate future problems. Our help
                        desk services ensure you have all the IT solutions at your
                        fingertips, making Tymor Technologies a leading network monitoring
                        company.
                    </p>

                    <p className="text-base md:text-lg mb-5 font-sans">
                        In addition to 24/7 network monitoring, Tymor Technologies is
                        dedicated to preventing downtime. Downtime can lead to lost sales
                        and missed customer service queries, costing you money. Our network
                        monitoring helps prevent downtime through data analysis,
                        identifying patterns and indicators of potential problems. Routine
                        patches and system updates are scheduled at convenient times to
                        keep your systems updated without disrupting business operations.
                    </p>

                    <p className="text-base md:text-lg  font-sans">
                        Our network management consulting ensures your network is always
                        online, ready to serve your customers and drive sales.
                    </p>
                </div>
            </div>
        </section>
    );
}
