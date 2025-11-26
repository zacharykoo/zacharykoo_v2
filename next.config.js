/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: '/zacharykoo_v2',
  assetPrefix: '/zacharykoo_v2/',
  images: { unoptimized: true },
};

module.exports = nextConfig
