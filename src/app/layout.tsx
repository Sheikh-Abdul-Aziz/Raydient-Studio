import "./style.css";
import React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import LayoutProvider from "@/components/layout-provider";
import { fontPrimary } from "@/fonts/local";

export const metadata: Metadata = {
	title: "Raydient Studio",
	description: "Specialized in minimalist design, we create refined visuals that elevate your brand's presence with subtle strength and modern aesthetics.",
	category: "technology",
	creator: "Raydient Studio",
	publisher: "Raydient Studio",
	keywords: ["raydient", "raydient studio", "raydientstudio", "design", "minimalism", "branding"]
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
	return (
		<html lang="en" suppressHydrationWarning suppressContentEditableWarning>
			<body className={`${fontPrimary.className} antialiased `}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<LayoutProvider>
						{children}
					</LayoutProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}