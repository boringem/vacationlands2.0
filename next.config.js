/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://asset.cloudinary.com/dq1ki8nxq/c5bc9ae863d3dc355c92085c5b3cd6c9', 'https://asset.cloudinary.com/dq1ki8nxq/4d513dd4f7772af87b4e8824c79d75b5', 'https://asset.cloudinary.com/dq1ki8nxq/dd295f1f9899f654896f1a864aeb6f1f', 'https://asset.cloudinary.com/dq1ki8nxq/39c506101f40c4be704c76639be40ed4', 'https://asset.cloudinary.com/dq1ki8nxq/4de2488ec4cb16352ce3086c924dce05', 'https://asset.cloudinary.com/dq1ki8nxq/37c70bcd79a12f3f79e33bd44f0cc4f0', 'https://asset.cloudinary.com/dq1ki8nxq/0ef03729c7a25a588adc9624d27a1dc6']
  }
}

module.exports = nextConfig
