'use client';

import Image from 'next/image';
import { CheckCircle, Mic, Clock, ThumbsUp, Accessibility, FileText, Move } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Heading from '@/components/ui/Heading/Heading';
import GridSectionFive from '@/components/ui/GridSection/GridSectionFive';
import ChatbotDisadvantages from '@/components/ChatbotsAssistants/ChatbotDisadvantages';
import ChatbotHelps from '@/components/ChatbotsAssistants/ChatbotHelps';
import CurrentSituation from '@/components/ChatbotsAssistants/CurrentSituation';
import TymorCanHelp from '@/components/ChatbotsAssistants/TymorCanHelp';



export default function ChatbotsAndVirtualAssistants() {
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



    return (
        <div>

            <Heading heading={'Chatbots and Virtual Assistants'}></Heading>

            <section className="py-16 bg-white ">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
                    <Image
                        src="/aiServices/chatbot.webp"
                        alt="Speech Recognition"
                        width={600}
                        height={600}
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">What is Chatbots and Virtual Assistants?</h2>
                        <p className="text-gray-700">
                            <strong>Chatbots and Virtual Assistants</strong> are sophisticated AI-driven tools designed to mimic human conversation and provide automated assistance across various digital platforms. Utilizing natural language processing (NLP) and machine learning (ML), these technologies can understand, process, and respond to user queries in real-time, delivering personalized and efficient customer service.
                        </p>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <GridSectionFive
                title={"Why Should Your Company Consider Using CHATBOTS AND VIRTUAL ASSISTANTS?"}
                grid={[
                    {
                        title: "24/7 Availability",
                        desc: "Continuous Support: Chatbots can provide continuous customer support, addressing queries and resolving issues any time of day or night. This ensures that your customers always have access to assistance when they need it.",
                        icon: "assets/icons/decision-making.webp",
                    },
                    {
                        title: "Cost Efficiency",
                        desc: "Reduced Operational Costs: Implementing chatbots can significantly cut down on the costs associated with hiring and training large customer support teams. Automated systems handle a large volume of routine inquiries, reducing the need for human intervention.",
                        icon: "assets/icons/auto.webp",
                    },
                    {
                        title: "Enhanced Efficiency",
                        desc: "Speed and Accuracy: Chatbots process customer inquiries instantly, providing quick and accurate responses. This reduces wait times and improves the overall customer experience.",
                        icon: "/assets/icons/per.webp",
                    },
                    {
                        title: "Scalability",
                        desc: "Handling High Volumes: Chatbots can easily manage a large number of interactions simultaneously without a decline in service quality. This makes them ideal for businesses experiencing rapid growth or seasonal spikes in customer inquiries.",
                        icon: "/assets/icons/frd.webp",
                    },
                    {
                        title: "Data Collection and Insights",
                        desc: "Customer Insights: Chatbots collect valuable data on customer interactions, preferences, and behaviors. This data can be analyzed to gain insights into customer needs, allowing for better product development and targeted marketing strategies.",
                        icon: "/assets/icons/wrr.webp",
                    },

                ]}
            ></GridSectionFive>
            {/* chat bot Assistants Can Help Your Business */}
            <ChatbotDisadvantages></ChatbotDisadvantages>

            {/* INCORPORATION STEPS */}
            <ChatbotHelps></ChatbotHelps>

            {/* Current Situation */}
            <CurrentSituation></CurrentSituation>

            {/* HOW TYMOR CAN HELP */}
            <TymorCanHelp></TymorCanHelp>
        </div>
    );
}
