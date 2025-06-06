"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { IconBrandBehance, IconBrandDribbble, IconBrandInstagram, IconBrandThreads, IconBrandX, IconMail } from "@tabler/icons-react";
import { Footer } from "./semantic/footer";
import { Wrapper } from "./semantic/wrapper";
import { Section } from "./semantic/section";
import { Container } from "./semantic/container";
import { GridLayout } from "./layout/grid-layout";

export default function FooterSection() {

    const footerLinks = [
        {
            title: "Solutions",
            links: [
                { name: "Enterprises", href: "/", external: true, icon: null },
                { name: "Educational", href: "", external: true, icon: null },
                { name: "Startups", href: "/", external: true, icon: null },
                { name: "Payments", href: "/", external: true, icon: null },
                { name: "Pricing", href: "/", external: true, icon: null },
                { name: "Feedbacks", href: "/", external: true, icon: null },
                { name: "Integrations", href: "/", external: true, icon: null }  
            ],
        },
        {
            title: "Company",
            links: [
                { name: "Development", href: "/", external: true, icon: null },
                { name: "Studio HQ", href: "/", external: true, icon: null },
                { name: "Foundation", href: "/", external: true, icon: null },
                { name: "Partners", href: "/", external: true, icon: null },
                { name: "Commitment", href: "/", external: true, icon: null },
                { name: "Brand Assets", href: "/", external: true, icon: null },
                { name: "Testimonials", href: "/", external: true, icon: null }
            ],
        },
        {
            title: "Community",
            links: [
                { name: "Communities", href: "/", external: true, icon: null },
                { name: "Events", href: "https://", external: false, icon: null },
                { name: "News", href: "https://", external: true, icon: null },
                { name: "FAQ's", href: "https://", external: true, icon: null },
                { name: "Support", href: "https://", external: true, icon: null },
                { name: "Contact Us", href: "/", external: true, icon: null },
                { name: "Careers", href: "/", external: true, icon: null }
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "All Resources", href: "/", external: true, icon: null },
                { name: "Docs", href: "/", external: true, icon: null },
                { name: "Guides", href: "/", external: true, icon: null },
                { name: "Help", href: "/", external: true, icon: null },
                { name: "Licensing", href: "/", external: true, icon: null }, 
                { name: "Blog", href: "/", external: true, icon: null },
                { name: "Case Studies", href: "/", external: false, icon: null }
            ],
        },
    ];

    const quickLinks = [
        {
            title: "Quick Links",
            links: [
                { name: "Privacy & Security", href: "/", external: false },
                { name: "Terms & Conditions", href: "/", external: false },
                { name: "Attributions", href: "/", external: false },
                { name: "Legal", href: "/", external: false },
                { name: "Opt-Out", href: "/", external: false },
            ]
        }
    ];

    const socialLinks = [
        { href: "https://www.instagram.com/raydientstudio", icon: <IconBrandInstagram /> },
        { href: "https://www.threads.net/@raydientstudio", icon: <IconBrandThreads /> },
        { href: "https://x.com/raydientstudio", icon: <IconBrandX /> },
        { href: "https://dribbble.com/raydientstudio", icon: <IconBrandDribbble /> },
        { href: "https://www.behance.net/raydientstudio", icon: <IconBrandBehance /> },
        { href: "mailto:info@raydientstudio.com", icon: <IconMail /> }
    ];

    return (
        <Footer className="bg-surface">
            <Section distance={4}>
                <Container distance={6}>
                    <Wrapper gapX={"none"} gapY={3} className="flex flex-col max-w-7xl mx-auto">
                        {/* Quick Links */}
                        <GridLayout display={"grid"} gapX={"none"} gapY={6} className="grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
                            {footerLinks.map((section) => (
                                <div key={section.title}>
                                    <h4 className="my-2 text-md font-medium capitalize text-foreground">{section.title}</h4>
                                    <ul className="space-y-2 text-sm normal">
                                        {section.links.map(({ name, href, external, icon }) => (
                                            <li key={name}>
                                                {external ? (
                                                    <a href={href} className="flex items-center justify-start text-muted-foreground hover:text-foreground">
                                                        {name} {icon}
                                                    </a>
                                                ) : (
                                                    <Link href={href} className="flex items-center justify-start text-muted-foreground hover:text-foreground">
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
                        <Separator orientation="horizontal" />
                        {/* Social Media & Short Links */}
                        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between gap-2 text-sm">
                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {socialLinks.map(({ href, icon }) => (
                                    <Link key={href} href={href}>
                                        <Button variant="outlined" size="social" radius="full" className="text-muted-foreground hover:text-foreground">{icon}</Button>
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-end text-xs sm:text-sm gap-3">
                                {quickLinks[0].links.map(({ name, href, external }) => (
                                    <p key={name}>
                                        {external ? (
                                            <a href={href}><span className="text-muted-foreground hover:text-foreground">{name}</span></a>
                                        ) : (
                                            <Link href={href}><span className="text-muted-foreground hover:text-foreground">{name}</span></Link>
                                        )}
                                    </p>
                                ))}
                            </div>
                        </div>
                        {/* Copyright & Attribution */}
                        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between text-xs sm:text-sm gap-2">
                            <div className="flex flex-wrap text-center lg:text-left justify-center md:justify-start">
                                <p className="text-muted-foreground">Copyright © 2025 <Link href="https://raydientstudio.com"><span className="text-muted-foreground hover:text-foreground">Raydient Studio</span></Link> | All rights reserved.</p>
                            </div>
                            <div className="flex flex-wrap text-center lg:text-right justify-center md:justify-end">
                                <p className="text-muted-foreground">Developed with <Link href="https://nextjs.org"><span className="text-muted-foreground hover:text-foreground">NextJS</span></Link> | Powered by <Link href="https://vercel.com"><span className="text-muted-foreground hover:text-foreground">Vercel</span></Link>.</p>
                            </div>
                        </div>
                    </Wrapper>
                </Container>
            </Section>
        </Footer>
    );
}