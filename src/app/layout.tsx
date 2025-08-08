import "./style.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LayoutProvider } from "@/components/layout-provider";
import { Host_Grotesk } from "@/fonts/local";
import { Toaster } from "@/components/ui/toaster";
import CookieToast from "@/components/cookie-toast";

const imageURL = "https://raydientstudio.vercel.app/og-image.jpg";

export const metadata: Metadata = {
    title: "Raydient Studio",
    description: "Premium Web Design Agency - Your Strategic Design Partner for AI, SaaS, Tech, and Startups.",
    category: "technology",
    creator: "Raydient Studio",
    publisher: "Raydient Studio",
    keywords: ["raydient", "raydient studio", "raydientstudio", "design", "minimalism", "branding"],
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        shortcut: "/favicon.ico"
    },
    manifest: "/site.webmanifest",
    openGraph: {
        images: [
            {
                url: imageURL,
                width: 1200,
                height: 630,
                type: "image/jpeg",
                alt: "Raydient Studio - Premium Web Design Agency"
            }
        ],
        title: "Raydient Studio",
        description: "Premium Web Design Agency - Your Strategic Design Partner for AI, SaaS, Tech, and Startups.",
        url: "https://raydientstudio.com",
        type: "website",
        siteName: "Raydient Studio"
    },
    twitter: {
        images: [
            {
                url: imageURL,
                width: 1200,
                height: 630,
                type: "image/jpeg",
                alt: "Raydient Studio - Premium Web Design Agency"
            }
        ],
        card: "summary_large_image",
        title: "Raydient Studio",
        description: "Premium Web Design Agency - Your Strategic Design Partner for AI, SaaS, Tech, and Startups.",
        creator: "@raydientstudio",
        site: "@raydientstudio"
    }
};

export default function RootLayout({ children }: { children: ReactNode; }) {
    return (
        <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
            <body className={`${Host_Grotesk.className} antialiased scroll-smooth scrollbar-hidden`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <LayoutProvider>
                        {children}
                        <Toaster />
                        <CookieToast />
                        <SpeedInsights />
                    </LayoutProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}