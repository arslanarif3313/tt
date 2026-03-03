"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

const itServices = [
    { label: "Managed IT Services", href: "/services/managed-it-services" },
    { label: "Co‑Managed IT Support", href: "/services/co-managed-it-support" },
    { label: "Database Development", href: "/database-development" },
    { label: "Cloud Native Development", href: "/cloud-native-development" },
    { label: "API Development", href: "/api-development" },
    { label: "VoIP Solutions", href: "/voip-solutions" },
    { label: "Security as a Service", href: "/services/security-as-a-service" },
    { label: "Application Security", href: "/services/application-security" },
    { label: "Data Security", href: "/data-security" },
    { label: "Cloud Security", href: "/cloud-security" },
    { label: "Cyber Threats & Risk Assessments", href: "/cyber-threats-and-risk-assessments" },
];

const projects = [
    { label: "Case Studies", href: "/projects/case-studies" },
    { label: "Industries", href: "/projects/industries" },
    { label: "Showcase", href: "/projects/showcase" },
];

const marketing = [
    { label: "SEO & Content", href: "/marketing/seo" },
    { label: "Email Campaigns", href: "/marketing/email" },
    { label: "Social Media", href: "/marketing/social" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-base-100/95 backdrop-blur">
            {/* GRID: logo | menu | ctas */}
            <div
                className="
          container mx-auto px-4 py-2
          grid grid-cols-2 lg:[grid-template-columns:auto_1fr_auto]
          items-center gap-3
        "
            >
                {/* LEFT: LOGO + MOBILE HAMBURGER */}
                <div className="flex items-center gap-2">
                    <button
                        className="btn btn-ghost lg:hidden"
                        aria-label="Open Menu"
                        onClick={() => setOpen((p) => !p)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    <Link href="/" className="flex items-center gap-3">
                        {/* Make sure this logo exists in /public */}
                        <Image
                            src="/logo-tymor.png"
                            alt="Tymor Technologies"
                            width={190}
                            height={44}
                            className="h-10 w-auto"
                            priority
                        />
                    </Link>
                </div>

                {/* CENTER: DESKTOP MENU */}
                <nav className="hidden lg:flex justify-center">
                    <ul className="menu menu-horizontal px-1 text-sm font-semibold">
                        {/* IT SERVICES */}
                        <li>
                            <details>
                                <summary className="gap-1">
                                    IT SERVICES <ChevronDown className="h-4 w-4" />
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-box shadow">
                                    {itServices.map((item) => (
                                        <li key={item.label}>
                                            <Link href={item.href}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>

                        {/* PROJECTS */}
                        <li>
                            <details>
                                <summary className="gap-1">
                                    PROJECTS <ChevronDown className="h-4 w-4" />
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-box shadow">
                                    {projects.map((item) => (
                                        <li key={item.label}>
                                            <Link href={item.href}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>

                        {/* MARKETING */}
                        <li>
                            <details>
                                <summary className="gap-1">
                                    MARKETING <ChevronDown className="h-4 w-4" />
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-box shadow">
                                    {marketing.map((item) => (
                                        <li key={item.label}>
                                            <Link href={item.href}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>

                        {/* ABOUT US */}
                        <li>
                            <Link href="/about">ABOUT US</Link>
                        </li>
                    </ul>
                </nav>

                {/* RIGHT: CTA GROUP — GRID */}
                <div
                    className="
            hidden lg:grid gap-2
            [grid-template-columns:repeat(3,minmax(0,1fr))]
            items-center
          "
                >
                    <Link
                        href="/contact-us"
                        className="btn rounded-md text-primary border-black hover:opacity-90 w-full"
                    >
                        Contact Us
                    </Link>

                    <Link
                        href="/book"
                        className="btn rounded-md bg-black text-primary border-black hover:opacity-90 w-full"
                    >
                        Book Your Slot
                    </Link>

                    <Link
                        href="/portal"
                        className="btn rounded-md bg-primary text-white border-primary hover:opacity-90 w-full"
                    >
                        CUSTOMER PORTAL
                    </Link>
                </div>
            </div>

            {/* MOBILE PANEL */}
            {open && (
                <div className="lg:hidden border-t border-base-200">
                    <ul className="menu p-4 gap-2 text-sm font-semibold">
                        {/* IT SERVICES */}
                        <li>
                            <details open>
                                <summary className="gap-2">
                                    IT SERVICES <ChevronDown className="h-4 w-4" />
                                </summary>
                                <ul className="pl-4">
                                    {itServices.map((item) => (
                                        <li key={item.label}>
                                            <Link href={item.href} onClick={() => setOpen(false)}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>

                        {/* PROJECTS */}
                        <li>
                            <details>
                                <summary className="gap-2">
                                    PROJECTS <ChevronDown className="h-4 w-4" />
                                </summary>
                                <ul className="pl-4">
                                    {projects.map((item) => (
                                        <li key={item.label}>
                                            <Link href={item.href} onClick={() => setOpen(false)}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>

                        {/* MARKETING */}
                        <li>
                            <details>
                                <summary className="gap-2">
                                    MARKETING <ChevronDown className="h-4 w-4" />
                                </summary>
                                <ul className="pl-4">
                                    {marketing.map((item) => (
                                        <li key={item.label}>
                                            <Link href={item.href} onClick={() => setOpen(false)}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>

                        {/* ABOUT */}
                        <li>
                            <Link href="/about" onClick={() => setOpen(false)}>
                                ABOUT US
                            </Link>
                        </li>

                        {/* MOBILE CTA GRID */}
                        {/* RIGHT: CTA GROUP — EQUAL WIDTH, SAME HEIGHT, WRAP, CENTERED */}
                        <div
                            className="
    hidden lg:grid gap-3
    grid-cols-3
    items-stretch
    w-full max-w-[1100px]
  "
                        >
                            {/* CTA 1 */}
                            <Link
                                href="/contact-us"
                                className="
      rounded-md bg-black text-primary border-black hover:opacity-90
      flex items-center justify-center text-center
      h-12 px-6
      !uppercase tracking-[0.18em] font-bold
      leading-tight
    "
                            >
                                Contact Us
                            </Link>

                            {/* CTA 2 (can wrap to 2 lines) */}
                            <Link
                                href="/book"
                                className="
      rounded-md bg-black text-primary border-black hover:opacity-90
      flex items-center justify-center text-center
      h-12 px-6
      !uppercase tracking-[0.18em] font-bold
      leading-tight
      whitespace-normal
    "
                            >
                                CHAOS TO CONTROL—BOOK YOUR SPOT
                            </Link>

                            {/* CTA 3 */}
                            <Link
                                href="/portal"
                                className="
      rounded-md bg-primary text-white border-primary hover:opacity-90
      flex items-center justify-center text-center
      h-12 px-6
      !uppercase tracking-[0.18em] font-bold
      leading-tight
    "
                            >
                                CUSTOMER PORTAL
                            </Link>
                        </div>

                    </ul>
                </div>
            )}
        </header>
    );
}