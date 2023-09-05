/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'bamtests kasm registry',
    description: '3rd party registry adding some common applications',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/bamtests/kasm-registry/',
    contactUrl: 'https://github.com/bamtests/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
