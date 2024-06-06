import { MaxWidthWrapper } from "@/components";
import Feedback from "@/components/feedback";
import Author from "@/components/ui/content/author";
import { HELP_CATEGORIES } from "@/lib/constants";
import { AllHelpPosts } from "@/lib/content";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { notFound } from "next/navigation";

export const runtime = "nodejs";

export async function generateStaticParams() {
  const allHelpPosts = await AllHelpPosts();
  return allHelpPosts.map((post) => ({
    slug: post.name,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const allHelpPosts = await AllHelpPosts();
  const post = allHelpPosts.find((post) => post.name === params.slug);
  if (!post) {
    return;
  }

  const { title, summary } = post.data;

  return constructMetadata({
    title: `${title} - Orgnise Help Center`,
    description: summary,
    image: `/api/og/help?title=${encodeURIComponent(
      title,
    )}&summary=${encodeURIComponent(summary)}`,
  });
}

export default async function HelpArticle({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const allHelpPosts = await AllHelpPosts();
  const article = allHelpPosts.find((article) => article.name === params.slug);
  if (!article) {
    notFound();
  }
  const mdxSource = await serialize(article.raw)
  const category = HELP_CATEGORIES.find(
    (category) => article.data.categories[0] === category.slug,
  )!;


  // const [images] = await Promise.all([
  //   await Promise.all(
  //     data.images.map(async (src: string) => ({
  //       src,
  //       blurDataURL: await getBlurDataURL(src),
  //     })),
  //   ),
  // ]);

  // const relatedArticles =
  //   ((data.related &&
  //     data.related
  //       .map((slug) => allHelpPosts.find((post) => post.slug === slug))
  //       .filter(Boolean)) as HelpPost[]) || [];

  return (
    <>
      <div className="min-h-[50vh] border-t border-border bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-lg">
        <MaxWidthWrapper className="grid max-w-screen-lg grid-cols-4 gap-10 px-2.5 py-10">
          <div className="col-span-4 flex flex-col space-y-8 sm:col-span-3 sm:pr-10">
            <div className="flex items-center space-x-2">
              <Link
                href="/help"
                className="whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-800"
              >
                All Categories
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <Link
                href={`/help/category/${category.slug}`}
                className="whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-800"
              >
                {category.title}
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <Link
                href={`/help/article/${article.name}`}
                className="truncate text-sm font-medium text-gray-500 hover:text-gray-800"
              >
                {article.data.title}
              </Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href={`/help/article/${article.name}`}>
                <h1 className="font-display text-3xl font-bold !leading-snug sm:text-4xl">
                  {article.data.title}
                </h1>
              </Link>
              <p className="text-gray-500">{article.data.summary}</p>
              <Author username={article.data.author} updatedAt={article.data.updatedAt} />
            </div>
            {/* <MDX code={data.body.code} images={images} /> */}
            {/* <MDX3
                mdxSource={mdxSource}
                className="mx-5 sm:prose-lg md:mx-0"
              /> */}
              <article
            data-mdx-container
            className="prose-headings:font-display prose prose-gray max-w-none transition-all prose-headings:relative prose-headings:scroll-mt-20 prose-headings:font-bold"
          >
              {article.content}
          </article>

            {/* {relatedArticles.length > 0 && (
              <div className="flex flex-col space-y-4 border-t border-gray-200 pt-8">
                <h2 className="font-display text-xl font-bold sm:text-2xl">
                  Related Articles
                </h2>
                <div className="grid gap-2 rounded-xl border border-gray-200 bg-white p-4">
                  {relatedArticles.map((article) => (
                    <HelpArticleLink key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            )} */}
            <Feedback />
          </div>
          {/* <div className="sticky top-20 col-span-1 hidden flex-col space-y-10 divide-y divide-border self-start sm:flex">
            {data.tableOfContents.length > 0 && (
              <TableOfContents items={data.tableOfContents} />
            )}
            <div className="flex justify-center pt-5">
              <Link
                href={`http://orgnise.in/contact`}
                rel="noopener noreferrer"
                className="text-xs text-gray-500 transition-colors hover:text-gray-800"
              >
                Have question? Contact us ↗
              </Link>
            </div>
          </div> */}
        </MaxWidthWrapper>
      </div>
    </>
  );
}
