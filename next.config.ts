import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'undraw.co',
        port: '',
        pathname: '/api/illustrations/**', 
      },
      
    ],
  },
};

export default nextConfig;
