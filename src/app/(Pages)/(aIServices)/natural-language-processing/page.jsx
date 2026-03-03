'use client';

import Image from 'next/image';
import { CheckCircle, Mic, Clock, ThumbsUp, Accessibility, FileText, Move, CircleDot } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Heading from '@/components/ui/Heading/Heading';
import NlpIntro from '@/components/NaturalLanguageProcessing/NlpIntro';
import GridSectionFive from '@/components/ui/GridSection/GridSectionFive';
import HowtoIncorporate from '@/components/NaturalLanguageProcessing/HowtoIncorporate';
import Link from 'next/link';

// Note: Client component - metadata should be in layout.jsx

export default function NaturalLanguageProcessing() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    const benefits = [
        {
            title: 'Time Savings and Efficiency',
            desc: 'Speech recognition software can reduce typing time for reports, emails, and notes, especially useful in roles like healthcare or legal professions.',
            icon: <Clock className="text-orange-500 w-6 h-6" />,
        },
        {
            title: 'Enhanced Customer Experience',
            desc: 'Enables quick responses through automated call handling, improving satisfaction and reducing call time.',
            icon: <ThumbsUp className="text-orange-500 w-6 h-6" />,
        },
        {
            title: 'Accessibility and Inclusivity',
            desc: 'Makes tech more inclusive for employees with disabilities, enhancing workplace accessibility.',
            icon: <Accessibility className="text-orange-500 w-6 h-6" />,
        },
        {
            title: 'Accurate Data Entry',
            desc: 'Especially in healthcare, speech recognition reduces manual errors in documentation.',
            icon: <FileText className="text-orange-500 w-6 h-6" />,
        },
        {
            title: 'Hands-Free Operation',
            desc: 'Allows staff to work hands-free, improving safety and productivity in industrial environments.',
            icon: <Move className="text-orange-500 w-6 h-6" />,
        },
    ];

    const steps = [
        'Identify Key Areas for Implementation',
        'Select the Right Solution',
        'Monitoring and Feedback',
        'Employee Training',
        'Integration with Existing Systems',
    ];

    return (
        <div>

            <Heading heading={'Natural Language Processing'}></Heading>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Natural Language Processing (NLP) Solutions for Smarter Insights
                    </h1>
                </div>
            </section>

            <NlpIntro></NlpIntro>
            <GridSectionFive
                title={"Why Should Your Company Consider Using NLP?"}
                grid={[
                    {
                        title: "Enhanced Customer Service",
                        desc: "NLP can be used to develop chatbots and virtual assistants that provide quick and accurate responses to customer inquiries, improving customer satisfaction and reducing response times.",
                        icon: "assets/icons/cust.webp",
                    },
                    {
                        title: "Automated Insights",
                        desc: "NLP tools can analyze large volumes of unstructured data (like customer reviews, emails, and social media posts) to provide actionable insights, helping businesses make informed decisions.",
                        icon: "assets/icons/auto.webp",
                    },
                    {
                        title: "Improved Efficiency",
                        desc: "Automating repetitive tasks such as data entry, document processing, and report generation can save time and reduce errors, allowing employees to focus on more strategic activities.",
                        icon: "/assets/icons/accc.webp",
                    },
                    {
                        title: "Better Market Understanding",
                        desc: "Sentiment analysis and trend monitoring can help businesses understand market dynamics, customer preferences, and emerging trends, enabling more targeted marketing strategies.",
                        icon: "/assets/icons/decision-making.webp",
                    },
                    {
                        title: "Enhanced Security",
                        desc: "NLP can be applied to cybersecurity for threat detection, analyzing communications for potential threats, and automating responses to suspicious activities.",
                        icon: "/assets/icons/frd.webp",
                    },

                ]}




            ></GridSectionFive>
            <HowtoIncorporate></HowtoIncorporate>
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
                    <Image src="/speech-recognition/chat-bot-head-set.webp" alt="Chatbot" width={500} height={500} />
                    <div>
                        <h2 className="text-2xl font-bold mb-4 uppercase">Current Example of NLP in Use</h2>
                        <p >
                            A prominent example of NLP in use today is customer service chatbots. Companies like Amazon and Google use advanced NLP algorithms to power their virtual assistants, such as Alexa and Google Assistant. These chatbots can understand and respond to a wide range of customer queries, providing information, processing orders, and even troubleshooting issues without human intervention.



                        </p>

                    </div>
                </div>
            </section>

            {/* HOW TYMOR CAN HELP */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
                    <div>
                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-wide mb-6">
                            How Tymor Technologies Can Help
                        </h2>

                        {/* Intro line */}
                        <p className="text-base sm:text-lg text-gray-700 mb-8">
                            Tymor Technologies offers comprehensive managed IT and cybersecurity services, which can include the integration of NLP solutions tailored to your business needs. Our team can assist you in:
                        </p>

                        {/* List */}
                        <div className="space-y-8">
                            {/* Item */}
                            <div className="flex items-start gap-4">
                                <span className="mt-1 shrink-0">
                                    <CircleDot className="h-5 w-5 text-primary" />
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Needs Assessment
                                    </h3>
                                    <p className="text-gray-700 mt-2">
                                        Analyzing your business processes to identify potential areas for NLP integration.
                                    </p>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="flex items-start gap-4">
                                <span className="mt-1 shrink-0">
                                    <CircleDot className="h-5 w-5 text-primary" />
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Tool Selection
                                    </h3>
                                    <p className="text-gray-700 mt-2">
                                        Recommending the best NLP tools and technologies that align with your objectives.
                                    </p>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="flex items-start gap-4">
                                <span className="mt-1 shrink-0">
                                    <CircleDot className="h-5 w-5 text-primary" />
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Implementation
                                    </h3>
                                    <p className="text-gray-700 mt-2">
                                        Seamlessly integrating NLP solutions into your existing systems and workflows.
                                    </p>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="flex items-start gap-4">
                                <span className="mt-1 shrink-0">
                                    <CircleDot className="h-5 w-5 text-primary" />
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Model Training and Optimization
                                    </h3>
                                    <p className="text-gray-700 mt-2">
                                        Training custom NLP models on your data and optimizing them for maximum performance.
                                    </p>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="flex items-start gap-4">
                                <span className="mt-1 shrink-0">
                                    <CircleDot className="h-5 w-5 text-primary" />
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Ongoing Support
                                    </h3>
                                    <p className="text-gray-700 mt-2">
                                        Providing continuous monitoring, support, and updates to ensure your NLP applications remain effective and up-to-date.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Closing paragraph + link */}
                        <div className="mt-10 space-y-4">
                            <p className="text-gray-700">
                                By leveraging our expertise, your company can harness the power of NLP to improve efficiency, gain insights, enhance customer experiences, and stay ahead in the competitive landscape.
                            </p>
                            <p className="text-gray-700">
                                If you’re ready to explore the potential of NLP for your business, click here to learn more about how Tymor Technologies can assist you in this transformative journey.


                            </p>


                        </div>
                    </div>
                    <div className='space-y-5'>
                        <Image src="/aiServices/AI-Tools-for-Natural-Language-Processing-NLP.webp" alt="Help Visual" width={1000} height={1000} className="rounded-md shadow" />
                        <Image src="/aiServices/NLP-examples-scaled.webp" alt="Help Visual" width={1000} height={1000} className="rounded-md shadow" />
                    </div>
                </div>
            </section>
        </div>
    );
}
