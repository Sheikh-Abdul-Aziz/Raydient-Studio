import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/scroll";
import SectionHeader from "./section-header";

const info = {
    title: "CLIENT TESTIMONIALS",
    subtitle: (
        <>
            Take a Quick Look at What Our{" "}<br className="md:hidden" />Clients Are Saying
        </>
    ),
};

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    className,
    img,
    name,
    username,
    body,
}: {
    className?: string;
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <div className={cn(
            "relative h-auto w-full max-w-xs px-4 cursor-pointer overflow-hidden rounded-lg border border-border p-4",
            "bg-surface hover:bg-muted/80 active:bg-muted/80 transition-colors duration-170 ease-in-out cursor-pointer",
            className
        )}>
            <div className="flex flex-row items-center gap-2">
                <img aria-label="avatar" className="rounded-full" width="32" height="32" alt="alt" src={img} />
                <div className="flex flex-col">
                    <h4 className="text-sm font-medium text-foreground">
                        {name}
                    </h4>
                    <p className="text-xs font-medium text-muted-foreground">{username}</p>
                </div>
            </div>
            <p className="mt-2 text-sm">{body}</p>
        </div>
    );
};

export default function Testimonial() {
    return (
        <section className="flex flex-col justify-start items-start w-full h-auto overflow-hidden px-4 py-8 gap-y-6 max-w-7xl mx-auto">
            <SectionHeader info={info} />
            <div className="relative flex flex-col justify-start items-start w-full h-auto overflow-hidden max-w-7xl">
                <div className="relative w-full h-auto flex flex-col gap-y-4">
                    {/* First row marquee */}
                    <Marquee >
                        {[...firstRow, ...firstRow].map((review, idx) => (
                            <ReviewCard key={review.username + idx} {...review} />
                        ))}
                    </Marquee>
                    {/* Second row marquee (reverse) */}
                    <Marquee >
                        {[...secondRow, ...secondRow].map((review, idx) => (
                            <ReviewCard key={review.username + idx} {...review} />
                        ))}
                    </Marquee>
                </div>
                {/* Gradient overlays for the edges */}
                <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-background"></div>
                <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-background"></div>
            </div>
        </section>
    );
}