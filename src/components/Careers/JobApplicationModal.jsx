"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { X, Upload } from "lucide-react";
// import GoogleRecaptcha from "@/components/ui/GoogleRecaptcha/GoogleRecaptcha";

export default function JobApplicationModal({ job, isOpen, onClose, allJobs }) {
    const [resumeFile, setResumeFile] = useState(null);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitError, setSubmitError] = useState("");
    /*
    // reCAPTCHA state
    const [captchaValid, setCaptchaValid] = useState(false);
    const [captchaError, setCaptchaError] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    */

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    /*
    // reCAPTCHA handler
    const handleCaptchaValidation = (isValid, token = null) => {
        setCaptchaValid(isValid);
        if (token) {
            setRecaptchaToken(token);
        }
        if (isValid) {
            setCaptchaError(false);
        }
    };
    */

    const onSubmitApplication = async (data) => {
        /*
        // setCaptchaError(false);
        */
        setSubmitStatus(null);
        setSubmitError("");

        try {
            /*
            // reCAPTCHA logic
            const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
            let token = recaptchaToken;
            if (window.grecaptcha && siteKey) {
                try {
                    if (window.grecaptcha.enterprise && window.grecaptcha.enterprise.execute) {
                        token = await window.grecaptcha.enterprise.execute(siteKey, { action: 'submit' });
                    } else if (window.grecaptcha.execute) {
                        token = await window.grecaptcha.execute(siteKey, { action: 'submit' });
                    }
                    if (!token) {
                        setCaptchaError(true);
                        setSubmitStatus('error');
                        return;
                    }
                    setRecaptchaToken(token);
                    setCaptchaValid(true);
                } catch (err) {
                    console.error('reCAPTCHA Enterprise execution error:', err);
                    setCaptchaError(true);
                    setSubmitStatus('error');
                    return;
                }
            }
            if (!token && process.env.NODE_ENV === 'production') {
                setCaptchaError(true);
                setSubmitStatus('error');
                setSubmitError("reCAPTCHA verification is required. Please wait for it to load and try again.");
                return;
            }
            if (!token) {
                token = 'dev-bypass-token';
                console.warn('⚠️  Development mode: Using placeholder reCAPTCHA token');
            }
            formData.append('recaptchaToken', token);
            */
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('position', data.position);
            formData.append('message', data.message || '');
            if (resumeFile) {
                formData.append('resume', resumeFile);
            }

            const response = await fetch('/api/careers/job-application', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus('success');
                reset();
                setResumeFile(null);
                /*
                setCaptchaValid(false);
                // setRecaptchaToken(null);
                */
                //setRecaptchaToken(null);
                setTimeout(() => {
                    setSubmitStatus(null);
                    onClose();
                }, 3000);
            } else {
                console.error('Application submission failed:', result);
                setSubmitStatus('error');
                setSubmitError(result.error || "Something went wrong. Please try again or contact us directly.");
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            setSubmitStatus('error');
            setSubmitError(error.message || "Something went wrong. Please try again or contact us directly.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

            {/* Modal */}
            <div className="flex items-center justify-center min-h-screen px-3 sm:px-4 py-4 sm:py-8">
                <div className="relative bg-white rounded-lg max-w-2xl w-full p-4 sm:p-6 md:p-8 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
                    >
                        <X className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>

                    {/* Header */}
                    <div className="mb-4 sm:mb-6 pr-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            Apply for {job?.title}
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            Fill out the form below and we'll get back to you soon.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmitApplication)} className="space-y-4 sm:space-y-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register('name', { required: 'Full name is required' })}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Your full name"
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-2">
                                Email Address <span className="text-red-500">*</span>
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
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="your.email@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                {...register('phone', { 
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^[0-9()+\-\s]{7,}$/,
                                        message: 'Invalid phone number'
                                    }
                                })}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="+1 (555) 123-4567"
                            />
                            {errors.phone && (
                                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.phone.message}</p>
                            )}
                        </div>

                        {/* Position Selection */}
                        <div>
                            <label htmlFor="position" className="block text-xs sm:text-sm font-semibold mb-2">
                                Select Position <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="position"
                                {...register('position', { required: 'Please select a position' })}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                defaultValue={job?.title || ''}
                            >
                                <option value="" disabled>Select a position</option>
                                {allJobs.map((j) => (
                                    <option key={j.id} value={j.title}>
                                        {j.title} - {j.location}
                                    </option>
                                ))}
                            </select>
                            {errors.position && (
                                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.position.message}</p>
                            )}
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold mb-2">
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
                                        }
                                    }}
                                    className="hidden"
                                    required
                                />
                                <label
                                    htmlFor="resume"
                                    className="flex items-center gap-2 sm:gap-3 w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-gray-50 transition-colors"
                                >
                                    <Upload className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 shrink-0" />
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
                            <p className="mt-2 text-xs text-gray-500">
                                Supported formats: PDF, DOC, DOCX (Max 5MB)
                            </p>
                        </div>

                        {/* Optional Message/Cover Note */}
                        <div>
                            <label htmlFor="message" className="block text-xs sm:text-sm font-semibold mb-2">
                                Cover Note / Message (Optional)
                            </label>
                            <textarea
                                id="message"
                                {...register('message')}
                                rows="4"
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                placeholder="Tell us why you're interested in this position..."
                            />
                        </div>

                        {/* Google reCAPTCHA */}
                        {/*
                        <GoogleRecaptcha 
                            onValidationChange={handleCaptchaValidation}
                            error={captchaError}
                        />
                        */}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary text-white text-sm sm:text-base font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                                    <span className="text-sm sm:text-base">Submitting...</span>
                                </>
                            ) : (
                                <span className="text-sm sm:text-base">Submit Application</span>
                            )}
                        </button>

                        {/* Success/Error Messages */}
                        {submitStatus === 'success' && (
                            <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-800 text-xs sm:text-sm">
                                    ✓ Thank you! We've received your application. We'll contact you soon.
                                </p>
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-800 text-xs sm:text-sm">
                                    ✗ {submitError}
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

