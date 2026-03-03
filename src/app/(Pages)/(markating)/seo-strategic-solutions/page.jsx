import ResultsAndContact from '@/components/SeoStrategicSolutions/ResultsAndContact'
import SeoDetailedExample from '@/components/SeoStrategicSolutions/SeoDetailedExample'
import SeoSoftwareGrid from '@/components/SeoStrategicSolutions/SeoSoftwareGrid'
import SeoStepsSection from '@/components/SeoStrategicSolutions/SeoStepsSection'
import SeoStrategicSolutions from '@/components/SeoStrategicSolutions/SeoStrategicSolutions'
import Heading from '@/components/ui/Heading/Heading'
import React from 'react'

export const metadata = {
  title: "SEO & Digital Marketing Strategy – Tymor Technologies",
  description: "Strategic SEO and digital marketing solutions to boost your online visibility, drive traffic, and increase conversions. Expert SEO consulting and implementation.",
};

export default function page() {
    return (
        <div>
            <Heading
                heading={'SEO Strategic Solutions'}
            ></Heading>
            
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        SEO Strategic Solutions to Boost Your Online Visibility
                    </h1>
                </div>
            </section>

            <SeoStrategicSolutions></SeoStrategicSolutions>
            {/* Types of Software */}
            <SeoSoftwareGrid></SeoSoftwareGrid>
            <SeoDetailedExample></SeoDetailedExample>
            <SeoStepsSection></SeoStepsSection>
            <ResultsAndContact></ResultsAndContact>

        </div>
    )
}
