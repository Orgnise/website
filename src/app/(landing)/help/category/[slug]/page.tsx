import { MaxWidthWrapper } from "@/components";
import HelpArticleLink from "@/components/ui/content/help-article-link";
import { HELP_CATEGORIES, POPULAR_ARTICLES } from "@/lib/constants";
import { AllHelpPosts } from "@/lib/content";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const runtime = "nodejs";

export async function generateStaticParams() {
  return HELP_CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const category = HELP_CATEGORIES.find(
    (category) => category.slug === params.slug,
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
  params: {
    slug: string;
  };
}) {
  const data = HELP_CATEGORIES.find(
    (category) => category.slug === params.slug,
  );
  if (!data) {
    notFound();
  }
  const allHelpPosts = await AllHelpPosts();
  
  const articles = allHelpPosts
    .filter((post) => post.data.categories.includes(data.slug))
    // order by POPULAR_ARTICLES
    .reduce(
      (acc, curr) => {
        if (POPULAR_ARTICLES.includes(curr.name)) {
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
            <Link
              href="/help"
              className="text-sm font-medium text-gray-500 hover:text-gray-800"
            >
              All Categories
            </Link>
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
                <HelpArticleLink key={article.name} article={{slug:article.name,title:article.data.title}} />
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
