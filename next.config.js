/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: false,
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
