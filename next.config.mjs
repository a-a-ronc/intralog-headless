/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.WP_MEDIA_HOST || '**',
      }
    ]
  },
  experimental: {
    typedRoutes: true
  }
}
export default nextConfig
