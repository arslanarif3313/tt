

import { CircleArrowRight } from "lucide-react";

export default function BenefitsNetworkMonitoring() {
    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-xl md:text-3xl font-bold uppercase  mb-10">
                    Benefits of Network Monitoring & Management
                </h2>

                {/* Two columns */}
                <div className="grid md:grid-cols-2 gap-8 font-sans">
                    {/* Left card */}
                    <div className="rounded-xl bg-base-200 border border-base-300 p-6 md:p-8">
                        <Item
                            title="Maintaining Compliance"
                            text="Different industries have specific compliance requirements, such as HIPAA for medical organizations and FISMA for government organizations. Tymor Technologies helps you stay compliant while securing your network with continuous monitoring and streamlined updates."
                        />
                        <Item
                            title="Reducing Downtime"
                            text="Downtime affects sales and requires time to fix network issues. Outsourcing network monitoring ensures constant supervision and rapid response to potential problems, keeping your network up and running."
                        />
                        <Item
                            title="Blocking Security Breaches"
                            text="Security breaches can be costly and damage customer trust. Tymor Technologies provides constant monitoring to detect and respond to breaches promptly, protecting your network and sensitive data."
                        />
                        <Item
                            title="Improving IT Team Productivity"
                            text="Outsourcing network monitoring allows your IT team to focus on other responsibilities, increasing productivity and leveraging technology to give your business a competitive edge."
                        />
                    </div>

                    {/* Right card */}
                    <div className="rounded-xl bg-base-200 border border-base-300 p-6 md:p-8">
                        <Item
                            title="Continuous Monitoring"
                            text="24/7 network monitoring is essential for preventing downtime and security breaches. Tymor Technologies provides around-the-clock monitoring, ensuring swift action against perceived threats or issues."
                        />
                        <Item
                            title="Boost ROI"
                            text="Managed IT services, including network monitoring and management, help you save money and maximize ROI. Outsourcing these services reduces downtime, prevents costly breaches, and optimizes network performance."
                        />
                        <Item
                            title="Prevent Outages"
                            text="Every network outage costs money and disrupts operations. Our 24/7 monitoring and data analysis help prevent outages, saving money and keeping customers satisfied."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Item({ title, text }) {
    return (
        <div className="flex gap-3 md:gap-4 mb-6">
            <span className="mt-1">
                <CircleArrowRight className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </span>
            <div>
                <h3 className="font-semibold text-lg md:text-xl">{title}</h3>
                <p className="text-base text-base-content/80 mt-1">{text}</p>
            </div>
        </div>
    );
}
