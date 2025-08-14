import localFont from 'next/font/local'

const Host_Grotesk = localFont({
    src: [
        {
            path: './typeface/variable/HostGrotesk-Variable.woff2',
            style: 'normal'
        }
    ],
    variable: '--font-host-grotesk',
    display: 'swap'
})

const Space_Grotesk = localFont({
    src: [
        {
            path: './typeface/variable/SpaceGrotesk-Variable.woff2',
            style: 'normal'
        }
    ],
    variable: '--font-space-grotesk',
    display: 'swap'
})

const Poppins = localFont({
    src: [
        {
            path: './typeface/variable/Poppins-Variable.ttf',
            style: 'normal'
        }
    ],
    variable: '--font-poppins',
    display: 'swap'
})

const JetBrains_Mono = localFont({
    src: [
        {
            path: './typeface/variable/JetBrainsMono-Variable.ttf',
            style: 'normal'
        }
    ],
    variable: '--font-jetbrains-mono',
    display: 'swap'
})

export { Host_Grotesk, Space_Grotesk, Poppins, JetBrains_Mono }