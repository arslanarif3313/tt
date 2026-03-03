import ContactSection from '@/components/KeywordResearchServices/ContactSection'
import CurrentSituationsSection from '@/components/KeywordResearchServices/CurrentSituationsSection'
import KeywordResearchTools from '@/components/KeywordResearchServices/KeywordResearchTools'
import Heading from '@/components/ui/Heading/Heading'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading heading={'Keyword Research Services'}></Heading>
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        {/* Left: Image */}
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/marketing/SEO-keyword-research-services.webp"
                                alt="Keyword research desk view"
                                width={1400}
                                height={900}
                                priority
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right: Content */}
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                                KEYWORD RESEARCH SERVICES
                            </h2>

                            <p className="text-base-content/80 mb-4">
                                In today&apos;s digital landscape, understanding the keywords that
                                drive traffic to your website is critical for the success of your
                                online presence.
                            </p>

                            <p className="text-base-content/80 mb-4">
                                Effective keyword research helps your business attract the right
                                audience, increase visibility, and drive conversions.
                            </p>

                            <p className="text-base-content/80">
                                At Tymor Technologies, we offer comprehensive keyword research
                                services that utilize cutting-edge software and industry best
                                practices to ensure your content is optimized for search engines.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <KeywordResearchTools></KeywordResearchTools>
            <CurrentSituationsSection></CurrentSituationsSection>
            <ContactSection></ContactSection>












        </div>
    )
}
