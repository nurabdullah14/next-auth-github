// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? 'next-auth-github' : '',
  basePath: isProd ? 'next-auth-github' : '',
  output: 'export'
};

export default nextConfig;