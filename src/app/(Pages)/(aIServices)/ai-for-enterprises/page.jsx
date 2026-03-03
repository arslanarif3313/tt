'use client';

import Image from 'next/image';
import { CheckCircle, Mic, Clock, ThumbsUp, Accessibility, FileText, Move } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Heading from '@/components/ui/Heading/Heading';
import GridSectionFive from '@/components/ui/GridSection/GridSectionFive';
import DetailedExample from '@/components/AiForSmallBusiness/DetailedExample';
import WhyContact from '@/components/AiForSmallBusiness/WhyContact';

// Note: Client component - metadata should be in layout.jsx

export default function AiforSmallBusiness() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    const grid =
        [
            {
                title: "Automation of Routine Tasks",
                desc: "AI can handle repetitive tasks such as data entry, scheduling, and customer inquiries, freeing up time for employees to focus on more strategic activities.",
                icon: "",
            },
            {
                title: "Enhanced Customer Experience",
                desc: "AI-powered chatbots and virtual assistants can provide 24/7 customer support, answering frequently asked questions and resolving issues promptly.",
                icon: "",
            },
            {
                title: "Data-Driven Decision Making",
                desc: "AI can analyze vast amounts of data quickly and accurately, providing insights that can inform business strategies and operations.",
                icon: "",
            },
            {
                title: "Personalization",
                desc: "AI algorithms can analyze customer behavior and preferences to deliver personalized recommendations and marketing messages, increasing engagement and sales.",
                icon: "",
            },
            {
                title: "Cost Savings",
                desc: "By automating processes and improving efficiency, AI can help reduce operational costs.",
                icon: "",
            },
            {
                title: "Cost Savings",
                desc: "By automating processes and improving efficiency, AI can help reduce operational costs.",
                icon: "",
            },

        ]

    const steps = [
        'Identify Key Areas for Implementation',
        'Select the Right Solution',
        'Monitoring and Feedback',
        'Employee Training',
        'Integration with Existing Systems',
    ];

    return (
        <div>

            <Heading heading={'AI for Enterprises'}></Heading>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        AI Solutions for Enterprises: Automate & Grow Smarter
                    </h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
                    <Image
                        src="/aiServices/ai-in-business.webp"
                        alt="Speech Recognition"
                        width={600}
                        height={600}
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
                            AI for Enterprises
                        </h2>
                        <div className=" space-y-5">
                            <p> Artificial Intelligence (AI) is transforming the way businesses operate, and enterprises are no exception.</p>
                            <p> AI refers to the simulation of human intelligence in machines that are programmed to think and learn. It includes technologies like machine learning, natural language processing, and robotics.</p>

                            <p> For enterprises, AI can provide a competitive edge by automating tasks, improving customer experiences, and enabling data-driven decision-making.</p>


                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-24 bg-black text-white">
                <div className="container mx-auto px-4 ">
                    <h2 className="uppercase font-bold text-center text-2xl lg:text-4xl mb-12">
                        Why Your Company Should Consider Using AI
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3   gap-8 ">
                        {grid.map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white text-black rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer"
                            >
                                {card?.icon &&
                                    <img
                                        src={card?.icon}
                                        alt={card?.title}

                                        className="mx-auto w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110"
                                    />
                                }

                                <h3 className="font-semibold mb-2">{card?.title}</h3>
                                <p className="text-sm opacity-80">{card?.desc}</p>
                            </div>
                        ))}
                    </div>



                </div>
            </section>
            {/* DetailedExample */}
            <DetailedExample></DetailedExample>
            {/* Why Contact */}
            <WhyContact></WhyContact>

        </div>
    );
}
