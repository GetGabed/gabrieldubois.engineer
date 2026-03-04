import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/getgabed.github.io/gabrieldubois.engineer' : '',
  assetPrefix: isProd ? '/getgabed.github.io/gabrieldubois.engineer' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
