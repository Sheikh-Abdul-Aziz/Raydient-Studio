import "./style.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { Host_Grotesk } from "@/fonts/local";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SettingsProvider } from "@/hooks/use-settings";
import { MobileMenuProvider } from "@/components/mobile-menu";
import { LayoutProvider } from "@/components/layout-provider";
import { Toaster } from "@/components/ui/toaster";
import { CookieToast } from "@/components/cookie-toast";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_NAME = "Raydient Studio";
const SITE_DESCRIPTION = "Raydient Studio is a premium web design agency specializing in minimalism, branding, and digital experiences for AI, SaaS, Tech, and Startups.";
const SITE_URL = "https://raydientstudio.vercel.app";
const MANIFEST = "/site.webmanifest";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`, 
    },
    description: SITE_DESCRIPTION,
    keywords: [
        "raydient",
        "raydient studio",
        "raydientstudio",
        "web design",
        "branding",
        "minimalism",
        "digital agency",
        "UI/UX design",
        "SaaS design",
        "startup design",
        "AI design",
        "tech design",
    ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
        canonical: SITE_URL,
    },
    manifest: MANIFEST,
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        siteName: SITE_NAME,
        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                type: "image/jpeg",
                alt: `${SITE_NAME} - Premium Web Design Agency`,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        creator: "@raydientstudio",
        site: "@raydientstudio",
        images: [OG_IMAGE],
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
            <body className={`${Host_Grotesk.className} antialiased font-sans scrollbar-webkit`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <SettingsProvider>
                        <MobileMenuProvider>
                            <LayoutProvider>
                                <Analytics />
                                <SpeedInsights />
                                {children}
                                <Toaster />
                                <CookieToast />
                            </LayoutProvider>
                        </MobileMenuProvider>
                    </SettingsProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}