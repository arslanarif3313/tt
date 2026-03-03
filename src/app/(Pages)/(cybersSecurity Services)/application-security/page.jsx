import GridSection from '@/components/ui/GridSection/GridSection'
import Heading from '@/components/ui/Heading/Heading'
import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "Application Security Services – Tymor Technologies",
  description: "Professional application security services including vulnerability assessments, penetration testing, secure coding, and compliance support.",
};

export default function page() {
    return (
        <div>
            <Heading heading={'Application Security'}></Heading>
            
            {/* SEO-Rich Introductory Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Comprehensive Application Security Services
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            In today's digital landscape, application security is paramount to protecting your business from cyber threats, 
                            data breaches, and financial losses. Tymor Technologies provides enterprise-grade application security solutions 
                            that safeguard your web applications, mobile apps, APIs, and cloud-based systems against vulnerabilities and attacks. 
                            Our comprehensive approach includes vulnerability assessments, penetration testing, secure code reviews, and ongoing 
                            security monitoring to ensure your applications remain protected against evolving threats.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Whether you're developing new applications or securing existing systems, our certified security professionals 
                            implement industry best practices including OWASP Top 10 protections, secure SDLC integration, and compliance 
                            with standards such as PCI DSS, HIPAA, and GDPR. Protect your applications, data, and customers with Tymor 
                            Technologies' proven application security services.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
                    {/* Image */}
                    <div>
                        <Image
                            src="/cybersSecurityServices/dxxx.webp"
                            alt="Application Security and Critical Infrastructure Protection"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="uppercase font-bold text-2xl lg:text-4xl mb-4">
                            In-Depth Look at Application Security
                        </h2>
                        <p className="mt-5">
                            Application security encompasses comprehensive measures and practices aimed at safeguarding applications from vulnerabilities 
                            throughout their entire development lifecycle. This includes design, development, deployment, and maintenance phases, 
                            ensuring security is built into every stage of the application lifecycle.
                        </p>
                        <p className='mt-5'>
                            It involves ensuring the confidentiality, integrity, and availability of applications by protecting them against threats 
                            such as unauthorized access, data breaches, SQL injection, cross-site scripting (XSS), and advanced persistent threats (APTs). 
                            Modern application security combines automated scanning tools with manual security testing to identify and remediate 
                            vulnerabilities before they can be exploited by malicious actors.
                        </p>

                        <p className='mt-5'>
                            Our application security services protect critical infrastructure by implementing defense-in-depth strategies, including 
                            web application firewalls (WAF), runtime application self-protection (RASP), and continuous security monitoring. We help 
                            organizations achieve security compliance, reduce risk, and maintain customer trust through proactive security measures.
                        </p>
                    </div>
                </div>
            </section>
            <GridSection
                title={'Why Should You Be Concerned?'}
                grid={[
                    {
                        title: "Data Breaches",
                        desc: "Applications often handle sensitive data. A breach can lead to financial losses, reputational damage, and legal consequences.",
                        icon: "assets/icons/ss.webp",
                    },
                    {
                        title: "Regulatory Compliance",
                        desc: "Many industries have stringent compliance requirements. Failure to secure applications can result in non-compliance, attracting hefty fines and penalties.",
                        icon: "assets/icons/security.webp",
                    },
                    {
                        title: "Operational Disruptions",
                        desc: "Cyberattacks can cause significant downtime, affecting business operations and leading to lost revenue.",
                        icon: "/assets/icons/bui.webp",
                    },
                    {
                        title: "Customer Trust",
                        desc: "Security incidents can erode customer trust. Ensuring robust application security helps maintain a positive relationship with your clientele.",
                        icon: "/assets/icons/reputation.webp",
                    },

                ]}

            ></GridSection>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <h2 className="text-center uppercase font-bold text-2xl lg:text-4xl">
                        How Tymor Technologies Can Help
                    </h2>

                    <div className="mt-10 grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Copy */}
                        <div>
                            <p className="text-base md:text-lg opacity-85">
                                At Tymor Technologies, we offer comprehensive application security services
                                designed to protect your applications from emerging threats and vulnerabilities.
                                Our approach includes:
                            </p>

                            <ul className="mt-6 space-y-6 text-base">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Vulnerability Assessments</p>
                                        <p className="opacity-80">
                                            Identifying and addressing security weaknesses in your applications before
                                            they can be exploited.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Penetration Testing</p>
                                        <p className="opacity-80">
                                            Simulating real‑world attacks to evaluate the security posture of your
                                            applications and uncover potential vulnerabilities.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Secure Coding Practices</p>
                                        <p className="opacity-80">
                                            Implementing best practices in secure coding to prevent common
                                            vulnerabilities such as SQL injection, cross‑site scripting (XSS),
                                            and buffer overflows.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Continuous Monitoring</p>
                                        <p className="opacity-80">
                                            Utilizing advanced tools and techniques to monitor your applications in
                                            real‑time, ensuring ongoing protection against new and evolving threats.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Compliance Support</p>
                                        <p className="opacity-80">
                                            Assisting you in meeting regulatory requirements and industry standards,
                                            ensuring your applications remain compliant with relevant laws and
                                            guidelines.
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <p className="mt-8 text-base opacity-85">
                                Are you struggling with ensuring the security of your applications amidst a rapidly
                                evolving threat landscape? Are you unsure if your current measures are enough to
                                protect against sophisticated attacks?
                            </p>

                            <p className="mt-3 text-base">
                                <a href="/contact-us" className="text-[var(--color-primary)] underline underline-offset-4">
                                    Click here
                                </a>{" "}
                                to book a security appointment and learn how Tymor Technologies can bolster your
                                application security and help you achieve peace of mind.
                            </p>
                        </div>

                        {/* Right: Images */}
                        <div className="relative">
                            {/* Main image */}
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src="/cybersSecurityServices/bgtrs.webp"
                                    alt="Security professional working on secure applications"
                                    width={920}
                                    height={1080}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
