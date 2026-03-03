

import Image from "next/image";
import ContactForm from "../ui/ContactForm/ContactForm";



export default function Contact() {


    return (
        <section id="contact" className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Layout: image and form — image first on mobile, form first on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                    {/* FORM */}
                    <div className="order-2 lg:order-1 bg-base-100 shadow-2xl rounded-2xl lg:rounded-3xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                        <div className="p-4 sm:p-6 lg:p-8 xl:p-10 slide-left">
                            <h2 className="glass-shimmer text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight">
                                Contact us
                            </h2>
                            <ContactForm />
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="order-1 lg:order-2 overflow-hidden rounded-lg lg:rounded-xl">
                        <Image
                            src="/contact-form.webp"
                            alt="Contact Team"
                            width={1200}
                            height={900}
                            className="w-full h-auto slide-right shadow-lg"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
