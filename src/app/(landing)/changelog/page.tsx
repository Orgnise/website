import { MaxWidthWrapper, TwitterIcon } from "@/components";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { Rss } from "lucide-react";
import Link from "next/link";
import ChangelogLogsList from "./logs-list";
import ChangelogListPlaceholder from "./loading";
import { ClientLink } from "@/components/client-link";
import DotPattern from "@/components/pattern/dot-background";
import PlainPageHeader from "@/components/plain-page-header";

export const metadata = constructMetadata({
  title: "Changelog - Orgnise",
  description:
    "All the latest updates, improvements, and fixes to Orgnise - the link management tool for modern marketing teams.",
  image: "/api/og",
});

export default async function Changelog() {
  return (
    <div className="min-h-[50vh] border-t border-border bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-lg">
      <DotPattern className="mx-auto w-full border-b">
        <MaxWidthWrapper className="w-full flex-grow">
          <PlainPageHeader
            title="Changelog"
            description="All the latest updates, improvements, and fixes to Orgnise."
            className="border-none bg-transparent"
            bottomContent={
              <div className="absolute bottom-2 right-0 flex items-center space-x-2">
                <p className="text-sm text-gray-500">Subscribe to updates →</p>
                <ClientLink
                  href="https://twitter.com/orgniseapp"
                  className="rounded-full bg-accent p-2 transition-colors hover:bg-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  trackEvent={{
                    event: "changelog-twitter-subscribe-clicked",
                  }}
                >
                  <TwitterIcon className="h-4 w-4" />
                </ClientLink>
                <ClientLink
                  href="/atom"
                  className="rounded-full bg-accent p-2 transition-colors hover:bg-gray-200"
                  trackEvent={{
                    event: "changelog-rss-feed-clicked",
                  }}
                >
                  <Rss className="h-4 w-4 text-gray-500" />
                </ClientLink>
              </div>
            }
          />
        </MaxWidthWrapper>
      </DotPattern>
      <MaxWidthWrapper className="px-0">
        <ChangelogLogsList />
      </MaxWidthWrapper>
    </div>
  );
}
