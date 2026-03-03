'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const aiService = [
  { href: "/machine-learning", label: "Machine Learning", icon: "/assets/icons/nav-Icons/machine-learning.png" },
  { href: "/speech-recognition", label: "Speech Recognition", icon: "/assets/icons/nav-Icons/space-recoginition.png" },
  { href: "/", label: "Robotic Process Automation", icon: "/assets/icons/nav-Icons/robotics-automation-.png" },
  { href: "/natural-language-processing", label: "Natural Language Processing", icon: "/assets/icons/nav-Icons/natural-language-Processing.png" },
  { href: "/chatbots-and-virtual-assistants", label: "Chatbots And Virtual Assistants", icon: "/assets/icons/nav-Icons/chatboot.png" },
  { href: "/ai-for-enterprises", label: "AI Services For Enterprises", icon: "/assets/icons/nav-Icons/ai-service-for-small business.png" },
];

const itService = [
  { href: "/team-member-integration", label: "Team Member Integration", icon: "/assets/icons/nav-Icons/team-member-integration.png" },
  { href: "/it-asset-management", label: "IT Assessment Management", icon: "/assets/icons/nav-Icons/it assetment-Management.png" },
  { href: "/database-development", label: "Database Development", icon: "/assets/icons/nav-Icons/ServerAdministrationAndManagement.png" },
  { href: "/cloud-native-development", label: "Cloud Native Development", icon: "/assets/icons/nav-Icons/CloudSecurity.png" },
  { href: "/api-development", label: "API Development", icon: "/assets/icons/nav-Icons/NetworkSecurity.png" },
  { href: "/voip-solutions", label: "VoIP Solutions", icon: "/assets/icons/nav-Icons/NetworkSecurity.png" },
  { href: "/managed-total-backup-solution", label: "Managed Total Backup Solution", icon: "/assets/icons/nav-Icons/Managed-TotalBackupSolution.png" },
  { href: "/network-monitoring-and-management", label: "Network Monitoring And<br>Management Services", icon: "/assets/icons/nav-Icons/Network-MonitoringAndManagementServices.png" },
  { href: "/onsite-it-support", label: "OnSite IT Support", icon: "/assets/icons/nav-Icons/OnsiteITSupport.png" },
  { href: "/server-administration-and-management", label: "Server Administration And<br>Management", icon: "/assets/icons/nav-Icons/ServerAdministrationAndManagement.png" },
  { href: "/remote-it-support", label: "Remote IT Support", icon: "/assets/icons/nav-Icons/RemoteITSupport.png" },
  { href: "/help-desk-support", label: "IT Help Desk", icon: "/assets/icons/nav-Icons/ITHelpDesk.png" },
  { href: "/co-managed-it-services", label: "Co-Managed IT Services", icon: "/assets/icons/nav-Icons/Co-ManagedITServices.png" },
  { href: "/managed-it-services", label: "Managed IT Services", icon: "/assets/icons/nav-Icons/ManagedITServices.png" },
];

const cyberService = [
  { href: "/network-security", label: "Network Security", icon: "/assets/icons/nav-Icons/NetworkSecurity.png" },
  { href: "/mobile-security", label: "Mobile Security", icon: "/assets/icons/nav-Icons/MobileSecurity.png" },
  { href: "/endpoint-security", label: "Endpoint Security", icon: "/assets/icons/nav-Icons/EndpointSecurit.png" },
  { href: "/data-security", label: "Data Security", icon: "/assets/icons/nav-Icons/DataSecurity.png" },
  { href: "/critical-infrastructure-security", label: "Critical Infrastructure Security", icon: "/assets/icons/nav-Icons/CriticalInfrastructureSecurity.png" },
  { href: "/cloud-security", label: "Cloud Security", icon: "/assets/icons/nav-Icons/CloudSecurity.png" },
  { href: "/application-security", label: "Application Security", icon: "/assets/icons/nav-Icons/ApplicationSecurity.png" },
  { href: "/assessment-and-analysis-for-cybersecurity", label: "Assessment And Analysis For Cybersecurity", icon: "/assets/icons/nav-Icons/AssessmentAndAnalysisForCybersecurity.png" },
  { href: "/cybersecurity-threat-and-vulnerability-assessment", label: "Cybersecurity Threat And Vulnerability Assessment", icon: "/assets/icons/nav-Icons/CybersecurityThreat AndVulnerabilityAssessment.png" },
  { href: "/information-security-services", label: "Information Security Services", icon: "/assets/icons/nav-Icons/InformationSecurityServices.png" },
];

