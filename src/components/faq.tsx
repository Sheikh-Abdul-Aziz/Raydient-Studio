"use client";

import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import { JetBrains_Mono } from "@/fonts/local";
import { IconSquareFilled } from "@tabler/icons-react";

const faqItems = [
    {
        question: "What design services do you offer?",
        answer: "We offer branding, UI/UX design, web design, mobile app design, illustration, and creative consulting tailored to your business needs.",
    },
    {
        question: "How does your design process work?",
        answer: "Our process includes discovery, research, ideation, design, feedback, and final delivery. We keep you involved at every stage to ensure the best results.",
    },
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary by project scope, but most projects take 2–6 weeks. We’ll provide a detailed schedule after understanding your requirements.",
    },
    {
        question: "How do you handle revisions?",
        answer: "We include a set number of revision rounds in every project to ensure you’re happy with the final result. Additional revisions can be arranged if needed.",
    },
    {
        question: "Can you work with my existing brand guidelines?",
        answer: "Absolutely! We can design within your current brand guidelines or help you refresh and evolve your brand identity.",
    },
    {
        question: "What do you need from me to get started?",
        answer: "We’ll need your project goals, any existing assets or inspiration, and your feedback throughout the process. We’ll guide you through every step!",
    },
];

export default function FAQ() {
    return (
        <div className="w-full h-auto px-0 py-6">
            <div className="w-full h-auto px-4 py-0">
                <div className="flex flex-col w-full h-full gap-y-6 max-w-7xl mx-auto">
                    <div className="text-left justify-center items-start align-middle">
                        <div className="inline-flex flex-row items-center justify-start gap-x-1">
                            <IconSquareFilled size={12} className="text-foreground" />
                            <h3 className={`${JetBrains_Mono.className} antialiased translate-y-px md:translate-y-0 text-xs font-medium tracking-tight leading-none items-center text-muted-foreground`}>
                                FAQ&apos;s
                            </h3>
                        </div>
                        <h2 className="text-xl font-medium text-foreground normal-case">
                            Frequently Asked{" "}
                            <br className="md:hidden" />
                            Questions
                        </h2>
                    </div>
                    <Accordion type="single" collapsible>
                        {faqItems.map((item, idx) => (
                            <AccordionItem value={`item-${idx + 1}`} key={item.question}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}