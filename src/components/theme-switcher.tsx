"use client"

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Laptop, MoonStar, SunMedium } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export default function ThemeSwitcher() {

    const [defaultValue, setDefaultValue] = useState("");
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (theme) setDefaultValue(theme);
    }, [theme]);

    return (
        <div className="flex items-center border border-border bg-transparent rounded-full shadow-none"> {/* Theme */}
            <ToggleGroup type="single" size="sm" defaultValue={defaultValue} value={defaultValue} disabled={!defaultValue} className="m-0">
                <ToggleGroupItem value="system" aria-label="System" className="aria-checked:border aria-checked:bg-accent aria-checked:text-foreground text-muted-foreground rounded-full border-border" onClick={() => setTheme("system")}>
                    <Laptop />
                </ToggleGroupItem>
                <ToggleGroupItem value="light" aria-label="Light" className="aria-checked:border aria-checked:bg-accent aria-checked:text-foreground text-muted-foreground rounded-full border-border" onClick={() => setTheme("light")}>
                    <SunMedium />
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" aria-label="Dark" className="aria-checked:border aria-checked:bg-accent aria-checked:text-foreground text-muted-foreground rounded-full border-border" onClick={() => setTheme("dark")}>
                    <MoonStar />
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    );
}