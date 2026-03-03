// components/TypesOfCybersecurityServices.jsx
"use client";

const services = [
    "Cybersecurity Risk Assessment",
    "Virtual Chief Information Security Officer (vCISO)",
    "Multifactor Authentication (MFA)",
    "Intrusion Detection and Response (IDR)",
    "Endpoint Detection and Response (EDR)",
    "Phishing Prevention Training",
    "Vulnerability Scanning",
    "IT Governance, Risk and Compliance (GRC)",
    "Professional Dark Web Monitoring",
];

export default function TypesOfCybersecurityServices() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-center uppercase font-bold text-2xl lg:text-4xl">
                    TYPES OF CYBERSECURITY SERVICES OFFERED BY<br />
                    TYMOR TECHNOLOGIES
                </h2>

                {/* Intro */}
                <p className="mt-4 max-w-4xl mx-auto text-center opacity-80">
                    Tymor Technologies offers a range of cybersecurity solutions and consulting services
                    for businesses of all sizes. Our solutions are comprehensive and cost-effective. Our
                    in-house team of cybersecurity consultants protects your data, ensures compliance with
                    regulatory requirements, and provides confidence that your business is safeguarded
                    against the latest threats.
                </p>

                {/* Grid */}
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((label) => (
                        <div
                            key={label}
                            className="rounded-xl bg-white text-black px-6 py-5 font-semibold text-center shadow-sm
                         hover:shadow-md border border-black/10 transition"
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
