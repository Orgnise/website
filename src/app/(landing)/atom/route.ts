import { allChangelogPosts } from "@/lib/content";

export async function GET() {
  const allPost = await allChangelogPosts();
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
        <title>Orgnise News</title>
        <subtitle>Orgnise's Blog and Changelog</subtitle>
        <link href="https://orgnise.in/atom" rel="self"/>
        <link href="https://orgnise.in/"/>
        <updated>${new Date().toISOString()}</updated>
        <id>https://orgnise.in/</id>${[...allPost]
      .sort((a, b) => b.data.publishedAt.localeCompare(a.data.publishedAt))
      .map((post) => {
        return `
        <entry>
            <id>https://orgnise.in/changelog"
          }/${post.name}</id>
            <title>${post.data.title}</title>
            <link href="https://orgnise.in/changelog"
          }/${post.name}"/>
            <updated>${post.data.publishedAt}</updated>
            <author><name>${post.data.author}</name></author>
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
