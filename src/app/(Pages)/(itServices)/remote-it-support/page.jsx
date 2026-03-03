// app/remote-it-support/page.jsx
// or pages/remote-it-support.jsx
import Image from 'next/image'
import Heading from "@/components/ui/Heading/Heading"

export const metadata = {
  title: "Remote IT Support Services – Tymor Technologies",
  description: "Professional remote IT support for troubleshooting, maintenance, and technical assistance. Quick resolution times, secure access, and cost-effective solutions.",
};

export default function RemoteItSupportPage() {

    const DotList = ({ items }) => (
        <ul className="space-y-3 text-sm text-gray-700 leading-6">
            {items.map((t, i) => (
                <li key={i} className="flex gap-3">
                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" />
                    <span dangerouslySetInnerHTML={{ __html: t }} />
                </li>
            ))}
        </ul>
    )

    const Card = ({ icon, title, body }) => (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
            <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"

            >
                <span className="text-2xl" >{icon}</span>
            </div>
            <h4 className="font-semibold text-lg mb-2">{title}</h4>
            <p className="text-sm text-gray-600 leading-6">{body}</p>
        </div>
    )

    const Pill = ({ title, text }) => (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 text-left">
            <h5 className="font-semibold text-sm mb-1">{title}</h5>
            <p className="text-xs text-gray-600 leading-5">{text}</p>
        </div>
    )

    return (
        <div className="bg-white">
            <Heading
                heading={'Remote IT Support'}

            />
            {/* HERO */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/Remote-Reposition-Hero.webp" alt="Remote IT support team" fill className="object-cover" priority />
                        </div>
                        <div>
                            <h1 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
                                Reliable, Efficient, and Secure IT Support for Businesses
                            </h1>
                            <div className="mt-4 space-y-4 text-gray-700 leading-7">
                                <p>
                                    Tymor Technologies remote IT support delivers fast, secure assistance wherever you work.
                                    Our experts resolve issues quickly, reduce downtime, and keep your systems running smoothly.
                                </p>
                                <p>
                                    From troubleshooting and patching to software rollouts and user support, we handle it all
                                    without on site delays—saving time and money while boosting productivity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE – STRIP + 3 CARDS */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="uppercase font-bold text-white text-2xl sm:text-3xl md:text-4xl">
                        Why Choose Remote IT Support from Tymor Technologies?
                    </h2>
                    <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
                        We provide proactive support, rapid resolution, and measurable results—without onsite wait times.
                    </p>
                    <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
                        <Card
                            icon="🤝"
                            title="User Support"
                            body="Help desk with fast response for password resets, app issues, device help, and more."
                        />
                        <Card
                            icon="🛡️"
                            title="Proactive Monitoring"
                            body="24/7 monitoring, alerting, and patching to prevent incidents before they become outages."
                        />
                        <Card
                            icon="⚡"
                            title="Secure & Rapid Work"
                            body="Encrypted remote access tools ensure secure, same‑day fixes for most tickets."
                        />
                    </div>
                </div>
            </section>

            {/* WHAT ARE REMOTE SUPPORT SERVICES? (image + bullets) */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h3 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
                        What Are Remote Support Services?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/remote-support.webp" alt="Remote troubleshooting session" fill className="object-cover" />
                        </div>
                        <DotList
                            items={[
                                '<b>Troubleshooting & Fixes</b>: Resolve OS, application, and network issues fast.',
                                '<b>Patch Management</b>: Keep devices secure with scheduled updates.',
                                '<b>Software Rollouts</b>: Deploy and configure apps remotely at scale.',
                                '<b>Account & Access</b>: Password resets, MFA support, permissions.',
                                '<b>Endpoint Security</b>: AV/EDR, device encryption, and policy enforcement.',
                                '<b>User On/Offboarding</b>: Provisioning, deprovisioning, and checklists.'
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* BENEFITS – DARK GRID */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4">
                    <h3 className="uppercase font-bold text-white text-2xl sm:text-3xl md:text-4xl mb-8 text-center">
                        The Benefits of a Remote IT Support Team
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            ['Cost Savings', 'Reduce onsite visits and travel delays while increasing ticket throughput.'],
                            ['Increased Uptime', 'Faster detection and resolution prevent outages and lost revenue.'],
                            ['Advanced Security', 'Continuous patching and monitoring reduce attack surface and risk.'],
                            ['24/7 Support', 'Round‑the‑clock coverage keeps teams productive whenever they work.'],
                            ['Better User Experience', 'Quick help drives satisfaction and adoption of tools.'],
                            ['Scalable Service', 'Add coverage as you grow—without hiring delays.']
                        ].map(([title, body], i) => (
                            <div key={i} className="bg-white rounded-lg shadow-lg border border-gray-200 p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                                <h4 className="font-semibold text-sm mb-1">{title}</h4>
                                <p className="text-xs leading-5 text-gray-600">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FLEXIBLE & CRITICAL SUPPORT – 3 PILLS + IMAGE */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h3 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl">
                        Flexible and Critical Support from Tymor Technologies
                    </h3>
                    <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Pill title="Continuous Coverage" text="Support that matches your operating hours—up to 24/7." />
                            <Pill title="High Availability" text="Redundancy and SLAs aligned with your business risk." />
                            <Pill title="Application Support" text="From SaaS to on‑prem apps, we troubleshoot and optimize." />
                            <Pill title="Secure Remote Tools" text="Encrypted access and audited actions for compliance." />
                        </div>
                        <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/remote-it-support-services.webp" alt="Remote agents assisting users" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW TYMOR CAN HELP – image + list */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/seobw.webp" alt="Analyst desk with SEO and analytics" fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl mb-3">
                                How Tymor Technologies Can Help
                            </h3>
                            <DotList
                                items={[
                                    'Service desk with <b>measurable SLAs</b> and <b>clear escalation paths</b>.',
                                    '<b>Device lifecycle</b>: enrollment, policy, patching, asset tracking.',
                                    '<b>M365/Google Workspace</b> admin, backups, and security hardening.',
                                    '<b>Vendor coordination</b> for ISPs, SaaS, and third‑party apps.',
                                    '<b>Reporting & Analytics</b> on tickets, endpoints, risk, and uptime.'
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW TYMOR CAN HELP – image + list */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                        Remote IT Support Keeps Businesses Running
                    </h2>
                    <p className="max-w-4xl mx-auto text-gray-700 leading-7">
                        IT services are often overwhelmed, delaying responses to your needs. Remote IT support solves
                        problems without the need for onsite visits. The next time your staff faces an issue, contact
                        us about our remote managed IT support services. Our team is ready to help solve issues
                        remotely, saving your organization time and money.
                    </p>
                </div>
            </section>

            {/* CASE STUDY */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div>
                            <h3 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl">
                                Tymor Technologies Remote IT Support Case Study
                            </h3>
                            <div className="mt-3 text-sm text-gray-700 leading-6">
                                <p><b>Industry:</b> Marketing Analytics</p>
                                <p><b>Location:</b> Multi‑site</p>
                                <p className="mt-2">
                                    The client needed reliable, scalable support during rapid growth. Tymor implemented a 24/7 service desk,
                                    automated patching, and endpoint monitoring across locations—cutting average resolution times by 41%.
                                </p>
                            </div>
                        </div>
                        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/case-studies.webp" alt="Case study charts" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>


            {/* SOLUTIONS IMPLEMENTED – dark band with 2x2 cards */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-center uppercase font-bold text-white text-2xl sm:text-3xl md:text-4xl">
                        Solutions Implemented
                    </h2>
                    <p className="text-center text-gray-300 mt-2">
                        Tymor Technologies developed and executed a comprehensive remote IT support strategy tailored to the client’s needs.
                    </p>

                    <div className="mt-10 grid md:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <h3 className="uppercase font-bold text-lg mb-3">
                                1. Advanced Remote Monitoring and Management
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-700 leading-6">
                                <li className="flex gap-3">
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                    <div>
                                        <b>24/7 Monitoring</b><br />
                                        Continuous monitoring of critical apps and systems to detect and address issues before they impact operations.
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                    <div>
                                        <b>Automated Alerts & Incident Response</b><br />
                                        Immediate alerts for anomalies with rapid response protocols to minimize downtime.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <h3 className="uppercase font-bold text-lg mb-3">
                                2. System Modernization and Regular Maintenance
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-700 leading-6">
                                <li className="flex gap-3">
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                    <div>
                                        <b>Comprehensive System Audit</b><br />
                                        In‑depth review to identify outdated software/hardware and performance bottlenecks.
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                    <div>
                                        <b>Automated Updates & Upgrades</b><br />
                                        Scheduled updates to keep systems on the latest secure versions.
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                    <div>
                                        <b>Routine Maintenance</b><br />
                                        Regular sessions to optimize performance, apply patches, and perform necessary repairs.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <h3 className="uppercase font-bold text-lg mb-3">
                                3. Security Enhancements
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-700 leading-6">
                                <li className="flex gap-3">
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                    <div>
                                        <b>Multi‑Layered Security</b><br />
                                        Next‑gen firewalls, IDS/IPS, and advanced antivirus for layered protection.
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                    <div>
                                        <b>Data Encryption & Access Controls</b><br />
                                        Encryption in transit/at rest and strict least‑privilege access.
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                    <div>
                                        <b>Compliance Management</b><br />
                                        Alignment with industry regulations and recurring compliance audits.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <h3 className="uppercase font-bold text-lg mb-3">
                                4. Scalable IT Solutions
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-700 leading-6">
                                <li className="flex gap-3">
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                    <div>
                                        <b>Cloud Migration</b><br />
                                        Moved key apps and data to the cloud for scalable, cost‑effective resources.
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                    <div>
                                        <b>Customized Support Plans</b><br />
                                        Tailored IT plans aligned to business objectives with flexible scaling.
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                    <div>
                                        <b>Resource Optimization</b><br />
                                        Efficient allocation to eliminate bottlenecks and enhance performance.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESULTS – images + bullet lists */}

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">

                    {/* Left side images */}

                    <div className="space-y-6">
                        <Image src="/itServices/case-studies.webp" alt="Case study charts" width={1000} height={1000} className="object-cover rounded-2xl overflow-hidden shadow" />
                        <Image src="/itServices/how-to-use-case-studies-in-your-employee-training-sessions.webp" alt="Case study charts" width={1000} height={1000} className="object-cover rounded-2xl overflow-hidden shadow" />
                    </div>

                    {/* Right side content */}
                    <div>
                        <h2 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
                            Results
                        </h2>
                        <ul className="space-y-5 text-gray-700 text-sm leading-6">

                            <li className="flex gap-3">
                                <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                <div>
                                    <b>Significant Reduction in Downtime</b><br />
                                    Application downtime was reduced by 95%, allowing uninterrupted operations and improved client service.
                                </div>
                            </li>

                            <li className="flex gap-3">
                                <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                <div>
                                    <b>Improved System Performance</b><br />
                                    Modernization efforts led to faster, more reliable applications, enhancing overall productivity.
                                </div>
                            </li>

                            <li className="flex gap-3">
                                <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                <div>
                                    <b>Enhanced Security Posture</b><br />
                                    No security breaches were reported post-implementation, and full compliance with relevant financial regulations was achieved.
                                </div>
                            </li>

                            <li className="flex gap-3">
                                <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                <div>
                                    <b>Scalable Infrastructure</b><br />
                                    IT infrastructure scaled efficiently with growth, supporting new services without performance issues.
                                </div>
                            </li>

                            <li className="flex gap-3">
                                <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: '#FF4500' }} />
                                <div>
                                    <b>Cost Savings and Efficiency</b><br />
                                    Cost savings achieved by outsourcing IT support and avoiding in-house team expenses, while benefiting from Tymor Technologies’ expertise.
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </section>


            {/* TESTIMONIAL – dark band */}
            {/* Client Testimonial (drop this into your page JSX) */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="uppercase font-bold text-white text-2xl sm:text-3xl md:text-4xl">
                        Client Testimonial
                    </h2>

                    <p className="mt-6 max-w-5xl mx-auto text-gray-200 leading-8">
                        “Tymor Technologies has been instrumental in transforming our IT operations. Their proactive
                        approach and expert solutions have not only kept our applications running smoothly and securely
                        but also allowed us to scale our business effectively. We can now focus on delivering exceptional
                        financial services without worrying about IT issues.”
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-4">
                        {/* Avatar with Next.js Image */}
                        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/10">
                            <Image
                                src="/testimonial-avatar.jpg"
                                alt="Client avatar"
                                width={56}
                                height={56}
                                className="w-full h-full object-cover"
                                priority={false}
                            />
                        </div>

                        <div className="text-left">
                            <div className="font-semibold" style={{ color: '#FF4500' }}>CEO</div>
                            <div className="text-gray-300 text-sm">Financial Services Firm</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <p className="text-lg text-gray-800 leading-8">
                        Tymor Technologies’ remote IT support solutions provided the financial services firm with the
                        expertise and tools needed to maintain and scale their corporate applications effectively. By
                        addressing the firm’s specific challenges with innovative and tailored solutions, Tymor
                        Technologies demonstrated its commitment to client success and IT excellence.
                    </p>
                    <p className="mt-4 text-lg leading-8">
                        <a href="/contact-us" className="text-orange-500 hover:underline">
                            Contact Tymor Technologies
                        </a>{" "}
                        for more information.
                    </p>
                </div>
            </section>


        </div>
    )
}
