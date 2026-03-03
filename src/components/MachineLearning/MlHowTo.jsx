import { Check } from "lucide-react";

const steps = [
    {
        title: "Identify Use Cases",
        desc:
            "Determine the areas where ML can add value, such as customer service, marketing, operations, or finance.",
    },
    {
        title: "Build and Train Models",
        desc:
            "Develop ML models using training data and refine them to improve accuracy.",
    },
    {
        title: "Data Collection and Preparation",
        desc:
            "Gather and clean the relevant data needed for training ML models.",
    },
    {
        title: "Integration",
        desc:
            "Integrate ML models into your existing systems and workflows.",
    },
    {
        title: "Choose the Right Algorithms",
        desc:
            "Select appropriate ML algorithms based on the problem you are trying to solve.",
    },
    {
        title: "Monitor and Improve",
        desc:
            "Continuously monitor the performance of ML models and update them as needed to adapt to new data and changing conditions.",
    },
];

export default function MlHowTo() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mb-12">
                    HOW TO INCORPORATE ML INTO YOUR COMPANY
                </h2>

                {/* 2 columns on lg, 1 column below */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {steps.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex rounded-xl overflow-hidden bg-base-100 shadow-sm border border-base-200"
                        >
                            {/* Left icon block */}
                            <div className="bg-black flex items-center justify-center px-6 py-8">
                                <Check className="h-7 w-7 text-primary" strokeWidth={3} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6 sm:p-7 bg-base-200">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-base-content/80 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
