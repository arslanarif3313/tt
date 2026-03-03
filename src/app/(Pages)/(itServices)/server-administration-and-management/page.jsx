// app/server-administration-and-management/page.jsx
// or pages/server-administration-and-management.jsx
import Image from 'next/image'
import Heading from "@/components/ui/Heading/Heading"
import ServerManagementServices from '@/components/ServerAdministrationAndManagement/ServerManagementServices'
import MultiplePlatforms from '@/components/ServerAdministrationAndManagement/MultiplePlatforms'


export default function ServerAdministrationAndManagementPage() {




    return (
        <div className="bg-white">
            <Heading
                heading={'Administration and Management'}
            />
            {/* HERO */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image
                                src="/itServices/Utilizing-Google-Cloud-and-AI-Advantage.webp"
                                alt="Cloud and server dashboard"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div>
                            <h1 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
                                24x7 Support with a<br />Managed Service Provider
                            </h1>
                            <h3 className="mt-3 text-xs font-bold">Our Support Makes Managing Servers Efficient</h3>
                            <div className="mt-4 space-y-4 font-sans">
                                <p>
                                    Tymor Technologies offers comprehensive support to help you minimize downtime and manage servers more efficiently. With years of experience and a team of highly skilled technicians ready to assist you at any time, Tymor Technologies provides cutting-edge managed IT services and support for businesses of all sizes.
                                </p>
                                <p>
                                    We assist in setting up and securing servers, ensuring your business operates efficiently while minimizing risks. By thoroughly understanding your business, its risks, and its needs, our server administration services help you maintain vigilant oversight of your servers and maximize efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* BLACK STRIP INTRO SERVICE CARDS*/}
            <ServerManagementServices></ServerManagementServices>
            {/* MULTIPLE PLATFORMS */}
            <MultiplePlatforms></MultiplePlatforms>

        </div>
    )
}
