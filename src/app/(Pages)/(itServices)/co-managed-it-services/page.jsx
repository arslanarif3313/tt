
import CostSavingsOverview from "@/components/CoManagedITServices/CostSavingsOverview";
import Heading from "@/components/ui/Heading/Heading";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Co-Managed IT Services for Business Teams – Tymor Technologies",
  description: "Extend your IT team's capabilities with co-managed IT services. Fill skill gaps, reduce burnout, and improve efficiency without hiring additional full-time staff.",
};

export default function CoManagedITServices() {
    return (
        <div >
            <Heading heading={'Co-Managed IT Services'}></Heading>
            
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Co-Managed IT Services to Empower Your Internal IT Team
                    </h1>
                </div>
            </section>

            {/* HERO: Case Study teaser (white) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 start gap-10">

                        {/* Left Image */}
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                src="/itServices/AdobeStock.webp"
                                alt="Managed IT Service"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="font-bold text-[26px] md:text-[34px] leading-tight text-left">
                                TYmor Technologies <br /> Co-Managed IT Services Case Studies
                            </h2>
                            <p className="mt-4 text-black/80 text-left">
                                When a fast-growing architecture firm’s IT team struggled to keep up,
                                they turned to Tymor Technologies for additional support.
                            </p>
                            <div className="mt-6 text-left" style={{ display: 'none' }}>
                                <a
                                    href="#"
                                    className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 transition"
                                >
                                    READ THE CASE STUDY
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            {/* Black section */}
            <section className="py-16 bg-black text-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="font-bold text-[26px] md:text-[34px] leading-tight uppercase">
                        WHAT IS CO-MANAGED IT?
                    </h2>
                    <p className="mt-6 text-white/90">
                        Co-managed IT allows your internal IT team to outsource tasks they lack time for or
                        the skill set to handle to an experienced third-party IT services provider. Think of
                        it as filling in the gaps with an extended team approach, without needing to hire,
                        train, and manage additional headcount.
                    </p>
                </div>
            </section>
            {/* BLACK BAND: What is Co‑Managed IT? */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    {/* Heading */}
                    <h2 className="text-center font-bold uppercase text-[26px] md:text-[34px] tracking-tight mb-10">
                        What Co-Managed IT Services Does Tymor Technologies Offer?
                    </h2>

                    {/* Content */}
                    <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                        {/* Left Image */}
                        <div className="relative w-full h-[400px] lg:h-full rounded-xl overflow-hidden">
                            <Image
                                src="/itServices/iStock.webp"
                                alt="Help desk support"
                                width={820}
                                height={540}
                                className="rounded-2xl border border-neutral/10"
                                priority
                            />
                        </div>

                        {/* Right Content */}
                        <div className="bg-[#f7f7f7] p-8 md:p-10 rounded-xl">
                            <p className="text-black/80 mb-6">
                                Every organization has unique strengths and weaknesses in IT. Tymor
                                Technologies provides a wide range of co-managed IT services to
                                ensure a customized support plan that meets your business needs.
                                Here’s a short list of what we offer:
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[var(--color-primary)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">Collaborating with Your Team</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[var(--color-primary)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">Help Desk Support</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[var(--color-primary)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">Onboarding and Offboarding</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[var(--color-primary)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">Software Licensing and Renewals</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[var(--color-primary)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">Network Management and Monitoring</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[var(--color-primary)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">Backup and Disaster Recovery</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[var(--color-primary)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">Software Patches and Upgrades</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[var(--color-primary)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">Cybersecurity</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[var(--color-primary)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">Documentation & Strategic Planning</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[var(--color-primary)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">Employee Training</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[var(--color-primary)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">Specialty Services</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-24 bg-base-200 text-base-content">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">

                        {/* Left Text */}
                        <div>
                            <h2 className="uppercase font-bold text-2xl md:text-4xl leading-tight">
                                What Are Co-Managed IT Service Providers?
                            </h2>

                            <p className="mt-6 opacity-80 text-base md:text-lg">
                                Co-managed IT service providers offer a wide range of supplemental IT and
                                technology support to meet your organization’s needs.
                            </p>
                            <p className="mt-4 opacity-80 text-base md:text-lg">
                                This support can include extended help desk support, cybersecurity, network
                                management, software renewals, and more.
                            </p>
                            <p className="mt-4 opacity-80 text-base md:text-lg">
                                With a significantly lower cost than doing everything in-house, co-managed IT
                                services can strengthen your IT department without breaking your budget.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className=" rounded-xl">

                            <Image
                                src="/itServices/Co-Managed-Blog-Banner-min2-.webp"
                                alt="Help desk support"
                                width={820}
                                height={540}
                                className="rounded-2xl border border-neutral/10"
                                priority
                            />
                        </div>

                    </div>
                </div>
            </section>
            {/* Why Choose */}
            <section className="py-24 bg-black text-white">
                <div className="container mx-auto px-4 text-center">
                    {/* Heading + lead */}
                    <h2 className="uppercase font-bold text-2xl md:text-4xl">
                        Why Choose a Co‑Managed IT Model for Your Business?
                    </h2>

                    <p className="mt-4 text-white/80 text-sm md:text-base max-w-3xl mx-auto">
                        Overworking your IT team can lead to errors and prevent them from focusing on strategic priorities.
                    </p>
                    <p className="mt-2 text-white/80 text-sm md:text-base max-w-4xl mx-auto">
                        With co‑managed IT services from Tymor Technologies, you’ll have the IT support needed to help your team and business thrive. Here’s why:
                    </p>

                    {/* Cards */}
                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-xl bg-white text-black p-6 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <h3 className="font-semibold text-base md:text-lg">Burnout</h3>
                            <p className="mt-3 text-black/70 text-sm">
                                Your in‑house IT department is overwhelmed—vacations, sick time, or unplanned leave often pose serious problems. The team shows signs of burnout.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white text-black p-6 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <h3 className="font-semibold text-base md:text-lg">Focus on Success</h3>
                            <p className="mt-3 text-black/70 text-sm">
                                You want your current team to focus on projects that drive the business forward, but daily tasks are bogging them down.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white text-black p-6 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <h3 className="font-semibold text-base md:text-lg">Maintenance Overload</h3>
                            <p className="mt-3 text-black/70 text-sm">
                                Important proactive maintenance isn't getting done. Urgent problems constantly distract your staff from critical patching, updates, and monitoring.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white text-black p-6 shadow-[0_8px_24px_rgba(0,0,0,0.18)] md:col-span-1 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <h3 className="font-semibold text-base md:text-lg">Rapid Growth</h3>
                            <p className="mt-3 text-black/70 text-sm">
                                Your business is growing quickly, but you lack the budget or time to hire additional headcount. You need short‑term help to scale up.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white text-black p-6 shadow-[0_8px_24px_rgba(0,0,0,0.18)] md:col-span-1 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <h3 className="font-semibold text-base md:text-lg">Hybrid Work Environment</h3>
                            <p className="mt-3 text-black/70 text-sm">
                                Most of your employees are remote, and you're concerned about having the right services in place, especially security policies and practices.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white text-black p-6 shadow-[0_8px_24px_rgba(0,0,0,0.18)] md:col-span-1 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                            <h3 className="font-semibold text-base md:text-lg">Lack of Expertise</h3>
                            <p className="mt-3 text-black/70 text-sm">
                                You have gaps in specific expertise, and finding the right talent is challenging and costly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-base-100 text-base-content">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT: image collage */}
                        <div>
                            <Image
                                src="/itServices/The Business Benefits.webp"
                                alt="Help desk support"
                                width={600}
                                height={400}
                                className="rounded-2xl border border-neutral/10"
                                priority
                            />
                        </div>

                        {/* RIGHT: content */}
                        <div className="text-left">
                            {/* Heading */}
                            <h2 className="text-2xl md:text-4xl font-bold uppercase leading-snug">
                                The Business Benefits<br />of a Co-Managed IT Model
                            </h2>

                            {/* Intro paragraph */}
                            <p className="mt-4 text-base md:text-lg">
                                Co-managed IT supplements your team’s gaps, letting you focus on long-term
                                goals and strategic projects. Here’s a list of pragmatic benefits:
                            </p>

                            {/* List */}
                            <ul className="mt-8 space-y-6">

                                <li className="flex items-start gap-3">

                                    <CircleArrowRight className="text-primary mt-1 w-4 h-4 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Cost Efficiency</p>
                                        <p className="text-sm md:text-base">
                                            Hiring, training, and retaining top IT talent is time-consuming and expensive.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary mt-1 w-4 h-4 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Risk Mitigation</p>
                                        <p className="text-sm md:text-base">
                                            Most organizations lack the budget for true cybersecurity expertise and enterprise-grade tools.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary mt-1 w-4 h-4 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Project Completion</p>
                                        <p className="text-sm md:text-base">
                                            In-house IT teams often struggle to keep up with day-to-day tasks, let alone new projects.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CircleArrowRight className="text-primary mt-1 w-4 h-4 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Access to Expertise and Tools</p>
                                        <p className="text-sm md:text-base">
                                            Solution architects, CIOs, CISOs, Microsoft and Apple technicians, cloud IT consultants,
                                            and more are available. Access high-end tools such as ITGlue and ConnectWise, round-the-clock
                                            security systems, cloud backup solutions, managed data centers, and more.
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-black text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-white">
                        WHAT DOES CO-MANAGED IT COST?
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-white max-w-4xl mx-auto">
                        Consider the cost of hiring all the resources you need versus purchasing a flexible suite
                        of services to fill the most needed gaps. Here are some average salaries and recommended
                        staffing levels, excluding overhead/labor burden (20%–30%) or technician utilization (70%).
                    </p>
                </div>
            </section>
            <CostSavingsOverview></CostSavingsOverview>
            <section className="py-24 bg-base-100 text-base-content">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 items-start gap-10">
                        {/* Left image */}
                        <div className="rounded-xl overflow-hidden border border-base-300">
                            <Image
                                src="/itServices/Comanaged_IT_Services_Strategic_Approach_IT_Management.webp"
                                alt="Managed IT Services"
                                width={860}
                                height={520}
                                className="w-full h-auto object-cover"
                                priority={false}
                            />
                        </div>

                        {/* Right content */}
                        <div className="text-left">
                            <h2 className="uppercase font-bold leading-tight text-2xl md:text-4xl">
                                How Tymor<br />
                                Technologies Can<br />
                                Help:
                            </h2>

                            <p className="mt-4 text-base md:text-lg opacity-90">
                                Tymor Technologies offers a Co‑Managed IT Support Desk that reduces staffing
                                needs, minimizes downtime, provides advanced technologies, and offers
                                predictable costs.
                            </p>

                            <p className="mt-4 text-base md:text-lg">
                                For more information on how we can save you money,&nbsp;
                                <a href="/contact-us" className="text-primary hover:underline">
                                    Contact Tymor Technologies
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
