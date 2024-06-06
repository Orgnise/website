import { MDX } from "@/components/ui/content";
import MDX2 from "@/components/ui/content/mdx2";
import MDX3 from "@/components/ui/content/mdx3";
import { ChangeLog, allChangelogPosts } from "@/lib/content";
import { formatDate } from "@/lib/functions/utils";
import { inter } from "@/styles/font";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  allChangeLogPost: ChangeLog[];
}

export default async function ChangelogLogsList({ allChangeLogPost }: Props) {
  // const allChangeLogPost = await allChangelogPosts();

  return (
    <div className="allChangelogPosts divide-y divide-gray-200">
      {allChangeLogPost
        .sort((a, b) => b.data.publishedAt.localeCompare(a.data.publishedAt))
        .map(async(post, idx) => {
          const mdxSource = await serialize(post.raw)
          return (<div key={idx} className="grid py-20 md:grid-cols-4 md:px-5 xl:px-0">
            <div className="sticky top-20 hidden self-start md:col-span-1 md:block">
              <Link href={`/changelog/${post.name}`}>
                <time
                  dateTime={post.data.publishedAt}
                  className="text-gray-500 transition-colors hover:text-gray-800"
                >
                  {formatDate(post.data.publishedAt)}
                </time>
              </Link>
            </div>
            <div className="flex flex-col gap-6 md:col-span-3">
              {post.data.image && (
                <Link
                  href={`/changelog/${post.name}`}
                  className="overflow-hidden rounded-xl border border-border bg-gray-50/50 p-2 md:rounded-2xl"
                >
                  <Image
                    src={post.data.image}
                    alt={""}
                    width={1200}
                    height={630}
                    priority={idx === 0} // since it's above the fold
                    className="aspect-video border border-gray-100 object-cover md:rounded-2xl"
                    unoptimized
                  />
                </Link>
              )}
              <Link
                href={`/changelog/${post.name}`}
                className="group mx-5 flex items-center space-x-3 md:mx-0"
              >
                <time
                  dateTime={post.data.publishedAt}
                  className="text-sm text-gray-500 transition-all group-hover:text-gray-800 md:hidden"
                >
                  {formatDate(post.data.publishedAt)}
                </time>
              </Link>
              <Link href={`/changelog/${post.name}`} className="mx-5 md:mx-0">
                <h2 className="font-display text-3xl font-bold tracking-tight text-gray-800 hover:underline hover:decoration-1 hover:underline-offset-4 md:text-4xl">
                  {post.data.title}
                </h2>
              </Link>
              {/* <MDX2
                content={post.raw}
              /> */}
              {/* <MDX3
                mdxSource={mdxSource}
                className="mx-5 sm:prose-lg md:mx-0"
              /> */}
              {/* {post.} */}
              <article
                data-mdx-container
                className="prose-headings:font-display prose prose-gray max-w-none transition-all prose-headings:relative prose-headings:scroll-mt-20 prose-headings:font-bold"
              >
                  {post.content}
              </article>
            </div>
          </div>)
})}
    </div>
  );
}
