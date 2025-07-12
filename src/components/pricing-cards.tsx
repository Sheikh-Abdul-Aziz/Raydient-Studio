"use client"

import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { User, Zap } from "lucide-react";
import { fontMono } from "@/fonts/local";
import { IconLayout, IconUser } from "@tabler/icons-react";

export default function PricingCards() {

    const projects = [
        {
            id: 1,
            title: "Conversion Driven Creativity",
            description: "We design to increase signups, sales, and engagement. Every detail supports your business goals.",
            icon: <User className="w-8 h-8 text-muted-foreground" />
        },
        {
            id: 2,
            title: "Fully Comitted Team",
            description: "You work with a dedicated team focused solely on your project. No juggling, no outsourcing.",
            icon: <IconUser className="w-8 h-8 text-muted-foreground" />

        },
        {
            id: 3,
            title: "Next-Level Motion Design",
            description: "We create animations that explain, guide, and keep users engaged at every step of the journey.",
            icon: <IconLayout className="w-8 h-8 text-muted-foreground" />
        },
        {
            id: 4,
            title: "Battle-Tested Expertise",
            description: "We've helped startups raise over $45M in funding with designs that earn trust and drive investment.",
            icon: <Zap className="w-8 h-8 text-muted-foreground" />

        },
    ];

    return (
        <div className="w-full h-auto px-0 py-8">
            <div className="w-full h-auto px-4 py-0">
                <div className="flex flex-col justify-center items-start text-left gap-y-6 left-0 right-0 max-w-7xl mx-auto">
                    <div className="text-left justify-center items-start align-middle">
                        <h3 className={`${fontMono.className} antialiased text-xs font-medium tracking-tight text-muted-foreground uppercase`}>Pricing</h3>
                        <h2 className="text-xl font-medium text-foreground normal-case leading-[1.3]">Transparent Pricing{" "}<br className="md:hidden" />Without Surprises</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-start items-start w-full h-auto gap-3">
                        {projects.map((project) => (
                            <Card key={project.id} className="flex flex-col justify-start items-center shadow-none">
                                <CardContent className="flex flex-col justify-start items-start gap-y-2">
                                    {project.icon}
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};