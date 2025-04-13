import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // If you're deploying to a subpath like /web-portfolio, set the basePath:
  basePath: '/web-portfolio',

  // This is optional: Enables automatic image optimization for images served from a domain
  images: {
    loader: 'imgix', // or 'akamai', 'cloudinary', 'custom'
    path: '',
  },

  // Enables React Strict Mode
  reactStrictMode: true,
};

export default nextConfig;
