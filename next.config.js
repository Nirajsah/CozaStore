/** @type {import('next').NextConfig} */

module.exports = {
  staticPageGenerationTimeout: 120,
  images: {
    domains: [
      'm.media-amazon.com',
      'store.storeimages.cdn-apple.com',
      'assets.adidas.com',
      'res.cloudinary.com',
      'dl.dropboxusercontent.com',
    ],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/login',
        headers: [
          {
            key: 'X-Middleware-Test',
            value: 'middleware-test-header',
          },
        ],
      },
    ]
  },
}
