

import Link from "next/link";

export default function ContactSection() {
    return (
        <section className="py-24 bg-gray-500 text-center text-white">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
                    CONTACT US
                </h2>

                {/* Description */}
                <p className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
                    Ready to boost your online visibility and drive targeted traffic to your website?
                    Let Tymor Technologies help you achieve your digital marketing goals with our expert keyword research services.{" "}
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
        </section>
    );
}
