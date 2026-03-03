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
  { href: "/network-monitoring-and-management", label: "Network Monitoring And Management Services", icon: "/assets/icons/nav-Icons/Network-MonitoringAndManagementServices.png" },
  { href: "/onsite-it-support", label: "OnSite IT Support", icon: "/assets/icons/nav-Icons/OnsiteITSupport.png" },
  { href: "/server-administration-and-management", label: "Server Administration And Management", icon: "/assets/icons/nav-Icons/ServerAdministrationAndManagement.png" },
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
  { href: "/database-development-and-ai-solution-in-e-commerce", label: "Database Development And AI Solution In E-Commerce", icon: "/assets/icons/nav-Icons/DataSecurity.png" },
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
  // Mobile menu dropdown states
  const [openServices, setOpenServices] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const [openMarketing, setOpenMarketing] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === '/';

  return (
    <header className={`sticky top-0 z-50 bg-base-300`}>
            <div className="max-w-[1600px]  mx-auto px-4">
                {/* GRID: logo / nav / ctas (with 2-row right stack) */}
                <div className="w-full flex  gap-2 py-2 md:py-3">
                    {/*logo and hamburger for mobile */}
                    <div className="w-full md:w-auto mx-auto flex justify-between">
                        {/* logo  */}
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
          <nav className="hidden md:flex flex-1 min-w-0 font-serif">
            <div className="menu menu-horizontal flex justify-end items-center gap-3 lg:gap-4 flex-wrap">
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
                  <div className="absolute top-full left-1/2 translate-x-1 w-screen max-w-4xl  h-[75vh] flex-auto rounded-md bg-white shadow-2xl border-t-4 border-primary z-50 ">
                    <div className="grid grid-cols-3 gap-2 p-1">
                      {[{ title: "AI SERVICES", list: aiService },
                      { title: "IT SERVICES", list: itService },
                      { title: "CYBER SECURITY SERVICES", list: cyberService }].map((col, i) => (
                        <div key={i}>
                          <h3 className="font-bold text-center mb-2 border-b border-gray-200 ">{col.title}</h3>
                          <div className={`space-y-1 ${i < 2 ? 'border-r border-gray-200' : ''}`}>
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
                  className="font-bold scale-y-120 hover:text-primary transition-colors flex items-center"
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
                  className="font-bold scale-y-120 hover:text-primary transition-colors flex items-center"
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

              <Link href="/about-us" className="font-bold scale-y-120 uppercase hover:text-primary rounded-md">
                About Us
              </Link>
              <Link
                href="/careers"
                className="font-bold scale-y-120 uppercase hover:text-primary rounded-md"
              >
                CAREERS
              </Link>
              <Link
                href="/blog"
                className="font-bold scale-y-120 uppercase hover:text-primary rounded-md"
              >
                BLOGS
              </Link>
              {/* CTA Buttons */}
              <Link
                href="/contact-us"
                className="btn text-primary font-bold scale-y-120 bg-black hover:opacity-90 rounded-md"
              >
                LET'S CONNECT
              </Link>

              <Link
                href="https://outlook.office365.com/book/TymorTechnologiesAppointment@Tymortech.com/"
                target="_blank"
                className="btn font-bold scale-y-120 bg-black text-white hover:opacity-90 rounded-md"
              >
                CHAOS TO CONTROL BOOK YOUR SPOT
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* ===================== MOBILE MENU ===================== */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-base-200 bg-white">
          <div className="p-4 space-y-3 max-h-[80vh] overflow-y-auto">
            <MobileDropdown
              title="IT SERVICES"
              isOpen={openServices}
              setIsOpen={setOpenServices}
              sections={[
                { title: "AI SERVICES", list: aiService },
                { title: "IT SERVICES", list: itService },
                { title: "CYBERSECURITY", list: cyberService },
              ]}
              setIsMenuOpen={setIsMenuOpen}
            />

            <MobileDropdown
              title="PROJECTS"
              isOpen={openProjects}
              setIsOpen={setOpenProjects}
              sections={projects}
              setIsMenuOpen={setIsMenuOpen}
            />

            <MobileDropdown
              title="MARKETING"
              isOpen={openMarketing}
              setIsOpen={setOpenMarketing}
              sections={marketing }
              setIsMenuOpen={setIsMenuOpen}
            />

            <Link
              href="/about-us"
              onClick={() => setIsMenuOpen(false)}
              className="block px-2 py-2 font-semibold rounded-md hover:bg-gray-50"
            >
              ABOUT US
            </Link>

            <Link
              href="/careers"
              onClick={() => setIsMenuOpen(false)}
              className="block px-2 py-2 font-semibold rounded-md hover:bg-gray-50"
            >
              CAREERS
            </Link>

            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="block px-2 py-2 font-semibold rounded-md hover:bg-gray-50"
            >
              BLOGS
            </Link>

            <div className="flex flex-col gap-2 pt-3 border-t border-gray-200">
              <Link
                href="/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-2 px-3 font-bold uppercase text-sm border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-md transition-colors"
              >
                Let's Connect
              </Link>

              <Link
                href="https://outlook.office365.com/book/TymorTechnologiesAppointment@Tymortech.com/?ismsaljsauthenabled=true"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-3 px-4 font-bold uppercase text-xs bg-black text-white hover:bg-primary rounded-md transition-colors"
              >
                Chaos To Control Book Your Spot
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ===================== MOBILE DROPDOWN COMPONENT =====================
function MobileDropdown({ title, isOpen, setIsOpen, sections, setIsMenuOpen }) {
  // Check if sections is an array of section objects or a flat array of items
  const isSectionStructure = sections && sections.length > 0 && sections[0].title && sections[0].list;
  
  return (
    <div className="border-b border-gray-100 pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-2 px-2 font-semibold text-base hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      {isOpen && sections && (
        <div className="mt-2 space-y-3 pl-3">
          {isSectionStructure ? (
            // Handle section structure: [{ title: "...", list: [...] }]
            sections.map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold text-primary mb-2 text-sm">{section.title}</h4>
                <div className="space-y-1">
                  {section.list.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      style={item.style || {}}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg">
                        <Image src={item.icon} width={20} height={20} alt={item.label} />
                      </div>
                      <span className="text-gray-700 font-medium text-sm wrap-break-word">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Handle flat array structure: [{ href: "...", label: "...", icon: "..." }]
            <div className="space-y-1">
              {sections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={item.style || {}}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
                >
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg">
                    <Image src={item.icon} width={20} height={20} alt={item.label} />
                  </div>
                  <span className="text-gray-700 font-medium text-sm wrap-break-word">{item.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}