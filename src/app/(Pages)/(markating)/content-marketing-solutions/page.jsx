import ContentMarketing from '@/components/ContentMarketingSolutions/ContentMarketing'
import TypesOfContentMarketingSoftware from '@/components/ContentMarketingSolutions/TypesOfContentMarketingSoftware'
import HowTymorHelps from '@/components/SeoStrategicSolutions/HowTymorHelps'
import GridSection from '@/components/ui/GridSection/GridSection'
import Heading from '@/components/ui/Heading/Heading'
import React from 'react'

export const metadata = {
  title: "Content Marketing Solutions – Tymor Technologies",
  description: "Strategic content marketing solutions that drive engagement and growth. Blog management, social media campaigns, email marketing, and video content creation.",
};

export default function page() {
    return (
        <div>
            <Heading
                heading={'Content Marketing Solutions'}
            ></Heading>
            
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Content Marketing Solutions That Drive Engagement & Growth
                    </h1>
                </div>
            </section>

            {/* CONTENT MARKETING */}
            <ContentMarketing></ContentMarketing>
            <TypesOfContentMarketingSoftware></TypesOfContentMarketingSoftware>
            <GridSection
                title={'Examples of Content Marketing Solutions'}
                grid={[
                    {
                        title: "Blog Management",
                        desc: "Tymor Technologies helps businesses maintain an active blog with regular, high-quality posts. Using tools like WordPress and Grammarly, we ensure that each post is engaging and optimized for SEO.",
                        icon: "assets/icons/blog.webp",
                    },
                    {
                        title: "Social Media Campaigns",
                        desc: "We design and execute social media campaigns using Hootsuite and Buffer to schedule posts, engage with followers, and track performance across various platforms such as Facebook, Twitter, LinkedIn, and Instagram.",
                        icon: "assets/icons/camp.webp",
                    },
                    {
                        title: "Email Marketing",
                        desc: "Leveraging tools like HubSpot and Mailchimp, we create and distribute targeted email campaigns that nurture leads and convert them into customers.",
                        icon: "/assets/icons/email.webp",
                    },
                    {
                        title: "Video Marketing",
                        desc: "Using Adobe Premiere Pro and YouTube, we produce compelling video content that tells your brand’s story and reaches a wider audience.",
                        icon: "assets/icons/vid.webp",
                    },
                ]}
            ></GridSection>
            <HowTymorHelps></HowTymorHelps>








        </div>
    )
}
