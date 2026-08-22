const nextMDX = require("@next/mdx");
const { withContentlayer } = require("next-contentlayer2");

// const rehypePrettyCode = require("rehype-pretty-code");

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
};

const withMDX = nextMDX({
  reactStrictMode: true,
  swcMinify: true,
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
  },
});

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

module.exports = withContentlayer(withMDX(nextConfig));
