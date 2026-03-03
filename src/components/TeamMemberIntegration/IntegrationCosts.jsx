"use client";

import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

const Card = ({ title, items }) => (
    <div className="rounded-2xl bg-white/60 shadow-sm ring-1 ring-black/5 p-6 sm:p-8 h-full">
        <h3 className="uppercase font-bold tracking-wide text-[15px] sm:text-base mb-4">
            {title}
        </h3>

        <ul className="space-y-5">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">

                    <CircleArrowRight className="mt-1 h-4 w-4 text-primary shrink-0" />
                    <div>
                        <p className="font-semibold">{item.heading}</p>
                        <p className="mt-1 text-sm leading-relaxed ">
                            {item.body}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default function IntegrationCosts() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-base-200">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center max-w-5xl mx-auto">
                    <h2 className="uppercase font-bold tracking-tight leading-tight text-2xl sm:text-3xl lg:text-4xl">
                        What are the costs of outsourced team member
                        <br className="hidden sm:block" />
                        integration and departure management?
                    </h2>

                    <p className="mt-5 font-bold tracking-wider uppercase text-sm sm:text-[15px]">
                        Integration Costs
                    </p>
                </div>

                {/* 3 Cards */}
                <div className="mt-10 lg:mt-14 grid gap-6 sm:gap-8 lg:grid-cols-3">
                    <Card
                        title="Training and Onboarding:"
                        items={[
                            {
                                heading: "Initial Costs",
                                body:
                                    "Training and onboarding outsourced team members are essential to ensure they understand your company’s processes and culture. This includes creating training materials, conducting sessions, and sometimes travel costs for initial face-to-face training.",
                            },
                            {
                                heading: "Ongoing Training",
                                body:
                                    "Continuous training may be required as processes evolve or new tools are adopted. This includes refresher courses and updates on company policies and technologies.",
                            },
                        ]}
                    />

                    <Card
                        title="Communication and Coordination"
                        items={[
                            {
                                heading: "Tools and Infrastructure",
                                body:
                                    "Project management tools, communication platforms, and other collaborative software are needed for effective coordination. Popular tools include Slack, Trello, and Asana.",
                            },
                            {
                                heading: "Regular Meetings",
                                body:
                                    "Scheduling meetings across time zones can increase costs, including time spent in meetings and adjustments needed to ensure overlapping work hours.",
                            },
                            {
                                heading: "Language and Cultural Training",
                                body:
                                    "Providing language or cultural-sensitivity training can help bridge communication gaps and improve teamwork.",
                            },
                        ]}
                    />

                    <Card
                        title="Cultural Alignment:"
                        items={[
                            {
                                heading: "Team-Building Activities",
                                body:
                                    "Activities that foster team cohesion help ensure outsourced team culture aligns with company values.",
                            },
                            {
                                heading: "HR Policies and Procedures:",
                                body:
                                    "Adjusting HR policies to accommodate a diverse workforce (e.g., holiday schedules and work ethics) can introduce administrative costs.",
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 mt-10 lg:mt-10">
                {/* Title */}
                <div className="text-center max-w-5xl mx-auto">
                    <h2 className="uppercase font-bold tracking-tight leading-tight text-2xl sm:text-3xl lg:text-4xl">
                        Departure Management Costs
                    </h2>


                </div>

                {/* 3 Cards */}
                <div className="mt-8 lg:mt-5 grid gap-6 sm:gap-8 lg:grid-cols-2">
                    <Card
                        title="Knowledge Transfer"
                        items={[
                            {
                                heading: "Documentation",
                                body:
                                    "Ensuring all processes and projects are well-documented so that knowledge can be easily transferred when an outsourced member leaves. This involves creating detailed manuals and guides.",
                            },
                            {
                                heading: "Training New Members",
                                body:
                                    "When a team member departs, training their replacement involves additional time and resources. This might include overlap periods where both the departing and new members work together.",
                            },
                        ]}
                    />

                    <Card
                        title="Exit Procedures"
                        items={[
                            {
                                heading: "Security Measures",
                                body:
                                    "Implementing robust exit procedures, such as revoking system access and ensuring the return or destruction of proprietary information, to maintain data security.",
                            },
                            {
                                heading: "Severance and Legal Costs",
                                body:
                                    "Depending on the contractual agreements, there might be severance pay or legal costs associated with the termination of outsourced contracts.",
                            },

                        ]}
                    />


                </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 mt-10 lg:mt-10">
                {/* Title */}
                <div className="text-center max-w-5xl mx-auto">
                    <h2 className="uppercase font-bold tracking-tight leading-tight text-2xl sm:text-3xl lg:text-4xl">
                        Cost Examples
                    </h2>


                </div>

                {/* 3 Cards */}
                <div className="mt-8 lg:mt-5 grid gap-6 sm:gap-8 lg:grid-cols-2">
                    <Card
                        title="Outsourced Sales Teams"
                        items={[
                            {
                                heading: "Cost",
                                body:
                                    "An outsourced sales team can cost between $8,000 and $15,000 per month for a dedicated team that includes a manager and support roles. This typically covers salaries, benefits, and operational costs.",
                            },
                            {
                                heading: "Savings",
                                body:
                                    "This is often more cost-effective than maintaining an in-house team when factoring in additional expenses like benefits, office space, and equipment.",
                            },
                        ]}
                    />

                    <Card
                        title="Web Development Outsourcing"
                        items={[
                            {
                                heading: "Cost",
                                body:
                                    "Outsourcing web development can reduce labor and overhead costs by up to 63%. This includes savings on recruitment, training, infrastructure, and the ability to scale resources as needed.",
                            },
                            {
                                heading: "Scalability",
                                body:
                                    "Businesses can quickly adjust their project budget based on needs, enabling them to scale up or down efficiently.",
                            },

                        ]}
                    />


                </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 mt-10 lg:mt-10">
                {/* Title */}
                <div className="text-center max-w-5xl mx-auto">
                    <h2 className="uppercase font-bold tracking-tight leading-tight text-2xl sm:text-3xl lg:text-4xl">
                        Additional Considerations
                    </h2>


                </div>

                {/* 3 Cards */}
                <div className="mt-8 lg:mt-5 grid gap-6 sm:gap-8 lg:grid-cols-2">
                    <Card
                        title="Geographical Variations"
                        items={[
                            {
                                heading: "costs",
                                body:
                                    "The costs associated with outsourcing can vary significantly based on the location of the service provider. For example, offshore outsourcing to countries with lower labor costs can offer substantial savings, but may come with challenges related to time zones and communication.",
                            },

                        ]}
                    />
                    <Card
                        title="Service Models"
                        items={[

                            {
                                heading: "Service",
                                body:
                                    "Different outsourcing models, such as staff augmentation, project-based outsourcing, and dedicated teams, have distinct cost structures and benefits. Each model offers varying degrees of flexibility, expertise access, and management complexity.",
                            },
                        ]}
                    />




                </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 mt-10 lg:mt-10">
                {/* Title */}
                <h2 className="uppercase font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl text-center">
                    Cost Savings with Tymor Technologies
                </h2>

                {/* Paragraph */}
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-700">
                    Outsourcing team member integration with Tymor Technologies provides
                    substantial cost savings. We help you reduce labor costs by providing
                    access to specialized skills without the need for full-time hires. Our
                    flexible resource scaling ensures you only pay for what you need,
                    avoiding unnecessary expenses. Effective management of integration and
                    departure processes further minimizes costs by ensuring smooth
                    operations.{" "}
                    <Link
                        href={'/contact-us'}
                        className="text-primary font-medium hover:underline"
                    >
                        Click here for more information
                    </Link>{" "}
                    to learn more about how we can help you save.
                </p>
            </div>
        </section>
    );
}
