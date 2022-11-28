/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: isProd ? '/hudsonbassocom/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
