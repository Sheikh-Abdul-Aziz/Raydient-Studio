"use client";

import React, { useMemo } from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { fontMono } from "@/fonts/local";
import {
    IconClockHour4,
    IconCornerDownRight,
    IconFlameFilled,
    IconHeadset,
    IconRosetteDiscountCheckFilled,
    IconSparkles,
    IconSquareCheckFilled,
    IconSquareFilled,
    IconTopologyFullHierarchy,
    IconTopologyStarRing2,
    IconTopologyStarRing3,
} from "@tabler/icons-react";

// Icon mapping for easier reference
const iconMap = {
    fullHierarchy: <IconTopologyFullHierarchy size={16} />,
    starRing2: <IconTopologyStarRing2 size={16} />,
    starRing3: <IconTopologyStarRing3 size={16} />,
    sparkles: <IconSparkles size={12} />,
    flame: <IconFlameFilled size={12} />,
    rosette: <IconRosetteDiscountCheckFilled size={12} />,
    clock: <IconClockHour4 size={16} />,
    headset: <IconHeadset size={16} />,
};

const pricingData = [
    {
        id: 1,
        icon: "fullHierarchy",
        title: "Basic Plan",
        squares: [
            { size: 14, className: "text-foreground" },
            { size: 12, className: "text-ring/30" },
            { size: 12, className: "text-ring/30" },
        ],
        description: "Best for individuals and small teams seeking professional design services to establish a strong online presence.",
        tagicon: "sparkles",
        tagline: "Starter",
        price: "$99",
        validity: "/Per month",
        buttonLabel: "Get Started",
        benefitIcons: ["clock", "headset"],
        benefits: [
            "Project timeline: 1-2 weeks",
            "Priority Support",
        ],
        listTitle: "What you will get?",
        features: [
            "Single-page website design",
            "UI/UX design with responsive layouts",
            "Responsive design across all devices",
            "1 round of revisions included",
            "Delivered in Figma",
            "Development available at additional cost",
        ],
    },
    {
        id: 2,
        icon: "starRing2",
        title: "Standard Plan",
        squares: [
            { size: 12, className: "text-ring/30" },
            { size: 14, className: "text-foreground" },
            { size: 12, className: "text-ring/30" },
        ],
        description: "Best for medium-sized teams or startups looking to enhance their online presence and achieve their business goals.",
        tagicon: "flame",
        tagline: "Popular",
        price: "$299",
        validity: "/Per month",
        buttonLabel: "Get Started",
        benefitIcons: ["clock", "headset"],
        benefits: [
            "Project timeline: 3-4 weeks",
            "Priority Support",
        ],
        listTitle: "What you will get?",
        features: [
            "Up to 5 custom pages designed",
            "UI/UX design with modern layouts",
            "Responsive design across all devices",
            "2 rounds of revisions included",
            "Design handoff with prototype",
            "Optional: Front-end development available",
        ],
    },
    {
        id: 3,
        icon: "starRing3",
        title: "Premium Plan",
        squares: [
            { size: 12, className: "text-ring/30" },
            { size: 12, className: "text-ring/30" },
            { size: 14, className: "text-foreground" },
        ],
        description: "Best for large teams and corporations seeking comprehensive, enterprise-level design solutions, and advanced features.",
        tagicon: "rosette",
        tagline: "Valuable",
        price: "$499",
        validity: "/Per month",
        buttonLabel: "Get Started",
        benefitIcons: ["clock", "headset"],
        benefits: [
            "Project timeline: 5-6 weeks",
            "Priority Support",
        ],
        listTitle: "What you will get?",
        features: [
            "Up to 10 uniquely designed pages",
            "UI/UX strategy with wireframing",
            "Responsive design across all devices",
            "Unlimited revisions (within agreed scope)",
            "Full front-end development",
            "Basic on-page SEO implementation",
        ],
    },
];

