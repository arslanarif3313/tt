"use client"

import { Menu, X, ChevronDown, Cloud, Cpu, Zap, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useState } from "react";

import Image from "next/image";
import Link from 'next/link';



export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
    const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
    const [isMarketingDropdownOpen, setIsMarketingDropdownOpen] = useState(false)
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between ">
                    {/* Logo */}
                    <Link href={'/'}>
                        <Image
                            src="/logo.png"
                            alt="Company Logo"
                            width={300}
                            height={100}

                        />
                    </Link>

                    {/* Desktop Navigation */}

                    <nav className="hidden md:flex items-center space-x-8 relative">
                        {/* IT SERVICES */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                        >
                            <Link
                                href="#"
                                className="font-serif text-gray-700 hover:text-primary transition-colors flex items-center"
                            >
                                IT SERVICES
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </Link>

                            {/* Mega Menu Dropdown */}
                            {isServicesDropdownOpen && (
                                <div className="absolute top-full left-0 w-screen max-w-4xl bg-white shadow-2xl border-t-4 border-[#FF4500] z-50 -ml-32">
                                    <div className="grid grid-cols-3 gap-8 p-8">
                                        {/* AI Services Column */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                                AI SERVICES
                                            </h3>
                                            <div className="space-y-3">
                                                <Link href="/machine-learning" className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/machine-learning.png" alt="Machine Learning" width={32} height={32} />
                                                    </div>
                                                    Machine Learning
                                                </Link>
                                                <Link href={'/speech-recognition'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/space-recoginition.png" alt="Speech Recognition" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Speech Recognition
                                                </Link>
                                                <Link href={'/'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group" style={{ display: 'none' }}>
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/robotics-automation-.png" alt="Robotic Process Automation" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Robotic Process Automation
                                                </Link>
                                                <Link href={'/natural-language-processing'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/natural-language-Processing.png" alt="Natural Language Processing" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Natural Language Processing
                                                </Link>
                                                <Link href={'/chatbots-and-virtual-assistants'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/chatboot.png" alt="Chatbots And Virtual Assistants" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Chatbots And Virtual Assistants
                                                </Link>
                                                <Link href={'/ai-for-enterprises'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/ai-service-for-small business.png" alt="AI Services For Enterprises" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    AI Services For Enterprises
                                                </Link>
                                            </div>
                                        </div>

                                        {/* IT Services Column */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                                IT SERVICES
                                            </h3>
                                            <div className="space-y-3">

                                                <Link href={'/team-member-integration'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                        <Image src="/assets/icons/nav-Icons/team-member-integration.png" alt="Team Member Integration" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Team Member Integration
                                                </Link>
                                                <Link href={"/it-asset-management"} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/it assetment-Management.png" alt="IT Assessment Management" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    IT Assessment Management
                                                </Link>
                                                <Link href={'/managed-total-backup-solution'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/Managed-TotalBackupSolution.png" alt="Managed Total Backup Solution" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Managed Total Backup Solution
                                                </Link>
                                                <Link href={'/network-monitoring-and-management'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/Network-MonitoringAndManagementServices.png" alt="Network Monitoring And Management Services" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Network Monitoring And Management Services
                                                </Link>
                                                <Link href={'/onsite-it-support'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/OnsiteITSupport.png" alt="OnSite IT Support" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    OnSite IT Support
                                                </Link>
                                                <Link href={'/server-administration-and-management'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/ServerAdministrationAndManagement.png" alt="Server Administration And Management" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Server Administration And Management
                                                </Link>
                                                <Link href={'/remote-it-support'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/RemoteITSupport.png" alt="Remote IT Support" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Remote IT Support
                                                </Link>
                                                <Link href={'/help-desk-support'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/ITHelpDesk.png" alt="IT Help Desk" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    IT Help Desk
                                                </Link>
                                                <Link href={'/co-managed-it-services'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/Co-ManagedITServices.png" alt="Co-Managed IT Services" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Co-Managed IT Services
                                                </Link>
                                                <Link href={'/managed-it-services'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/ManagedITServices.png" alt="Managed IT Services" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Managed IT Services
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Cyber Security Services Column */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                                CYBER SECURITY SERVICES
                                            </h3>
                                            <div className="space-y-3">
                                                <Link href={'/network-security'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/NetworkSecurity.png" alt="Network Security" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Network Security
                                                </Link>
                                                <Link href={'/mobile-security'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/MobileSecurity.png" alt="Mobile Security" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Mobile Security
                                                </Link>
                                                <Link href={'/endpoint-security'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/EndpointSecurit.png" alt="Endpoint Security" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Endpoint Security
                                                </Link>
                                                <Link href={'/data-security'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/DataSecurity.png" alt="Data Security" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Data Security
                                                </Link>
                                                <Link href={'/critical-infrastructure-security'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/CriticalInfrastructureSecurity.png" alt="Critical Infrastructure Security" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Critical Infrastructure Security
                                                </Link>
                                                <Link href={'/cloud-security'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/CloudSecurity.png" alt="Cloud Security" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Cloud Security
                                                </Link>
                                                <Link href={'/application-security'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/ApplicationSecurity.png" alt="Application Security" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Application Security
                                                </Link>
                                                <Link href={'/assessment-and-analysis-for-cybersecurity'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/AssessmentAndAnalysisForCybersecurity.png" alt="Assessment And Analysis For Cybersecurity" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Assessment And Analysis For Cybersecurity
                                                </Link>
                                                <Link href={'/cyber-threats-and-risk-assessments'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/CybersecurityThreat AndVulnerabilityAssessment.png" alt="Cyber Threats & Risk Assessments" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Cyber Threats & Risk Assessments
                                                </Link>
                                                <Link href={'/information-security-services'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                                        <Image src="/assets/icons/nav-Icons/InformationSecurityServices.png" alt="Information Security Services" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                    </div>
                                                    Information Security Services
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* PROJECTS */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                            onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                        >
                            <Link
                                href="#"
                                className="text-gray-700 hover:text-secondary transition-colors flex items-center"
                            >
                                PROJECTS
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </Link>

                            {/* Projects Mega Menu Dropdown */}
                            {isProjectsDropdownOpen && (
                                <div className="absolute top-full left-0 w-screen max-w-lg bg-white shadow-2xl border-t-4 border-[#FF4500] z-50 -ml-16">
                                    <div className="p-8">
                                        <div className="space-y-4">
                                            <Link href={'/transition-from-in-house-it-to-outsourced-managed-services'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-4">
                                                    <Image src="/assets/icons/nav-Icons/smaillbusiness.png" alt="Transition From In-House IT To Outsourced Managed Services" width={32} height={32} />
                                                </div>
                                                <span className="text-sm">Transition From In-House IT To Outsourced Managed Services</span>
                                            </Link>
                                            <Link href={'/migration-to-azure-virtual-desktop-and-cloud-based-solutions'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-4 relative transition-all duration-500 ease-in-out ">
                                                    <Image src="/assets/icons/nav-Icons/NetworkSecurity.png" alt="Migration To Azure Virtual Desktop And Cloud-Based Solutions" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                </div>
                                                <span className="text-sm">Migration To Azure Virtual Desktop And Cloud-Based Solutions</span>
                                            </Link>
                                            <Link href={'/migration-to-cloud-based-crm-and-voip-integration'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-4 relative transition-all duration-500 ease-in-out ">
                                                    <Image src="/assets/icons/nav-Icons/Managed-TotalBackupSolution.png" alt="Migration To Cloud-Based CRM And VoIP Integration" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                </div>
                                                <span className="text-sm">Migration To Cloud-Based CRM And VoIP Integration</span>
                                            </Link>
                                            <Link href={'/enterprise-on-premise-to-azure-cloud-migration'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-4 relative transition-all duration-500 ease-in-out ">
                                                    <Image src="/assets/icons/nav-Icons/Co-ManagedITServices.png" alt="Enterprise On-Premise To Azure Cloud Migration" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                </div>
                                                <span className="text-sm">Enterprise On-Premise To Azure Cloud Migration</span>
                                            </Link>
                                            <Link href={'/database-development-and-ai-solution-in-e-commerce'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-4 relative transition-all duration-500 ease-in-out ">
                                                    <Image src="/assets/icons/nav-Icons/database.svg" alt="Database Development And AI Solution In E-Commerce" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                </div>
                                                <span className="text-sm">Database Development And AI Solution In E-Commerce</span>
                                            </Link>
                                            <Link href={'/website-redevelopment-and-seo-services'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-4 relative transition-all duration-500 ease-in-out ">
                                                    <Image src="/assets/icons/nav-Icons/seo.webp" alt="Website Redevelopment And SEO Services" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                </div>
                                                <span className="text-sm">Website Redevelopment And SEO Services</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* MARKETING */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsMarketingDropdownOpen(true)}
                            onMouseLeave={() => setIsMarketingDropdownOpen(false)}
                        >
                            <Link
                                href="#"
                                className="text-gray-700 hover:text-secondary transition-colors flex items-center"
                            >
                                MARKETING
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </Link>

                            {/* Marketing Mega Menu Dropdown */}
                            {isMarketingDropdownOpen && (
                                <div className="absolute top-full left-0 w-screen max-w-lg bg-white shadow-2xl border-t-4 border-[#FF4500] z-50 -ml-16">
                                    <div className="p-8">
                                        <div className="space-y-4">
                                            <Link href={'/seo-blog-writing'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-4">
                                                    <Image src="/assets/icons/nav-Icons/NetworkSecurity.png" alt="SEO Blog Writing" width={32} height={32} />
                                                </div>
                                                <span className="text-sm">SEO Blog Writing</span>
                                            </Link>
                                            <Link href={'/seo-consulting-services'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-4 relative transition-all duration-500 ease-in-out ">
                                                    <Image src="/assets/icons/nav-Icons/NetworkSecurity.png" alt="SEO Consulting Services" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                </div>
                                                <span className="text-sm">SEO Consulting Services</span>
                                            </Link>
                                            <Link href={'/seo-strategic-solutions'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-4 relative transition-all duration-500 ease-in-out ">
                                                    <Image src="/assets/icons/nav-Icons/NetworkSecurity.png" alt="SEO Strategic Solutions" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                </div>
                                                <span className="text-sm">SEO Strategic Solutions</span>
                                            </Link>
                                            <Link href={'/content-marketing-solutions'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-4 relative transition-all duration-500 ease-in-out ">
                                                    <Image src="/assets/icons/nav-Icons/NetworkSecurity.png" alt="Content Marketing Solutions" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                </div>
                                                <span className="text-sm">Content Marketing Solutions</span>
                                            </Link>
                                            <Link href={'/keyword-research-services'} className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors group">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-4 relative transition-all duration-500 ease-in-out ">
                                                    <Image src="/assets/icons/nav-Icons/NetworkSecurity.png" alt="Keyword Research Services" width={32} height={32} className="transition-transform duration-500 ease-in-out" />
                                                </div>
                                                <span className="text-sm">Keyword Research Services</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href={'/about-us'} className="text-gray-700 hover:text-secondary transition-colors">ABOUT US</Link>
                        <Link href={'/blog'} className="text-gray-700 hover:text-secondary transition-colors">BLOG</Link>
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden md:grid grid-cols-1 xl:grid-cols-3 items-center space-x-4 px-5">

                        <button className=" text-white font-bold uppercase px-6 py-2 rounded-md hover:bg-primary transition-colors">
                            Contact Us
                        </button>
                        <button className="bg-black  text-white font-bold uppercase px-6 py-2 rounded-md hover:bg-primary transition-colors">
                            Book Your Slot
                        </button>

                        <button className="bg-primary  text-white font-bold uppercase px-6 py-2 rounded-md hover:bg-black transition-colors">
                            Customer Portal
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <nav className="flex flex-col space-y-4">
                            <div>
                                <button
                                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                    className="flex items-center justify-between w-full text-gray-700 hover:text-secondary transition-colors"
                                >
                                    IT SERVICES
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isServicesDropdownOpen && (
                                    <div className="mt-2 pl-4 space-y-2 border-l-2 border-[#FF4500]">
                                        <div className="text-sm font-semibold text-gray-900 mb-2">AI Services</div>
                                        <Link href="/machine-learning" className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Machine Learning</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Speech Recognition</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1" style={{ display: 'none' }}>Robotic Process Automation</Link>

                                        <div className="text-sm font-semibold text-gray-900 mb-2 mt-4">IT Services</div>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Managed IT Services</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Network Monitoring</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">IT Help Desk</Link>

                                        <div className="text-sm font-semibold text-gray-900 mb-2 mt-4">Cyber Security</div>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Network Security</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Data Security</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Cloud Security</Link>
                                    </div>
                                )}
                            </div>

                            <div>
                                <button
                                    onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                                    className="flex items-center justify-between w-full text-gray-700 hover:text-secondary transition-colors"
                                >
                                    PROJECTS
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isProjectsDropdownOpen && (
                                    <div className="mt-2 pl-4 space-y-2 border-l-2 border-[#FF4500]">
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Transition From In-House IT To Outsourced Managed Services</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Migration To Azure Virtual Desktop And Cloud-Based Solutions</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Migration To Cloud-Based CRM And VoIP Integration</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Enterprise On-Premise To Azure Cloud Migration</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Database Development And AI Solution In E-Commerce</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Website Redevelopment And SEO Services</Link>
                                    </div>
                                )}
                            </div>

                            <div>
                                <button
                                    onClick={() => setIsMarketingDropdownOpen(!isMarketingDropdownOpen)}
                                    className="flex items-center justify-between w-full text-gray-700 hover:text-secondary transition-colors"
                                >
                                    MARKETING
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isMarketingDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isMarketingDropdownOpen && (
                                    <div className="mt-2 pl-4 space-y-2 border-l-2 border-[#FF4500]">
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">SEO Blog Writing</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">SEO Consulting Services</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">SEO Strategic Solutions</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Content Marketing Solutions</Link>
                                        <Link href={'/'} className="block text-sm text-gray-600 hover:text-[#FF4500] py-1">Keyword Research Services</Link>
                                    </div>
                                )}
                            </div>

                            <Link href={'/about-us'} className="text-gray-700 hover:text-secondary transition-colors">ABOUT US</Link>
                            <Link href={'/blog'} className="text-gray-700 hover:text-secondary transition-colors">BLOG</Link>
                            <div className="flex flex-col space-y-2 pt-4">
                                <button className="border border-secondary text-secondary hover:bg-secondary/10 font-bold uppercase px-6 py-2 rounded-md transition-colors">
                                    Contact Us
                                </button>
                                <button className="bg-black text-white font-bold uppercase px-6 py-2 rounded-md hover:bg-primary transition-colors">
                                    Book Your Slot
                                </button>
                                
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
