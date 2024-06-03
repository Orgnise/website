import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { MaxWidthWrapper, TwitterIcon } from "@/components";
import { formatDate } from "@/lib/functions/utils";
import BlurImage from "@/components/blur-image";
import Author from "@/components/ui/content/author";
import { getBlurDataURL } from "@/lib/functions";
import Facebook from "@/components/icons/facebook";
import Linkedin from "@/components/icons/linkedin";
import ZoomImage from "@/components/ui/content/zoom-image";
import { allChangelogPosts, allHelpPosts } from "contentlayer/generated";
import { MDX } from "@/components/ui/content/mdx";

export async function generateStaticParams() {
  return allChangelogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allChangelogPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, summary: description, image } = post;

  return constructMetadata({
    title,
    description,
    image,
  });
}

export default async function ChangelogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = allChangelogPosts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-[50vh] border-t border-border bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-lg">
      <MaxWidthWrapper className="my-20 grid px-0 md:grid-cols-4">
        <div className="sticky top-20 hidden self-start md:col-span-1 md:block">
          <Link
            href="/changelog"
            className="text-sm text-gray-500 transition-colors hover:text-gray-800"
          >
            ← Back to Changelog
          </Link>
        </div>
        <div className="flex flex-col space-y-8 md:col-span-3">
          <div className="mx-5 grid gap-5 md:mx-0">
            <div className="flex flex-col">
              <Link
                href="/changelog"
                className="my-5 text-sm text-gray-500 md:hidden"
              >
                ← Back to Changelog
              </Link>
              <time
                dateTime={post.publishedAt}
                className="flex items-center text-sm text-gray-500 md:text-base"
              >
                {formatDate(post.publishedAt)}
              </time>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              {post.title}
            </h1>
          </div>
          {post.image && (
            <ZoomImage
              src={post.image}
              alt={""}
              disableBlur={true}
              width={1200}
              height={630}
              priority={true} // since it's above the fold
              placeholder="blur"
              blurDataURL={await getBlurDataURL(post.image!)}
              className="aspect-video w-full rounded-lg border border-gray-100 object-cover md:rounded-2xl"
              zoomContainerClass="overflow-hidden rounded-xl border border-border bg-gray-50/50 p-2 md:rounded-2xl"
              unoptimized
            />
          )}
          <div className="mx-5 mb-10 flex items-center justify-between md:mx-0">
            <Author username={post.author} />
            <div className="flex items-center space-x-6">
              <Link
                href={`https://twitter.com/intent/tweet?text=${post.title}&url=https://orgnise.in/changelog/${post.slug}&via=${post.author}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110"
              >
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link
                href={`
            http://www.linkedin.com/shareArticle?mini=true&url=https://orgnise.in/changelog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110"
              >
                <Linkedin className="h-6 w-6" fill="black" />
              </Link>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=https://orgnise.in/changelog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110"
              >
                <Facebook className="h-6 w-6" fill="black" />
              </Link>
            </div>
          </div>
          <MDX code={post.body.code} className="mx-5 sm:prose-lg md:mx-0" />
          {/* {post.content} */}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
