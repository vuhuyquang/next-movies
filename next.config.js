/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  poweredByHeader: false,
  distDir: 'dist',
  reactStrictMode: true,
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
      preventFullImport: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.ophim.live',
      },
    ]
  }
};
