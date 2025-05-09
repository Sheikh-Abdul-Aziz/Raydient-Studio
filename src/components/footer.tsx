"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {

    return (
        <div className="w-full h-auto px-0 py-6 bg-background">
            <div className="w-full h-auto px-6 py-0">
                <footer className="flex flex-col max-w-7xl mx-auto gap-3">
                    {/* Copyright & Attribution */}
                    <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between text-xs sm:text-sm gap-2">
                        <div className="flex flex-wrap text-center lg:text-left justify-center md:justify-start">
                            <p className="text-muted-foreground">Copyright © 2025 <Link href="https://entrepreneuraziz.com"><span className="text-muted-foreground hover:text-foreground">Sheikh Abdul Aziz</span></Link> | All rights reserved.</p>
                        </div>
                        <div className="flex flex-wrap text-center lg:text-right justify-center md:justify-end">
                            <p className="text-muted-foreground">Developed with <Link href="https://nextjs.org"><span className="text-muted-foreground hover:text-foreground">NextJS</span></Link> | Powered by <Link href="https://vercel.com"><span className="text-muted-foreground hover:text-foreground">Vercel</span></Link>.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}