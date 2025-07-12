import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Archivo, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import LayoutProvider from "@/components/layout-provider";
import { fontDefault } from "@/fonts/local";

export const fontArchivo = Archivo({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-archivo",
	display: "swap"
})

export const fontLabel = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-label",
	display: "swap"
})

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
			<body className={`${fontDefault.className} antialiased `}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<LayoutProvider>
						{children}
					</LayoutProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}