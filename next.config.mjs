/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "31.128.44.221",
        port: "8000",
        pathname: "/media/product/**",
      },
    ],
  },
};

export default nextConfig;
