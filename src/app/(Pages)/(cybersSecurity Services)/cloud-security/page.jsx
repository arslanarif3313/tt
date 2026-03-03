import GridSection from '@/components/ui/GridSection/GridSection'
import Heading from '@/components/ui/Heading/Heading'
import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading heading={'Cloud Security'}></Heading>
            <section className="py-24">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
                    {/* Image */}
                    <div>
                        <Image
                            src="/itServices/AWS-Cloud-1024x683.webp"
                            alt="Cloud Security"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="uppercase font-bold text-2xl lg:text-4xl mb-4">
                            Cloud Security
                        </h2>
                        <p className="mt-5">
                            As your business leverages the scalability and flexibility of public, private, or hybrid cloud environments, traditional perimeter defenses are no longer sufficient. Cloud Security is the specialized discipline of protecting cloud-based infrastructures, applications, and data against misconfigurations, unauthorized access, and advanced cloud-native threats.
                        </p>
                        <p className='mt-5'>
                            We ensure you capitalize on the cloud's potential without compromising your security posture.
                        </p>
                    </div>
                </div>
            </section>
            <GridSection
                title={'Why Should You Be Concerned?'}
                grid={[
                    {
                        title: "Misconfiguration Risks",
                        desc: "The number one cause of cloud breaches is often simple misconfiguration of services, leaving storage buckets, serverless functions, or databases exposed to the public internet.",
                        icon: "assets/icons/security.webp",
                    },
                    {
                        title: "Shared Responsibility Confusion",
                        desc: "Many businesses misunderstand the Shared Responsibility Model, incorrectly assuming the cloud provider secures everything, which leaves critical security gaps in their coverage.",
                        icon: "assets/icons/ss.webp",
                    },
                    {
                        title: "Shadow IT & Visibility",
                        desc: "Unauthorized deployment of cloud services by employees (Shadow IT) creates unseen vulnerabilities and expands the attack surface beyond the security team's control.",
                        icon: "/assets/icons/per.webp",
                    },
                    {
                        title: "Complex Compliance",
                        desc: "Managing data residency, sovereignty, and regulatory compliance becomes complex across multiple cloud regions and international boundaries without centralized governance.",
                        icon: "/assets/icons/compliant.webp",
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
                                At Tymor Technologies, we offer specialized Cloud Security services designed to secure your cloud assets across major platforms like AWS, Azure, and Google Cloud. Our approach includes:
                            </p>

                            <ul className="mt-6 space-y-6 text-base">
                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Cloud Security Posture Management (CSPM)</p>
                                        <p className="opacity-80">
                                            Automated scanning and remediation of configuration drift and policy violations across your entire cloud estate.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Identity and Access Management (IAM)</p>
                                        <p className="opacity-80">
                                            Implementing least-privilege access, strong multi-factor authentication, and centralized identity management for all cloud resources.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Cloud Workload Protection (CWPP)</p>
                                        <p className="opacity-80">
                                            Securing workloads (VMs, containers, serverless functions) from the build process through deployment and runtime execution.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Container and Kubernetes Security</p>
                                        <p className="opacity-80">
                                            Specialized security solutions for securing the orchestration, configuration, and deployment of your containerized applications.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="w-5 h-5 mt-1.5 shrink-0 text-[var(--color-primary)]" />
                                    <div>
                                        <p className="font-semibold">Network and Micro-segmentation</p>
                                        <p className="opacity-80">
                                            Designing secure cloud network architectures with granular micro-segmentation to limit the lateral movement of threats within your Virtual Private Clouds (VPCs).
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <p className="mt-8 text-base opacity-85">
                                Are you struggling to gain full visibility and control over your expanding multi-cloud estate? Do you worry that a simple misconfiguration could lead to a massive data exposure?
                            </p>

                            <p className="mt-3 text-base">
                                <a href="/contact-us" className="text-[var(--color-primary)] underline underline-offset-4">
                                    Click here
                                </a>{" "}
                                to book a security appointment and discover how Tymor Technologies can secure your cloud transformation journey with confidence.
                            </p>
                        </div>

                        {/* Right: Images */}
                        <div className="relative">
                            {/* Main image */}
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src="/itServices/Utilizing-Google-Cloud-and-AI-Advantage.webp"
                                    alt="Cloud Security Solutions"
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

