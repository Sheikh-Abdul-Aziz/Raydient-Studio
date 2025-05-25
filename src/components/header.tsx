"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Bell, Search } from "lucide-react";
import { DesktopMenu } from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import ThemeSwitcher from "./theme-switcher";
import { Separator } from "./ui/separator";

const Logo = React.memo(({ onClick }: { onClick: () => void }) => (
    <Image onClick={onClick} src="/next.svg" width={96} height={32} alt="Shopivo" />
));
Logo.displayName = "Logo";

const VerticalDivider = React.memo(() => (
    <Separator orientation="vertical" />
));
VerticalDivider.displayName = "VerticalDivider";

const Header = () => {
    const router = useRouter();

    const navigateHome = () => {
        router.push("/");
    };

    return (
        <header className="fixed z-20 top-0 left-0 right-0 w-full h-16 border-b border-border border-dashed bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center justify-between w-full h-full px-4">
                {/* MOBILE */}
                <div className="flex lg:hidden">
                    <Logo onClick={navigateHome} />
                </div>

                {/* DESKTOP */}
                <div className="hidden lg:flex items-center gap-x-4">
                    <Logo onClick={navigateHome} />
                    <DesktopMenu />
                </div>

                <div className="flex items-center gap-x-2">
                    {/* Theme Switcher */}
                    <div className="hidden lg:flex">
                        <ThemeSwitcher />
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden lg:flex">
                        <VerticalDivider />
                    </div>

                    {/* Search and Notifications */}
                    <Button variant="outlined" size="icon">
                        <Search />
                    </Button>
                    <Button variant="outlined" size="icon">
                        <Bell />
                    </Button>

                    {/* Avatar */}
                    <div className="hidden lg:flex">
                        <Avatar className="w-8 h-8 border border-border rounded-full">
                            <AvatarImage src="https://github.com/sheikh-abdul-aziz.png" />
                            <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
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

export default React.memo(Header);