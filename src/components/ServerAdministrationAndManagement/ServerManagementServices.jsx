

import Image from "next/image";

export default function ServerManagementServices() {
    const services = [
        {
            title: "Troubleshooting",
            description:
                "Time is critical when addressing server issues. Tymor Technologies prevents and resolves server problems through comprehensive server monitoring, maintenance, and troubleshooting. We provide 24/7 server management and monitoring, ensuring constant oversight of your servers. If a server issue persists for more than a few minutes, we initiate the troubleshooting process to identify and resolve the root cause, helping you avoid costly downtime and security threats.",
            icon: "/assets/icons/cog.webp",
        },
        {
            title: "Maintenance",
            description:
                "Server maintenance is essential for minimizing downtime, preventing security threats, and ensuring efficient operation. However, keeping up with maintenance can be challenging for business owners. Tymor Technologies ensures your servers are always up to date and well-maintained, alleviating concerns about reliability or security issues caused by outdated services.",
            icon: "/assets/icons/wrr.webp",
        },
        {
            title: "Software Installations",
            description:
                "Installing software across multiple machines connected to a server can be labor-intensive, and installation errors can affect software performance. Tymor Technologies’ server maintenance services simplify this process. Our experienced technicians handle software installations efficiently, ensuring your operations run smoothly and securely without the risks associated with outdated software.",
            icon: "/assets/icons/nsta.webp",
        },
        {
            title: "Server Optimization",
            description:
                "Improving network efficiency doesn’t always require a complete rebuild. Tymor Technologies identifies potential inefficiencies in your network and enhances server operations. Whether your server supports day-to-day operations or secures sensitive customer data, we help optimize your server for maximum efficiency and security. We can also assist in eliminating unnecessary software and equipment, upgrading to better options to ensure you maximize efficiency cost-effectively.",
            icon: "/assets/icons/servfg.webp",
        },
        {
            title: "Operating System (OS) Updates",
            description:
                "The operating system is the core of your server, influencing its capabilities. Keeping your OS up to date is crucial for security and performance. Updating an OS involves challenges, including minimizing downtime. Tymor Technologies employs zero-downtime upgrade methods to deliver OS updates without disrupting your operations, allowing you to focus on your business.",
            icon: "/assets/icons/os.webp",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-black text-white">
            <div className="container mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-xl md:text-3xl font-bold uppercase">
                    What Are Server Management Services?
                </h2>
                <p className="mt-4 max-w-3xl mx-auto  text-sm md:text-base">
                    Server management services help keep your servers online, prevent
                    security threats, and ensure your servers are up to date. Tymor
                    Technologies’ 24/7 Server Management Services help you avoid the
                    significant time and financial costs associated with in-house server
                    management. With our team of technicians continuously monitoring and
                    securing your servers, we make it easier to prevent serious server
                    issues.
                </p>

                {/* First row: 3 items */}
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {services.slice(0, 3).map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white text-black rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer"
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                            <p className="text-sm font-sans">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Second row: 2 items full width */}
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {services.slice(3).map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white text-black rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer"
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                            <p className="text-sm font-sans">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
