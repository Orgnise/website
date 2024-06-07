import { MaxWidthWrapper, TwitterIcon } from "@/components";
import { Rss } from "lucide-react";

export default function ChangelogListPlaceholder() {
  return (
    <div className="min-h-[50vh] border-t border-border bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-lg">
      <MaxWidthWrapper className="mt-10">
        <div className=" ">
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
              <div
                className="rounded-full bg-accent p-2 transition-colors hover:bg-gray-200"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="h-4 w-4" />
              </div>
              <div className="rounded-full bg-accent p-2 transition-colors hover:bg-gray-200">
                <Rss className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
          {/* <div className="animate-pulse  h-[26px] bg-gray-300 rounded-full dark:bg-gray-600 w-[150px] md:h-[32px] md:w-[200px]" /> */}
          <div className="divide-y divide-gray-200">
            {[...Array(4)].map((_, i) => (
              <ChangelogCardPlaceholder key={i} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export function ChangelogCardPlaceholder() {
  return (
    <div className="py-20 md:grid md:grid-cols-4">
      <div className="sticky top-20 z-10 order-first mb-3 mt-1 hidden h-2 w-[120px] rounded-full bg-gray-300 dark:bg-gray-600 md:block" />

      <div className="group relative mb-9 flex flex-col items-stretch md:col-span-3">
        <div className="space-y-4">
          <div className="mb-4 flex h-56 items-center justify-center rounded-2xl bg-gray-300 dark:bg-gray-700 md:h-96">
            <svg
              className="h-20 w-20 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="px-4 sm:px-0">
            <div className="my-6 mb-10 h-5 w-1/2 rounded-full bg-gray-300 dark:bg-gray-600" />

            <div className="flex w-full items-center space-x-2 pt-2">
              <div className="h-2.5 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-600"></div>
            </div>
            <div className="flex w-full items-center space-x-2 pt-3">
              <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-2.5 w-1/2 rounded-full bg-gray-200 dark:bg-gray-600"></div>
            </div>
            <div className="flex w-1/2 items-center space-x-2 pt-3">
              <div className="h-2.5 w-1/3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-600"></div>
            </div>

            <div role="status" className="space-y-4 pt-6">
              <div className="flex w-full items-center gap-1">
                <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center gap-1">
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center gap-1">
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center gap-1">
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center gap-1">
                <div className="h-2.5 w-32 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="flex w-full max-w-full items-center gap-1">
                <div className="h-2.5 w-1/3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-1/3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
            <div role="status" className="space-y-4 pt-7">
              <div className="flex w-full items-center gap-1">
                <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center gap-1">
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center gap-1">
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center gap-1">
                <div className="h-2.5 w-1/4 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2.5 w-1/4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
