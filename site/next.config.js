/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Pingus Kasm',
    description: 'Another inofficial store for Kasm supported workspaces for my Private Project.',
    icon: '/img/logo.svg',
    listUrl: 'https://palaptin.github.io/kasm-registry/',
    contactUrl: 'https://github.com/palaptin/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
