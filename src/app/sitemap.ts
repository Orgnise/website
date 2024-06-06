import { allChangelogPosts } from "@/lib/content";

const sitemap = async () => {
  const origin = "https://makersleague.de";
  const buildUrl = (path: string) => `${origin}${path}`;

  const pages = [
    "/",
    "/ueber",
    "/events",
    "/mitglied-werden",
    "/mitglied-werden/bewerbung",
    "/einblicke",
    "/mitglieder",
    "/faqs",
    "/impressum",
    "/datenschutzerklaerung",
  ];

  const allChangeLogPost = await allChangelogPosts();

  allChangeLogPost.forEach((blogPost) => {
    pages.push(`/einblicke/${blogPost.name}`);
  });



  return pages.map((page) => ({
    url: buildUrl(page),
    lastModified: new Date(),
  }));
};

export default sitemap;