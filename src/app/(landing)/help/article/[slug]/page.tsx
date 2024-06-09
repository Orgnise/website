import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { HELP_CATEGORIES } from "@/lib/constants";
import { getBlurDataURL } from "@/lib/functions";
import { MaxWidthWrapper } from "@/components";
import HelpArticleLink from "@/components/ui/content/help-article-link";
import { TableOfContents } from "@/components/";
import Feedback from "@/components/feedback";
import Author from "@/components/ui/content/author";
import { HelpPost, allHelpPosts } from "contentlayer/generated";
import { MDX } from "@/components/ui/content/mdx";
import { ClientLink } from "@/components/client-link";

export async function generateStaticParams() {
  return allHelpPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allHelpPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, summary } = post;

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
  const data = allHelpPosts.find((post) => post.slug === params.slug);
  if (!data) {
    notFound();
  }
  const category = HELP_CATEGORIES.find(
    (category) => data.categories[0] === category.slug,
  )!;

  const [images] = await Promise.all([
    await Promise.all(
      data.images.map(async (src: string) => ({
        src,
        blurDataURL: await getBlurDataURL(src),
      })),
    ),
  ]);

  const relatedArticles =
    ((data.related &&
      data.related
        .map((slug) => allHelpPosts.find((post) => post.slug === slug))
        .filter(Boolean)) as HelpPost[]) || [];

  return (
    <>
      <div className="min-h-[50vh] border-t border-border bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-lg">
        <MaxWidthWrapper className="grid max-w-screen-lg grid-cols-4 gap-10 px-2.5 py-10">
          <div className="col-span-4 flex flex-col space-y-8 sm:col-span-3 sm:pr-10">
            <div className="flex items-center space-x-2">
              <ClientLink
                href="/help"
                className="whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-800"
                trackEvent={{
                  event: "help-all-categories-clicked",
                  data: {
                    href: "/help",
                    cta: "All Categories",
                    origin: "Help Article page",
                  },
                }}
              >
                All Categories
              </ClientLink>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <ClientLink
                href={`/help/category/${category.slug}`}
                className="whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-800"
                trackEvent={{
                  event: "help-sub-categories-clicked",
                  data: {
                    href: `/help/category/${category.slug}`,
                    cta: category.slug,
                    origin: "Help Article page",
                  },
                }}
              >
                {category.title}
              </ClientLink>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <ClientLink
                href={`/help/article/${data.slug}`}
                className="truncate text-sm font-medium text-gray-500 hover:text-gray-800"
              >
                {data.title}
              </ClientLink>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="font-display text-3xl font-bold !leading-snug sm:text-4xl">
                {data.title}
              </h1>
              <p className="text-gray-500">{data.summary}</p>
              <Author username={data.author} updatedAt={data.updatedAt} />
            </div>
            <MDX code={data.body.code} images={images} />
            {relatedArticles.length > 0 && (
              <div className="flex flex-col space-y-4 border-t border-gray-200 pt-8">
                <h2 className="font-display text-xl font-bold sm:text-2xl">
                  Related Articles
                </h2>
                <div className="grid gap-2 rounded-xl border border-gray-200 bg-white p-4">
                  {relatedArticles.map((article) => (
                    <HelpArticleLink
                      key={article.slug}
                      article={article}
                      trackEvent={{
                        event: `help-article-${article.slug}-clicked` as any,
                        data: {
                          title: article.title,
                          path: `/help/article/${article.slug}`,
                          origin: "Help Article page",
                        },
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <Feedback />
          </div>
          <div className="sticky top-20 col-span-1 hidden flex-col space-y-10 divide-y divide-border self-start sm:flex">
            {data.tableOfContents.length > 0 && (
              <TableOfContents items={data.tableOfContents} />
            )}
            <div className="flex justify-center pt-5">
              <ClientLink
                href={`http://orgnise.in/contact`}
                rel="noopener noreferrer"
                className="text-xs text-gray-500 transition-colors hover:text-gray-800"
                trackEvent={{
                  event: "help-article-contact-us-link-clicked",
                  data: {
                    title: data.title,
                    path: `/help/article/${data.slug}`,
                    origin: "Help Article page",
                    source: "contact-us-cta",
                  },
                }}
              >
                Have question? Contact us ↗
              </ClientLink>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
