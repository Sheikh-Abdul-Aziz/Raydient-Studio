"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IconChevronRight, IconSparkles } from "@tabler/icons-react";
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

    const BoundingStatus = ({ children, className }: { children: React.ReactNode, className?: string }) => (
        <div className={`items-center justify-center relative overflow-visible ${className}`}>
            <div className="inline-flex flex-row items-center justify-center relative overflow-visible font-label border-[2px] border-border rounded-none h-8 w-auto gap-x-1.5 px-3 py-1 align-middle uppercase bg-surface shadow-none">
                {children}
                <span className="absolute -right-[4.5px] -top-[4.5px] bg-surface border-[2px] border-border rounded-none w-2 h-2" />
                <span className="absolute -bottom-[4.5px] -right-[4.5px] bg-surface border-[2px] border-border rounded-none w-2 h-2" />
                <span className="absolute -left-[4.5px] -top-[4.5px] bg-surface border-[2px] border-border rounded-none w-2 h-2" />
                <span className="absolute -bottom-[4.5px] -left-[4.5px] bg-surface border-[2px] border-border rounded-none w-2 h-2" />
            </div>
        </div>
    );

    return (
        <div className="w-full h-auto px-4 py-8 mt-16">
            <div className="flex flex-col justify-center items-center gap-y-3 max-w-7xl mx-auto">
                <BoundingStatus className="group">
                    <span className="bg-online w-3 h-3 rounded-full animate-pulsar" />
                    <small className="text-xs leading-1.5 items-center">
                        <span className="text-xs leading-1.5 font-semibold text-foreground/70">Open for Projects</span>
                    </small>
                </BoundingStatus>
                <h1 className="py-1.5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-transparent tracking-none leading-[1.1] bg-gradient-to-tl from-from via-via to-to bg-clip-text">
                    Reinforcing Brands with Minimalist Frontend <Cover>Solutions</Cover>
                </h1>
                <p className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-center text-muted-foreground max-w-xl md:max-w-2xl tracking-normal">
                    Specialized in minimalist design, we create refined visuals that elevate your brand&apos;s presence with subtle strength and modern aesthetics.
                </p>
                <div className="flex flex-row justify-center items-start gap-x-4 md:gap-x-6">
                    <HeroButton onClick={() => navigateTo("/shop")} variant="filled" size="default" radius="medium">
                        <IconSparkles />
                        Get Started
                    </HeroButton>
                    <HeroButton onClick={() => navigateTo("/docs")} variant="outlined" size="default" radius="medium">
                        Learn More
                        <IconChevronRight />
                    </HeroButton>
                </div>
            </div>
        </div>
    );
}