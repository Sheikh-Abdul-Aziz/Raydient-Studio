import "./style.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LayoutProvider } from "@/components/layout-provider";
import { Host_Grotesk } from "@/fonts/local";

export const metadata: Metadata = {
	title: "Raydient Studio",
	description: "Premium Web Design Agency - Your Strategic Design Partner for AI, SaaS, Tech, and Startups.",
	category: "technology",
	creator: "Raydient Studio",
	publisher: "Raydient Studio",
	keywords: ["raydient", "raydient studio", "raydientstudio", "design", "minimalism", "branding"],
	icons: {
		icon: "/favicon.ico"
	},
	openGraph: {
		images: [
			{
				url: "https://github.com/raydient-studio.png",
				width: 1200,
				height: 630,
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
		card: "summary_large_image",
		title: "Raydient Studio",
		description: "Premium Web Design Agency - Your Strategic Design Partner for AI, SaaS, Tech, and Startups.",
		creator: "@raydientstudio",
		site: "@raydientstudio",
		images: "https://github.com/raydient-studio.png"
	}
};

export default function RootLayout({ children }: { children: ReactNode; }) {
	return (
		<html lang="en" suppressHydrationWarning suppressContentEditableWarning>
			<body className={`${Host_Grotesk.className} antialiased scroll-smooth scrollbar-hidden`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<LayoutProvider>
						{children}
					</LayoutProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}