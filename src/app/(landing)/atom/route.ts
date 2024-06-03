import { allChangelogPosts, allHelpPosts } from "contentlayer/generated";

export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
        <title>Orgnise News</title>
        <subtitle>Orgnise's Blog and Changelog</subtitle>
        <link href="https://orgnise.in/atom" rel="self"/>
        <link href="https://orgnise.in/"/>
        <updated>${new Date().toISOString()}</updated>
        <id>https://orgnise.in/</id>${[...allChangelogPosts]
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
      .map((post) => {
        return `
        <entry>
            <id>https://orgnise.in/changelog"
          }/${post.slug}</id>
            <title>${post.title}</title>
            <link href="https://orgnise.in/changelog"
          }/${post.slug}"/>
            <updated>${post.publishedAt}</updated>
            <author><name>${post.author}</name></author>
        </entry>`;
      })
      .join("")}
    </feed>`,
    {
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    },
  );
}
