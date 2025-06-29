/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enables static exports
  images: {
    unoptimized: true, // For static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/panel' : '',  // Set base path for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/panel/' : '',  // Assets prefix for GitHub Pages
  distDir: '.next', // Use the default directory
}

module.exports = nextConfig
