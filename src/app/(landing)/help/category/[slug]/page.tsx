import { notFound } from "next/navigation";
import { allHelpPosts } from "contentlayer/generated";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import { HELP_CATEGORIES, POPULAR_ARTICLES } from "@/lib/constants";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { MaxWidthWrapper } from "@/components";
import HelpArticleLink from "@/components/ui/content/help-article-link";
import { ClientLink } from "@/components/client-link";

export async function generateStaticParams() {
  return HELP_CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const category = HELP_CATEGORIES.find(
    (category) => category.slug === slug,
  );
  if (!category) {
    return;
  }

  const { title, description } = category;

  return constructMetadata({
    title: `${title}  Orgnise Help Center`,
    description,
    image: `/api/og/help?title=${encodeURIComponent(
      title,
    )}&summary=${encodeURIComponent(description)}`,
  });
}

export default async function HelpCategory({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const data = HELP_CATEGORIES.find(
    (category) => category.slug === slug,
  );
  if (!data) {
    notFound();
  }
  const articles = allHelpPosts
    .filter((post) => post.categories.includes(data.slug))
    // order by POPULAR_ARTICLES
    .reduce(
      (acc, curr) => {
        if (POPULAR_ARTICLES.includes(curr.slug)) {
          acc.unshift(curr);
        } else {
          acc.push(curr);
        }
        return acc;
      },
      [] as typeof allHelpPosts,
    );

  return (
    <>
      <div className="from-bg-background min-h-[50vh] border-t border-border bg-gradient-to-b to-transparent backdrop-blur-lg">
        <MaxWidthWrapper className="flex max-w-screen-lg flex-col py-10">
          <div className="flex items-center space-x-2">
            <ClientLink
              href="/help"
              className="text-sm font-medium text-gray-500 hover:text-gray-800"
              trackEvent={{
                event: "help-all-categories-clicked",
                data: {
                  origin: "Help Article page",
                  href: "/help",
                  cta: "All Categories",
                },
              }}
            >
              All Categories
            </ClientLink>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link
              href={`/help/category/${data.slug}`}
              className="text-sm font-medium text-gray-500 hover:text-gray-800"
            >
              {data.title}
            </Link>
          </div>
          <div className="my-8 flex flex-col space-y-4">
            <Link href={`/help/category/${data.slug}`}>
              <h1 className="font-display text-2xl font-bold sm:text-4xl">
                {data.title}
              </h1>
            </Link>
            <p className="text-gray-500">{data.description}</p>
          </div>
          {articles.length > 0 ? (
            <div className="grid gap-2 rounded-xl border border-gray-200 bg-background p-4">
              {articles.map((article) => (
                <HelpArticleLink
                  key={article.slug}
                  article={article}
                  trackEvent={{
                    event: `help-article-${article.slug}-clicked` as any,
                    data: {
                      title: article.title,
                      path: `/help/article/${article.slug}`,
                      origin: "Help Category page",
                    },
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="w-full border-t py-6">
              <p className="text-gray-500">No articles found</p>
            </div>
          )}
        </MaxWidthWrapper>
      </div>
    </>
  );
}
