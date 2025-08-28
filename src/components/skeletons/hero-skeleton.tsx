"use client";

import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function HeroSkeleton() {
    return (
        <section className="w-full h-auto rounded-b-lg py-8">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Vertical Layout */}
                <div className="flex flex-col justify-start md:justify-center items-start md:items-center w-full h-fit max-w-7xl gap-y-2 mt-16 mx-auto">

                    {/* Status Indicator */}
                    <Skeleton className="h-10 w-32 md:w-40 lg:w-48 rounded-full" />

                    {/* Heading & Paragraph */}
                    <div className="flex flex-col justify-start md:justify-center items-start md:items-center max-w-7xl gap-y-2 mx-auto">
                        <Skeleton className="h-6 w-48 md:w-64 lg:w-80 rounded-full" />
                        <Skeleton className="h-6 w-64 md:w-80 lg:w-xl rounded-full" />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row overflow-visible justify-start md:justify-center items-start md:items-center gap-x-4 md:gap-x-6">
                        <Skeleton className="h-8 md:h-9 w-32 md:w-40 rounded-md" />
                        <Skeleton className="h-8 md:h-9 w-32 md:w-40 rounded-md" />
                    </div>
                </div>
            </div>
        </section>
    );
}