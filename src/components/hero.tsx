"use client";

import React, { memo, ReactNode, useCallback } from "react";
import { useRouter } from "next/navigation";
import { IconChevronRight, IconCircleFilled, IconSparkles } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Cover } from "./ui/cover";
import { Section } from "./semantic/section";
import { Container } from "./semantic/container";
import { FlexLayout } from "./layout/flex-layout";

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
        <Section distance={8} className="w-full h-auto mb-8 bg-surface rounded-b-lg">
            <Container distance={4}>
                <FlexLayout display={"flex"} direction={"col"} justify={{ initial: "start", medium: "center" }} items={{ initial: "start", medium: "center" }} width={"full"} height={"fit-content"} maxWidth={"7xl"} gapY={2} marginTop={16} marginX={"auto"}>
                    <Status className="group">
                        <FlexLayout display={"flex"} direction={"row"} position={"relative"} justify={"center"} items={"center"} gapX={1.5} paddingX={2} paddingY={1.5}>
                            <IconCircleFilled size={10} className="text-available bg-available animate-pulsar disabled:pointer-events-none disabled:text-unavailable" />
                            <p className="antialiased font-semibold whitespace-nowrap text-foreground/70 text-xs leading-none items-center uppercase translate-y-[0.5px] md:translate-y-0">Open for Projects</p>
                        </FlexLayout>
                    </Status>
                    <FlexLayout display={"flex"} direction={"col"} justify={{ initial: "start", medium: "center" }} items={{ initial: "start", medium: "center" }} maxWidth={"7xl"} gapY={2} marginX={"auto"}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-start md:text-center text-transparent tracking-normal leading-[1.1] bg-gradient-to-tl from-from via-via to-to bg-clip-text">
                            Reinforcing Brands with Minimalist Frontend{" "}<Cover>Solutions</Cover>
                        </h1>
                        <p className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-start md:text-center text-muted-foreground tracking-normal leading-[1.4] py-1 max-w-xl md:max-w-2xl">
                            Specialized in minimalist design, we create refined visuals that elevate your brand&apos;s presence with subtle strength and modern aesthetics.
                        </p>
                    </FlexLayout>
                    <FlexLayout overflow={"visible"} display={"flex"} direction={"row"} justify={{ initial: "start", medium: "center" }} items={{ initial: "start", medium: "center" }} gapX={{ initial: 4, medium: 6 }}>
                        <HeroButton onClick={() => navigateTo("/shop")} variant={"filled"} size={"default"} radius={"large"}>
                            <IconSparkles />
                            Get Started
                        </HeroButton>
                        <HeroButton onClick={() => navigateTo("/docs")} variant={"tonal"} size={"default"} radius={"large"}>
                            Learn More
                            <IconChevronRight />
                        </HeroButton>
                    </FlexLayout>
                </FlexLayout>
            </Container>
        </Section >
    );
}