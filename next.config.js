/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://portfolio-smoky-mu.vercel.app/"],
  },
};

module.exports = nextConfig;
