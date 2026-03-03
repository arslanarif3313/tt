"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import GoogleRecaptcha from "@/components/ui/GoogleRecaptcha/GoogleRecaptcha";

const REGIONS = [
    "North America",
    "South America",
    "Europe",
    "Middle East",
    "Africa",
    "Asia",
    "Oceania",
];

const SERVICES = [
    "Managed IT Services",
    "Cloud / DevOps",
    "Cybersecurity",
    "Custom Software",
    "Consulting",
];

export default function Leads() {
    const [captchaValid, setCaptchaValid] = useState(false);
    const [captchaError, setCaptchaError] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        mode: "onTouched",
        defaultValues: {
            companyName: "",
            contactName: "",
            region: "",
            country: "",
            address: "",
            email: "",
            whatsapp: "",
            phone: "",
            service: "",
        },
    });

    const handleCaptchaValidation = (isValid, token = null) => {
        setCaptchaValid(isValid);
        if (token) {
            setRecaptchaToken(token);
        }
        if (isValid) {
            setCaptchaError(false);
        }
    };

    const onSubmit = async (data) => {
        setCaptchaError(false);
        
        try {
            // Execute reCAPTCHA v3 on form submission
            const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
            let token = recaptchaToken;
            
            // Get fresh token if needed (v3 tokens should be executed on submit)
            if (window.grecaptcha && window.grecaptcha.execute && siteKey) {
                try {
                    token = await window.grecaptcha.execute(siteKey, { action: 'submit' });
                    if (!token) {
                        setCaptchaError(true);
                        alert("reCAPTCHA verification failed. Please try again.");
                        return;
                    }
                    setRecaptchaToken(token);
                    setCaptchaValid(true);
                } catch (err) {
                    console.error('reCAPTCHA execution error:', err);
                    setCaptchaError(true);
                    alert("reCAPTCHA verification failed. Please refresh the page and try again.");
                    return;
                }
            }
            
            if (!token) {
                setCaptchaError(true);
                alert("reCAPTCHA verification is required. Please try again.");
                return;
            }
            
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    ...data,
                    recaptchaToken: token,
                }),
                headers: { "Content-Type": "application/json" },
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                reset();
                setCaptchaValid(false);
                setRecaptchaToken(null);
                alert("Thanks! We have received your message.");
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="w-2xl mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className=" grid gap-6">
                        {/* Row 1 */}
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Company Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className={`input input-bordered w-full rounded-lg ${errors.companyName ? "input-error" : ""
                                        }`}
                                    {...register("companyName", {
                                        required: "Company name is required",
                                        minLength: { value: 2, message: "Too short" },
                                    })}
                                />
                                {errors.companyName && (
                                    <p className="mt-1 text-xs text-error">
                                        {errors.companyName.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Contact Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Contact Name"
                                    className={`input input-bordered w-full rounded-lg ${errors.contactName ? "input-error" : ""
                                        }`}
                                    {...register("contactName", {
                                        required: "Contact name is required",
                                    })}
                                />
                                {errors.contactName && (
                                    <p className="mt-1 text-xs text-error">
                                        {errors.contactName.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Region:</span>
                                </label>
                                <select
                                    defaultValue=""
                                    className={`select select-bordered w-full rounded-lg ${errors.region ? "select-error" : ""
                                        }`}
                                    {...register("region", { required: "Please choose a region" })}
                                >
                                    <option value="" disabled>
                                        —Please choose an option—
                                    </option>
                                    {REGIONS.map((r) => (
                                        <option key={r} value={r}>
                                            {r}
                                        </option>
                                    ))}
                                </select>
                                {errors.region && (
                                    <p className="mt-1 text-xs text-error">{errors.region.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Country</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Country"
                                    className={`input input-bordered w-full rounded-lg ${errors.country ? "input-error" : ""
                                        }`}
                                    {...register("country", { required: "Country is required" })}
                                />
                                {errors.country && (
                                    <p className="mt-1 text-xs text-error">{errors.country.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Adress line</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Addresss"
                                    className={`input input-bordered w-full rounded-lg ${errors.address ? "input-error" : ""
                                        }`}
                                    {...register("address", { required: "Address is required" })}
                                />
                                {errors.address && (
                                    <p className="mt-1 text-xs text-error">{errors.address.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className={`input input-bordered w-full rounded-lg ${errors.email ? "input-error" : ""
                                        }`}
                                    suppressHydrationWarning
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                                            message: "Invalid email",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-error">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">WhatsApp Number</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="WhatsApp Number"
                                    className={`input input-bordered w-full rounded-lg ${errors.whatsapp ? "input-error" : ""
                                        }`}
                                    {...register("whatsapp", {
                                        required: "WhatsApp number is required",
                                        pattern: {
                                            value: /^[0-9()+\-\s]{7,}$/,
                                            message: "Invalid number",
                                        },
                                    })}
                                />
                                {errors.whatsapp && (
                                    <p className="mt-1 text-xs text-error">
                                        {errors.whatsapp.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Phone Number</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className={`input input-bordered w-full rounded-lg ${errors.phone ? "input-error" : ""
                                        }`}
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[0-9()+\-\s]{7,}$/,
                                            message: "Invalid phone number",
                                        },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-xs text-error">{errors.phone.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Row 5 - Service */}
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Service Interested In:</span>
                            </label>
                            <select
                                defaultValue=""
                                className={`select select-bordered w-full rounded-lg ${errors.service ? "select-error" : ""
                                    }`}
                                {...register("service", { required: "Please choose a service" })}
                            >
                                <option value="" disabled>
                                    —Please choose an option—
                                </option>
                                {SERVICES.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                            {errors.service && (
                                <p className="mt-1 text-xs text-error">{errors.service.message}</p>
                            )}
                        </div>

                        {/* Google reCAPTCHA */}
                        <GoogleRecaptcha 
                            onValidationChange={handleCaptchaValidation}
                            error={captchaError}
                        />

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn h-12 w-full rounded-lg bg-black text-white hover:opacity-90"
                        >
                            {isSubmitting ? "Submitting..." : "SUBMIT"}
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
