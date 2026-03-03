// app/components/ProjectScope.jsx
"use client";

import { CircleDot, CheckCircle2 } from "lucide-react";

export default function ProjectScope() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-center uppercase font-bold tracking-wide text-2xl md:text-4xl mb-12">
                    Project Scope
                </h2>

                <div className="space-y-12">
                    {/* 1. CRM MIGRATION TO MICROSOFT DYNAMICS */}
                    <div>
                        <h3 className="font-bold text-lg md:text-xl">
                            1. CRM Migration to Microsoft Dynamics:
                        </h3>

                        {/* Objective */}
                        <div className="mt-4 flex items-start gap-3">
                            <CircleDot className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <p className="font-semibold">Objective</p>
                                <p className="opacity-80">
                                    To streamline customer data management, improve sales processes, and
                                    enable better customer insights.
                                </p>
                            </div>
                        </div>

                        {/* Activities */}
                        <h4 className="mt-6 font-bold">Activities</h4>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>
                                    Assessment of current CRM system and business processes.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>
                                    Customization and configuration of Microsoft Dynamics CRM to align
                                    with client&apos;s specific needs.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>
                                    Data migration from legacy CRM system to Microsoft Dynamics,
                                    ensuring data integrity and security.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>
                                    User training and support to facilitate smooth transition and
                                    adoption.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* 2. VOIP INTEGRATION */}
                    <div>
                        <h3 className="font-bold text-lg md:text-xl">
                            2. VoIP Integration
                        </h3>

                        {/* Objective */}
                        <div className="mt-4 flex items-start gap-3">
                            <CircleDot className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <p className="font-semibold">Objective</p>
                                <p className="opacity-80">
                                    To replace outdated on‑premise telephony systems with a cloud‑based
                                    VoIP solution for improved communication reliability and flexibility.
                                </p>
                            </div>
                        </div>

                        {/* Activities */}
                        <h4 className="mt-6 font-bold">Activities</h4>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>
                                    Assessment of existing telephony infrastructure and communication
                                    requirements.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>
                                    Selection and deployment of a suitable cloud‑based VoIP service
                                    provider with scalability, routing, conferencing, and integration.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>Configuration and setup of VoIP endpoints across locations.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>
                                    Testing and validation to ensure seamless communication across the
                                    organization.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>
                                    Training sessions for employees on using the new VoIP system
                                    effectively.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* 3. CLOUD MIGRATION TO AZURE */}
                    <div>
                        <h3 className="font-bold text-lg md:text-xl">
                            3. Cloud Migration to Azure:
                        </h3>

                        {/* Objective */}
                        <div className="mt-4 flex items-start gap-3">
                            <CircleDot className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <p className="font-semibold">Objective</p>
                                <p className="opacity-80">
                                    To transition from on‑premise infrastructure to Microsoft Azure for
                                    enhanced scalability, security, and cost efficiency.
                                </p>
                            </div>
                        </div>

                        {/* Activities */}
                        <h4 className="mt-6 font-bold">Activities</h4>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>
                                    Assessment of current network infrastructure and workloads for cloud
                                    readiness.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>
                                    Design and implementation of Azure infrastructure (VMs, networking,
                                    storage).
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>
                                    Migration of CRM data and applications to Azure, with minimal
                                    downtime and data integrity.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>
                                    Implementation of security and backup strategies to protect data in
                                    the cloud.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
