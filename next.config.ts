import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "ftcnmcdfcyvzpscglpby.supabase.co",
                pathname: "/storage/v1/object/public/avatars/**",
            },
            {
                protocol: "https",
                hostname: "picsum.photos",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            // Added api.microlink.io for link preview functionality
            {
                protocol: "https",
                hostname: "api.microlink.io",
            },
        ],
        qualities: [25, 50, 75, 100],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 75, 96, 128, 256, 384],
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 3600,
},
};
module.exports = withBundleAnalyzer(nextConfig);