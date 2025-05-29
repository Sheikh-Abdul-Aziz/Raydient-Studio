"use client";

import React from "react";
import Link from "next/link";

import { Footer } from "./semantic/footer";
import { Section } from "./semantic/section";
import { Container } from "./semantic/container";
import { Wrapper } from "./semantic/wrapper";

export default function FooterSection() {
    const links = [
        {
            href: "https://entrepreneuraziz.com",
            text: "Sheikh Abdul Aziz",
        },
        {
            href: "https://nextjs.org",
            text: "NextJS",
        },
        {
            href: "https://vercel.com",
            text: "Vercel",
        },
    ];

    return (
        <>
            <Footer className="flex flex-col max-w-7xl mx-auto gap-3 px-6">
                <Section>
                    <Container>
                        <Wrapper className="flex flex-col md:flex-row items-center justify-center lg:justify-between text-xs sm:text-sm gap-2">
                            <p className="text-muted-foreground text-center lg:text-left">
                                Copyright © 2025{" "}
                                <Link href={links[0].href}>
                                    <span className="hover:text-foreground">{links[0].text}</span>
                                </Link>{" "}
                                | All rights reserved.
                            </p>
                            <p className="text-muted-foreground text-center lg:text-right">
                                Developed with{" "}
                                <Link href={links[1].href}>
                                    <span className="hover:text-foreground">{links[1].text}</span>
                                </Link>{" "}
                                | Powered by{" "}
                                <Link href={links[2].href}>
                                    <span className="hover:text-foreground">{links[2].text}</span>
                                </Link>.
                            </p>
                        </Wrapper>
                    </Container>
                </Section>
            </Footer>
        </>
    );
}