/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/cocina-express' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cocina-express/' : '',
}

module.exports = nextConfig
