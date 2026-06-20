import type { NextConfig } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://flowrix-solutions.com";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
