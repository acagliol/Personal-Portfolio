import type { NextConfig } from "next";

const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/backend/:path*',
        destination: `${apiBase}/api/v1/:path*`,
      },
    ]
  },
};

export default nextConfig;
