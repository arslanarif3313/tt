import React from 'react'

export default function HowtoIncorporate() {
    const steps = [
        {
            title: 'Identify Use Cases',
            desc: 'Start by identifying specific areas where NLP can add value, such as customer service, marketing, data analysis, or cybersecurity.'
        },
        {
            title: 'Integrate with Existing Systems',
            desc: 'Ensure that the chosen NLP solutions can be seamlessly integrated with your existing IT infrastructure and workflows.'
        },
        {
            title: 'Monitor and Optimize',
            desc: 'After implementation, regularly monitor the system’s performance and gather feedback from users to make necessary adjustments and improvements.'
        },
        {
            title: 'Choose the Right Tools and Technologies',
            desc: 'here are various NLP tools and platforms available, such as IBM Watson, Google Cloud NLP, and open-source libraries like spaCy and NLTK. Select the tools that best meet your needs.'
        },
        {
            title: 'Train Your Models',
            desc: 'For custom NLP applications, you may need to train machine learning models on your specific data. This requires gathering relevant data, preprocessing it, and using it to train your models.'
        },


    ];
    return (
        <section className="py-16 bg-white lg-py-24">
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
    )
}
