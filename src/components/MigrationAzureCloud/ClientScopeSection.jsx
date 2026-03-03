import Image from "next/image";

export default function ClientScopeSection() {
    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
                    CLIENT: CONFIDENTIAL (CLIENT NAME)
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Left Content */}
                    <div>
                        <h3 className="text-4xl font-bold mb-4">SCOPE</h3>
                        <p className="mb-4">
                            Tymor Technologies successfully executed a comprehensive migration project for transitioning from
                            an on-premise network infrastructure to a cloud-based solution utilizing Azure Virtual Desktop (AVD)
                            and shared cloud storage.
                        </p>
                        <p>
                            This project encompassed the migration of critical data and implementation of managed services to ensure
                            seamless operations post-migration.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/projects/maxresdefault.webp" // save to /public/images
                            alt="Azure Virtual Desktop setup"
                            width={600}
                            height={350}
                            className="rounded-lg shadow-lg"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
