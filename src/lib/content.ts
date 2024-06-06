import { MdxComponents } from "@/components/ui/content/mdx";
import { readFile, readdir } from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { cache } from "react";
import { z } from "zod";
import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const CONTENT_PATH = ["content"] as const;
const FILE_EXTENSIONS = [".md", ".mdx"] as const;

const frontmatterSchemas = {
  page: z.object({
    title: z.string(),
  }),
  changelog: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.string(),
    image: z.string().optional(),
    author: z.string(),
  }),
  help: z.object({
    title: z.string(),
    summary: z.string(),
    updatedAt: z.string(),
    author: z.string(),
    categories: z.array(
      z.enum([
        "overview",
        "getting-started",
        "account",
        "collection",
        "page",
        "role",
        "team",
        "plan",
        "workspace",
      ]),
    ),
    related: z.array(z.string()).optional(),
  }),
};

type ContentType = keyof typeof frontmatterSchemas;

/**
 * Retrieves content of a specific type and name.
 * @param type The type of content.
 * @param name The name of the content.
 * @returns An object containing the name, parsed frontmatter, content, and raw file data.
 * @throws Error if no content file is found for the specified type and name.
 */

const getContent = async <Type extends ContentType>(
  type: Type,
  name: string,
) => {
  const dirName = name;

  // Get file name for content file
  const dirPath = path.join(process.cwd(), ...CONTENT_PATH, type, dirName);

  const fileNames = await readdir(dirPath);
  const fileName = fileNames.find((name) =>
    FILE_EXTENSIONS.some((extention) => path.extname(name) === extention),
  );
  if (!fileName) {
    throw new Error(`No content file found for ${type}/${dirName}`);
  }

  // Read file and compile MDX
  const filePath = path.join(
    process.cwd(),
    ...CONTENT_PATH,
    type,
    dirName,
    fileName,
  );
  const file = await readFile(filePath, "utf8");
  const { content, frontmatter } = await compileMDX({
    source: file,
    components: MdxComponents,
    options: {
      parseFrontmatter: true, mdxOptions: {
        remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
              "data-mdx-heading": "",
            },
          },
        ],]
      },
    }
  });

  // Parse frontmatter
  const parsedFrontmatter = frontmatterSchemas[type].parse(
    frontmatter,
  ) as z.output<(typeof frontmatterSchemas)[Type]>;

  return {
    name: dirName,
    data: parsedFrontmatter,
    content,
    raw: file,
  };
};

/**
 * Retrieves all content of a specific type.
 *
 * @param type The type of content to retrieve.
 * @returns A promise that resolves to an array of content items.
 */

const getAllContent = async <Type extends ContentType>(type: Type) => {
  // Get content names
  const dirPath = path.join(process.cwd(), ...CONTENT_PATH, type);
  const dirNames = await readdir(dirPath);

  return await Promise.all(
    dirNames.map(async (name) => {
      return await getContent(type, name.replace(/\.mdx?$/, ""));
    }),
  );
};

const getContentCached = cache(getContent);
const getAllContentCached = cache(getAllContent);

export { getAllContentCached as getAllContent, getContentCached as getContent };

// Page

export const getPage = async (name: string) => {
  return await getContent("page", name);
};

// Blog

export type ChangeLog = Awaited<ReturnType<typeof getContent<"changelog">>>;

const enhanceChangeLog = (changeLog: ChangeLog) => {
  return {
    ...changeLog,
    data: {
      ...changeLog.data,
      // readingTime: `${Math.ceil(readingTime(changeLog.raw).minutes)} min`,
      // publishedAtFormatted: format(
      //   parseISO(blog.data.publishedAt),
      //   "dd. MMM yyyy",
      //   {
      //     locale: de,
      //   },
      // ),
    },
  };
};

export const getChangelog = async (name: string) => {
  const content = await getContent("changelog", name);
  return enhanceChangeLog(content);
};

export const allChangelogPosts = async () => {
  const allChangeLogPost = await getAllContent("changelog");
  return allChangeLogPost.map(enhanceChangeLog);
};

// Testimonials

export const AllHelpPosts = async () => {
  const helpPosts = await getAllContent("help");
  return helpPosts.sort(
    (a, b) =>
      new Date(b.data.updatedAt).getTime() -
      new Date(a.data.updatedAt).getTime(),
  );
};
