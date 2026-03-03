import { useState } from 'react'
import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button/Button'
import Image from 'next/image'

const SpotlightCard = ({ children, className }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPosition({ x, y });
        setOpacity(0.6);
    };

    const handleMouseEnter = () => setOpacity(0.6);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden group ${className}`}
        >
            <div
                className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255, 69, 0, 0.3), transparent 70%)`,
                    opacity,
                }}
            />
            {children}
        </div>
    );
};

export default function Services() {
    const services = [
        {
            title: "Managed IT Services",
            image: "/home/ManagedITServices.webp",
            link: "managed-it-services"
        },
        {
            title: "Co-Managed IT Support",
            image: "/home/Co-ManagedITSupport.webp",
            link: "co-managed-it-services"
        },
        {
            title: "Application Security",
            image: "/home/ApplicationSecurity.webp",
            link: "application-security"
        },
        {
            title: "Network Security",
            image: "/home/NetworkSecurity.webp",
            link: "network-security"
        },
        {
            title: "Machine Learning",
            image: "/machine-learning-1.webp",
            link: "machine-learning"
        },
        {
            title: "Endpoint Security",
            image: "/cybersSecurityServices/CurrentSituationExample.webp",
            link: "endpoint-security"
        },
        {
            title: "Remote IT Support",
            image: "/itServices/Remote-Reposition-Hero.webp",
            link: "remote-it-support"
        },
        {
            title: "Leverage AI Services",
            image: "/home/LeverageAIServices.webp",
            link: "ai-for-enterprises"
        },
        {
            title: "Total Backup Solutions",
            image: "/itServices/Data-Backup.webp",
            link: "managed-total-backup-solution"
        }
    ]

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 slide-up leading-tight">
                        IT SERVICES AND TECHNOLOGY SOLUTIONS
                    </h2>
                    <p className="glass-shimmer text-gray-400 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Our proactive approach to IT services keeps your systems and your people protected.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <SpotlightCard key={index} className="rounded-2xl border border-white/5 bg-zinc-900 shadow-2xl transition-all duration-500 hover:border-primary/30">
                            <Link
                                href={service.link}
                                className="block h-full w-full"
                            >
                                <div className="h-64 sm:h-72 lg:h-80 w-full relative overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 brightness-75 group-hover:brightness-100"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        priority={false}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent transition-opacity duration-500 opacity-60 group-hover:opacity-40" />

                                    {/* Text Content */}
                                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 leading-tight text-white group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                                        <div className="flex items-center gap-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            <span>Explore Solution</span>
                                            <span className="w-6 h-px bg-primary group-hover:w-10 transition-all duration-500"></span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
