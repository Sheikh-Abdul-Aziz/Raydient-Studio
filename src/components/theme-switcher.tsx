"use client"

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { IconDeviceLaptop, IconMoonStars, IconSun } from "@tabler/icons-react";

export default function ThemeSwitcher() {

    const [defaultValue, setDefaultValue] = useState("");
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (theme) setDefaultValue(theme);
    }, [theme]);

    return (
        <div className="flex flex-row items-center border border-border bg-transparent rounded-full shadow-none"> {/* Theme */}
            <ToggleGroup type="single" size="sm" defaultValue={defaultValue} value={defaultValue} disabled={!defaultValue} className="m-0">
                <ToggleGroupItem value="system" aria-label="System" className="aria-checked:border aria-checked:bg-accent aria-checked:text-foreground text-muted-foreground rounded-full border-border" onClick={() => setTheme("system")}>
                    <IconDeviceLaptop />
                </ToggleGroupItem>
                <ToggleGroupItem value="light" aria-label="Light" className="aria-checked:border aria-checked:bg-accent aria-checked:text-foreground text-muted-foreground rounded-full border-border" onClick={() => setTheme("light")}>
                    <IconSun />
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" aria-label="Dark" className="aria-checked:border aria-checked:bg-accent aria-checked:text-foreground text-muted-foreground rounded-full border-border" onClick={() => setTheme("dark")}>
                    <IconMoonStars />
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    );
}