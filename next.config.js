/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'cloudinary',
    path: 'https://asset.cloudinary.com/dq1ki8nxq/',
  }
}

module.exports = nextConfig
