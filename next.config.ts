import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jmvinter.org',
      },
    ]
  }
};

export default nextConfig;
