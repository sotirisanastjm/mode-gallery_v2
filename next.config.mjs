/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "placehold.co",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
    webpack: (config, { isServer }) => {
        // Suppress watchpack warnings for Windows system files
        config.watchOptions = {
            ...config.watchOptions,
            ignored: [
                "**/node_modules/**",
                "**/.git/**",
                "**/pagefile.sys",
                "**/hiberfil.sys",
                "**/swapfile.sys",
                "**/DumpStack.log.tmp",
            ],
        };
        return config;
    },
};

export default nextConfig;
