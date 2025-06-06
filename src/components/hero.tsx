"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IconChevronRight, IconSparkles } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Cover } from "./ui/cover";
import { FlexLayout } from "./layout/flex-layout";

export default function Hero() {
    const router = useRouter();

    const navigateTo = (path: string) => router.push(path);

    const HeroButton = ({ onClick, variant, size, radius, children }: { onClick: () => void, variant: "destructive" | "elevated" | "filled" | "linked" | "outlined" | "text" | "tonal", size: "small" | "badge" | "default" | "natural" | "large" | "action" | "icon" | "social" | "wide", radius: "none" | "small" | "medium" | "large" | "full" | null | undefined, children: React.ReactNode }) => (
        <Button onClick={onClick} variant={variant} size={size} radius={radius}>
            {children}
        </Button>
    );

    return (
        <div className="w-full h-auto px-6 py-8">
            <div className="flex flex-col justify-center items-center gap-y-3 mt-16">
                <FlexLayout display="inline" direction="column" className="font-archivo border border-border rounded-full hover:bg-secondary hover:text-secondary-foreground h-8 w-auto gap-x-1.5 px-3 py-1 text-xs font-semibold align-middle uppercase bg-surface/80 text-foreground/70 shadow-none">
                    <span className="bg-online rounded-full w-2.5 h-2.5 animate-pulse" />
                    <span className="mt-[3px] lg:mt-[1px] md:pr-4">Open for Projects</span>
                </FlexLayout>
                <h1 className="py-1.5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-transparent tracking-none bg-gradient-to-tl from-from via-via to-to bg-clip-text">
                    Reinforcing Brands with Minimalist Frontend <Cover>Solutions</Cover>
                </h1>
                <p className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-center text-muted-foreground lg:max-w-2xl tracking-normal">
                    Specialized in minimalist design, we create refined visuals that elevate your brand&apos;s presence with subtle strength and modern aesthetics.
                </p>
                <div className="flex flex-row justify-center items-start gap-x-4 md:gap-x-6">
                    <HeroButton onClick={() => navigateTo("/shop")} variant="filled" size="default" radius="medium">
                        <IconSparkles />
                        Get Started
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