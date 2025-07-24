import type { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/eozdq10hr/images/**',
        search: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/categories',
        destination: 'http://pizzahutapi.atwebpages.com/categories.php',
      },
      {
        source: '/api/products',
        destination: 'http://pizzahutapi.atwebpages.com/',
      },
    ]
  },

}
 
export default config