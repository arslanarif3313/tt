// app/it-asset-management/page.jsx  (or pages/it-asset-management.jsx)
import GridSectionThree from '@/components/ui/GridSection/GridSectionThree'
import Heading from '@/components/ui/Heading/Heading'
import Image from 'next/image'

export default function ItAssetManagementPage() {


    const Feature = ({ icon, title, text }) => (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
            >
                <span className="text-2xl" >{icon}</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm leading-6 text-gray-600">{text}</p>
        </div>
    )

    const ServicePill = ({ title, text }) => (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 text-left">
            <h4 className="font-semibold text-sm mb-1">{title}</h4>
            <p className="text-xs leading-5 text-gray-600">{text}</p>
        </div>
    )

    return (
        <div>

            <Heading heading={'IT Asset Management'}></Heading>
            
            {/* SEO-Rich Introductory Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Professional IT Asset Management Services
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Effective IT asset management is crucial for maximizing technology investments, reducing costs, and ensuring 
                            compliance with software licensing requirements. Tymor Technologies provides comprehensive IT asset management 
                            (ITAM) services that track, manage, and optimize your organization's hardware, software, cloud services, and 
                            technology infrastructure throughout their entire lifecycle. From procurement and deployment to maintenance and 
                            disposal, we help you maintain complete visibility and control over your IT assets.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our ITAM solutions include hardware and software inventory management, license compliance tracking, asset 
                            lifecycle management, vendor relationship management, and cost optimization strategies. By leveraging advanced 
                            asset management tools and best practices, we help organizations reduce unnecessary spending, prevent compliance 
                            violations, improve security posture, and make data-driven decisions about technology investments.
                        </p>
                    </div>
                </div>
            </section>

            {/* HERO */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image
                                src="/itServices/asset-mgmt.webp"
                                alt="IT Asset Management dashboard and tracking system"
                                className="object-cover"
                                priority
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div>
                            <h2 className="uppercase font-bold leading-tight text-2xl sm:text-3xl md:text-4xl">
                                Comprehensive IT<br />Asset Management<br />Services
                            </h2>
                            <div className="mt-4 space-y-4 text-gray-700 leading-7">
                                <p>
                                    It takes a significant investment of time and energy to evaluate, purchase, and install new IT hardware, 
                                    software, VoIP systems, cloud infrastructure, cybersecurity solutions, websites, SEO tools, and AI technologies. 
                                    Without proper asset management, organizations often overspend on redundant licenses, face compliance risks, and 
                                    struggle to track technology resources across departments and locations.
                                </p>
                                <p>
                                    Whether your organization needs new tools or is just looking to make a few upgrades, you can streamline the 
                                    entire process by partnering with Tymor Technologies for comprehensive IT asset management. We eliminate the 
                                    complexity of technology procurement, reduce costs through strategic vendor negotiations, and ensure your assets 
                                    are properly tracked, maintained, and optimized throughout their useful life.
                                </p>
                                <p>
                                    From identifying the best hardware, software, VOIP, website, SEO, cloud services, and AI solutions to 
                                    professional installation, configuration, ongoing support, and end-of-life disposal, we manage the entire 
                                    asset lifecycle to ensure your team has the right tools they need to excel while maintaining security, 
                                    compliance, and cost efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* BLACK STRIP TITLE */}
            <GridSectionThree
                title={'Reliable IT Asset Management Benefits and Strategy'}
                subtitle={'Our IT asset management services remove the complexity of sourcing and deploying new hardware, software, VOIP systems, websites, SEO, or AI solutions. We enhance efficiency for your organization while leveraging our bulk-buying power to reduce costs.'}
                grid={[
                    {
                        title: "User Support 24/7/365",
                        desc: "When you choose Tymor Technologies for IT asset management, we provide continuous support as your users adapt to the new hardware, software, VOIP systems, websites, SEO, or AI solutions.",
                        icon: "assets/icons/cust.webp",
                    },
                    {
                        title: "Expert Consultation on IT Solutions",
                        desc: "Avoid costly mistakes with our expert guidance. We assist you in evaluating your options to select the best solutions tailored to your organization’s needs.",
                        icon: "assets/icons/decision-making.webp",
                    },
                    {
                        title: "Enhanced Cost Efficiency",
                        desc: "Benefit from significant savings through our industry connections, which allow us to procure hardware, software, VOIP systems, websites, SEO, or AI solutions at reduced costs. We pass these savings on to you.",
                        icon: "/assets/icons/cost.webp",
                    }
                ]}
            ></GridSectionThree>

            {/* IMAGE + HOW IT WORKS */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow">
                            <Image
                                src="/itServices/asset-mgmt.webp"
                                alt="How IT Asset Management works"
                                fill
                                className="object-cover h-full"
                            />
                        </div>
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                            <h3 className="uppercase font-bold text-xl md:text-2xl mb-3">
                                How Does IT Asset Management Work?
                            </h3>
                            <p className="text-gray-700 leading-7">
                                Our IT asset management services leverage our expertise and industry relationships to assist your organization in evaluating, acquiring, and implementing hardware, software, VOIP systems, websites, SEO, and AI solutions. Tymor Technologies’ proficiency ensures we manage the entire process, delivering optimal outcomes for your organization.
                            </p>
                            <p className="mt-4 text-gray-700 leading-7">
                                Think of it this way: You wouldn’t purchase a home or a car without thorough research. Similarly, selecting the right hardware, software, VOIP, website, SEO, or AI tools for your business requires extensive evaluation to make the best choice. After purchasing, you’ll also need to install, maintain, and upgrade your systems, and eventually, retire outdated assets.
                            </p>
                            <p className="mt-4 text-gray-700 leading-7">
                                This process can strain your IT team’s time and resources. Wouldn’t you prefer they focus on core business objectives? Our managed IT asset management services allow your team to concentrate on essential business functions while we handle the procurement and deployment of new hardware, software, VOIP, website, SEO, and AI tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CRITICAL BLACK STRIP */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="uppercase font-bold text-white text-2xl sm:text-3xl md:text-4xl">
                        Why is IT Asset Management Critical?
                    </h2>
                    <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
                        Ensure your organization receives the best hardware, software, VoIP, websites, SEO,
                        and AI—managed efficiently from evaluation to installation and ongoing maintenance.
                    </p>
                </div>
            </section>

            {/* OUTSOURCED SERVICES GRID */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl">
                        Outsourced IT Asset Management Services
                    </h2>
                    <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
                        Tymor Technologies provides a complete, managed set of services:
                    </p>

                    <div className="mt-8 grid md:grid-cols-3 gap-4 text-left">
                        <ServicePill
                            title="Software & Hardware Evaluation"
                            text="We thoroughly vet solutions based on your needs and goals."
                        />
                        <ServicePill
                            title="Strategic Sourcing & Management"
                            text="Use our distributor relationships to find suppliers that meet requirements efficiently."
                        />
                        <ServicePill
                            title="Cost & Pricing Optimization"
                            text="Use our established buying power and relationships to lower costs without sacrificing quality."
                        />

                        <ServicePill
                            title="Vendor & Supplier Management"
                            text="We manage vendor interactions so you can focus on your business."
                        />
                        <ServicePill
                            title="Licensing & Agreements"
                            text="We help determine the most cost‑effective licensing approach for your organization."
                        />
                        <ServicePill
                            title="Installation & Implementation"
                            text="We oversee installs for hardware, software, VoIP, websites, SEO, and AI."
                        />

                        <ServicePill
                            title="Ongoing Support & Maintenance"
                            text="24/7 support and maintenance to keep systems efficient."
                        />
                        <ServicePill
                            title="System Upgrades"
                            text="We plan and execute upgrades aligned to operational needs."
                        />
                        <ServicePill
                            title="Asset Retirement & Management"
                            text="Secure, compliant retirement of outdated hardware to minimize disruption."
                        />
                    </div>
                </div>
            </section>

            {/* COSTS SECTION WITH IMAGE + CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow">
                            <Image
                                src="/itServices/npl.webp"
                                alt="Costs of outsourced IT asset management"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl">
                                What are the costs of outsourced IT asset management services?
                            </h2>
                            <div className="mt-4 space-y-4 text-gray-700 leading-7">
                                <p>
                                    Our managed IT asset management packages are tailored to your organization. Plans can
                                    include 24/7 remote support, proactive updates, project execution, and security/compliance.
                                </p>
                                <p>
                                    Outsourcing avoids the costs of hiring a full in‑house team while giving you access to
                                    specialists on demand. Pricing scales with users and required outcomes.
                                </p>
                            </div>

                            <div className="mt-6">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-white"

                                >
                                    <span>Click here for more information</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L18.94 12l-5.97-5.97a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M3 12a.75.75 0 0 1 .75-.75h15.69a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
