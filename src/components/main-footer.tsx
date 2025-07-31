"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { IconBrandBehance, IconBrandDiscord, IconBrandDribbble, IconBrandInstagram, IconBrandMedium, IconBrandThreads, IconBrandX, IconMail, IconSquareFilled } from "@tabler/icons-react";
import { Footer } from "./semantic/footer";
import { Wrapper } from "./semantic/wrapper";
import { Section } from "./semantic/section";
import { Container } from "./semantic/container";
import { GridLayout } from "./layout/grid-layout";
import { Space_Grotesk, JetBrains_Mono } from "@/fonts/local";

export default function MainFooter() {

    const footerLinks = useMemo(() => [
        {
            title: "Solutions",
            links: [
                { name: "Corporations", href: "/", external: false, icon: null },
                { name: "Startups", href: "/", external: false, icon: null },
                { name: "Individuals", href: "/", external: false, icon: null },
                { name: "Processing", href: "/", external: false, icon: null },
                { name: "Pricing", href: "/", external: false, icon: null },
                { name: "Services", href: "/", external: false, icon: null },
                { name: "Integrations", href: "/", external: false, icon: null }
            ],
        },
        {
            title: "Company",
            links: [
                { name: "Development", href: "/", external: false, icon: null },
                { name: "Agency", href: "/", external: false, icon: null },
                { name: "Foundation", href: "/docs/foundation", external: false, icon: null },
                { name: "Commitment", href: "/", external: false, icon: null },
                { name: "Partners", href: "/docs/partnership-policy", external: false, icon: null },
                { name: "Testimonials", href: "/", external: false, icon: null },
                { name: "Brand Assets", href: "/docs/brand-assets", external: false, icon: null },
            ],
        },
        {
            title: "Community",
            links: [
                { name: "Communities", href: "https://medium.com/@raydientstudio", external: true, icon: null },
                { name: "Events", href: "/", external: false, icon: null },
                { name: "News", href: "https://x.com/raydientstudio", external: true, icon: null },
                { name: "FAQ's", href: "#faqs", external: false, icon: null },
                { name: "Support", href: "/docs/support", external: false, icon: null },
                { name: "Careers", href: "/", external: false, icon: null },
                { name: "Contact Us", href: "/docs/contact-us", external: false, icon: null }
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "All Resources", href: "/", external: false, icon: null },
                { name: "Docs", href: "/docs", external: false, icon: null },
                { name: "Guides", href: "/docs/guide", external: false, icon: null },
                { name: "Help", href: "/docs/help", external: false, icon: null },
                { name: "Licensing", href: "/docs/end-user-license-agreement", external: false, icon: null },
                { name: "Blog", href: "https://medium.com/@raydientstudio", external: true, icon: null },
                { name: "Case Studies", href: "/docs/case-studies", external: false, icon: null }
            ],
        },
    ], []);

    const quickLinks = useMemo(() => [
        {
            title: "Quick Links",
            links: [
                { name: "Privacy & Security", href: "/docs/privacy-and-policy", external: false },
                { name: "Terms & Conditions", href: "/docs/terms-and-conditions", external: false },
                { name: "Attributions", href: "/docs/attributions", external: false },
                { name: "Legal", href: "/docs/legal", external: false },
                { name: "Opt-Out", href: "/docs/opt-out", external: false },
            ]
        }
    ], []);

    const socialLinks = useMemo(() => [
        { href: "https://www.instagram.com/raydientstudio", icon: <IconBrandInstagram /> },
        { href: "https://www.threads.net/@raydientstudio", icon: <IconBrandThreads /> },
        { href: "https://x.com/raydientstudio", icon: <IconBrandX /> },
        { href: "https://discord.gg/JjXJ2UZnDX", icon: <IconBrandDiscord /> },
        { href: "https://medium.com/@raydientstudio", icon: <IconBrandMedium /> },
        { href: "https://dribbble.com/raydientstudio", icon: <IconBrandDribbble /> },
        { href: "https://www.behance.net/raydientstudio", icon: <IconBrandBehance /> },
        { href: "mailto:hello@raydientstudio.com", icon: <IconMail /> }
    ], []);

    return (
        <Footer className="bg-surface bottom-0 left-0 right-0 mt-8 rounded-t-lg border-t border-border border-dashed">
            <Section distance={5}>
                <Container distance={5}>
                    <Wrapper gapX={"none"} gapY={4} className="flex flex-col max-w-7xl mx-auto">
                        <div className="flex flex-col items-center justify-center text-center bg-foreground p-8 gap-y-1 rounded-lg">
                            <h2 className={`${Space_Grotesk.className} antialiased text-surface text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gap-y-4`}>Raydient Studio</h2>
                            <p className={`${Space_Grotesk.className} antialiased text-muted tracking-tight text-xs sm:text-sm md:text-base lg:text-lg font-normal uppercase`}>Brand Design Agency</p>
                        </div>
                        {/* Quick Links */}
                        <GridLayout display={"grid"} gapX={"none"} gapY={6} className="grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {footerLinks.map((section) => (
                                <div key={section.title} className="border border-border border-solid px-4 py-4 rounded-lg">
                                    <div className="flex flex-row items-center justify-start gap-x-1 mb-2">
                                        <IconSquareFilled size={14} className="text-foreground" />
                                        <h4 className={`${JetBrains_Mono.className} antialiased translate-y-px md:translate-y-0 text-base tracking-tight leading-none font-bold uppercase text-foreground items-center`}>{section.title}</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm normal">
                                        {section.links.map(({ name, href, external, icon }) => (
                                            <li key={name}>
                                                {external ? (
                                                    <a href={href} className="antialiased flex items-center justify-start text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-150 ease-in-out">
                                                        {name} {icon}
                                                    </a>
                                                ) : (
                                                    <Link href={href} className="antialiased flex items-center justify-start text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-150 ease-in-out">
                                                        {name} {icon}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </GridLayout>
                        {/* Horizontal Divider */}
                        <Separator orientation="horizontal" className="hidden" />
                        {/* Social Media & Short Links */}
                        <div className="flex flex-col gap-y-4">
                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 text-sm border border-border border-solid p-4 rounded-lg">
                                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                    {socialLinks.map(({ href, icon }) => (
                                        <Link key={href} href={href}>
                                            <Button variant="outlined" size="social" radius="large">{icon}</Button>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-wrap justify-center md:justify-end text-xs sm:text-sm gap-2">
                                    {quickLinks[0].links.map(({ name, href, external }) => (
                                        <p key={name}>
                                            {external ? (
                                                <a href={href}><span className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-150 ease-in-out">{name}</span></a>
                                            ) : (
                                                <Link href={href}><span className="text-muted-foreground hover:text-foreground active:text-foregroundtransition-colors duration-150 ease-in-out">{name}</span></Link>
                                            )}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            {/* Copyright & Attribution */}
                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-xs sm:text-sm gap-2 border border-border border-solid p-4 rounded-lg">
                                <div className="flex flex-wrap text-center md:text-left justify-center md:justify-start">
                                    <p className="text-muted-foreground">Copyright © 2025 <Link href="https://raydientstudio.com"><span className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-150 ease-in-out">Raydient Studio</span></Link> | All rights reserved.</p>
                                </div>
                                <div className="flex flex-wrap text-center md:text-right justify-center md:justify-end">
                                    <p className="text-muted-foreground">Developed with <Link href="https://nextjs.org"><span className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-150 ease-in-out">NextJS</span></Link> | Powered by <Link href="https://vercel.com"><span className="text-muted-foreground hover:text-foreground">Vercel</span></Link>.</p>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </Container>
            </Section>
        </Footer>
    );
}