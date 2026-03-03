import ExamplesOfWork from '@/components/SeoBlogWriting/ExamplesOfWork'
import HowWeCanHelp from '@/components/SeoBlogWriting/HowWeCanHelp'
import SeoImportance from '@/components/SeoBlogWriting/SeoImportance'
import GridSectionFive from '@/components/ui/GridSection/GridSectionFive'
import Heading from '@/components/ui/Heading/Heading'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading heading={'SEO Blog Writing'}></Heading>
            {/* SEO Blog Writing */}

            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4 text-center">

                    {/* Section Title */}
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                        SEO BLOG WRITING: BOOST YOUR ONLINE PRESENCE <br /> WITH TYMOR TECHNOLOGIES
                    </h2>

                    {/* Section Text */}
                    <p className="mt-6 max-w-5xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed">
                        In the digital age, maintaining a strong online presence is crucial for businesses of all sizes.
                        One of the most effective ways to enhance your visibility and engage with your audience is through
                        high-quality SEO blog writing. At Tymor Technologies, we specialize in creating compelling,
                        SEO-optimized blog content that not only attracts visitors but also converts them into loyal customers.
                    </p>
                </div>
            </section>

            <SeoImportance></SeoImportance>
            <GridSectionFive
                title={'Tools and Software for SEO Blog Writing'}
                subtitle={'At Tymor Technologies, we utilize industry-leading software to ensure your blog content is optimized for maximum impact. Here are some of the key tools we use'}
                grid={[
                    {
                        title: "Ahrefs",
                        desc: "A comprehensive SEO toolset for link building, keyword research, competitor analysis, rank tracking, and site audits.",
                        icon: "assets/icons/hiref.webp",
                    },
                    {
                        title: "SurferSEO",
                        desc: "A content optimization tool that helps us create high-ranking articles by analyzing top-ranking pages and providing actionable data.",
                        icon: "assets/icons/seo.webp",
                    },
                    {
                        title: "ClearScope",
                        desc: "An advanced content optimization platform that enhances the relevance and comprehensiveness of our blog posts.",
                        icon: "/assets/icons/decision-making.webp",
                    },
                    {
                        title: "BuzzSumo",
                        desc: "A tool for identifying popular content and trends in your industry, helping us create content that resonates with your audience.",
                        icon: "assets/icons/buzz.webp",
                    },
                    {
                        title: "Hemingway Editor",
                        desc: "An application that makes your writing clear and bold by highlighting complex sentences and common errors.",
                        icon: "/assets/icons/dhee.webp",
                    },
                ]}
            ></GridSectionFive>
            <ExamplesOfWork></ExamplesOfWork>
            <HowWeCanHelp></HowWeCanHelp>
            {/* Contact Us */}
            <section className="py-24 bg-base-300 text-center">
                <div className="container mx-auto px-4">
                    {/* Heading */}
                    <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                        CONTACT US
                    </h2>

                    {/* Description */}
                    <p className="mb-6 max-w-3xl mx-auto text-base-content/80">
                        Ready to take your online presence to the next level with high-quality
                        SEO blog writing? Contact Tymor Technologies now to set up an
                        appointment and discover how our expertise can help your business
                        thrive.
                    </p>

                    {/* Links */}
                    <p className="text-base">
                        <a
                            href="/contact-us"
                            className="font-semibold text-primary hover:underline"
                        >
                            Click here for more information
                        </a>{" "}
                        or visit{" "}
                        <a
                            href="https://tymortech.com"
                            className="font-semibold text-primary hover:underline"
                        >
                            tymortech.com
                        </a>{" "}
                        to learn more about our services.
                    </p>
                </div>
            </section>





        </div>
    )
}
