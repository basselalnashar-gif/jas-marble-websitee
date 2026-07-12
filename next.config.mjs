/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/applications/kitchen-countertops",
        destination: "/applications/vanity-counters",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
