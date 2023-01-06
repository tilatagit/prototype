/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports =   nextConfig ;
