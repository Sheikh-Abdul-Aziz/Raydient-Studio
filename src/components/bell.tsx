"use client";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { BellIcon } from "lucide-react";
import {
    IconDevices,
    IconMoonStars,
    IconSun
} from "@tabler/icons-react";

export default function Bell() {

    const { setTheme, resolvedTheme, theme } = useTheme();

    useEffect(() => {
        const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
        if (savedTheme && savedTheme !== theme) {
            setTheme(savedTheme);
        }
    }, [setTheme, theme]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outlined" size="icon" radius="medium" className="data-[state=open]:bg-secondary data-[state=open]:text-secondary-foreground">
                    <BellIcon />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" defaultValue={theme}>
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    aria-label="Light Theme"
                    aria-checked={resolvedTheme === "light" && theme !== "system"}
                    className={resolvedTheme === "light" && theme !== "system" ? "font-medium bg-muted/70 text-foreground" : ""}>
                    <IconSun className="mr-2 h-4 w-4" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    aria-label="Dark Theme"
                    aria-checked={resolvedTheme === "dark" && theme !== "system"}
                    className={resolvedTheme === "dark" && theme !== "system" ? "font-medium bg-muted/70 text-foreground" : ""}>
                    <IconMoonStars className="mr-2 h-4 w-4" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    aria-label="System Theme"
                    aria-checked={theme === "system"}
                    className={theme === "system" ? "font-medium bg-muted/70 text-foreground" : ""}>
                    <IconDevices className="mr-2 h-4 w-4" /> System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}