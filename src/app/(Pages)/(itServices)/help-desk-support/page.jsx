'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import {
    LifeBuoy, Clock, ShieldCheck, BadgeCheck, Wallet,
    Gauge, Shield, Users, Laptop, GraduationCap, Wifi,
    Wrench, Server, AppWindow
} from 'lucide-react';
import Heading from '@/components/ui/Heading/Heading';

// Note: Client component - metadata should be in layout.jsx

export default function HelpDeskSupport() {
    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
    const onSubmit = async (data) => { try { await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); reset(); alert('Thanks!'); } catch { alert('Try again.'); } };

    const card = 'rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-left';
    const pill = 'inline-block rounded-full px-3 py-1 text-sm font-medium bg-white/5 ring-1 ring-white/10';
    const itemHead = 'flex items-center gap-3';
    const bullet = 'h-2 w-2 rounded-full bg-[var(--color-primary)] mt-2.5 flex-shrink-0';

    return (
        <div className="bg-white text-black">
            <Heading heading={'Help Desk Support Service'}></Heading>
            {/* HERO (white) */}
            <section className=" bg-white text-black py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-start text-left">
                        <div className="relative order-1 md:order-none">
                            <Image
                                src="/itServices/customer_rep.webp"
                                alt="Help desk support"
                                width={820}
                                height={540}
                                className="rounded-2xl border border-neutral/10"
                                priority
                            />
                        </div>

                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                RELIABLE HELP DESK<br />SUPPORT SERVICE
                            </h1>
                            <h4 className="mt-6 font-semibold">Do you need more help desk support?</h4>
                            <p className="mt-3 text-black/70">
                                When your business is growing, your current IT support team might struggle to keep up with an
                                increasing list of tasks. As part of our Managed IT Services, Tymor Technologies offers a
                                US‑based service desk team available 24/7/365.
                            </p>
                            <p className="mt-3 text-black/70">
                                No matter the size of the problem, our help desk team is ready to keep your team happy
                                and productive!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLACK BAND TITLE + 3 CARDS */}
            <section className="bg-black text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    {/* Heading */}
                    <h2 className="uppercase tracking-[0.06em] font-bold text-[28px] sm:text-[36px] leading-tight">
                        Why Choose Tymor Technologies For<br />Help Desk Support?
                    </h2>

                    {/* Sub text */}
                    <p className="mt-4 text-white/80 max-w-4xl mx-auto">
                        Our mission is to be a proactive IT partner, providing your business with the support it needs to succeed.
                        Here’s what sets us apart:
                    </p>

                    {/* 3 Cards */}
                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {/* Card */}
                        <div className="rounded-xl bg-white text-black p-8 shadow-[0_12px_32px_rgba(0,0,0,0.18)] border border-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <div className="flex justify-center">
                                <svg className="h-20 w-20 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M9 9h6M8 13h8" />
                                </svg>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-center">
                                Our Help Desk Is Based in the United States
                            </h3>
                            <p className="mt-3 text-center text-black/70">
                                Our U.S.-based help desk is staffed with trained technicians who support your users and solve most problems on the spot.
                            </p>
                        </div>

                        {/* Card */}
                        <div className="rounded-xl bg-white text-black p-8 shadow-[0_12px_32px_rgba(0,0,0,0.18)] border border-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <div className="flex justify-center">
                                <svg className="h-20 w-20 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 7v6l3 3" />
                                </svg>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-center">
                                We Offer Support 24/7/365
                            </h3>
                            <p className="mt-3 text-center text-black/70">
                                Our round-the-clock support services ensure your users get the help they need when they need it.
                            </p>
                        </div>

                        {/* Card */}
                        <div className="rounded-xl bg-white text-black p-8 shadow-[0_12px_32px_rgba(0,0,0,0.18)] border border-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <div className="flex justify-center">
                                <svg className="h-20 w-20 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path d="M9 11l3 3L22 4" />
                                    <rect x="2" y="12" width="8" height="8" rx="2" />
                                </svg>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-center">
                                Proven Track Record of Success
                            </h3>
                            <p className="mt-3 text-center text-black/70">
                                We manage over 60,000 devices with more than 325 expert technicians closing 10,000+ tickets each month.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-8 items-stretch text-left">
                        {/* Left image */}
                        <div className="rounded-xl overflow-hidden">
                            {/* Next/Image recommended */}
                            <img
                                src="/itServices/customer_rep.webp-2.webp"
                                alt="Help desk team at work"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right light slab */}
                        <div className="rounded-xl bg-[#F3F5F7] p-8 md:p-10 border border-black/5">
                            <h3 className="uppercase tracking-[0.06em] font-bold text-[18px] md:text-[20px]">
                                What Are Help Desk Services?
                            </h3>
                            <p className="mt-3 text-black/70">
                                Your IT help desk should be a true technology partner, assisting your business
                                and employees anytime IT needs arise.
                            </p>
                            <p className="mt-3 text-black/70">
                                From answering questions and troubleshooting problems to helping you
                                prepare for new tech changes, your help desk partner should be your go‑to
                                resource for support.
                            </p>

                            <h3 className="mt-8 uppercase tracking-[0.06em] font-bold text-[18px] md:text-[20px]">
                                What Is a Help Desk?
                            </h3>
                            <p className="mt-3 text-black/70">
                                An IT help desk is staffed by technicians providing support to your internal
                                users. A remote help desk offers employees easily accessible, accurate, and
                                quick IT support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* BENEFITS GRID (white) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        HELP DESK OUTSOURCING BENEFITS
                    </h2>
                    <p className="max-w-3xl mx-auto text-black/70 mb-12">
                        Choosing an outsourced help desk for your IT support can improve ticket closing rates and save your business time and money.
                        Here are the biggest benefits of outsourcing your help desk services:
                    </p>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-black text-white rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-3">Save Money on IT Support</h3>
                            <p className="text-white/80 text-sm">
                                Outsourcing your help desk support reduces costs significantly compared to internal hires,
                                which come with overhead expenses like training, benefits, and equipment.
                                With outsourcing, you always have expert support at your fingertips.
                            </p>
                        </div>

                        <div className="bg-black text-white rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-3">Greater Efficiency</h3>
                            <p className="text-white/80 text-sm">
                                Internal IT staff often juggle multiple tasks, slowing down productivity.
                                Outsourcing provides a dedicated support team, freeing your internal team to focus on strategic initiatives.
                            </p>
                        </div>

                        <div className="bg-black text-white rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-3">Better Cybersecurity</h3>
                            <p className="text-white/80 text-sm">
                                Cyberattacks are increasingly sophisticated.
                                An outsourced help desk ensures you have a team trained in advanced cybersecurity protocols,
                                keeping your company and users safe.
                            </p>
                        </div>

                        <div className="bg-black text-white rounded-lg p-6 sm:col-span-2 lg:col-span-1">
                            <h3 className="font-bold text-lg mb-3">Support for Hybrid and Remote Workers</h3>
                            <p className="text-white/80 text-sm">
                                Hybrid and remote work options bring unique challenges.
                                Outsourcing ensures all employees get the support they need,
                                resulting in happier workers and better productivity.
                            </p>
                        </div>

                        <div className="bg-black text-white rounded-lg p-6 sm:col-span-2 lg:col-span-2">
                            <h3 className="font-bold text-lg mb-3">Relief for Your IT Experts</h3>
                            <p className="text-white/80 text-sm">
                                Outsourcing allows your internal IT experts to focus on their specialized skills
                                and align with your top priorities, rather than fielding support calls all day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* SERVICES (black) */}
            <section className="py-24 bg-black text-white" id="services">
                <div className="container mx-auto px-4 text-center">
                    {/* Heading + sub */}
                    <h2 className="uppercase tracking-[0.06em] font-bold text-[28px] md:text-[36px]">
                        Types of Help Desk Support Services Offered
                    </h2>
                    <p className="mt-3 text-white/70 max-w-4xl mx-auto">
                        Tymor Technologies offers comprehensive help desk services, ensuring you receive the support you need 24/7.
                        Our expert technicians resolve issues quickly and effectively. Here are some of the services we provide:
                    </p>

                    {/* Grid */}
                    <div className="mt-10 grid gap-8 lg:grid-cols-2 text-left max-w-6xl mx-auto">
                        {/* Item */}
                        <div className="rounded-lg bg-[#3a3a3a]/95 p-8 ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                            <div className="flex gap-4">
                                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-primary)]">
                                    <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                                </span>
                                <div>
                                    <h3 className="font-semibold">Software Support</h3>
                                    <p className="mt-2 text-sm text-white/80">
                                        We support email applications, operating systems, web browsers, office productivity suites, and more,
                                        ensuring smooth software rollouts and ongoing usability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-[#3a3a3a]/95 p-8 ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                            <div className="flex gap-4">
                                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-primary)]">
                                    <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                                </span>
                                <div>
                                    <h3 className="font-semibold">Training as a Service (TaaS)</h3>
                                    <p className="mt-2 text-sm text-white/80">
                                        Our Microsoft‑focused training delivers an on‑demand library to help employees stay proficient,
                                        including quizzes and exams.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-[#3a3a3a]/95 p-8 ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                            <div className="flex gap-4">
                                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-primary)]">
                                    <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                                </span>
                                <div>
                                    <h3 className="font-semibold">Network Support</h3>
                                    <p className="mt-2 text-sm text-white/80">
                                        We provide network support for in‑office, remote, and hybrid teams to maintain productivity
                                        and access to necessary resources.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-[#3a3a3a]/95 p-8 ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                            <div className="flex gap-4">
                                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-primary)]">
                                    <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                                </span>
                                <div>
                                    <h3 className="font-semibold">Hardware Support</h3>
                                    <p className="mt-2 text-sm text-white/80">
                                        Diagnose and resolve user issues, working with your internal IT team or third‑party vendors as needed.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-[#3a3a3a]/95 p-8 ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                            <div className="flex gap-4">
                                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-primary)]">
                                    <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                                </span>
                                <div>
                                    <h3 className="font-semibold">Remote Support</h3>
                                    <p className="mt-2 text-sm text-white/80">
                                        Our technicians can use remote access to quickly resolve issues, guiding users through the process step‑by‑step.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-[#3a3a3a]/95 p-8 ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                            <div className="flex gap-4">
                                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-primary)]">
                                    <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                                </span>
                                <div>
                                    <h3 className="font-semibold">Proprietary Application Support</h3>
                                    <p className="mt-2 text-sm text-white/80">
                                        We support your proprietary applications, helping users with frequent issues and escalating problems
                                        to internal teams when necessary.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* PRICING (white) */}
            <section className="py-24 bg-white text-black" id="pricing">
                <div className="container mx-auto px-4 text-center">
                    <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-start text-left">

                        {/* Left image */}
                        <div>
                            <img
                                src="/itServices/customer_rep.webp"  /* replace */
                                alt="Support center"
                                className="w-full rounded-xl border border-black/10 object-cover"
                            />
                        </div>

                        {/* Right content */}
                        <div>
                            <h2 className="uppercase tracking-[0.06em] font-bold text-[28px] md:text-[36px] leading-tight">
                                What Are the Costs of<br />Outsourced Help Desk<br />Services?
                            </h2>

                            <p className="mt-4 text-black/70">
                                Tymor Technologies offers competitive pricing for our help desk services:
                            </p>

                            {/* two mini packages */}
                            <div className="mt-6 grid sm:grid-cols-2 gap-6">
                                <div className="rounded-xl border border-black/10 bg-white p-6 text-center">
                                    <h3 className="font-semibold text-lg">Complete Package</h3>
                                    <p className="mt-3 text-sm text-black/70">
                                        Starts at (Add Link) per user, providing<br />
                                        comprehensive around‑the‑clock<br />
                                        support.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-black/10 bg-white p-6 text-center">
                                    <h3 className="font-semibold text-lg">Compliance Package</h3>
                                    <p className="mt-3 text-sm text-black/70">
                                        Starts at (Add Link)/month per user,<br />
                                        including enhanced security services<br />
                                        for industries with advanced<br />
                                        compliance requirements.
                                    </p>
                                </div>
                            </div>

                            <p className="mt-6 text-black/70">
                                Both packages include a comprehensive onboarding program, unlimited remote support, network monitoring and
                                management, backup and disaster recovery, and cybersecurity services like endpoint detection and response
                                and phishing prevention training.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}
