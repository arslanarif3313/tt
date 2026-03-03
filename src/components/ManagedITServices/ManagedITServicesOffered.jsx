import { CircleArrowRight } from 'lucide-react';
import React from 'react'


export default function ManagedITServicesOffered() {
    const services = [
        {
            title: "Managed IT Help Desk",
            overview:
                "Providing responsive and reliable IT support for everyday technical issues.",
            features:
                "24/7 availability, multilingual support, ticketing system integration, remote troubleshooting, and escalation management.",
        },
        {
            title: "Remote IT Support",
            overview:
                "Delivering efficient remote assistance to resolve IT problems quickly.",
            features:
                "Secure remote access, rapid issue resolution, real-time monitoring, and remote software updates.",
        },
        {
            title: "Managed IT On-Site Support",
            overview:
                "Offering on-site technical support for more complex issues and hands-on assistance.",
            features:
                "Scheduled visits, emergency support, hardware repairs, and local IT resource allocation.",
        },
        {
            title: "Server & Computer Management",
            overview:
                "Ensuring optimal performance and maintenance of your servers and computers.",
            features:
                "Regular updates and patches, performance monitoring, resource optimization, and hardware lifecycle management.",
        },
        {
            title: "Network Monitoring & Management",
            overview:
                "Continuously monitoring and managing network health and performance.",
            features:
                "Real-time monitoring, bandwidth management, network security, and incident response.",
        },
        {
            title: "Backup & Disaster Recovery",
            overview:
                "Protecting your data with robust backup solutions and disaster recovery plans.",
            features:
                "Automated backups, secure data storage, rapid recovery solutions, and disaster recovery testing.",
        },
        {
            title: "Managed IT Procurement",
            overview:
                "Assisting with the procurement of IT hardware and software to meet your business needs.",
            features:
                "Vendor management, product sourcing, cost optimization, and procurement tracking.",
        },
        {
            title: "Employee On-boarding & Off-boarding",
            overview:
                "Streamlining the IT aspects of bringing new employees on board and managing departures.",
            features:
                "Account setup, access control, device provisioning, and data migration.",
        },
        {
            title: "Microsoft Technology",
            overview:
                "Microsoft 365 administration, SharePoint management, Azure cloud services, and Windows server support.",
            features:
                "Vendor management, product sourcing, cost optimization, and procurement tracking.",
        },
        {
            title: "Apple Technology",
            overview:
                "Expert management and support for Apple devices and solutions.",
            features:
                "macOS management, iOS device support, Apple Business Manager integration, and application deployment.",
        },
        {
            title: "Co-Managed IT Services",
            overview:
                "Collaborative IT management to enhance and support your internal IT team.",
            features:
                "Shared responsibilities, strategic IT planning, access to specialized expertise, and flexible support options.",
        },
        {
            title: "Managed Cybersecurity Services",
            overview:
                "Providing comprehensive security solutions to protect your business from cyber threats.",
            features:
                "Threat detection and response, firewall management, endpoint protection, and security training.",
        },
        {
            title: "Cloud Services Management",
            overview:
                "Overseeing cloud infrastructure, including migration, optimization, and maintenance of cloud environments.",
            features:
                "Cloud strategy development, cost management, security compliance, and performance optimization.",
        },
        {
            title: "Virtualization Management",
            overview:
                "Managing virtual environments to ensure efficiency and scalability.",
            features:
                "Virtual machine provisioning, resource allocation, performance monitoring, and disaster recovery planning.",
        },
        {
            title: "IT Compliance and Audit Services",
            overview:
                "Helping your organization stay compliant with industry regulations and standards through regular audits and assessments.",
            features:
                "Compliance assessments, audit preparation, policy development, and ongoing monitoring.",
        },
        {
            title: "Data Analytics and Reporting",
            overview:
                "Leveraging data analytics to provide insights and reporting that support informed decision-making.",
            features:
                "Data integration, real-time dashboards, custom reporting, and predictive analytics.",
        },
        {
            title: "Unified Communications",
            overview:
                "Implementing and managing integrated communication solutions to enhance collaboration and productivity.",
            features:
                "VoIP services, video conferencing, messaging platforms, and unified messaging",
        },

        {
            title: "Mobile Device Management (MDM)",
            overview:
                "Securing and managing mobile devices used within your organization to ensure data protection and compliance.",
            features:
                "Device enrollment, remote management, policy enforcement, and application control.",
        },
        {
            title: "Software as a Service (SaaS) Management",
            overview:
                "Administering and supporting SaaS applications to ensure seamless operation and user satisfaction.",
            features:
                "License management, application integration, performance monitoring, and user support.",
        },
        {
            title: "Enterprise Resource Planning (ERP) Support",
            overview:
                "Providing specialized support for ERP systems to enhance business operations and efficiency.",
            features:
                "ERP implementation, customization, integration, and user training.",
        },
        {
            title: "IT Strategic Planning and Consulting",
            overview:
                "Offering strategic IT planning and consulting services to align technology with your business goals.",
            features:
                "IT roadmap development, technology assessment, budget planning, and project management.",
        },
        {
            title: "Internet of Things (IoT) Management",
            overview:
                "Managing IoT devices and networks to ensure connectivity, security, and functionality.",
            features:
                "Device provisioning, network integration, security management, and data analytics.",
        },

    ];
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (

                        <div key={index} className="bg-white p-6 rounded-lg">
                            <h3 className="font-bold uppercase mb-4">{service.title}</h3>

                            <p className="flex items-start mb-2">
                                <CircleArrowRight className="text-primary mt-1 mr-2" size={18} />
                                <span>
                                    <strong>Service Overview:</strong> {service.overview}
                                </span>
                            </p>

                            <p className="flex items-start">
                                <CircleArrowRight className="text-primary mt-1 mr-2" size={18} />
                                <span>
                                    <strong>Features:</strong> {service.features}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}
