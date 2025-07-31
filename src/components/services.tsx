"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { JetBrains_Mono } from "@/fonts/local";
import { IconContract, IconDevicesCode, IconPaint, IconSquareFilled, IconVector } from "@tabler/icons-react";

export default function Services() {

    const router = useRouter();

    const handleNavigation = (url: string) => router.push(url);

    const services = [
        {
            id: 1,
            icon: <IconPaint strokeWidth={1.5} size={28} className="text-muted-foreground" />,
            title: "Branding & Visual Identity",
            description: "Creating memorable brands with a focus on visual identity.",
            serviceUrl: "/",
        },
        {
            id: 2,
            icon: <IconVector strokeWidth={1.5} size={28} className="text-muted-foreground" />,
            title: "Website & Product Design",
            description: "Designing clean user-friendly websites and products.",
            serviceUrl: "/",
        },
        {
            id: 3,
            icon: <IconDevicesCode strokeWidth={1.5} size={28} className="text-muted-foreground" />,
            title: "Frontend Development",
            description: "Developing responsive, fast, and optimized solutions.",
            serviceUrl: "/",
        },
        {
            id: 4,
            icon: <IconContract strokeWidth={1.5} size={28} className="text-muted-foreground" />,
            title: "Smart Contract Solutions",
            description: "Building smart, secure, reliable, and efficient contracts.",
            serviceUrl: "/",
        },
    ];

    return (
        <div className="w-full h-auto px-0 py-8">
            <div className="w-full h-auto px-4 py-0">
                <div className="flex flex-col justify-center items-start text-left gap-y-6 left-0 right-0 max-w-7xl mx-auto">
                    <div className="text-left justify-center items-start align-middle">
                        <div className="inline-flex flex-row items-center justify-start gap-x-1">
                            <IconSquareFilled size={12} className="text-foreground" />
                            <h3 className={`${JetBrains_Mono.className} antialiased translate-y-px md:translate-y-0 text-xs font-medium tracking-tight leading-none items-center text-muted-foreground uppercase`}>Services</h3>
                        </div>
                        <h2 className="text-xl font-medium text-foreground normal-case leading-[1.4]">Expertise in Websites, Products,{" "}<br className="md:hidden" />and Brand Identity</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 w-full h-auto">
                        {services.map((service) => (
                            <Card key={service.id} onClick={() => handleNavigation(service.serviceUrl ?? "/")} className="flex flex-col justify-start items-start shadow-none hover:bg-muted/80 active:bg-muted/80 transition-colors duration-170 ease-in-out cursor-pointer">
                                <CardContent>
                                    {service.icon}
                                    <CardTitle>{service.title}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};