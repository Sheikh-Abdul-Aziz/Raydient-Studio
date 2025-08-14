"use client";

import React, { memo } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Bell from "./bell";
import Search from "./search";
import { Separator } from "./ui/separator";
import ThemeSwitcher from "./theme-switcher";
import MobileMenu from "./mobile-menu";
import { DesktopMenu } from "./desktop-menu";
import { IconRaydientStudio } from "./icon/icon";

const Header = () => {

    const router = useRouter();

    const navigateHome = () => {
        router.push("/");
    };

    return (
        <header className="fixed z-20 top-0 left-0 right-0 w-full h-16 rounded-b-lg border-b border-border border-dashed bg-surface">
            <div className="flex items-center justify-between w-full h-full px-4 gap-x-4">
                <div className="flex items-center gap-x-2 w-auto h-auto">
                    {/* MOBILE */}
                    <div className="flex flex-row lg:hidden items-center gap-x-2">
                        {/* Logo */}
                        <IconRaydientStudio onClick={navigateHome} />
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden lg:flex items-center gap-x-4">
                        {/* Logo */}
                        <IconRaydientStudio onClick={navigateHome} />

                        {/* Vertical Divider */}
                        <Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
                        {/* Desktop Menu */}
                        <DesktopMenu />
                    </div>
                </div>

                <div className="flex items-center gap-x-2 w-auto h-auto">
                    {/* Theme Switcher */}
                    <div className="hidden lg:flex">
                        <ThemeSwitcher />
                    </div>

                    {/* Vertical Divider */}
                    <Separator orientation="vertical" className="hidden lg:flex data-[orientation=vertical]:h-4" />

                    {/* Search and Notifications */}
                    <Search />

                    <Bell />

                    {/* Avatar */}
                    <div className="hidden lg:flex">
                        <Avatar className="w-8 h-8 border border-border rounded-full">
                            <AvatarImage src="https://github.com/sheikh-abdul-aziz.png" alt="alt" />
                            <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                    </div>

                    {/* Vertical Divider */}
                    <Separator orientation="vertical" className="flex lg:hidden data-[orientation=vertical]:h-4" />

                    {/* MOBILE MENU */}
                    <div className="flex lg:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default memo(Header);