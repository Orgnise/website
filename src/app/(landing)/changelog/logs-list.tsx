import { ClientLink } from "@/components/client-link";
import { MDX } from "@/components/ui/content/mdx";
import ZoomImage from "@/components/ui/content/zoom-image";
import { getBlurDataURL } from "@/lib/functions";
import { formatDate } from "@/lib/functions/utils";
import { allChangelogPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export default function ChangelogLogsList() {
  return (
    <div className="allChangelogPosts divide-y divide-gray-200">
      {allChangelogPosts
        .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
        .map((post, idx) => (
          <div key={idx} className="grid py-20 md:grid-cols-4 md:px-5 xl:px-0">
            <div className="sticky top-20 hidden self-start md:col-span-1 md:block">
              <ClientLink
                href={`/changelog/${post.slug}`}
                trackEvent={{
                  event: "changelog-article-clicked",
                  data: {
                    title: post.title,
                    path: `/changelog/${post.slug}`,
                    origin: "Changelog page",
                    source: "time",
                  },
                }}
              >
                <time
                  dateTime={post.publishedAt}
                  className="text-gray-500 transition-colors hover:text-gray-800"
                >
                  {formatDate(post.publishedAt)}
                </time>
              </ClientLink>
            </div>
            <div className="flex flex-col gap-6 md:col-span-3">
              {post.image && (
                <ClientLink
                  href={`/changelog/${post.slug}`}
                  className="overflow-hidden rounded-xl border border-border bg-gray-50/50 p-2 md:rounded-2xl"
                  trackEvent={{
                    event: "changelog-article-clicked",
                    data: {
                      title: post.title,
                      path: `/changelog/${post.slug}`,
                      origin: "Changelog page",
                      source: "banner-image",
                    },
                  }}
                >
                  <Image
                    src={post.image}
                    alt={""}
                    width={1200}
                    height={630}
                    priority={idx === 0} // since it's above the fold
                    className="aspect-video border border-gray-100 object-cover md:rounded-2xl"
                    unoptimized
                  />
                </ClientLink>
              )}
              <ClientLink
                href={`/changelog/${post.slug}`}
                className="group mx-5 flex items-center space-x-3 md:mx-0"
                trackEvent={{
                  event: "changelog-article-clicked",
                  data: {
                    title: post.title,
                    path: `/changelog/${post.slug}`,
                    origin: "Changelog page",
                    source: "title",
                  },
                }}
              >
                <time
                  dateTime={post.publishedAt}
                  className="text-sm text-gray-500 transition-all group-hover:text-gray-800 md:hidden"
                >
                  {formatDate(post.publishedAt)}
                </time>
              </ClientLink>
              <Link href={`/changelog/${post.slug}`} className="mx-5 md:mx-0">
                <h2 className="font-display text-3xl font-bold tracking-tight text-gray-800 hover:underline hover:decoration-1 hover:underline-offset-4 md:text-4xl">
                  {post.title}
                </h2>
              </Link>
              <MDX code={post.body.code} className="mx-5 sm:prose-lg md:mx-0" />
            </div>
          </div>
        ))}
    </div>
  );
}
