"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Input sanitization function
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/[<>]/g, '');
};

// Email validation function
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const services = [
  "Managed IT Services",
  "Cloud / DevOps",
  "Cybersecurity",
  "Custom Software",
  "Consulting",
];

const referrals = [
  "Google",
  "Referral",
  "LinkedIn",
  "Event / Conference",
  "Other",
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      leadSource: "Website Contact Form",
    },
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const onSubmit = async (data) => {
    try {
      setSubmitStatus(null);

      // Sanitize and validate input data
      const sanitizedData = {
        ...data,
        companyName: sanitizeInput(data.companyName),
        firstName: sanitizeInput(data.firstName),
        lastName: sanitizeInput(data.lastName),
        email: sanitizeInput(data.email),
        phone: sanitizeInput(data.phone),
        message: sanitizeInput(data.message),
        service: sanitizeInput(data.service),
        referral: sanitizeInput(data.referral),
        leadSource: sanitizeInput(data.leadSource),
      };

      // Validate email format
      if (!validateEmail(sanitizedData.email)) {
        setSubmitStatus('error');
        return;
      }

      // Submit to Dynamics 365 CRM via our API route
      const response = await fetch('/api/dynamics-crm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        reset(); // Reset form on success

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
        console.error('Error submitting form - Status:', response.status);
        console.error('Error details:', result);

        // Auto-hide error message after 8 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 8000);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form - Exception:', error);
      console.error('Error message:', error.message);

      // Auto-hide error message after 8 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 8000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:gap-5 lg:gap-6">
      {/* Hidden lead source field */}
      <input type="hidden" {...register("leadSource")} />

      {/* Success Alert */}
      {submitStatus === 'success' && (
        <div className="alert alert-success shadow-lg rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Thank you! Your message has been submitted successfully. We'll be in touch soon!</span>
        </div>
      )}

      {/* Error Alert */}
      {submitStatus === 'error' && (
        <div className="alert alert-error shadow-lg rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Oops! Something went wrong. Please try again or contact us directly.</span>
        </div>
      )}

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 animate-slide-up [animation-delay:200ms]">
        <div>
          <label className="block text-sm sm:text-base font-medium mb-2">Company Name</label>
          <input
            type="text"
            placeholder="Company Name"
            className={`input input-bordered w-full rounded-xl text-sm sm:text-base h-10 sm:h-12 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary ${errors.companyName ? "input-error" : ""
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
          <label className="block text-sm sm:text-base font-medium mb-2">Company Address</label>
          <input
            type="text"
            placeholder="Company Address"
            className={`input input-bordered w-full rounded-xl text-sm sm:text-base h-10 sm:h-12 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary ${errors.companyAddress ? "input-error" : ""
              }`}
            {...register("companyAddress", {
              required: "Address is required",
            })}
          />
          {errors.companyAddress && (
            <p className="mt-1 text-xs text-error">
              {errors.companyAddress.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 animate-slide-up [animation-delay:300ms]">
        <div>
          <label className="block text-sm sm:text-base font-medium mb-2">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className={`input input-bordered w-full rounded-xl text-sm sm:text-base h-10 sm:h-12 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary ${errors.firstName ? "input-error" : ""
              }`}
            {...register("firstName", {
              required: "First name is required",
              minLength: { value: 2, message: "Too short" },
            })}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-error">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm sm:text-base font-medium mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className={`input input-bordered w-full rounded-xl text-sm sm:text-base h-10 sm:h-12 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary ${errors.lastName ? "input-error" : ""
              }`}
            {...register("lastName", {
              required: "Last name is required",
              minLength: { value: 2, message: "Too short" },
            })}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-error">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 animate-slide-up [animation-delay:400ms]">
        <div>
          <label className="block text-sm sm:text-base font-medium mb-2">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            className={`input input-bordered w-full rounded-xl text-sm sm:text-base h-10 sm:h-12 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary ${errors.email ? "input-error" : ""
              }`}
            suppressHydrationWarning
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-error">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm sm:text-base font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            placeholder="Phone Number"
            className={`input input-bordered w-full rounded-xl text-sm sm:text-base h-10 sm:h-12 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary ${errors.phone ? "input-error" : ""
              }`}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[\+]?[1-9][\d]{0,15}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-error">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 animate-slide-up [animation-delay:500ms]">
        <div>
          <label className="block text-sm sm:text-base font-medium mb-2">Services Interested In</label>
          <select
            className={`select select-bordered w-full rounded-xl text-sm sm:text-base h-10 sm:h-12 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary ${errors.service ? "select-error" : ""
              }`}
            {...register("service", {
              required: "Please select a service",
            })}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-error">
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm sm:text-base font-medium mb-2">How did you hear about us?</label>
          <select
            className={`select select-bordered w-full rounded-xl text-sm sm:text-base h-10 sm:h-12 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary ${errors.referral ? "select-error" : ""
              }`}
            {...register("referral", {
              required: "Please select how you heard about us",
            })}
          >
            <option value="">Select an option</option>
            {referrals.map((referral) => (
              <option key={referral} value={referral}>
                {referral}
              </option>
            ))}
          </select>
          {errors.referral && (
            <p className="mt-1 text-xs text-error">
              {errors.referral.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 5 */}
      <div className="animate-slide-up [animation-delay:600ms]">
        <label className="block text-sm sm:text-base font-medium mb-2">Message</label>
        <textarea
          placeholder="Tell us about your project or requirements..."
          rows={4}
          className={`textarea textarea-bordered w-full rounded-xl text-sm sm:text-base transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary ${errors.message ? "textarea-error" : ""
            }`}
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message is too short" },
          })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-error">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full h-10 sm:h-12 lg:h-14 rounded-xl text-sm sm:text-base lg:text-lg font-bold mt-2 sm:mt-4 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg hover:shadow-primary/30 relative overflow-hidden group animate-slide-up [animation-delay:700ms]"
      >
        <span className="relative z-10">
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="loading loading-spinner loading-sm"></span>
              Submitting...
            </span>
          ) : (
            "SUBMIT"
          )}
        </span>
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </button>
    </form>
  );
}
