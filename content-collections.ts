// import { defineCollection, defineConfig } from "@content-collections/core";
// import GithubSlugger from "github-slugger";
// // import { compileMarkdown } from "@content-collections/markdown";
// import { compileMDX } from "@content-collections/mdx";
// const changelogPost = defineCollection({
//   name: "changelogPost",
//   directory: "src/content/changelog",
//   include: "**/*.mdx",
//   schema: (z) => ({
//     title: z.string(),
//     summary: z.string(),
//     publishedAt: z.string(),
//     image: z.string().optional(),
//     author: z.string(),
//   }),
//   transform: async (post, context) => {
//     // const html = await compileMarkdown(context, post);
//     const mdx = await compileMDX(context, post);

//     return {
//       ...post,
//       type: 'ChangelogPost',
//       slug: post._meta.filePath.replace('.mdx', ''),
//       // html,
//       mdx
//     };
//   },
// });


// const HelpPost = defineCollection({
//   name: 'HelpPost',
//   directory: "src/content/help",
//   include: "**/*.mdx",
//   schema: (z) => ({
//     title: z.string(),
//     summary: z.string(),
//     updatedAt: z.string(),
//     author: z.string(),
//     categories: z.array(z.enum(['overview', 'getting-started', 'account', 'collection', 'page', 'role', 'team', 'plan', 'workspace'])),
//     related: z.array(z.string()).optional(),

//   }),
//   transform: async (post, context) => {
//     const headings = post.content.match(/^##\s.+/gm);
//     const slugger = new GithubSlugger();
//     // const html = await compileMarkdown(context, post);
//     const mdx = await compileMDX(context, post);
//     return {
//       ...post,
//       type: 'HelpPost',
//       slug: post._meta.filePath.replace('.mdx', ''),
//       images: post.content.match(/(?<=<Image[^>]*\bsrc=")[^"]+(?="[^>]*\/>)/g) || [],
//       tableOfContents: headings?.map((heading: any) => {
//         const title = heading.replace(/^##\s/, "");
//         return {
//           title,
//           slug: slugger.slug(title),
//         };
//       }) || [],
//       // html,
//       mdx,
//     };
//   },
//   parser: 'frontmatter',
//   onSuccess: (collection) => {
//     console.log(`Successfully loaded ${collection.length} help posts`);
//   },
//   typeName: 'HelpPost'
// });

// export default defineConfig({
//   collections: [changelogPost, HelpPost],
// });