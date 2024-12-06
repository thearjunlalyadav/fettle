module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  images: {
    disableStaticImages: true,  // Disable static image imports
    loader: 'imgix',            // Use an external image loader, which works with `next export`
    path: '',                   // Prevent the default Next.js image loader
  },
}
