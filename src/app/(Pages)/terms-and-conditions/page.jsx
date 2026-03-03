import Heading from '@/components/ui/Heading/Heading'
import React from 'react'

export const metadata = {
  title: "Tymor Technologies – Terms & Conditions",
  description: "Tymor Technologies terms and conditions for IT services including managed IT, cloud solutions, cybersecurity, and technology consulting. Effective October 2025.",
};

export default function TermsAndConditions() {
    return (
        <div>
            <Heading heading={'Terms and Conditions'}></Heading>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Terms and Conditions – Tymor Technologies
                    </h1>
                </div>
            </section>

             <section className="py-5 text-black">
                <div className="px-4 text-center">
                    <p className="text-black-100 text-lg">
                        LAST UPDATED: OCTOBER, 2025
                    </p>
                </div>
            </section>


            <section className="py-16 bg-white">
                <div className="max-w-none px-4 sm:px-6 lg:px-8">
                    <div className="text-left">
                        <p className="text-lg text-gray-700 mb-8">
                            Welcome to Tymor Technologies. By accessing our website or using our services, you agree to comply with these Terms and Conditions. Please read them carefully.
                        </p>

                            <div className="space-y-8">
                                {/* Section 1 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Services</h2>
                                    <p className="text-gray-700 mb-4">Tymor Technologies provides IT services including but not limited to:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Database Development</li>
                                        <li>Cloud Native Development</li>
                                        <li>VoIP Solutions</li>
                                        <li>API Development</li>
                                        <li>Hologram & Immersive Experiences</li>
                                        <li>Custom IT Consulting</li>
                                    </ul>
                                </div>

                                {/* Section 2 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Services</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>You agree to use our services only for lawful purposes.</li>
                                        <li>You are responsible for maintaining the confidentiality of your account details.</li>
                                        <li>You may not misuse our website or services to transmit harmful code, spam, or engage in illegal activities.</li>
                                    </ul>
                                </div>

                                {/* Section 3 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>All content, logos, trademarks, software, and materials provided by Tymor Technologies remain our intellectual property.</li>
                                        <li>You may not copy, reproduce, or distribute our content without written permission.</li>
                                    </ul>
                                </div>

                                {/* Section 4 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payments and Billing</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Fees for services will be agreed upon before commencement of work.</li>
                                        <li>All invoices must be paid within the specified timeframe.</li>
                                        <li>Failure to pay may result in suspension of services.</li>
                                    </ul>
                                </div>

                                {/* Section 5 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Confidentiality</h2>
                                    <p className="text-gray-700">
                                        Both parties agree to keep all project-related and business information confidential unless required by law.
                                    </p>
                                </div>

                                {/* Section 6 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Tymor Technologies is not liable for any indirect, incidental, or consequential damages arising from the use of our services.</li>
                                        <li>While we strive for accuracy and uptime, we do not guarantee uninterrupted or error-free services.</li>
                                    </ul>
                                </div>

                                {/* Section 7 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
                                    <p className="text-gray-700">
                                        Our services may integrate with third-party platforms. We are not responsible for issues arising from third-party systems or providers.
                                    </p>
                                </div>

                                {/* Section 8 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                                    <p className="text-gray-700">
                                        We reserve the right to suspend or terminate services if you breach these Terms.
                                    </p>
                                </div>

                                {/* Section 9 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
                                    <p className="text-gray-700">
                                        These Terms shall be governed by the laws of Pennsylvania, United States, without regard to its conflict of law principles.
                                    </p>
                                </div>

                                {/* Section 10 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                                    <p className="text-gray-700">
                                        We may update these Terms at any time. Continued use of our services constitutes acceptance of the revised Terms.
                                    </p>
                                </div>

                                {/* Section 11 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                                    <p className="text-gray-700 mb-4">For questions about these Terms and Conditions, contact us at:</p>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <div className="space-y-2">
                                            <p className="text-gray-700">
                                                <strong>Company Email:</strong> <a href="mailto:info@tymortech.com" className="text-primary hover:underline">info@tymortech.com</a>
                                            </p>
                                            <p className="text-gray-700">
                                                <strong>Office Address:</strong> <a href="https://maps.google.com/maps?ll=40.18064,-75.276632&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=1166%20Dekalb%20Pike%20Blue%20Bell%2C%20PA%2019422%20USA" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">1166 Dekalb Pike, Blue Bell, PA 19422</a>
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mt-4">
                                        You can visit our <a href="/contact-us" className="text-primary hover:underline font-semibold">Contact Us</a> page or <a href="https://outlook.office365.com/book/TymorTechnologiesAppointment@Tymortech.com/?ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Book Your Slot</a> for more information.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
