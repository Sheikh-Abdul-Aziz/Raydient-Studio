import localFont from 'next/font/local';

const fontDefault = localFont({
    src: [
        {
            path: './typeface/variable/Host-Grotesk.ttf',
        },
    ],
    variable: '--font-default',
    display: 'swap',
});

const fontMono = localFont({
    src: [
        {
            path: './typeface/variable/JetBrains-Mono.ttf',
        },
    ],
    variable: '--font-mono',
    display: 'swap',
});

export { fontDefault, fontMono };