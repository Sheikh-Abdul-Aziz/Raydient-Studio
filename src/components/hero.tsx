"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { Sparkles, ChevronRight, Zap } from 'lucide-react';
import { Button } from "./ui/button";
import { ShinyButton } from "./ui/shiny-button";

export default function Hero() {

    const router = useRouter();

    const shop = () => { router.push("/shop"); }

    const about = () => { router.push("/about"); }

    return (
        <div className="w-full h-auto px-0 py-8">
            <div className="w-full h-auto px-8 py-0">
                <div className="flex flex-col justify-center items-center space-y-3 mt-16 left-0 right-0">
                    <div className="flex flex-row justify-center items-center relative z-0">
                        <ShinyButton>
                            <Zap size={16} />
                            Pioneering the Future
                        </ShinyButton>
                    </div>
                    <h1 className="inline-block align-middle py-1.5 text-4xl sm:text-5xl md:text-6xl lg:text7xl font-semibold text-center text-transparent tracking-wide md:tracking-wide lg:tracking-wide bg-gradient-to-tl from-from via-via to-to bg-clip-text">Passionate Frontend Developer, and Web Designer.</h1>
                    <p className="inline-block align-middle text-sm sm:text-base md:text-md lg:text-lg font-normal text-center text-muted-foreground lg:max-w-2xl tracking-normal">Hi, I&apos;m Sheikh Abdul Aziz — An Entrepreneur, Frontend Developer & Web Designer — helping businesses grow with elegant design and powerful development.</p>
                    <div className="flex flex-row justify-center items-center gap-x-4 md:gap-x-6">
                        <Button onClick={shop} variant="filled" size="default">
                            <Sparkles />
                            Let&apos;s Explore
                        </Button>
                        <Button onClick={about} variant="outlined" size="default">
                            Learn More
                            <ChevronRight />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}