"use client";

import React, { memo, ReactNode, useCallback } from "react";
import { useRouter } from "next/navigation";
import { IconChevronRight, IconCircleFilled, IconSparkles } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Cover } from "./ui/cover";

// Memoized HeroButton
const HeroButton = memo(
    ({
        onClick,
        variant,
        size,
        radius,
        children,
    }: {
        onClick: () => void;
        variant:
        | "destructive"
        | "elevated"
        | "filled"
        | "linked"
        | "outlined"
        | "text"
        | "tonal";
        size:
        | "small"
        | "badge"
        | "default"
        | "natural"
        | "large"
        | "action"
        | "icon"
        | "social"
        | "wide";
        radius: "none" | "small" | "medium" | "large" | "full" | null | undefined;
        children: React.ReactNode;
    }) => (
        <Button onClick={onClick} variant={variant} size={size} radius={radius}>
            {children}
        </Button>
    )
);
HeroButton.displayName = "HeroButton";

// Memoized Status
const Status = memo(
    ({
        children,
        className = "",
    }: {
        children: ReactNode;
        className?: string;
    }) => (
        <div className={`items-center justify-center relative overflow-visible ${className}`}>
            <div className="inline-flex flex-row items-center justify-center relative overflow-visible border-[2px] border-border rounded-none bg-surface shadow-none">
                {children}
                <span className="absolute -right-[4.5px] -top-[4.5px] bg-surface border-[2px] border-border rounded-full w-2 h-2" />
                <span className="absolute -bottom-[4.5px] -right-[4.5px] bg-surface border-[2px] border-border rounded-full w-2 h-2" />
                <span className="absolute -left-[4.5px] -top-[4.5px] bg-surface border-[2px] border-border rounded-full w-2 h-2" />
                <span className="absolute -bottom-[4.5px] -left-[4.5px] bg-surface border-[2px] border-border rounded-full w-2 h-2" />
            </div>
        </div>
    )
);
Status.displayName = "Status";

export default function Hero() {

    // Use Next.js router for navigation
    const router = useRouter();

    // Memoize navigateTo
    const navigateTo = useCallback((path: string) => {
        router.push(path);
    }, [router]);

    return (
        <div className="w-full h-auto px-4 py-8 mb-8 bg-surface rounded-b-lg">
            <div className="flex flex-col justify-start items-start md:justify-center md:items-center gap-y-2 mt-16 max-w-7xl mx-auto">
                <Status className="group">
                    <div className="relative flex cursor-default select-none justify-center items-center gap-x-1.5 px-2 py-1.5 outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                        <IconCircleFilled size={10} className="text-available bg-available animate-pulsar disabled:pointer-events-none disabled:text-unavailable" />
                        <p className="antialiased font-semibold whitespace-nowrap text-foreground/70 text-xs leading-none items-center uppercase translate-y-[0.5px] md:translate-y-0">Open for Projects</p>
                    </div>
                </Status>
                <div className="flex flex-col justify-start items-start md:justify-center md:items-center gap-y-2 max-w-7xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-start md:text-center text-transparent tracking-normal leading-[1.1] bg-gradient-to-tl from-from via-via to-to bg-clip-text">
                        Reinforcing Brands with Minimalist Frontend{" "}<Cover>Solutions</Cover>
                    </h1>
                    <p className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-start md:text-center text-muted-foreground tracking-normal leading-[1.4] py-1 max-w-xl md:max-w-2xl">
                        Specialized in minimalist design, we create refined visuals that elevate your brand&apos;s presence with subtle strength and modern aesthetics.
                    </p>
                </div>
                <div className="overflow-visible flex flex-row justify-start items-start md:justify-center md:items-center gap-x-4 md:gap-x-6">
                    <HeroButton onClick={() => navigateTo("/shop")} variant="filled" size="default" radius="large">
                        <IconSparkles />
                        Get Started
                    </HeroButton>
                    <HeroButton onClick={() => navigateTo("/docs")} variant="tonal" size="default" radius="large">
                        Learn More
                        <IconChevronRight />
                    </HeroButton>
                </div>
            </div>
        </div>
    );
}