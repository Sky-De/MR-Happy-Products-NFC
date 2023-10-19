/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // change this to cloudinary url
    domains: ["picsum.photos", "fastly.picsum.photos", "res.cloudinary"],
  },
};

module.exports = nextConfig;
