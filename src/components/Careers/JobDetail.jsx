"use client";

import { useState } from "react";
import { MapPin, Briefcase, Clock, CheckCircle, ArrowRight } from "lucide-react";
import JobApplicationModal from "./JobApplicationModal";
import { jobs } from "@/data/jobs";

export default function JobDetail({ job }) {
    const [showApplicationModal, setShowApplicationModal] = useState(false);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="hero bg-[url(/career-hero.avif)] bg-no-repeat bg-cover bg-center text-black py-12 sm:py-16 md:py-20">
                <div className="hero-overlay bg-black/10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Department Badge */}
                        <div className="mb-3 sm:mb-4">
                            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm text-black text-xs sm:text-sm font-semibold rounded-full">
                                {job.department}
                            </span>
                        </div>

                        {/* Job Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
                            {job.title}
                        </h1>

                        {/* Job Info */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-black/90 mb-6 sm:mb-8 text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                                <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                                <span>{job.jobType}</span>
                            </div>
                            {job.experience && (
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                                    <span>{job.experience}</span>
                                </div>
                            )}
                        </div>

                        {/* Apply Button */}
                        <button
                            onClick={() => setShowApplicationModal(true)}
                            className="inline-flex items-center gap-2 bg-white text-primary text-sm sm:text-base font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                            Apply Now
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Job Details Content */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                                {/* Job Description */}
                                <div>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Role Overview</h2>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                        {job.fullDescription}
                                    </p>
                                </div>

                                {/* Core Responsibilities */}
                                <div>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Core Responsibilities</h2>
                                    <ul className="space-y-2 sm:space-y-3">
                                        {job.responsibilities.map((responsibility, index) => (
                                            <li key={index} className="flex items-start gap-2 sm:gap-3">
                                                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm sm:text-base text-gray-700">{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Requirements */}
                                <div>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Requirements</h2>
                                    <ul className="space-y-2 sm:space-y-3">
                                        {job.requirements.map((requirement, index) => (
                                            <li key={index} className="flex items-start gap-2 sm:gap-3">
                                                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm sm:text-base text-gray-700">{requirement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1 order-first lg:order-last">
                                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:sticky lg:top-24">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Job Details</h3>
                                    <div className="space-y-3 sm:space-y-4">
                                        <div>
                                            <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">Location</p>
                                            <p className="text-sm sm:text-base text-gray-900">{job.location}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">Job Type</p>
                                            <p className="text-sm sm:text-base text-gray-900">{job.jobType}</p>
                                        </div>
                                        {job.experience && (
                                            <div>
                                                <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">Experience</p>
                                                <p className="text-sm sm:text-base text-gray-900">{job.experience}</p>
                                            </div>
                                        )}
                                        {job.skills && job.skills.length > 0 && (
                                            <div>
                                                <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">Key Skills</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.skills.map((skill, index) => (
                                                        <span key={index} className="px-2 sm:px-3 py-1 bg-white text-primary text-xs sm:text-sm font-semibold rounded-full border border-primary/20">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setShowApplicationModal(true)}
                                        className="w-full mt-4 sm:mt-6 bg-primary text-white text-sm sm:text-base font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                                    >
                                        Apply for this Position
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Benefits */}
                        {job.benefits && job.benefits.length > 0 && (
                            <div className="mt-8 sm:mt-12 bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Benefits</h2>
                                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                                    {job.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-2 sm:gap-3">
                                            <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* About Working at Tymor */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">About Working at Tymor Technologies</h2>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                            At Tymor Technologies, innovation and growth are part of our culture. We work on advanced technologies including AI, Cloud, AR, holographic solutions, and digital platforms. Our team enjoys a collaborative environment where everyone can learn, contribute, and build exciting solutions for the future.
                        </p>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            We believe in ownership, clarity, and the power of small teams. Every engineer here is a builder and a partner in transforming industries with technology. Join us and be part of the future of software development.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center bg-primary rounded-lg p-8 sm:p-10 md:p-12 text-white">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-4 leading-tight">
                            Ready to Join Our Team?
                        </h2>
                        <p className="text-base sm:text-lg mb-8 sm:mb-8 opacity-90 leading-relaxed px-2">
                            We're excited to hear from you. Apply now and take the first step towards an exciting career at Tymor Technologies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-stretch">
                            <button
                                onClick={() => setShowApplicationModal(true)}
                                className="bg-white text-primary text-base sm:text-base font-bold px-8 sm:px-8 py-4 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                Apply Now
                                <ArrowRight className="h-5 w-5 sm:h-5 sm:w-5" />
                            </button>
                            <a
                                href="mailto:careers@tymortech.com"
                                className="border-2 border-white text-white text-base sm:text-base font-bold px-6 sm:px-8 py-4 sm:py-4 rounded-lg hover:bg-white hover:text-primary transition-colors duration-300 inline-flex items-center justify-center w-full sm:w-auto"
                                style={{ wordBreak: 'keep-all' }}
                            >
                                <span className="text-sm sm:text-base">careers@tymortech.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Application Modal */}
            <JobApplicationModal
                job={job}
                isOpen={showApplicationModal}
                onClose={() => setShowApplicationModal(false)}
                allJobs={jobs}
            />
        </div>
    );
}

