/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.holidify.com',
      },
      {
        protocol: 'https',
        hostname: 'www.travelstart.co.za',
      },
    ],
  },
};

module.exports = nextConfig;
