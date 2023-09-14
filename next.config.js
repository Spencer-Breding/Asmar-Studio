/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your image configuration here
  images: {
    unoptimized: true,
    path: "/",
  },
  output: 'export',
};

module.exports = nextConfig;