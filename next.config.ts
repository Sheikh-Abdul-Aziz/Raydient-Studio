/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Use SWC compiler for minification (faster builds)
  swcMinify: true,

  // ✅ React Strict Mode
  reactStrictMode: true,

  // ✅ Custom Image Domains (for next/image)
  images: {
    domains: ['raydientstudio.vercel.app'], // Add other image host domains if needed
  },

  // ✅ Internationalization (uncomment if using)
  // i18n: {
  //   locales: ['en', 'fr', 'de'],
  //   defaultLocale: 'en',
  // },

  // ✅ Experimental features (optional)
  experimental: {
    // Enable if using Turbopack in dev
    serverActions: true, // For RSC + form actions
    // turbo: true, // ⚠️ Deprecated, not needed anymore
  },

  // ✅ Optimize Fonts (optional)
  optimizeFonts: true,

  // ✅ Enable static export (if deploying as static site)
  // output: 'export',

  // ✅ Custom headers (optional)
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //       ],
  //     },
  //   ];
  // },

  // ✅ Webpack custom config (only if you need it)
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       fs: false,
  //       path: false,
  //     };
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;