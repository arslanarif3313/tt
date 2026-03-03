import React from 'react'

export default function ChatbotHelps() {
    const steps = [
        {
            title: 'Enhanced Customer Engagement',
            desc: 'Personalized Interactions: Chatbots offer personalized experiences by understanding and responding to individual customer needs, enhancing engagement and satisfaction.'
        },
        {
            title: 'Operational Efficiency',
            desc: 'Streamlined Processes: By automating routine tasks, chatbots streamline workflows and reduce the burden on human agents, improving overall operational efficiency.'
        },
        {
            title: 'Lead Generation and Conversion',
            desc: 'Automated Lead Capture: Chatbots can capture and qualify leads through conversational interactions, increasing the chances of conversion and sales.'
        },
        {
            title: 'Improved Productivity',
            desc: 'Focus on Strategic Tasks: Employees can focus on more strategic and high-value tasks by offloading repetitive customer interactions to chatbots.'
        },



    ];
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-10 uppercase">How Chatbots and Virtual Assistants Can Help Your Business</h2>
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
    )
}
