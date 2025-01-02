/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true, // تفعيل ميزة Server Actions
    },
    // إذا كنت بحاجة إلى تحميل صور من مصدر خارجي مثل Unsplash
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: "https",
    //       hostname: "images.unsplash.com",
    //     },
    //   ],
    // },
  };
  
  export default nextConfig;
  