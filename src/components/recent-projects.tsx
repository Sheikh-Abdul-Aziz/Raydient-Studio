"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ArrowRight, Globe } from "lucide-react";
import { fontMono } from "@/fonts/local";
import { IconSquareFilled } from "@tabler/icons-react";

export default function RecentProjects() {
    
    const router = useRouter();

    const projects = [
        {
            id: 1,
            title: "Fraymit",
            description: "Let's create a suite of free-to-premium templates and components for Figma, Framer, and Webflow.",
            avatarSrc: "https://github.com/fraymit.png",
            avatarFallback: "FR",
            websiteUrl: "https://fraymit.com",
            githubUrl: "https://github.com/fraymit",
        },
        {
            id: 2,
            title: "Miracle UI Suite",
            description: "Let's create a free to premium suite of modern web components and templates, building responsive designs and seamless user experiences.",
            avatarSrc: "https://github.com/miracle-ui-suite.png",
            avatarFallback: "MU",
            websiteUrl: "https://miracle-ui.com",
            githubUrl: "https://github.com/miracle-ui-suite",
        },
    ];

    const handleNavigation = (url: string) => {
        router.push(url);
    };

    return (
        <div className="w-full h-auto px-0 py-8">
            <div className="w-full h-auto px-4 py-0">
                <div className="flex flex-col justify-center items-start text-left gap-y-6 left-0 right-0 max-w-7xl mx-auto">
                    <div className="text-left justify-center items-start align-middle">
                        <div className="inline-flex flex-row items-center justify-start gap-x-1">
                            <IconSquareFilled size={12} className="text-foreground" />
                            <h3 className={`${fontMono.className} antialiased translate-y-px md:translate-y-0 text-xs font-medium tracking-tight leading-none items-center text-muted-foreground uppercase`}>Recent Projects</h3>
                        </div>
                        <h2 className="text-xl font-medium text-foreground normal-case leading-[1.3]">Take a Quick Look at our Recent{" "}<br className="md:hidden" />Branding Projects</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        {projects.map((project) => (
                            <Card key={project.id} className="flex flex-col justify-start items-center shadow-none">
                                <CardContent className="flex flex-col justify-start items-start gap-y-2">
                                    <Avatar className="w-16 h-16 border border-border rounded-lg">
                                        <AvatarImage src={project.avatarSrc} />
                                        <AvatarFallback>{project.avatarFallback}</AvatarFallback>
                                    </Avatar>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                    <div className="flex flex-row justify-start items-center gap-x-3">
                                        <Button onClick={() => handleNavigation(project.websiteUrl)} variant="outlined" size="default">
                                            <Globe />Website
                                        </Button>
                                        <Button onClick={() => handleNavigation(project.githubUrl)} variant="tonal" size="default">
                                            Github<ArrowRight />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}