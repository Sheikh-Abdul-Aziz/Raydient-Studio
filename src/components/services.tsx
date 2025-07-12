"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { ChevronRightIcon } from "lucide-react";
import { fontMono } from "@/fonts/local";

export default function Services() {

    const router = useRouter();

    const services = [
        {
            id: 1,
            title: "Brand Design",
            description: "View Examples",
            serviceUrl: "/",
        },
        {
            id: 2,
            title: "Logo Design",
            description: "View Examples",
            serviceUrl: "/",
        },
        {
            id: 3,
            title: "Websites",
            description: "View Examples",
            serviceUrl: "/",
        },
        {
            id: 4,
            title: "Mobile Apps",
            description: "View Examples",
            serviceUrl: "/",
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
                        <h3 className={`${fontMono.className} antialiased text-xs font-medium tracking-tight text-muted-foreground uppercase`}>Services</h3>
                        <h2 className="text-xl font-medium text-foreground normal-case leading-[1.3]">Specialist in Websites,{" "}<br className="md:hidden" />Product, and Branding</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 w-full h-auto">
                        {services.map((service) => (
                            <Card key={service.id} onClick={() => handleNavigation(service.serviceUrl ?? "/")} className="flex flex-col justify-start items-start shadow-none hover:bg-muted/80 active:bg-muted/80 transition-colors duration-170 ease-in-out cursor-pointer">
                                <CardContent className="flex flex-col justify-start items-start gap-y-1">
                                    <CardTitle className="text-base">{service.title}</CardTitle>
                                    <CardDescription className="flex flex-row text-sm justify-center items-center gap-x-[6px]">{service.description}<ChevronRightIcon className="size-[18px]"/></CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};