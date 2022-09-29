/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DOMAIN_NAME: process.env.NEXT_PUBLIC_DOMAIN_NAME,
  },
};

module.exports = nextConfig;
