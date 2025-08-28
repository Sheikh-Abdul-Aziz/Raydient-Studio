"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { IconChevronRight, IconSparkles } from "@tabler/icons-react";
import { Cover } from "./ui/cover";
import { StatusIndicator } from "./staus-indicator";
import { HeroButton } from "./hero-button";

export default function Hero() {

    const router = useRouter();

    const navigateTo = useCallback(
        (path: string) => {
            router.push(path);
        },
        [router]
    );

    return (
        <section className="w-full h-auto rounded-b-lg py-8">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Vertical Layout */}
                <div className="flex flex-col justify-start md:justify-center items-start md:items-center w-full h-fit max-w-7xl gap-y-2 mt-16 mx-auto">

                    {/* Status Indicator */}
                    <StatusIndicator />

                    {/* Heading & Paragraph */}
                    <div className="flex flex-col justify-start md:justify-center items-start md:items-center max-w-7xl gap-y-2 mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-start md:text-center text-primary tracking-normal leading-[1.1]">
                            Reinforcing Brands with Minimalist Frontend{" "}
                            <Cover>Solutions</Cover>
                        </h1>
                        <p className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-start md:text-center text-muted-foreground tracking-normal leading-[1.4] py-1 max-w-xl md:max-w-2xl">
                            Specialising in minimalist design, we create refined visuals that
                            elevate your brand&apos;s presence with subtle strength and modern
                            aesthetics.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row overflow-visible justify-start md:justify-center items-start md:items-center gap-x-4 md:gap-x-6">
                        <HeroButton onClick={() => navigateTo("/shop")} variant={"filled"} size={"default"} radius={"medium"}>
                            <IconSparkles />
                            Get Started
                        </HeroButton>
                        <HeroButton onClick={() => navigateTo("/docs")} variant={"tonal"} size={"default"} radius={"medium"}>
                            Learn More
                            <IconChevronRight />
                        </HeroButton>
                    </div>
                </div>
            </div>
        </section>
    );
}