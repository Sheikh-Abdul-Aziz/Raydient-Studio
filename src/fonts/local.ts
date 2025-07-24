import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

const fontPrimary = localFont({
    src: [{path: './typeface/variable/Host-Grotesk.ttf'}],
    variable: '--font-primary',
    display: 'swap',
});

const fontSecondary = localFont({
    src: [{path: './typeface/variable/Space-Grotesk.ttf'}],
    variable: '--font-secondary',
    display: 'swap',
});

const fontAccent = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-accent",
    display: "swap"
})

const fontMono = localFont({
    src: [{path: './typeface/variable/JetBrains-Mono.ttf'}],
    variable: '--font-mono',
    display: 'swap',
});

export { fontPrimary, fontSecondary, fontAccent, fontMono };