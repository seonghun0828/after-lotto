import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/landing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
