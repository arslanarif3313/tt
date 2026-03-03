// app/network-monitoring-and-management/page.jsx  (or pages/network-monitoring-and-management.jsx)
import BenefitsNetworkMonitoring from '@/components/NetworkMonitoringManagement/BenefitsNetworkMonitoring'
import ManagedNetworkMonitoring from '@/components/NetworkMonitoringManagement/ManagedNetworkMonitoring'
import NetworkCaseStudy from '@/components/NetworkMonitoringManagement/NetworkCaseStudy'
import Testimonial from '@/components/NetworkMonitoringManagement/Testimonial'
import Heading from '@/components/ui/Heading/Heading'
import Image from 'next/image'

export const metadata = {
  title: "Network Monitoring & Management | 24/7 Network Security & Performance",
  description: "Proactive network monitoring and management services. 24/7/365 monitoring, threat detection, performance optimization, and downtime prevention. Keep your network secure.",
};

export default function Page() {
    const theme = { primary: '#FF4500', secondary: '#0CD5EA' }

    const Benefit = ({ title, text }) => (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
            <h4 className="font-semibold text-sm mb-1">{title}</h4>
            <p className="text-xs text-gray-600 leading-5">{text}</p>
        </div>
    )

    const BulletList = ({ items }) => (
        <ul className="space-y-3 text-sm text-gray-700 leading-6">
            {items.map((t, i) => (
                <li key={i} className="flex gap-3">
                    <span className="mt-2 w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: theme.primary }} />
                    <span dangerouslySetInnerHTML={{ __html: t }} />
                </li>
            ))}
        </ul>
    )

    return (
        <div className="bg-white">
            <Heading heading={'Network Monitoring and Management Services'}></Heading>
            
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        24/7 Network Monitoring & Management for Peak Performance
                    </h1>
                </div>
            </section>

            {/* HERO */}
            <ManagedNetworkMonitoring></ManagedNetworkMonitoring>

            {/* INTRO PARAGRAPH */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                        What is Network Monitoring & Management?
                    </h2>
                    <p className="  font-sans ">
                        Network monitoring and management services minimize downtime and maximize network security. This includes preventing downtime due to network errors, outdated systems, and hacker threats. Constant monitoring and data analysis enable Tymor Technologies to monitor your network continuously, addressing potential issues before they escalate.
                    </p>
                    <p className="  font-sans mt-5">
                        Network monitoring and management involve a team of experts using security software to monitor your systems and network. Cloud-based software reduces the need for additional hardware, providing quality cyber monitoring services without extra costs.
                    </p>
                    <p className="  font-sans mt-5">
                        Tymor Technologies employs various tools and techniques for remote network monitoring. Data collection and analysis help identify potential network issues early. Routine updates keep your network and systems secure, reducing vulnerabilities.
                    </p>

                </div>
            </section>

            {/* BLACK STRIP SERVICE LIST */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4 text-center text-white">
                    <h3 className="uppercase font-bold text-xl md:text-4xl mb-6">
                        Services Included in Tymor Technologies' Premium Network Service Monitoring:
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-black">
                        {[
                            'Data retention for up to one year',
                            'Forecasting using historical data to identify potential issues',
                            'Continuous monitoring of network devices, servers, storage, and applications',
                            'Insights based on forecasts and data analysis',
                            'Cloud-based security with minimal hardware requirements'
                        ].map((text, idx) => (
                            <div key={idx} className="bg-white text-xl rounded-lg shadow-sm border border-gray-200 p-4 leading-6">
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS GRID */}
            <BenefitsNetworkMonitoring></BenefitsNetworkMonitoring>

            {/* CASE STUDY IMPLEMENTATION & RESULTS */}
            <NetworkCaseStudy></NetworkCaseStudy>



            {/* TESTIMONIAL */}
            <Testimonial></Testimonial>

        </div>
    )
}
