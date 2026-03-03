"use client";

import Link from "next/link";

export default function ResultsAndContact() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">

                {/* Results */}
                <div className="max-w-5xl">
                    <h3 className="text-lg font-semibold mb-3">Results:</h3>
                    <p className="text-base mb-4">
                        Within six months, ABC Electronics saw a significant improvement in their SEO performance:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-base">
                        <li>50% increase in organic traffic</li>
                        <li>35% increase in keyword rankings for target keywords</li>
                        <li>40% increase in online sales</li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="max-w-6xl mt-10">
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <p className="text-base leading-relaxed">
                        Ready to elevate your online presence and achieve higher search engine rankings?
                        Let Tymor Technologies help you with our expert SEO strategic solutions.{" "}
                        <Link href="https://outlook.office365.com/book/TymorTechnologiesAppointment@Tymortech.com/?ismsaljsauthenabled=true" target="_blank" className="text-primary hover:underline">
                            Click here for more information
                        </Link>{" "}
                        or{" "}
                        <Link href="/contact-us" className="text-primary hover:underline">
                            contact us
                        </Link>{" "}
                        now to set up an appointment.
                    </p>
                </div>

            </div>
        </section>
    );
}
