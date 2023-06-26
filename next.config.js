/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['antd', 'zustand', '@ant-design/icons'],
  swcMinify: true,
}

module.exports = nextConfig
