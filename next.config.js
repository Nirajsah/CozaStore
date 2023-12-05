/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 120,
  images: {
    domains: [
      'm.media-amazon.com',
      'store.storeimages.cdn-apple.com',
      'assets.adidas.com',
    ],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
