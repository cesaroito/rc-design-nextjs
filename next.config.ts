import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite imagens do Sanity CDN e AWS S3
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // Headers de segurança
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Redireciona www para apex
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rcdesign.com.br" }],
        destination: "https://rcdesign.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
