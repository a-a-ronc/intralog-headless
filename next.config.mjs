/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // If you ever link to brand assets hosted elsewhere, list them here
    remotePatterns: [
      { protocol: 'https', hostname: 'upload.wikimedia.org' },   // Wikimedia SVGs
      { protocol: 'https', hostname: 'companieslogo.com' },      // example mirrors
      // { protocol: 'https', hostname: process.env.WP_MEDIA_HOST }, // your WP media (static at build)
    ],
  },
};
export default nextConfig;
