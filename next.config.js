module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  images: {
    unoptimized: true,  // Disable Next.js image optimization
    disableStaticImages: true,  // Disable static image imports (if needed)
  },
}
