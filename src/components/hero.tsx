"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IconBolt, IconChevronRight, IconSparkles } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Cover } from "./ui/cover";

export default function Hero() {
    const router = useRouter();

    const navigateTo = (path: string) => router.push(path);

    const HeroButton = ({ onClick, variant, size, radius, children }: { onClick: () => void, variant: "destructive" | "elevated" | "filled" | "linked" | "outlined" | "text" | "tonal", size: "small" | "badge" | "default" | "natural" | "large" | "action" | "icon" | "social" | "wide", radius: "none" | "small" | "medium" | "large" | "full" | null | undefined, children: React.ReactNode }) => (
        <Button onClick={onClick} variant={variant} size={size} radius={radius}>
            {children}
        </Button>
    );

    return (
        <div className="w-full h-auto px-4 py-8">
            <div className="flex flex-col justify-center items-center gap-y-3 mt-16">
                <HeroButton onClick={() => { }} variant="outlined" size="badge" radius="full">
                    <IconBolt />
                    Pioneering the Future
                </HeroButton>
                <h1 className="py-1.5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-transparent tracking-wide bg-gradient-to-tl from-from via-via to-to bg-clip-text">
                    Elevating Brands with Minimalist Frontend <Cover>Solutions</Cover>
                </h1>
                <p className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-center text-muted-foreground lg:max-w-2xl tracking-normal">
                    Hi, I&apos;m Sheikh Abdul Aziz — An Entrepreneur, Frontend Developer, and Web Designer — helping businesses grow with elegant design and powerful development.
                </p>
                <div className="flex flex-row justify-center items-center gap-x-4 md:gap-x-6">
                    <HeroButton onClick={() => navigateTo("/shop")} variant="filled" size="default" radius="medium">
                        <IconSparkles />
                        Let&apos;s Explore
                    </HeroButton>
                    <HeroButton onClick={() => navigateTo("/portfolio")} variant="outlined" size="default" radius="medium">
                        Learn More
                        <IconChevronRight />
                    </HeroButton>
                </div>
            </div>
        </div>
    );
}