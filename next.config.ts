import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    images: {
        unoptimized: true, // Required for static export if using <Image />
    },
};

export default nextConfig;
