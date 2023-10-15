/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Pingus Kasm',
    description: 'Another inofficial store for Kasm supported workspaces for my Private Project.',
    icon: '/img/logo.svg',
    listUrl: 'https://Palaptin.github.io//kasm-registry/',
    contactUrl: 'https://github.com/Palaptin/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
