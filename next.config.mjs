// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/master/' : '',
  basePath: isProd ? '/master' : '',
  output: 'export'
};

export default nextConfig;