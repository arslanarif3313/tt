'use client';

import Image from 'next/image';
import { CheckCircle, Mic, Clock, ThumbsUp, Accessibility, FileText, Move, CircleDot } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Heading from '@/components/ui/Heading/Heading';
import GridSectionFive from '@/components/ui/GridSection/GridSectionFive';
import Link from 'next/link';

export default function SpeechRecognition() {
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
        {
            title: 'Identify Key Areas for Implementation',
            desc: 'Determine which departments or processes would benefit most from speech recognition. For example, customer service, data entry, or internal communications.'
        },
        {
            title: 'Select the Right Solution',
            desc: 'Choose a speech recognition software that fits your business needs. Factors to consider include accuracy, language support, ease of integration, scalability, and cost. Examples of popular speech recognition solutions include Google Cloud Speech-to-Text, IBM Watson Speech to Text, and Amazon Transcribe.'
        },
        {
            title: 'Monitoring and Feedback',
            desc: 'After implementation, regularly monitor the system’s performance and gather feedback from users to make necessary adjustments and improvements.'
        },
        {
            title: 'Employee Training',
            desc: 'Conduct training sessions for employees to ensure they understand how to use the new technology effectively. Provide user guides and support resources to assist with the transition.'
        },
        {
            title: 'Integration with Existing Systems',
            desc: 'Collaborate with your IT department or a trusted technology partner like Tymor Technologies to integrate the speech recognition solution with your existing systems. This could involve CRM systems, ERP software, or other specialized applications.'
        },


    ];

    return (
        <div>
            <Heading heading={'Speech Recognition'}></Heading>


            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
                    <Image
                        src="/speech-recognition/speech-recognition.webp"
                        alt="Speech Recognition"
                        width={600}
                        height={600}
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">What is Speech Recognition?</h2>
                        <p className="text-gray-700">
                            Speech recognition is a technology that allows machines to understand and process human speech. It involves converting spoken language into text through sophisticated algorithms, artificial intelligence (AI), and machine learning (ML) models. This technology can recognize and interpret various languages and dialects, making it a versatile tool in many industries.
                        </p>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <GridSectionFive
                title={"Why Should Your Company Consider Using Speech Recognition ?"}
                grid={[
                    {
                        title: "Time Savings and Efficiency",
                        desc: "Speech recognition software can significantly reduce the time employees spend on typing reports, emails, or notes. This is particularly beneficial in roles where documentation is frequent, such as in healthcare or legal professions.",
                        icon: "assets/icons/tine.webp",
                    },
                    {
                        title: "Enhanced Customer Experience",
                        desc: "Incorporating speech recognition into customer service can enable automated call handling, allowing customers to get quick responses to their inquiries without waiting for a human agent. This can improve customer satisfaction and reduce call handling times.",
                        icon: "assets/icons/cust.webp",
                    },
                    {
                        title: "Accessibility and Inclusivity",
                        desc: "For employees with disabilities, such as those with mobility impairments, speech recognition can provide a more accessible means of interacting with computers, promoting an inclusive work environment.",
                        icon: "/assets/icons/accc.webp",
                    },
                    {
                        title: "Accurate Data Entry",
                        desc: "In sectors like healthcare, accurate documentation is crucial. Speech recognition can help doctors and nurses quickly transcribe patient notes, reducing the risk of errors associated with manual data entry.",
                        icon: "/assets/icons/de.webp",
                    },
                    {
                        title: "Hands-Free Operation",
                        desc: "In environments where employees need to keep their hands free, such as in manufacturing or logistics, speech recognition can facilitate hands-free operation, improving safety and productivity.",
                        icon: "/assets/icons/wrr.webp",
                    },

                ]}

            ></GridSectionFive>

            {/* INCORPORATION STEPS */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-10 uppercase">How to Incorporate Speech Recognition Into Your Company</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="p-4 border-l-4 border-primary bg-gray-50 shadow-sm">
                                <h3 className="font-semibold mb-1">{step.title}</h3>
                                <p className="text-sm ">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXAMPLE USAGE */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
                    <Image src="/speech-recognition/chat-bot-head-set.webp" alt="Chatbot" width={500} height={500} />
                    <div>
                        <h2 className="text-2xl font-bold mb-4 uppercase">Current Example of Speech Recognition Usage</h2>
                        <p className='mb-5 '>
                            A practical example of speech recognition technology is its use in healthcare for medical transcription. Doctors can dictate their patient notes using speech recognition software, which then converts the spoken words into text, creating an accurate and comprehensive medical record. This saves time, reduces the burden of manual typing, and helps ensure that patient records are up-to-date and precise.



                        </p>
                        <p>
                            Another example is in customer service call centers, where speech recognition is used to handle routine inquiries. Automated systems can understand and respond to customer queries, allowing human agents to focus on more complex issues. For instance, banks use speech recognition to verify customer identities and provide account information through automated voice systems.
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
                            Tymor Technologies can assist your company in the following ways:
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
                                        Assessment and Planning
                                    </h3>
                                    <p className="text-gray-700 mt-2">
                                        We can conduct a thorough assessment of your current systems and
                                        processes to identify where speech recognition can add the most
                                        value. Our experts will work with you to develop a strategic plan
                                        for implementation.
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
                                        Solution Selection
                                    </h3>
                                    <p className="text-gray-700 mt-2">
                                        Based on your specific needs, we can recommend the most suitable
                                        speech recognition software. We consider factors such as accuracy,
                                        integration capabilities, and cost-effectiveness to ensure you get
                                        the best solution.
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
                                        Seamless Integration
                                    </h3>
                                    <p className="text-gray-700 mt-2">
                                        Our team of experienced IT professionals will handle the
                                        integration of speech recognition technology with your existing
                                        systems, ensuring a smooth transition with minimal disruption to
                                        your operations.
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
                                        Training and Support
                                    </h3>
                                    <p className="text-gray-700 mt-2">
                                        We provide comprehensive training for your employees to ensure
                                        they can use the new technology effectively. Additionally, we offer
                                        ongoing technical support to address any issues that may arise,
                                        ensuring continuous improvement and optimization.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Closing paragraph + link */}
                        <div className="mt-10 space-y-4">
                            <p className="text-gray-700">
                                By partnering with Tymor Technologies, you can leverage advanced
                                speech recognition technology to enhance productivity, improve customer
                                service, and streamline operations. Contact us today to learn more
                                about how we can help you integrate speech recognition into your
                                business.
                            </p>

                            <Link
                                href="/contact-us"
                                className="inline-block text-primary font-semibold underline underline-offset-4 hover:opacity-90"
                            >
                                Click here for more information.
                            </Link>
                        </div>
                    </div>
                    <Image src="/speech-recognition/aspr.webp" alt="Help Visual" width={1000} height={1000} className="rounded shadow" />
                </div>
            </section>
        </div>
    );
}
