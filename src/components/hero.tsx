"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { Sparkles, ChevronRight, Zap } from 'lucide-react';
import { Button } from "./ui/button";

export default function Hero() {

    const router = useRouter();

    const shop = () => { router.push("/shop"); }

    const about = () => { router.push("/about"); }

    return (
        <div className="w-full h-auto px-0 py-8">
            <div className="w-full h-auto px-8 py-0">
                <div className="flex flex-col justify-center items-center space-y-3">
                    <Button variant="outlined" size="badge" radius="full">
                        <Zap />
                        Powering the Future
                    </Button>
                    <h1 className="inline-block align-middle py-1.5 text-4xl sm:text-5xl md:text-6xl lg:text7xl font-semibold text-center tracking-wide md:tracking-wide lg:tracking-wide bg-gradient-to-tl from-from via-via to-to text-transparent bg-clip-text">Passionate Frontend Developer, and Web Designer.</h1>
                    <p className="text-sm sm:text-base md:text-md lg:text-lg text-center text-muted-foreground lg:max-w-2xl">Hi, I&apos;m Sheikh Abdul Aziz — An Entrepreneur, Frontend Developer & Web Designer — helping businesses grow with elegant design and powerful development.</p>
                    <div className="flex flex-row justify-center items-center gap-x-4 md:gap-x-6">
                        <Button onClick={shop} variant="filled" size="default" radius="medium">
                            <Sparkles />
                            Explore me
                        </Button>
                        <Button onClick={about} variant="outlined" size="default" radius="medium">
                            About me
                            <ChevronRight />
                        </Button>
                    </div>

                    <span className="hidden w-screen h-96 bg-gradient-radial blur-3xl opacity-80 rounded-sm z-0" />
                </div>
            </div>
        </div>
    )
}