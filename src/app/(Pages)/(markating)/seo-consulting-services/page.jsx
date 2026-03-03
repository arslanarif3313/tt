import HowWeHelpBusiness from '@/components/SeoConsultingServices/HowWeHelpBusiness'
import SeoConsultingCases from '@/components/SeoConsultingServices/SeoConsultingCases'
import SeoConsultingIntro from '@/components/SeoConsultingServices/SeoConsultingIntro'
import GridSectionFive from '@/components/ui/GridSection/GridSectionFive'
import Heading from '@/components/ui/Heading/Heading'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading
                heading={'SEO Consulting Services'}
            ></Heading>

            <SeoConsultingIntro></SeoConsultingIntro>

            <GridSectionFive
                title={'Types of Software Used in SEO Consulting'}
                subtitle={'To achieve top-notch results, we employ a variety of industry-leading software tools. Here’s a glimpse of some of the essential tools we use'}
                grid={[
                    {
                        title: "Google Analytics",
                        desc: "Google Analytics provides in-depth insights into your website's traffic, user behavior, and conversion rates. By analyzing this data, we can make informed decisions to improve your site’s performance.",
                        icon: "assets/icons/ga.webp",
                    },
                    {
                        title: "SEMrush",
                        desc: "SEMrush is a comprehensive SEO tool that offers keyword research, competitor analysis, and site audits. It helps us identify the best keywords to target and understand your competition's strategies.",
                        icon: "assets/icons/sem.webp",
                    },
                    {
                        title: "Ahrefs",
                        desc: "Ahrefs is renowned for its backlink analysis capabilities. We use it to examine your website’s backlink profile, identify link-building opportunities, and monitor your overall link health.",
                        icon: "/assets/icons/ahref.webp",
                    },
                    {
                        title: "Moz Pro",
                        desc: "Moz Pro provides a suite of SEO tools, including keyword research, link building, and on-page optimization. It helps us track your rankings, analyze your site's SEO health, and optimize your content.",
                        icon: "assets/icons/moz.webp",
                    },
                    {
                        title: "Yoast SEO",
                        desc: "For websites built on WordPress, Yoast SEO is an invaluable plugin. It assists in optimizing your content for search engines, ensuring your posts and pages are fully optimized.",
                        icon: "/assets/icons/yseo.webp",
                    },
                ]}
            ></GridSectionFive>
            <SeoConsultingCases></SeoConsultingCases>
            {/* How Tymor Technologies Can Help */}
            <HowWeHelpBusiness></HowWeHelpBusiness>



        </div>
    )
}
