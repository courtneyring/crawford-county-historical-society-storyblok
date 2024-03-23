/** @type {import('next').NextConfig} */
const env = process.env.NODE_ENV;
const nextConfig = env == "development" ? {} : {
  output: 'export',
  basePath: '/crawford-county-historical-society',
  images: {
    unoptimized: true
  }
};

export default nextConfig;