"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ArrowRight, Globe } from "lucide-react";
import SectionHeader from "./section-header";

const info = {
    title: "RECENT PROJECTS",
    subtitle: (
        <>
            Presenting our Recent Branding{" "}<br className="md:hidden" />and Design Projects
        </>
    ),
};

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
                    <SectionHeader info={info} />
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        {projects.map((project) => (
                            <Card key={project.id} className="flex flex-col justify-start items-center">
                                <CardContent className="flex flex-col justify-start items-start gap-y-2">
                                    <Avatar className="w-16 h-16 border border-border rounded-lg">
                                        <AvatarImage src={project.avatarSrc} alt={"Alt"} />
                                        <AvatarFallback>{project.avatarFallback}</AvatarFallback>
                                    </Avatar>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                    <div className="flex flex-row justify-start items-center gap-x-3">
                                        <Button onClick={() => handleNavigation(project.websiteUrl)} variant="outlined" size="default" radius={"large"}>
                                            <Globe />Website
                                        </Button>
                                        <Button onClick={() => handleNavigation(project.githubUrl)} variant="tonal" size="default" radius={"large"}>
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