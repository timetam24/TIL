/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "placedog.net",
      },
    ],
  },
};

export default nextConfig;
