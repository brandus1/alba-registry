/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Alba Hyperthermia',
    description: 'The official store for Alba supported workspaces.',
    icon: 'https://www.albahyperthermia.com/wp-content/uploads/2021/09/albahyperthermia_logo-white.png',
    listUrl: 'https://brandus1.github.io/alba-registry/',
    contactUrl: 'https://brandus1.github.io/alba-registry/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/alba-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
