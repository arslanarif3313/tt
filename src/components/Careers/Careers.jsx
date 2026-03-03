"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { MapPin, Briefcase, CheckCircle, ArrowRight, Upload } from "lucide-react";
import GoogleRecaptcha from "@/components/ui/GoogleRecaptcha/GoogleRecaptcha";
import { jobs } from "@/data/jobs";

export default function Careers() {
    const [resumeFile, setResumeFile] = useState(null);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitError, setSubmitError] = useState("");
    const [captchaValid, setCaptchaValid] = useState(false);
    const [captchaError, setCaptchaError] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const handleCaptchaValidation = (isValid, token = null) => {
        setCaptchaValid(isValid);
        if (token) {
            setRecaptchaToken(token);
        }
        if (isValid) {
            setCaptchaError(false);
        }
    };

    const onSubmitResume = async (data) => {
        setCaptchaError(false);
        setSubmitStatus(null);
        setSubmitError("");

        // Validate resume file
        if (!resumeFile) {
            setSubmitError("Please upload a resume file");
            setSubmitStatus('error');
            return;
        }

        try {
            // Execute reCAPTCHA Enterprise on form submission
            const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
            let token = recaptchaToken;
            
            // Get fresh token if needed (Enterprise tokens should be executed on submit)
            if (window.grecaptcha && siteKey) {
                try {
                    // Try Enterprise first, fallback to standard
                    if (window.grecaptcha.enterprise && window.grecaptcha.enterprise.execute) {
                        token = await window.grecaptcha.enterprise.execute(siteKey, { action: 'submit' });
                    } else if (window.grecaptcha.execute) {
                        token = await window.grecaptcha.execute(siteKey, { action: 'submit' });
                    }
                    if (!token) {
                        setCaptchaError(true);
                        setSubmitStatus('error');
                        setSubmitError("reCAPTCHA verification failed. Please try again.");
                        return;
                    }
                    setRecaptchaToken(token);
                    setCaptchaValid(true);
                } catch (err) {
                    console.error('reCAPTCHA Enterprise execution error:', err);
                    setCaptchaError(true);
                    setSubmitStatus('error');
                    setSubmitError("reCAPTCHA verification failed. Please refresh the page and try again.");
                    return;
                }
            }
            
            // In development, allow submission without token (backend will handle it)
            if (!token && process.env.NODE_ENV === 'production') {
                setCaptchaError(true);
                setSubmitStatus('error');
                setSubmitError("reCAPTCHA verification is required. Please wait for it to load and try again.");
                return;
            }
            
            // Use placeholder token in development if reCAPTCHA isn't available
            if (!token) {
                token = 'dev-bypass-token';
                console.warn('⚠️  Development mode: Using placeholder reCAPTCHA token');
            }

            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('skills', data.skills);
            formData.append('recaptchaToken', token);
            if (resumeFile) {
                formData.append('resume', resumeFile);
            }

            // In production, this would submit to your API
            const response = await fetch('/api/careers/general-application', {
                method: 'POST',
                body: formData,
            });

            let result;
            try {
                result = await response.json();
            } catch (jsonError) {
                console.error('Error parsing response:', jsonError);
                setSubmitStatus('error');
                setSubmitError("Server error. Please try again later.");
                return;
            }

            if (response.ok && result.success) {
                setSubmitStatus('success');
                reset();
                setResumeFile(null);
                setCaptchaValid(false);
                setRecaptchaToken(null);
                setSubmitError("");
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            } else {
                console.error('Application submission failed:', result);
                setSubmitStatus('error');
                setSubmitError(result.error || result.message || "Something went wrong. Please try again or contact us directly.");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setSubmitError(error.message || "Something went wrong. Please try again or contact us directly.");
        }
    };

    const benefits = [
        "Welcoming and Supportive Environment: We promote a culture that fosters open dialogue, creativity, and collaboration across teams.",
        "Opportunities for Learning and Advancement: Through hands-on projects and mentoring, we ensure that you have the chance to grow continuously in your career.",
        "Role-Specific Flexibility: Acknowledging the importance of work-life balance, we provide flexibility that empowers you to perform at your best.",
        "Engagement with Cutting-Edge Technologies: Be at the forefront of technological advancement - work with the innovative tools and technologies that are shaping the future.",
    ];

    // No longer needed - linking to individual pages instead
    // const handleViewDetails and handleCloseDetails removed

    return (
        <div className="bg-white">
            {/* About Working at Tymor Section */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 text-center">
                            Work at Tymor Technologies
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed text-center">
                            At Tymor Technologies, our focus on innovation and growth is central to our mission. We are a group fueled by curiosity, creativity, and a collective commitment to developing intelligent, future-ready solutions. Our work encompasses advanced technologies such as Artificial Intelligence (AI), Cloud Computing, Augmented Reality (AR), Holographic Solutions, and Digital Platforms, allowing us to create experiences and products that truly make a difference.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed text-center">
                            We are convinced that exceptional ideas stem from exceptional people. This belief drives us to cultivate a collaborative and inclusive atmosphere where every opinion counts. Whether you're brainstorming new product concepts, designing user experiences, or crafting innovative solutions, you will discover chances to learn, grow, and have an impact every single day.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-7 md:mb-8 leading-relaxed text-center">
                            At Tymor, our mission goes beyond merely creating technology - we are building the future. If you are someone who enjoys challenges, thrives on innovation, and appreciates teamwork, you will find yourself right at home here.
                        </p>

                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-center">
                            What We Offer
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed text-center">
                        Become part of Tymor Technologies and join a team where innovation thrives, ideas prosper, and your contributions genuinely count. 
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                            {benefits.map((benefit, index) => {
                                const [heading, ...rest] = benefit.split(':');
                                const description = rest.join(':').trim();
                                return (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-0.5" />
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            <span className="font-bold">{heading}:</span> {description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Job Openings Section */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-5 sm:mb-6 md:mb-7 lg:mb-8 text-center px-2">
                        Current Job Openings
                    </h2>

                    {/* Job Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
                        {jobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                            >
                                {/* Department Badge */}
                                <div className="mb-2 sm:mb-3">
                                    <span className="inline-block px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                                        {job.department}
                                    </span>
                                </div>

                                {/* Job Title */}
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 min-h-10 sm:min-h-12">
                                    {job.title}
                                </h3>

                                {/* Job Info */}
                                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                                        <span className="text-xs sm:text-sm truncate">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                                        <span className="text-xs sm:text-sm truncate">{job.jobType}</span>
                                    </div>
                                </div>

                                {/* Summary */}
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-5 line-clamp-2 grow">
                                    {job.summary}
                                </p>

                                {/* View Details Button */}
                                <Link
                                    href={`/careers/${job.slug}`}
                                    className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-gray-900 text-gray-900 text-xs sm:text-sm md:text-base font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300 mt-auto"
                                >
                                    View Details
                                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Details Modal/Expandable Section - Removed */}
            {false && (
                <div id="job-details" className="py-16 bg-gray-50 border-t">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                            {selectedJob.title}
                                        </h2>
                                        <div className="flex flex-wrap gap-4 text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-5 w-5" />
                                                <span>{selectedJob.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="h-5 w-5" />
                                                <span>{selectedJob.jobType}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleCloseDetails}
                                        className="text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Full Description */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Job Description</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {selectedJob.fullDescription}
                                    </p>
                                </div>

                                {/* Responsibilities */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Responsibilities</h3>
                                    <ul className="space-y-2">
                                        {selectedJob.responsibilities.map((responsibility, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Requirements */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Required Skills & Experience</h3>
                                    <ul className="space-y-2">
                                        {selectedJob.requirements.map((requirement, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{requirement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Apply Button */}
                                <div className="flex gap-4 pt-6 border-t border-gray-200">
                                    <button
                                        onClick={() => setShowApplicationModal(true)}
                                        className="flex-1 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300 text-center"
                                    >
                                        Apply Now
                                    </button>
                                    <Link
                                        href="/contact-us"
                                        className="flex-1 border-2 border-gray-900 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300 text-center"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* General Application Form Section */}
            {true && (
                <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-primary text-white">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                        <div className="max-w-2xl mx-auto">
                            <div className="mb-4 sm:mb-5 md:mb-6 text-center px-2">
                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                                    Don't See the Right Role?
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 opacity-90 leading-relaxed">
                                    We're always looking for talented individuals to join our team. <br className="hidden sm:inline" /> Send us your resume and let's start a conversation.
                                </p>
                                <p className="text-xs sm:text-sm md:text-base opacity-80 leading-relaxed">
                                    Didn't find the right role? Share your resume and we will contact you when opportunities match your skills.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit(onSubmitResume)} className="bg-white rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 text-gray-900 mx-0">
                                {/* Name Field */}
                                <div className="mb-3 sm:mb-4 md:mb-6">
                                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        {...register('name', { required: 'Name is required' })}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Your full name"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div className="mb-3 sm:mb-4 md:mb-6">
                                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Invalid email address'
                                            }
                                        })}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="your.email@example.com"
                                        autoComplete="off"
                                        inputMode="email"
                                        data-lpignore="true"
                                        suppressHydrationWarning
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Resume Upload */}
                                <div className="mb-3 sm:mb-4 md:mb-6">
                                    <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
                                        Upload Resume <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            id="resume"
                                            accept=".pdf,.doc,.docx"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    // Check file size (5MB = 5 * 1024 * 1024 bytes)
                                                    const maxSize = 5 * 1024 * 1024;
                                                    if (file.size > maxSize) {
                                                        alert('File size exceeds 5MB. Please upload a smaller file.');
                                                        e.target.value = ''; // Clear the input
                                                        setResumeFile(null);
                                                        return;
                                                    }
                                                    setResumeFile(file);
                                                    setSubmitError(""); // Clear any previous errors
                                                } else {
                                                    setResumeFile(null);
                                                }
                                            }}
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="resume"
                                            className="flex items-center gap-2 sm:gap-3 w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-gray-50 transition-colors"
                                        >
                                            <Upload className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-500 shrink-0" />
                                            <span className="text-xs sm:text-sm text-gray-700 truncate">
                                                {resumeFile ? (
                                                    <span className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                                                        <span className="truncate">{resumeFile.name}</span>
                                                        <span className="text-gray-500 text-xs">
                                                            ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                                                        </span>
                                                    </span>
                                                ) : (
                                                    'Click to upload or drag and drop'
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <p className="mt-1.5 sm:mt-2 text-xs text-gray-500">
                                        Supported formats: PDF, DOC, DOCX (Max 5MB)
                                    </p>
                                </div>

                                {/* Skills/Area of Interest */}
                                <div className="mb-3 sm:mb-4 md:mb-6">
                                    <label htmlFor="skills" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
                                        Skills/Area of Interest <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="skills"
                                        {...register('skills', { required: 'Skills/Area of interest is required' })}
                                        rows="4"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                        placeholder="e.g., Full Stack Development, AI/ML, Cloud Computing, Cybersecurity, etc."
                                    />
                                    {errors.skills && (
                                        <p className="mt-1 text-xs text-red-600">{errors.skills.message}</p>
                                    )}
                                </div>

                                {/* Google reCAPTCHA */}
                                <GoogleRecaptcha
                                    onValidationChange={handleCaptchaValidation}
                                    error={captchaError}
                                />

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-white text-xs sm:text-sm md:text-base font-bold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 border-b-2 border-white"></div>
                                            <span className="text-xs sm:text-sm md:text-base">Submitting...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-xs sm:text-sm md:text-base">Submit Application</span>
                                            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                                        </>
                                    )}
                                </button>

                                {/* Success/Error Messages */}
                                {submitStatus === 'success' && (
                                    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-green-800 text-xs sm:text-sm">
                                            ✓ Thank you! We've received your application. We'll contact you when opportunities match your skills.
                                        </p>
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-800 text-xs sm:text-sm">
                                            ✗ {submitError || "Something went wrong. Please try again or contact us directly."}
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </section>
            )}

        </div>
    );
}