const projects = [
  { href: "/transition-from-in-house-it-to-outsourced-managed-services", label: "Transition From In-House IT To Outsourced Managed Services", icon: "/assets/icons/nav-Icons/smaillbusiness.png" },
  { href: "/migration-to-azure-virtual-desktop-and-cloud-based-solutions", label: "Migration To Azure Virtual Desktop And Cloud-Based Solutions", icon: "/assets/icons/nav-Icons/NetworkSecurity.png" },
  { href: "/migration-to-cloud-based-crm-and-voip-integration", label: "Migration To Cloud-Based CRM And VoIP Integration", icon: "/assets/icons/nav-Icons/Managed-TotalBackupSolution.png" },
  { href: "/enterprise-on-premise-to-azure-cloud-migration", label: "Enterprise On-Premise To Azure Cloud Migration", icon: "/assets/icons/nav-Icons/Co-ManagedITServices.png" },
  { href: "/database-development-and-ai-solution-in-e-commerce", label: "Database Development And AI Solution In E-Commerce", icon: "/assets/icons/nav-Icons/database.svg" },
  { href: "/website-redevelopment-and-seo-services", label: "Website Redevelopment And SEO Services", icon: "/assets/icons/nav-Icons/seo.webp" },
];

const marketing = [
  { href: "/seo-blog-writing", label: "SEO Blog Writing", icon: "/assets/icons/nav-Icons/NetworkSecurity.png" },
  { href: "/seo-consulting-services", label: "SEO Consulting Services", icon: "/assets/icons/nav-Icons/NetworkSecurity.png" },
  { href: "/seo-strategic-solutions", label: "SEO Strategic Solutions", icon: "/assets/icons/nav-Icons/NetworkSecurity.png" },
  { href: "/content-marketing-solutions", label: "Content Marketing Solutions", icon: "/assets/icons/nav-Icons/NetworkSecurity.png" },
  { href: "/keyword-research-services", label: "Keyword Research Services", icon: "/assets/icons/nav-Icons/NetworkSecurity.png" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMarketingDropdownOpen, setIsMarketingDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-base-300">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="w-full flex gap-2 py-2 md:py-3">
          {/* Logo + Hamburger */}
          <div className="w-full md:w-auto mx-auto flex justify-between">
            <div className="w-60 md:w-80">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Tymor Technologies"
                  width={300}
                  height={80}
                  className="w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 text-red-600" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>

          {/* CENTER: NAV LINKS */}
          <nav className="hidden md:flex">
            <div className="menu menu-horizontal flex justify-end items-center gap-4">
              {/* IT Services */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <Link
                  href="#"
                  className="font-serif font-bold scale-y-120 hover:text-primary transition-colors flex items-center"
                >
                  IT SERVICES
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>

                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-4xl flex-auto overflow-hidden rounded-md bg-white shadow-2xl border-t-4 border-primary z-50">
                    <div className="grid grid-cols-3 gap-8 p-8">
                      {[{ title: "AI SERVICES", list: aiService },
                        { title: "IT SERVICES", list: itService },
                        { title: "CYBER SECURITY SERVICES", list: cyberService }].map((col, i) => (
                        <div key={i}>
                          <h3 className="font-bold text-center mb-4 border-b border-gray-200 pb-2">{col.title}</h3>
                          <div className={`space-y-3 ${i < 2 ? 'border-r border-gray-200' : ''}`}>
                            {col.list.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center text-xs hover:text-primary group transition-colors duration-300"
                              >
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 group-hover:scale-125 group-hover:shadow-[0_0_15px_#0BD5EA] transition-all duration-500 ease-in-out">
                                  <Image src={item.icon} alt={item.label} width={32} height={32} />
                                </div>
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
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
                  className="font-serif font-bold scale-y-120 hover:text-primary transition-colors flex items-center"
                >
                  PROJECTS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>

                {isProjectsDropdownOpen && (
                  <div className="absolute top-full left-0 w-screen max-w-lg bg-white shadow-2xl border-t-4 border-primary rounded-md z-50 -ml-16">
                    <div className="p-8 space-y-4">
                      {projects.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center text-xs hover:text-primary group transition-colors duration-300"
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 group-hover:scale-125 group-hover:shadow-[0_0_15px_#0BD5EA] transition-all duration-500 ease-in-out">
                            <Image src={item.icon} alt={item.label} width={32} height={32} />
                          </div>
                          {item.label}
                        </Link>
                      ))}
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
                  className="font-serif font-bold scale-y-120 hover:text-primary transition-colors flex items-center"
                >
                  MARKETING
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>

                {isMarketingDropdownOpen && (
                  <div className="absolute top-full left-0 w-screen max-w-lg bg-white shadow-2xl border-t-4 border-[#FF4500] rounded-md z-50 -ml-16">
                    <div className="p-8 space-y-4">
                      {marketing.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center text-xs hover:text-primary group transition-colors duration-300"
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 group-hover:scale-125 group-hover:shadow-[0_0_15px_#0BD5EA] transition-all duration-500 ease-in-out">
                            <Image src={item.icon} alt={item.label} width={32} height={32} />
                          </div>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about-us" className="font-serif font-bold scale-y-120 uppercase hover:text-primary rounded-md">
                About Us
              </Link>
              <Link
                href="/careers"
                className="font-serif font-bold scale-y-120 uppercase hover:text-primary rounded-md"
              >
                CAREERS
              </Link>
              <Link
                href="/blog"
                className="font-serif font-bold scale-y-120 uppercase hover:text-primary rounded-md"
              >
                BLOGS
              </Link>
              {/* CTA Buttons */}
              <Link
                href="/contact-us"
                className="btn text-primary font-serif font-bold scale-y-120 bg-black hover:opacity-90 rounded-md"
              >
                LET'S CONNECT
              </Link>

              <Link
                href="https://outlook.office365.com/book/TymorTechnologiesAppointment@Tymortech.com/"
                target="_blank"
                className="btn font-serif font-bold scale-y-120 bg-black text-white hover:opacity-90 rounded-md"
              >
                CHAOS TO CONTROL BOOK YOUR SPOT
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t px-4">
          {/* Collapses */}
          {[{ title: "AI SERVICES", list: aiService },
            { title: "IT SERVICES", list: itService },
            { title: "CYBER SECURITY", list: cyberService }].map((group, i) => (
            <div key={i} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-2">
              <input type="checkbox" />
              <div className="collapse-title text-md font-medium">{group.title}</div>
              <div className="collapse-content">
                {group.list.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm hover:text-primary py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="border border-base-300 bg-base-100 rounded-box mt-2">
            <div className="collapse-title text-md font-medium">
              <Link
                href="/about-us"
                className="hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
            </div>
          </div>

          {/* MOBILE CTAs */}
          <div className="flex flex-col space-y-2 pt-4">
            <Link
              href="/contact-us"
              className="btn bg-black text-primary hover:opacity-90 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              LET’S CONNECT
            </Link>

            <Link
              href="https://outlook.office365.com/book/TymorTechnologiesAppointment@Tymortech.com/"
              target="_blank"
              className="btn bg-black text-white hover:opacity-90 rounded-md"
            >
              CHAOS TO CONTROL—BOOK YOUR SPOT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
