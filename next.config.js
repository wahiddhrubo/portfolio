/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "a0.muscache.com",
      "firebasestorage.googleapis.com",
      "avatars.dicebear.com",
    ],
  },
};

module.exports = nextConfig;
