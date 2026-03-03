

import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import ContactForm from "../ui/ContactForm/ContactForm";





export default function Contact() {


    return (
        <>
            {/* Introductory SEO Content Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Contact Tymor Technologies - Your Trusted IT Partner
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            At Tymor Technologies, we're committed to providing exceptional IT services including Managed IT Services, 
                            Cloud Solutions, Cybersecurity, AI Integration, Database Development, and VoIP Solutions. Whether you're 
                            looking to transform your IT infrastructure, enhance security, or leverage cutting-edge AI technologies, 
                            our team of experts is here to help.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            We understand that every business has unique technology needs. That's why we offer personalized consultations 
                            to understand your challenges and develop tailored solutions. Our 24/7/365 support ensures your business stays 
                            operational around the clock, minimizing downtime and maximizing productivity.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Reach out to us today through any of the convenient methods below. Our team typically responds within 
                            one business hour during office hours (Monday-Friday, 8 AM - 6 PM EST), and our emergency support line 
                            is always available for urgent matters. Schedule a free consultation to discover how we can help your 
                            business thrive in the digital age.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 lg:grid-cols-2 ">
                    {/* LEFT PANEL */}
                    <div className="rounded-2xl bg-black text-white p-8 md:p-10 ">
                        <h3 className="text-xl md:text-2xl font-bold text-center">
                            Ready To Get Started?
                        </h3>

                        <div className="mt-5 flex items-center justify-center gap-3 text-sm md:text-base ">
                            <Phone className="text-primary " />
                            <span className="font-semibold">Call us 24/7/365</span>
                        </div>

                        {/* Phone numbers */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10 text-xl text-center">
                            <div>
                                <p className="font-semibold text-primary">Toll Free</p>
                                <Link href="tel:+18888589667" className="hover:text-primary transition">1-888-858-9667</Link>
                            </div>

                            <div>
                                <p className="font-semibold text-primary">Florida</p>
                                <Link href="tel:+19548001168" className="hover:text-primary transition">954-800-1168</Link>
                            </div>

                            <div>
                                <p className="font-semibold text-primary">Pennsylvania</p>
                                <Link href="tel:+12152406795" className="hover:text-primary transition">215-240-6795</Link>
                            </div>

                            <div>
                                <p className="font-semibold text-primary">Illinois</p>
                                <Link href="tel:+13125886965" className="hover:text-primary transition">312-588-6965</Link>
                            </div>

                            <div>
                                <p className="font-semibold text-primary">California</p>
                                <Link href="tel:+12133442264" className="hover:text-primary transition">213-344-2264</Link>
                            </div>

                            <div>
                                <p className="font-semibold text-primary">Georgia</p>
                                <Link href="tel:+14046660669" className="hover:text-primary transition">404-666-0669</Link>
                            </div>

                            <div>
                                <p className="font-semibold text-primary">Texas</p>
                                <Link href="tel:+15126493990" className="hover:text-primary transition">512-649-3990</Link>
                            </div>

                            <div>
                                <p className="font-semibold text-primary">North Carolina</p>
                                <Link href="tel:+17047555315" className="hover:text-primary transition">704-755-5315</Link>
                            </div>

                            <div>
                                <p className="font-semibold text-primary">New York</p>
                                <Link href="tel:+16464756995" className="hover:text-primary transition">646-475-6995</Link>
                            </div>

                            <div>
                                <p className="font-semibold text-primary">Colorado</p>
                                <Link href="tel:+17207763336" className="hover:text-primary transition">720-776-3336</Link>
                            </div>

                            <div className="sm:col-span-2">
                                <p className="font-semibold text-primary">Dubai</p>
                                <Link href="tel:+97143197425" className="hover:text-primary transition block">+971-04-319-7425</Link>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mt-10 text-center  text-xl">
                            <p className="f text-white font-bold text-xl">Email us on</p>
                            <Link href="mailto:info@tymortech.com" className="text-primary wrap-break-word hover:underline transition">
                                info@tymortech.com
                            </Link>

                        </div>

                        {/* Address */}
                        <div className="mt-8 text-center text-xl">
                            <p className="font-bold">Corporate Office</p>
                            
                            {/* USA Office */}
                            <div className="mt-4">
                                <p className="font-semibold text-primary">USA Office</p>
                                <p> 1166 Dekalb Pike, Blue Bell, PA 19422 </p>
                            </div>

                            {/* Dubai Office */}
                            <div className="mt-4">
                                <p className="font-semibold text-primary">Dubai Office</p>
                               <p>Level 41, Emirates Towers, Dubai, UAE</p>
                            </div>

                            {/* London Office */}
                            <div className="mt-4">
                                <p className="font-semibold text-primary">London Office</p>
                               <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div>
                        <ContactForm></ContactForm>

                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
