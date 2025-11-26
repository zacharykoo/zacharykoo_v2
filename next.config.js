/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export', // tells Next.js to generate static HTML
  basePath: isProd ? '/zacharykoo_v2' : '', // project repo name
  assetPrefix: isProd ? '/zacharykoo_v2/' : '', // ensures assets load correctly
  images: {
    unoptimized: true, // disable server-side image optimization
  },
}

module.exports = nextConfig
