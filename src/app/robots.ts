import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  let domain = "orgnise.in";

  return {
    rules: {
      userAgent: "*",
      disallow: "/api/",
      allow: "/api/og/*",
    },
    sitemap: `https://${domain}/sitemap.xml`,
  };
}
