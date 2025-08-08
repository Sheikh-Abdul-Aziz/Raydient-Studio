"use client";

import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import SectionHeader from "./section-header";
import { FlexLayout } from "./layout/flex-layout";
import { Container } from "./semantic/container";
import { Section } from "./semantic/section";

const info = {
    title: "FAQ's",
    subtitle: (
        <>
            Frequently Asked{" "}<br className="md:hidden" />Questions
        </>
    ),
};

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
        <Section distance={6}>
            <Container distance={4}>
                <FlexLayout display={"flex"} direction={"col"} justify={"start"} items={"center"} width={"full"} height={"fit-content"} gapY={6}>
                    <SectionHeader info={info} />
                    <Accordion type="single" collapsible>
                        {faqItems.map((item, idx) => (
                            <AccordionItem value={`item-${idx + 1}`} key={item.question}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </FlexLayout>
            </Container>
        </Section>
    );
}