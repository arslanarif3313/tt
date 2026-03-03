"use client";
import { CircleArrowRight } from "lucide-react";

const HelpCard = ({ title, body }) => (
    <div className="rounded-xl border border-black/10 bg-white p-6">
        <div className="flex items-start gap-3">
            <CircleArrowRight className="text-primary w-5 h-5 mt-1.5 shrink-0" />
            <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm md:text-base opacity-80">{body}</p>
            </div>
        </div>
    </div>
);

export default function MobileSecurityHelps() {
    const items = [
        {
            title: "Advanced Threat Detection",
            body:
                "Utilizing industry‑leading technologies from Cisco, WatchGuard, SonicWall, Microsoft, Trend Micro, Barracuda Networks, and Palo Alto Networks, we offer real‑time monitoring and detection of mobile threats. Our systems can identify and block malicious activities before they compromise your devices.",
        },
        {
            title: "Endpoint Security Management",
            body:
                "We ensure that all mobile devices accessing your corporate network are secured with the latest security patches, antivirus software, and encryption protocols. This includes managing device settings, controlling app installations, and enforcing security policies.",
        },
        {
            title: "Mobile Device Management (MDM)",
            body:
                "Our MDM solutions provide centralized control over mobile devices. We can remotely lock, wipe, or update devices to prevent data loss or unauthorized access in case a device is lost or stolen.",
        },
        {
            title: "Employee Training and Awareness",
            body:
                "Our cybersecurity training programs educate employees about the risks associated with mobile devices and best practices to avoid falling victim to cyber attacks. Training covers recognizing phishing attempts, securing personal devices, and understanding the importance of regular updates.",
        },
        {
            title: "Incident Response and Recovery",
            body:
                "In the event of a security breach, our experts are on standby to quickly respond, contain the threat, and restore affected systems to minimize downtime and data loss. We provide detailed reports and analysis to prevent future incidents.",
        },
        {
            title: "Regular Security Audits and Assessments",
            body:
                "We conduct regular security audits and assessments to identify potential vulnerabilities in your mobile infrastructure and recommend appropriate measures to mitigate risks.",
        },
    ];

    return (
        <section className="py-24 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-center uppercase font-bold text-2xl lg:text-4xl">
                    How Tymor Technologies Can Help
                </h2>
                <p className="mt-2 text-center max-w-3xl mx-auto text-sm md:text-base opacity-80">
                    Tymor Technologies Managed Cybersecurity Services can provide comprehensive mobile security
                    solutions to protect your business from such threats. Here’s how we can help:
                </p>

                <div className="mt-10 grid lg:grid-cols-2 gap-6">
                    {items.map((item, i) => (
                        <HelpCard key={i} title={item.title} body={item.body} />
                    ))}
                </div>

                <p className="mt-10 text-sm md:text-base opacity-80">
                    By partnering with Tymor Technologies, you can ensure robust mobile security measures are in place,
                    protecting your business from potential cyber threats and ensuring the safety of your sensitive data.
                </p>
                <p className="mt-2 text-sm md:text-base">
                    <a href="/contact-us" className="text-primary hover:underline">
                        Click here
                    </a>{" "}
                    to learn more about how Tymor Technologies Managed Cybersecurity Services can safeguard your mobile
                    devices and enhance your overall cybersecurity posture.
                </p>
            </div>
        </section>
    );
}
