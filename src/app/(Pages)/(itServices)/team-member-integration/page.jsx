import IntegrationCosts from "@/components/TeamMemberIntegration/IntegrationCosts"
import TeamIntegrationBenefits from "@/components/TeamMemberIntegration/TeamIntegrationBenefits"
import GridSection from "@/components/ui/GridSection/GridSection"
import Heading from "@/components/ui/Heading/Heading"
import Image from "next/image"

export default function Page() {


    const CostCard = ({ title, bullets }) => (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h4 className="font-bold text-base mb-4">{title}</h4>
            <ul className="space-y-3 text-sm text-gray-700">
                {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 rounded-full" ></span>
                        <div dangerouslySetInnerHTML={{ __html: b }} />
                    </li>
                ))}
            </ul>
        </div>
    )

    return (
        <div className="bg-white">
            <Heading heading={'Team Member Integration and Departure Management Services'}></Heading>
            {/* HERO SECTION */}


            {/* Intro */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="w-full h-64 md:h-auto rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/itServices.webp" alt="Dashboard" className="w-full h-full object-cover"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl mb-6">Streamlined Remote IT Integration and Departure Management</h1>
                            <div className="space-y-4 text-gray-700 leading-7">
                                <p>The way you choose to handle onboarding new team members and managing departures can ripple across your entire organization.</p>
                                <p>Tymor Technologies helps organizations like yours create comprehensive integration and departure management plans that protect your sensitive data, improve your security posture, and ensure every team member—whether working remote or in person—is transitioned in a way that follows best industry practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Definition */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div>
                            <h1 className="text-3xl mb-5">What is Team Member Integration and Departure Management as a Service?</h1>
                            <p className="text-gray-700 leading-7">When team member transitions happen—joining or exiting—they can leave your organization vulnerable to data breaches. We work closely with your team to maintain network security and ensure these transitions are handled safely and securely.</p>
                            <p className="mt-5">
                                We’ll work closely with your team to maintain your network security and ensure these transitions are handled safely and securely.


                            </p>
                        </div>
                        <div className="w-full h-64 md:h-auto rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/Onsite-Support.webp" alt="Dashboard" className="w-full h-full object-cover"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Types */}
            <GridSection
                title={'Types of Team Member Integration and Departure Management Offered'}
                subtitle={'Team member integration and departure management both present unique challenges that, if not correctly addressed, can leave your systems vulnerable to data breaches. Tymor Technologies provides comprehensive services to ensure your network security and provide the best possible experience for your team members. Here are a few examples of what we can offer'}
                grid={[
                    {
                        title: "Secure IT Integration",
                        desc: "During the integration process, it’s important your new team members understand how to safely access your IT infrastructure and use their digital tools. We’ll ensure the process doesn’t jeopardize your security.",
                        icon: "assets/icons/secure-data.webp",
                    },
                    {
                        title: "Process Development",
                        desc: "The integration processes you have in place can make all the difference to your cybersecurity. If you’re worried that yours might fall short, we’ll help you develop a process that works.",
                        icon: "assets/icons/cog.webp",
                    },
                    {
                        title: "Secure Team Member Departure Management",
                        desc: "When a team member leaves your organization, it opens you up to potential cybersecurity risks. We’ll help make sure the departure management process is safe and secure.",
                        icon: "/assets/icons/per.webp",
                    },
                    {
                        title: "Remote Support",
                        desc: "Remote team members pose a few extra challenges when it comes to the integration and departure management process. We can help make sure nothing gets missed and that your remote staff are just as secure as team members working onsite.",
                        icon: "/assets/icons/accc.webp",
                    },


                ]}
            ></GridSection>

            {/* Benefits */}
            <TeamIntegrationBenefits></TeamIntegrationBenefits>

            {/* Costs */}
            <IntegrationCosts></IntegrationCosts>



        </div>
    )
}
