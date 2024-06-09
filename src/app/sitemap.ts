import { MetadataRoute } from "next";
import {
  allUseCasePosts,
  allChangelogPosts,
  allHelpPosts,
} from "contentlayer/generated";
import { HELP_CATEGORIES } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let domain = "orgnise.in";

  return [
    {
      url: `https://${domain}`,
      lastModified: new Date(),
    },
    {
      url: `https://${domain}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `https://${domain}/enterprise`,
      lastModified: new Date(),
    },
    {
      url: `https://${domain}/contact`,
      lastModified: new Date(),
    },
    {
      url: `https://${domain}/about`,
      lastModified: new Date(),
    },
    {
      url: `https://${domain}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `https://${domain}/terms`,
      lastModified: new Date(),
    },
    {
      url: `https://${domain}/usecases`,
      lastModified: new Date(),
    },
    ...allUseCasePosts.map((post) => ({
      url: `https://${domain}/use-cases/${post.slug}`,
      lastModified: new Date(post.updatedAt),
    })),
    {
      url: `https://${domain}/help`,
      lastModified: new Date(),
    },
    ...HELP_CATEGORIES.map((category) => ({
      url: `https://${domain}/help/category/${category.slug}`,
      lastModified: new Date(),
    })),
    ...allHelpPosts.map((post) => ({
      url: `https://${domain}/help/article/${post.slug}`,
      lastModified: new Date(post.updatedAt),
    })),
    {
      url: `https://${domain}/changelog`,
      lastModified: new Date(),
    },
    ...allChangelogPosts.map((post) => ({
      url: `https://${domain}/changelog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
    })),
  ];
}
