import { MaxWidthWrapper, TwitterIcon } from "@/components";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { Rss } from "lucide-react";
import Link from "next/link";
import ChangelogLogsList from "./logs-list";

export const metadata = constructMetadata({
  title: "Changelog - Orgnise",
  description:
    "All the latest updates, improvements, and fixes to Orgnise - the link management tool for modern marketing teams.",
  // image: "/api/og/changelog",
});

export default async function Changelog() {
  return (
    <div className="min-h-[50vh] border-t border-border bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-lg">
      <MaxWidthWrapper className="px-0">
        <div className="relative grid border-b border-gray-200 py-20 md:grid-cols-4">
          <div className="md:col-span-1" />
          <div className="mx-5 flex flex-col space-y-6 md:col-span-3 md:mx-0">
            <h1 className="font-display text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
              Changelog
            </h1>
            <p className="text-lg text-gray-500">
              All the latest updates, improvements, and fixes to Orgnise.
            </p>
          </div>
          <div className="absolute bottom-2 right-0 flex items-center space-x-2">
            <p className="text-sm text-gray-500">Subscribe to updates →</p>
            <Link
              href="https://twitter.com/orgniseapp"
              className="rounded-full bg-accent p-2 transition-colors hover:bg-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/atom"
              className="rounded-full bg-accent p-2 transition-colors hover:bg-gray-200"
            >
              <Rss className="h-4 w-4 text-gray-500" />
            </Link>
          </div>
        </div>
        <ChangelogLogsList />
      </MaxWidthWrapper>
    </div>
  );
}