export default function PricingCards() {
    // Memoize static data
    const plans = useMemo(() => pricingData, []);

    return (
        <div className="w-full h-auto px-0 py-8">
            <div className="w-full h-auto px-4 py-0">
                <div className="flex flex-col justify-center items-start text-left gap-y-6 left-0 right-0 max-w-7xl mx-auto">
                    <div className="text-left justify-center items-start align-middle">
                        <div className="inline-flex flex-row items-center justify-start gap-x-1">
                            <IconSquareFilled size={12} className="text-foreground" />
                            <h3 className={`${fontMono.className} antialiased translate-y-px md:translate-y-0 text-xs font-medium tracking-tight leading-none items-center text-muted-foreground uppercase`}>
                                Pricing
                            </h3>
                        </div>
                        <h2 className="text-xl font-medium text-foreground normal-case leading-[1.3]">
                            Pricing Transparency Without{" "}
                            <br className="md:hidden" />
                            Unexpected Surprises
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-start items-start w-full h-auto gap-6 lg:gap-8">
                        {plans.map((plan) => (
                            <div key={plan.id} className="flex flex-col relative overflow-hidden rounded-lg bg-surface text-card-foreground justify-start items-start shadow-none w-full">
                                <div className="flex flex-row justify-start items-center w-auto h-5 absolute top-0 right-0 gap-x-1 px-2 py-2 rounded-bl-lg bg-foreground text-background">
                                    {iconMap[plan.tagicon as keyof typeof iconMap]}
                                    <h6 className="text-[10px] font-medium tracking-tight leading-none uppercase">{plan.tagline}</h6>
                                </div>
                                <div className="flex flex-row justify-between items-start p-6 mt-4 w-full">
                                    <div className="flex flex-row justify-start items-center gap-x-1.5 w-auto h-6">
                                        <div className="flex justify-center items-center bg-foreground text-surface rounded-sm h-full px-1">{iconMap[plan.icon as keyof typeof iconMap]}</div>
                                        <div className="flex justify-center items-center border border-border rounded-sm h-full px-1.5">
                                            <h3 className="font-semibold leading-[1.3] whitespace-nowrap tracking-tight text-xs uppercase translate-y-[0.5px] md:translate-y-0">{plan.title}</h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center gap-x-1">
                                        {plan.squares.map((square, idx) => (
                                            <IconSquareFilled key={idx} size={square.size} className={square.className} />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start items-start px-6 gap-y-4 pb-4 w-full h-auto">
                                    <div className="flex flex-row justify-start items-center gap-x-2">
                                        <p className="text-4xl font-semibold">{plan.price}</p>
                                        <p className="text-xs text-muted-foreground font-medium translate-y-2">
                                            {plan.validity}
                                        </p>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-[1.4]">{plan.description}</p>
                                    <Button variant={"filled"} size={"wide"} radius={"medium"}>
                                        <IconCornerDownRight />
                                        {plan.buttonLabel}
                                    </Button>
                                </div>
                                <div className="flex flex-col justify-center items-center w-full h-auto gap-y-4 px-6">
                                    {plan.benefits && (
                                        <ul className="w-full list-none px-0 mb-0">
                                            {plan.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex flex-row gap-x-2 text-foreground items-center">
                                                    {iconMap[plan.benefitIcons[idx] as keyof typeof iconMap]}
                                                    <span className="text-sm whitespace-nowrap">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <Separator orientation="horizontal" className="mt-4" />
                                </div>
                                <div className="flex flex-col justify-start items-start w-full h-auto p-6 gap-y-4">
                                    <h4 className="text-sm font-bold tracking-tight uppercase text-foreground">{plan.listTitle}</h4>
                                    <ul className="w-full list-none px-0 mb-0">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex flex-row gap-x-2 items-center mb-4 last:mb-0">
                                                <IconSquareCheckFilled size={18} className="text-success" />
                                                <span className="text-sm text-muted-foreground whitespace-nowrap">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}