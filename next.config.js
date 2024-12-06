module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  images: {
    unoptimized: true, // Disable the image optimization API for static export
  },
}
