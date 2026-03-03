// components/Testimonial.tsx (or .jsx)
"use client";

import { Quote } from "lucide-react";

export default function Testimonial() {
    return (
        <section className="py-16 md:py-20 bg-base-200">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center mb-8 md:mb-12">
                    Testimonial
                </h2>

                {/* Card */}
                <div className="mx-auto max-w-5xl rounded-md bg-base-100 border border-base-300 shadow-sm p-6 md:p-10">
                    <Quote className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4" />

                    <p className="text-base md:text-lg leading-relaxed text-base-content/90">
                        &quot;Partnering with Tymor Technologies for our data backup needs
                        has been a game-changer. We no longer worry about data loss or
                        security breaches. Their comprehensive backup solution has given us
                        peace of mind and allowed us to focus on what we do best – providing
                        excellent accounting services to our clients.&quot;
                    </p>

                    <p className="mt-6 font-semibold">
                        John Hawthorn, IT Director
                    </p>
                </div>
            </div>
        </section>
    );
}
