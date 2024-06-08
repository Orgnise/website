import { defineDocumentType, makeSource } from "contentlayer/source-files";
import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { capitalize } from "./src/lib/functions/utils";

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `**/blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    seoTitle: {
      type: "string",
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    seoDescription: {
      type: "string",
    },
    image: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    categories: {
      type: "list",
      of: {
        type: "enum",
        options: ["company", "education"],
        default: "company",
      },
      required: true,
    },
    related: {
      type: "list",
      of: {
        type: "string",
      },
    },
  },
  // @ts-ignore
  computedFields: computedFields("blog"),
}));

export const ChangelogPost = defineDocumentType(() => ({
  name: "ChangelogPost",
  filePathPattern: `**/changelog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: false,
    },
    author: {
      type: "string",
      required: true,
    },
  },
  // @ts-ignore
  computedFields: computedFields("changelog"),
}));

export const HelpPost = defineDocumentType(() => ({
  name: "HelpPost",
  filePathPattern: `**/help/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    updatedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    categories: {
      type: "list",
      of: {
        type: "enum",
        options: [
          "account",
          "collection",
          "getting-started",
          "overview",
          "page",
          "role",
          "team",
          "plan",
          "workspace",
        ],
        default: "overview",
      },
      required: true,
    },
    related: {
      type: "list",
      of: {
        type: "string",
      },
    },
    excludeHeadingsFromSearch: {
      type: "boolean",
    },
  },
  // @ts-ignore
  computedFields: computedFields("help"),
}));

export const UseCasePost = defineDocumentType(() => ({
  name: "UseCasePost",
  filePathPattern: `**/use-cases/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: false,
    }
  },
  // @ts-ignore
  computedFields: computedFields("use-cases"),
}));


const computedFields = (type: "blog" | "changelog" | "help" | "use-cases") => ({
  slug: {
    type: "string",
    resolve: (doc: any) => doc._raw.flattenedPath.replace(`${type}/`, ""),
  },
  tableOfContents: {
    type: "array",
    resolve: (doc: any) => {
      // get all markdown heading 2 nodes (##)
      const headings = doc.body.raw.match(/^##\s.+/gm);
      const slugger = new GithubSlugger();
      return (
        headings?.map((heading: any) => {
          const title = heading.replace(/^##\s/, "");
          return {
            title,
            slug: slugger.slug(title),
          };
        }) || []
      );
    },
  },
  images: {
    type: "array",
    resolve: (doc: any) => {
      return (
        doc.body.raw.match(/(?<=<Image[^>]*\bsrc=")[^"]+(?="[^>]*\/>)/g) || []
      );
    },
  },
  tweetIds: {
    type: "array",
    resolve: (doc: any) => {
      const tweetMatches = doc.body.raw.match(/<Tweet\sid="[0-9]+"\s\/>/g);
      return tweetMatches?.map((tweet: any) => tweet.match(/[0-9]+/g)[0]) || [];
    },
  },
  githubRepos: {
    type: "array",
    resolve: (doc: any) => {
      // match all <GithubRepo url=""/> and extract the url
      return doc.body.raw.match(
        /(?<=<GithubRepo[^>]*\burl=")[^"]+(?="[^>]*\/>)/g,
      );
    },
  },
  structuredData: {
    type: "object",
    resolve: (doc: any) => ({
      "@context": "https://schema.org",
      "@type": `${capitalize(type)}Posting`,
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image,
      url: `https://orgnise.in/${doc._raw.flattenedPath}`,
      author: {
        "@type": "Person",
        name: doc.author,
      },
    }),
  },
});

export default makeSource({
  contentDirPath: "content",
  documentTypes: [BlogPost, ChangelogPost, HelpPost, UseCasePost],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      // [
      //   rehypePrettyCode,
      //   {
      //     theme: "one-dark-pro",
      //     onVisitLine(node:any) {
      //       // Prevent lines from collapsing in `display: grid` mode, and allow empty
      //       // lines to be copy/pasted
      //       if (node.children.length === 0) {
      //         node.children = [{ type: "text", value: " " }];
      //       }
      //     },
      //     onVisitHighlightedLine(node:any) {
      //       node.properties.className.push("line--highlighted");
      //     },
      //     onVisitHighlightedWord(node:any) {
      //       node.properties.className = ["word--highlighted"];
      //     },
      //   },
      // ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
            "data-mdx-heading": "",
          },
        },
      ],
    ],
  },
});
