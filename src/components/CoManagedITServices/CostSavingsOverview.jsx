import { CircleCheck } from "lucide-react";

export default function CostSavingsOverview() {
    const items = [
        {
            title: "COST ANALYSIS AND SAVINGS",
            subtitle: "1. REDUCED LABOR COSTS:",
            rows: [
                { label: "In-House IT:", value: "$60,000–$80,000/year per specialist." },
                { label: "Co-Managed Support:", value: "$2,000–$5,000/month ($24,000–$60,000/year)." },
            ],
        },
        {
            title: "SAVINGS: POTENTIAL ANNUAL SAVINGS OF $18,000.",
            subtitle: "2. INCREASED EFFICIENCY:",
            rows: [
                { label: "Internal Resolution Time", value: "2–4 hours per issue." },
                { label: "Co-Managed Support", value: "1–2 hours per issue." },
            ],
        },
        {
            title: "SAVINGS: REDUCING DOWNTIME CAN SAVE $10,000/YEAR.",
            subtitle: "3. ACCESS TO ADVANCED TECHNOLOGIES:",
            rows: [
                { label: "In-House Investment", value: "$10,000–$50,000/year." },
                { label: "Co-Managed Support", value: "Includes advanced tech." },
            ],
        },
        {
            title: "SAVINGS: AVOID $30,000 IN TECH COSTS.",
            subtitle: "4. TRAINING COSTS:",
            rows: [
                { label: "External Training", value: "$5,000–$10,000/year." },
                { label: "Co-Managed Support", value: "Training included." },
            ],
        },
        {
            title: "SAVINGS: AVOID $7,000 IN TRAINING COSTS.",
            subtitle: "5. PREDICTABLE COSTS:",
            rows: [
                { label: "Internal Costs", value: "Unpredictable expenses." },
                { label: "Co-Managed Support", value: "Fixed monthly fees." },
            ],
        },
    ];

    return (
        <section className="py-24 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-12">
                    CO-MANAGED IT SUPPORT DESK: COST SAVINGS OVERVIEW
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {items.map((box, i) => (
                        <div key={i} className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-primary font-bold uppercase mb-3">{box.title}</h3>
                            <h4 className="font-semibold mb-4">{box.subtitle}</h4>
                            <ul className="space-y-3">
                                {box.rows.map((row, j) => (
                                    <li key={j} className="flex items-start gap-2">
                                        <CircleCheck className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                                        <span>
                                            <strong>{row.label}</strong> {row.value}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
