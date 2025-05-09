"use client"

import React from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Bell, Search } from 'lucide-react';
import { DesktopMenu } from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import ThemeSwitcher from "./theme-switcher";

export default function Header() {
    const router = useRouter();
    const home =() => {
        router.push("/");
    }   
    return (
        <header className="fixed top-0 left-0 right-0 w-full h-16 border-b border-border border-dashed bg-background backdrop-blur supports-[backdrop-filter]:bg-background/70">
            <div className="flex flex-col justify-center items-center align-middle w-full h-full px-4">
                <div className="flex flex-row relative gap-x-4 justify-center items-center align-middle w-full h-full">
                    {/* MOBILE */}
                    <div className="flex lg:hidden">
                        <Image onClick={home} src="/next.svg" width={96} height={32} alt="SA" />
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden lg:flex gap-x-4 justify-between">
                        <Image onClick={home} src="/next.svg" width={96} height={32} alt="Shopivo" />
                        <DesktopMenu />
                    </div>
                    <div className="flex flex-1 justify-between" />
                    <div className="flex align-middle gap-x-2">
                        <div className="hidden lg:flex">
                            <ThemeSwitcher />
                        </div>
                        <div className="hidden lg:flex align-middle justify-center items-center"> 
                            <hr className="w-[1px] h-6 bg-border border-solid border-border" /> {/* Vertical Divider */}
                        </div>
                        <Button variant="outlined" size="icon">
                            <Search />
                        </Button>
                        <Button variant="outlined" size="icon">
                            <Bell/>
                        </Button>
                        <div className="hidden lg:flex">
                            <Avatar className="w-8 h-8 border border-border rounded-md">
                                <AvatarImage src="https://github.com/sheikh-abdul-aziz.png" />
                                <AvatarFallback>SA</AvatarFallback>
                            </Avatar>
                        </div>
                        {/* MOBILE */}
                        <div className="flex flex-col lg:hidden gap-8 align-middle justify-between">
                            <MobileMenu /> 
                        </div>
                    </div>
                </div>
            </div>
        </header>    
    )
}