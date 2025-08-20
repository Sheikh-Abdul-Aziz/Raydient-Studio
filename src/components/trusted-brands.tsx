"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { Marquee } from "./ui/scroll";

export default function TrustedBrands() {

    const brands = useMemo(
        () => ["1", "2", "3", "4", "5", "6", "7", "8"],
        []
    );

    return (
        <div className="w-full h-fit px-0 py-6">
            <div className="w-full h-fit px-4 py-0">
                <div className="flex flex-col relative justify-center items-start text-left left-0 right-0 max-w-7xl mx-auto">
                    {/* Marquee component */}
                    <Marquee>
                        {brands.map((brand) => (
                            <Image key={brand} alt={brand} src={`/trusted-brands/${brand}.svg`} width={128} height={56} className="px-4" />
                        ))}
                    </Marquee>

                    {/* Gradient overlays for the edges */}
                    <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-background" />
                    <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-background" />
                </div>
            </div>
        </div>
    );
}