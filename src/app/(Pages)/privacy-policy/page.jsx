import Heading from '@/components/ui/Heading/Heading'
import React from 'react'

export const metadata = {
  title: "Tymor Technologies – Privacy Policy & Data Protection",
  description: "Read Tymor Technologies' privacy policy. Learn how we collect, use, and protect your data. GDPR, HIPAA & PCI DSS compliant IT services. Updated October 2025.",
};

export default function PrivacyPolicy() {
    return (
        <div>
            <Heading heading={'Privacy Policy'}></Heading>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Privacy Policy – How Tymor Technologies Protects Your Data
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
                            At Tymor Technologies, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your information when you visit our website, use our services, or interact with us.
                        </p>

                            <div className="space-y-8">
                                {/* Section 1 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                                    <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li><strong>Personal Information</strong> – Name, email address, phone number, company name, job title, and billing details when you contact us or purchase our services.</li>
                                        <li><strong>Technical Information</strong> – IP address, browser type, device information, and cookies when you visit our website.</li>
                                        <li><strong>Usage Data</strong> – Information on how you interact with our services, including preferences and settings.</li>
                                    </ul>
                                </div>

                                {/* Section 2 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                                    <p className="text-gray-700 mb-4">We use your information to:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Provide and improve our IT services (Database Development, Cloud Native Development, VoIP Solutions, API Development, Hologram & Immersive Solutions).</li>
                                        <li>Respond to your inquiries and support requests.</li>
                                        <li>Process transactions and billing.</li>
                                        <li>Send relevant updates, newsletters, and promotional offers (you can opt out anytime).</li>
                                        <li>Ensure security, prevent fraud, and comply with legal obligations.</li>
                                    </ul>
                                </div>

                                {/* Section 3 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing of Information</h2>
                                    <p className="text-gray-700 mb-4">We do not sell your personal information. We may share your information with:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Trusted third-party service providers (e.g., hosting, payment processing, analytics).</li>
                                        <li>Legal authorities if required by law or to protect our rights.</li>
                                        <li>Business partners, only when necessary to deliver joint solutions.</li>
                                    </ul>
                                </div>

                                {/* Section 4 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
                                    <p className="text-gray-700">
                                        Our website uses cookies and similar tools to improve user experience, analyze trends, and personalize content. You can manage cookie preferences through your browser.
                                    </p>
                                </div>

                                {/* Section 5 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                                    <p className="text-gray-700">
                                        We implement strict technical and organizational measures to protect your data from unauthorized access, alteration, or disclosure.
                                    </p>
                                </div>

                                {/* Section 6 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                                    <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Access, update, or delete your personal data.</li>
                                        <li>Opt-out of marketing communications.</li>
                                        <li>Request data portability.</li>
                                        <li>Lodge a complaint with a data protection authority.</li>
                                    </ul>
                                </div>

                                {/* Section 7 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retention of Data</h2>
                                    <p className="text-gray-700">
                                        We retain personal data only as long as necessary for business or legal purposes.
                                    </p>
                                </div>

                                {/* Section 8 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
                                    <p className="text-gray-700">
                                        We may update this Privacy Policy from time to time. Updates will be posted on this page with the "Last Updated" date.
                                    </p>
                                </div>

                                {/* Section 9 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                                    <p className="text-gray-700 mb-4">For questions about this Privacy Policy, contact us at:</p>
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
