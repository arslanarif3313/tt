import AssessmentAndAnalysis from '@/components/AssessmentAndAnalysis/AssessmentAndAnalysis'
import Heading from '@/components/ui/Heading/Heading'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading heading={'Assessment and Analysis'}></Heading>

            <AssessmentAndAnalysis></AssessmentAndAnalysis>
            <section className="py-24 bg-base-200">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="uppercase font-bold text-2xl lg:text-4xl">
                        Contact Tymor Technologies
                    </h2>

                    <p className="mt-4 max-w-4xl mx-auto opacity-80 text-base lg:text-lg">
                        To ensure your business is protected with a comprehensive cybersecurity plan,
                        contact Tymor Technologies. Our team of experts is ready to assist you with
                        risk assessments, threat modeling, compliance checks, and more.
                    </p>

                    <div className="mt-8">
                        <Link
                            href="/contact-us"
                            className="inline-block rounded-lg px-6 py-3 bg-black text-white
                        tracking-wide transition-colors
                       hover:bg-primary hover:text-black text-2xl"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}
