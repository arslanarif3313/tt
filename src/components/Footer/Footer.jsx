"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
    const [isLoading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const { register, handleSubmit, reset } = useForm();
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            setSubmitStatus(null);

            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus('success');
                reset();
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            } else {
                setSubmitStatus('error');
                console.error('Error submitting newsletter - Status:', response.status);
                console.error('Error details:', result);
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 8000);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Error submitting newsletter - Exception:', error);
            console.error('Error message:', error.message);
            setTimeout(() => {
                setSubmitStatus(null);
            }, 8000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

            {/* Consultation CTA Section */}
            <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden group/cta">
                {/* Background with Pulse Glow */}
                <div className="absolute inset-0 bg-[#0E55A8] transition-colors duration-700 group-hover/cta:bg-[#0B4486]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>

                <div className="max-w-[1600px] mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href="https://outlook.office365.com/book/TymorTechnologiesAppointment@Tymortech.com/"
                        target="_blank"
                        className="inline-block relative overflow-hidden group/btn px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-2xl bg-black text-white transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl hover:shadow-primary/40 border border-white/10"
                    >
                        {/* Scanning Light Beam */}
                        <div className="absolute inset-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>

                        <span className="glass-shimmer relative z-10 font-sans text-xl sm:text-2xl lg:text-3xl font-black tracking-wider block">
                            BOOK A CONSULTATION
                        </span>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                    </Link>

                    <p className="mt-6 text-white/60 text-sm sm:text-base font-medium tracking-wide uppercase">
                        Take the first step towards digital excellence
                    </p>
                </div>
            </section>


            <div className="bg-black">
                <footer className="max-w-[1600px] mx-auto text-white footer md:footer-horizontal p-4 sm:p-6 lg:p-10">
                    <aside className="w-full lg:w-auto">
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">SUBSCRIBE OUR NEWSLETTER</h3>

                        {/* Success/Error Messages */}
                        {submitStatus === 'success' && (
                            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                                Thank you for subscribing! You'll receive our newsletter updates.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                Failed to subscribe. Please try again later.
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row w-full max-w-md gap-2 sm:gap-3 font-sans font-bold text-sm sm:text-base lg:text-lg">
                            <input
                                {...register('email', { required: true })}
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-md bg-white text-black px-3 sm:px-4 py-2 sm:py-3 placeholder-black outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                                required
                                suppressHydrationWarning
                            />
                            {isLoading ?
                                <span className="loading loading-spinner text-primary self-center"></span>
                                :
                                <button
                                    type="submit"
                                    className="bg-primary px-4 sm:px-6 py-2 sm:py-3 rounded-md text-white hover:opacity-90 transition-all duration-300 text-sm sm:text-base font-bold whitespace-nowrap"
                                >
                                    SUBSCRIBE
                                </button>
                            }
                        </form>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed">
                            Get the best content by subscribing to our blog!
                        </p>

                        {/* Social Icons */}
                        <div className="mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4">
                            <SocialIcon href="https://www.facebook.com/tymortechnologies" label="Facebook">
                                <Facebook />
                            </SocialIcon>
                            <SocialIcon href="https://x.com/tymortech" label="Twitter">
                                <Twitter />
                            </SocialIcon>
                            <SocialIcon href="https://www.instagram.com/tymortechnologies/" label="Instagram">
                                <Instagram />
                            </SocialIcon>
                            <SocialIcon href="https://www.linkedin.com/company/tymor-technologies-company" label="LinkedIn">
                                <Linkedin />
                            </SocialIcon>
                        </div>

                    </aside>
                    <nav className="w-full lg:w-auto">
                        {/* Address */}
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-2
                        ">CORPORATE OFFICE</h3>
                        <div className="space-y-4 sm:space-y-5">
                            <div>
                                <p className="font-semibold mb-2 sm:mb-3">Tymor Technologies</p>

                                {/* USA Office */}
                                <div className="flex items-start gap-3 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
                                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-1" />
                                    <div className="space-y-1 font-sans">
                                        <p className="font-semibold">USA Office</p>
                                        <Link href="tel:+18888589667" className="text-sm sm:text-base hover:text-primary transition">
                                            Ph: +1-888-858-9667
                                        </Link>
                                        <p>1166 Dekalb Pike, Blue Bell, PA 19422</p>
                                    </div>
                                </div>

                                {/* Dubai Office */}
                                <div className="flex items-start gap-3 text-sm sm:text-base lg:text-lg">
                                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-1" />
                                    <div className="space-y-1 font-sans">
                                        <p className="font-semibold">Dubai Office</p>
                                        <Link href="tel:+97143197425" className="text-sm sm:text-base hover:text-primary transition">
                                            Ph: +971-04-319-7425
                                        </Link>
                                        <p>Level 41, Emirates Towers, Dubai, UAE<br /></p>
                                    </div>
                                </div>
                                {/* London Office */}
                                <div className="flex items-start gap-3 text-sm sm:text-base lg:text-lg mt-4">
                                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-1" />
                                    <div className="space-y-1 font-sans">
                                        <p className="font-semibold">London Office</p>
                                        {/* <Link href="tel:+97143197425" className="text-sm sm:text-base hover:text-primary transition">
                                            Ph: +971-04-319-7425
                                        </Link> */}
                                        <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.<br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav className="w-full lg:w-auto">
                        {/* Quick Links */}
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">QUICK LINKS</h3>
                        <ul className="space-y-2 sm:space-y-3 font-sans text-sm sm:text-base lg:text-lg">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/about-us">About Us</FooterLink>
                            <FooterLink href="/contact-us">Contact Us</FooterLink>
                            <FooterLink href="/blog">Blogs</FooterLink>
                            <FooterLink href="/careers">Careers</FooterLink>
                        </ul>
                    </nav>
                    <nav className="w-full lg:w-auto">
                        {/* Services */}
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">SERVICES</h3>
                            <ul className="space-y-2 sm:space-y-3 font-sans text-sm sm:text-base lg:text-lg">
                                <FooterLink href="/managed-it-services">Managed IT Services</FooterLink>
                                <FooterLink href="/co-managed-it-services">Co-Managed IT Services</FooterLink>
                                <FooterLink href="/help-desk-support">Help Desk Support Service</FooterLink>
                                <FooterLink href="/information-security-services">Information Security Services</FooterLink>
                                <FooterLink href="/natural-language-processing">Natural Language Processing</FooterLink>
                                <FooterLink href="/application-security">Application Security</FooterLink>
                            </ul>
                        </div>
                    </nav>

                </footer>
                {/* Bottom Bar */}
                <div className="border-t border-white text-white">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 gap-3 sm:gap-4">
                        <p className="text-sm sm:text-base lg:text-lg text-center md:text-left">
                            Copyright © {new Date().getFullYear()} Tymor Technologies. All Rights Reserved
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 text-sm sm:text-base lg:text-lg">
                            <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-300 text-center">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors duration-300 text-center">
                                Terms and Conditions
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}


function FooterLink({ href, children }) {
    return (
        <li>
            <Link href={href} className="hover:text-primary transition">
                {children}
            </Link>
        </li>
    );
}

function SocialIcon({ href, children, label }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full bg-white hover:bg-primary transition-all duration-300 transform hover:scale-110"
        >
            <div className="text-black *:h-4 *:w-4 sm:*:h-5 sm:*:w-5">{children}</div>
        </Link>
    );
}
