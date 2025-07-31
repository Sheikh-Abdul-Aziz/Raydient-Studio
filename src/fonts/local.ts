import localFont from 'next/font/local'

const Host_Grotesk = localFont({
  src: [
    {
      path: './typeface/variable/Host-Grotesk.woff2'
    },
    {
      path: './typeface/variable/Host-Grotesk.woff'
    }
  ],
  variable: '--font-host-grotesk',
  display: 'swap'
})

const Space_Grotesk = localFont({
  src: [
    {
      path: './typeface/variable/Space-Grotesk.woff2'
    },
    {
      path: './typeface/variable/Space-Grotesk.woff'
    }
  ],
  variable: '--font-space-grotesk',
  display: 'swap'
})

const Poppins = localFont({
  src: [
    {
      path: './typeface/static/Poppins-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-ExtraLight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-Black.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-Thin.woff',
      weight: '100',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-ExtraLight.woff',
      weight: '200',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-Medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-SemiBold.woff',
      weight: '600',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-Bold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-ExtraBold.woff',
      weight: '800',
      style: 'normal'
    },
    {
      path: './typeface/static/Poppins-Black.woff',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-poppins',
  display: 'swap'
})

const JetBrains_Mono = localFont({
  src: [
    {
      path: './typeface/variable/JetBrains-Mono.woff2'
    },
    {
      path: './typeface/variable/JetBrains-Mono.woff2'
    }
  ],
  variable: '--font-jetbrains-mono',
  display: 'swap'
})

export { Host_Grotesk, Space_Grotesk, Poppins, JetBrains_Mono }