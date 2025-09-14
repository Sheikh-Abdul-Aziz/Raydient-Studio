import "./style.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { Host_Grotesk } from "@/fonts/local";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SettingsProvider } from "@/hooks/use-settings";
import { LayoutProvider } from "./layout-provider";

const SITE_NAME = "Raydient Studio";
const SITE_DESCRIPTION = "Premium Web Design Agency - Your Strategic Design Partner for AI, SaaS, Tech, and Startups.";
const SITE_URL = "https://raydientstudio.com";
const OG_IMAGE = "https://raydientstudio.vercel.app/og-image.jpg";
const OG_IMAGE_PROPS = {
    url: OG_IMAGE,
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: `${SITE_NAME} - Premium Web Design Agency`
};

export const metadata: Metadata = {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    category: "technology",
    creator: SITE_NAME,
    publisher: SITE_NAME,
    keywords: ["raydient", "raydient studio", "raydientstudio", "design", "minimalism", "branding"],
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        shortcut: "/favicon.ico"
    },
    manifest: "/site.webmanifest",
    openGraph: {
        images: [OG_IMAGE_PROPS],
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        type: "website",
        siteName: SITE_NAME
    },
    twitter: {
        images: [OG_IMAGE_PROPS],
        card: "summary_large_image",
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        creator: "@raydientstudio",
        site: "@raydientstudio"
    }
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
            <body className={`${Host_Grotesk.className} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <SettingsProvider>
                        <LayoutProvider>
                            {children}
                        </LayoutProvider>
                    </SettingsProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}