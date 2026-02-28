import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com"
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
                pathname: "/uploads/**"
            },
            {
                protocol: "https",
                hostname: "typical-fitness-9a80421713.media.strapiapp.com"
            }
        ],
        dangerouslyAllowLocalIP: true
    }
};

export default nextConfig;
