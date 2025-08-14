import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Raydient Studio',
        short_name: 'Raydient',
        description: 'Premium Web Design Agency - Your Strategic Design Partner for AI, SaaS, Tech, and Startups.',
        start_url: '/',
        display: 'standalone',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon'
            },
            {
                src: '/android-chrome-192x192',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/android-chrome-512x512',
                sizes: '512x512',
                type: 'image/png'
            }
        ]
    }
}