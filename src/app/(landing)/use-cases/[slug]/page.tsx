import { MaxWidthWrapper } from "@/components";
import { TableOfContents } from "@/components/";
import Feedback from "@/components/feedback";
import { MDX } from "@/components/ui/content/mdx";
import { getBlurDataURL } from "@/lib/functions";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { allUseCasePosts } from "contentlayer/generated";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allUseCasePosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allUseCasePosts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, summary } = post;

  return constructMetadata({
    title: `${title} - Orgnise Use Cases`,
    description: summary,
    image: `/api/og?title=${encodeURIComponent(
      title,
    )}&summary=${encodeURIComponent(summary)}`,
  });
}

export default async function UseCase({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const data = allUseCasePosts.find((post) => post.slug === params.slug);
  if (!data) {
    notFound();
  }
  
  const [images] = await Promise.all([
    await Promise.all(
      data.images.map(async (src: string) => ({
        src,
        blurDataURL: await getBlurDataURL(src),
      })),
    ),
  ]);


  return (
    <>
      <div className="min-h-[50vh] border-t border-border bg-gradient-to-b from-background/40 to-background/20 backdrop-blur-lg">
        <MaxWidthWrapper className="grid max-w-screen-lg  px-2.5 py-10">
          <div className="col-span-4 flex flex-col space-y-8  sm:pr-10">
            <div className="flex items-center space-x-2">
              <Link
                href="/use-cases"
                className="whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-800"
              >
                All Use-cases
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <Link
                href={`/help/article/${data.slug}`}
                className="truncate text-sm font-medium text-gray-500 hover:text-gray-800"
              >
                {data.title}
              </Link>
            </div>
            <MDX code={data.body.code} images={images} />
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
