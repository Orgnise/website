const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  images: {
    remotePatterns: [
      {
        hostname: "www.google.com",
      },
      {
        hostname: "api.dicebear.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "pbs.twimg.com",
      },
      {
        hostname: "orgnise.in",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = withMDX(nextConfig);
