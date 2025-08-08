import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raydientstudio.vercel.app'],
  },
  experimental: {
    serverActions: {},
  },
};

export default nextConfig;