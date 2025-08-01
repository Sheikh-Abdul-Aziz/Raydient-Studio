"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ThemeSwitcher from "./theme-switcher";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutGrid, IconShape } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { MobileNavigation } from "./mobile-navigation";
import { Label } from "./ui/label";
import { Poppins } from "@/fonts/local";

const data = {
    user: {
        name: "Entrepreneur Aziz",
        title: "Entrepreneur | Developer | Designer",
        description:
            "I am a passionate entrepreneur, developer, and designer with a keen interest in creating innovative solutions that make a difference.",
        website: "https://entrepreneuraziz.com",
        github: "https://github.com/sheikh-abdul-aziz",
        x: "https://x.com/@ShekhAbdulAzeez",
        dribbble: "#",
        behance: "#",
        instagram: "https://www.instagram.com/shaykhabdulazeez/",
        email: "info@entrepreneuraziz.com",
        avatar: "https://github.com/sheikh-abdul-aziz.png",
        avatarFallback: "SA",
        avatarAlt: "Entrepreneur Aziz",
    },
    navigationMenu: [
        { title: "Home", url: "/" },
        { title: "Docs", url: "/docs" },
        { title: "Projects", url: "/projects" },
    ],
    projectsMenu: [
        {
            title: "All Categories",
            id: "id1",
            url: "#",
            icon: IconLayoutGrid,
            isActive: false,
            items: [
                { id: "web-designs", title: "Website Design", url: "#" },
                { id: "ui-ux-designs", title: "UI/UX Design", url: "#" },
                { id: "product-designs", title: "Product Design", url: "#" },
                { id: "web-development", title: "Frontend Development", url: "#" },
            ],
        },
        {
            title: "Reusable Blocks",
            id: "id2",
            url: "#",
            icon: IconShape,
            isActive: false,
            items: [
                { id: "hero", title: "Hero", url: "#" },
                { id: "navigation", title: "Navigation", url: "#" },
                { id: "footer", title: "Footer", url: "#" },
                { id: "testimonial", title: "Testimonial", url: "#" },
                { id: "pricing", title: "Pricing", url: "#" },
                { id: "contact", title: "Contact", url: "#" },
                { id: "faq", title: "FAQ", url: "#" },
                { id: "features", title: "Features", url: "#" },
            ],
        },
    ],
};

export default function MobileMenu() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen((prev) => !prev);
    const navigateTo = (path: string) => router.push(path);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div>
            {/* Hamburger Button */}
            <Button
                aria-label="menu"
                variant="outlined"
                size="icon"
                radius="medium"
                onClick={toggleDrawer}
                className="flex flex-col items-center justify-center p-2 gap-1.5 transition-opacity disabled:opacity-50 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary"
            >
                <motion.span
                    className="block w-full h-0.5 bg-muted-foreground rounded-full"
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
                    transition={{ duration: 0.1, ease: "linear" }}
                />
                <motion.span
                    className="block w-full h-0.5 bg-muted-foreground rounded-full"
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
                    transition={{ duration: 0.1, ease: "linear" }}
                />
            </Button>

            {/* Drawer Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-drawer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                        className="z-20 flex flex-col fixed left-0 right-0 top-16 bottom-0 h-[100dvh] w-screen bg-surface text-foreground px-4 py-4 gap-y-3"
                    >
                        <div className="flex flex-col items-center justify-between gap-y-4">
                            <Button
                                onClick={() => navigateTo("/signup")}
                                variant="filled"
                                size="wide"
                                radius="large"
                            >
                                Signup
                            </Button>
                            <Button
                                onClick={() => navigateTo("/login")}
                                variant="outlined"
                                size="wide"
                                radius="large"
                            >
                                Login
                            </Button>
                        </div>

                        <Label className={`${Poppins.className} antialiased text-xs font-medium tracking-tight normal text-muted-foreground mt-4`}>
                            Settings
                        </Label>

                        <div className="flex flex-col pl-2 gap-x-2 gap-y-3">
                            <div className="flex flex-row items-center justify-between">
                                <Label className="text-sm font-normal">Theme</Label>
                                <ThemeSwitcher />
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <Label className="text-sm font-normal">Dashboard</Label>
                                <Avatar className="w-8 h-8 border border-border rounded-full">
                                    <AvatarImage src={data.user.avatar} alt={data.user.avatarAlt} />
                                    <AvatarFallback>{data.user.avatarFallback}</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>

                        <Separator orientation="horizontal" className="my-3" />

                        <div className="flex flex-col">
                            <MobileNavigation
                                itemFirst={data.navigationMenu}
                                itemSecond={data.projectsMenu}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}