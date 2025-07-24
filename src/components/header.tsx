"use client";

import React, { memo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Search from "./search";
import { Separator } from "./ui/separator";
import ThemeSwitcher from "./theme-switcher";
import MobileMenu from "./mobile-menu";
import { DesktopMenu } from "./desktop-menu";
import Bell from "./bell";
import { IconRaydientStudio } from "./icon/icon";

const Logo = memo(({ onClick }: { onClick: () => void }) => {
    const { theme } = useTheme();
    const logoSrc = theme === "dark" ? "/light.svg" : "/dark.svg";
    return (
        <Image onClick={onClick} src={logoSrc} width={36} height={36} alt="Raydient Studio" className="border border-border rounded-lg"/>
    );
});
Logo.displayName = "Logo";

const VerticalDivider = memo(() => (
    <Separator orientation="vertical" />
));
VerticalDivider.displayName = "VerticalDivider";

const Header = () => {

    const router = useRouter();

    const navigateHome = () => {
        router.push("/");
    };

    return (
        <header className="fixed z-20 top-0 left-0 right-0 w-full h-16 rounded-b-lg border-b border-border border-dashed bg-surface backdrop-blur supports-[backdrop-filter]:bg-surface/80">
            <div className="flex items-center justify-between w-full h-full px-4 gap-x-4">
                <div className="flex items-center gap-x-2 w-auto h-auto">
                    {/* MOBILE */}
                    <div className="flex lg:hidden items-center">
                        {/* Logo */}
                        {/* <Logo onClick={navigateHome} /> */}
                        <IconRaydientStudio onClick={navigateHome}/>
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden lg:flex items-center gap-x-4">
                        {/* Logo */}
                        {/* <Logo onClick={navigateHome} /> */}
                        <IconRaydientStudio onClick={navigateHome}/>

                        {/* Vertical Divider */}
                        <div className="w-auto h-5">
                            <VerticalDivider />
                        </div>
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
                    <div className="hidden lg:flex w-auto h-5">
                        <VerticalDivider />
                    </div>

                    {/* Search and Notifications */}
                    <Search />

                    <Bell />

                    {/* Avatar */}
                    <div className="hidden lg:flex">
                        <Avatar className="w-8 h-8 border border-border rounded-full">
                            <AvatarImage src="https://github.com/sheikh-abdul-aziz.png" />
                            <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                    </div>

                    {/* Vertical Divider */}
                    <div className="flex lg:hidden w-auto h-5">
                        <VerticalDivider />
                    </div>

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