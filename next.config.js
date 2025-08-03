/** @type {import('next').NextConfig} */
const nextConfig = {
  // This object configures the next/image component.
  // We need to add the domain "placehold.co" so that Next.js knows it is a trusted source.
  images: {
    domains: ["placehold.co"],
  },
};

module.exports = nextConfig;
