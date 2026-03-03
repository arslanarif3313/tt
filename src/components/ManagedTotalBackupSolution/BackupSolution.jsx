

import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

export default function BackupSolution() {
    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                {/* Left Image */}
                <div>
                    <Image
                        src="/itServices/backup.webp" // replace with your actual image path
                        alt="Backup Solution"
                        width={1000}
                        height={1000}
                        className="rounded-lg shadow-md"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-3xl  font-bold uppercase leading-snug mb-6">
                        Protect Your Business <br />
                        With Tymor Technologies' <br />
                        Total Backup Solution
                    </h2>

                    <p className="text-base md:text-lg text-base-content/80 mb-6">
                        In today’s digital age, safeguarding your data is more critical than
                        ever. Tymor Technologies offers a comprehensive backup solution
                        designed to keep your business data secure and accessible at all
                        times.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">

                            <CircleArrowRight className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <span className="font-bold">Automated Backups:</span>{" "}
                                Schedule regular backups to ensure your data is always up-to-date.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CircleArrowRight className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <span className="font-bold">Cloud Storage:</span> Secure your
                                data in the cloud, accessible from anywhere, anytime.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CircleArrowRight className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <span className="font-bold">Data Recovery:</span> Quick and
                                reliable data recovery to minimize downtime.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CircleArrowRight className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <span className="font-bold">Security Compliance:</span> Meet
                                industry standards and compliance requirements, including HIPAA,
                                GDPR, and more.
                            </div>
                        </li>
                    </ul>

                    <p className="mt-6 text-base md:text-lg text-base-content/80">
                        Don’t leave your business data at risk. Partner with Tymor
                        Technologies to protect what matters most.
                    </p>

                    <Link
                        href="/contact-us"
                        className="mt-4 inline-block text-primary hover:underline font-medium"
                    >
                        Click here for more information
                    </Link>
                </div>
            </div>
        </section>
    );
}
