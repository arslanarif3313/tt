import ChallengeSolution from '@/components/InformationSecurityServices/ChallengeSolution'
import CybersecurityEnhancement from '@/components/InformationSecurityServices/CybersecurityEnhancement'
import DeliveryOfCybersecurity from '@/components/InformationSecurityServices/DeliveryOfCybersecurity'
import IndustryTechnologies from '@/components/InformationSecurityServices/IndustryTechnologies'
import ManagedCybersecurityIntro from '@/components/InformationSecurityServices/ManagedCybersecurityIntro'
import TypesOfCybersecurityServices from '@/components/InformationSecurityServices/TypesOfCybersecurityServices'
import Heading from '@/components/ui/Heading/Heading'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "Managed Cybersecurity & IT Security Services – Tymor Technologies",
  description: "Enterprise information security services including 24/7 monitoring, threat detection, vCISO services, and compliance. Protect your business with managed cybersecurity.",
};

export default function page() {
    return (
        <div>
            <Heading heading={'Information Security Services'}></Heading>
            <ManagedCybersecurityIntro></ManagedCybersecurityIntro>
            <TypesOfCybersecurityServices></TypesOfCybersecurityServices>
            <DeliveryOfCybersecurity></DeliveryOfCybersecurity>
            <IndustryTechnologies></IndustryTechnologies>
            <CybersecurityEnhancement></CybersecurityEnhancement>
            <section className="py-20 bg-white text-black">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            Cost of Managed Cybersecurity Services
                        </h3>
                        <p className="mb-6 text-lg leading-relaxed">
                            Cybersecurity costs depend on several factors. Your industry, company size, 
                            and IT setup all affect pricing. Here are the key factors:
                        </p>

                        <ul className="space-y-4">
                            <li>
                                <span className="text-orange-500 font-bold text-lg">Industry Needs</span>
                                <p className="text-base leading-relaxed">
                                    Each industry has different compliance rules. Healthcare needs HIPAA. 
                                    Finance needs SOX. These requirements affect service scope and cost.
                                </p>
                            </li>
                            <li>
                                <span className="text-orange-500 font-bold text-lg">Company Size</span>
                                <p className="text-base leading-relaxed">
                                    Bigger companies need more protection. More employees mean more devices 
                                    to secure. This increases costs.
                                </p>
                            </li>
                            <li>
                                <span className="text-orange-500 font-bold text-lg">IT Infrastructure</span>
                                <p className="text-base leading-relaxed">
                                    How many devices do you have? What apps do you use? More complex systems 
                                    cost more to protect.
                                </p>
                            </li>
                            <li>
                                <span className="text-orange-500 font-bold text-lg">
                                    Support Levels
                                </span>
                                <p className="text-base leading-relaxed">
                                    Faster response times cost more. 24/7 support costs more than business 
                                    hours only. Choose what fits your needs.
                                </p>
                            </li>
                        </ul>

                        <p className="mt-6 text-lg leading-relaxed">
                            Most businesses spend 10% of their IT budget on security. Your actual cost 
                            may vary. Tymor Technologies creates custom solutions for your budget. 
                            You get strong protection without overspending.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex flex-col gap-6 h-full">
                        <Image
                            src="/cybersSecurityServices/npl.webp"
                            alt="Cybersecurity AI"
                            width={600}
                            height={600}
                            className="rounded-lg h-full"
                        />

                    </div>
                </div>
            </section>
            <section className="py-10 bg-black text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                        MSTE ENTERPRISES ENHANCES ITS CYBERSECURITY POSTURE WITH TYMOR TECHNOLOGIES
                    </h2>
                    <p className="text-white/80 max-w-3xl mx-auto">
                        MSTE Enterprises, a leading manufacturing firm, recently partnered with Tymor Technologies to
                        overhaul its cybersecurity infrastructure in response to increasing cyber threats. Here’s a
                        detailed look at how Tymor Technologies implemented its solutions to protect MSTE Enterprises.
                    </p>
                </div>
            </section>
            <ChallengeSolution></ChallengeSolution>
        </div>
    )
}
