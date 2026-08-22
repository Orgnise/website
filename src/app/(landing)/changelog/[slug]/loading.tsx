import { MaxWidthWrapper } from "@/components";
import { ArrowLeftIcon } from "lucide-react";
import type { JSX } from "react";

export default function LoadingChangelog(): JSX.Element {
  return (
    <div className="min-h-[50vh] border-t border-border bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-lg">
      <MaxWidthWrapper className="my-20 grid px-0 md:grid-cols-4">
        <div className="sticky top-20 hidden animate-pulse self-start md:col-span-1 md:block">
          <div className="mb-10 h-3 w-full rounded-full bg-gray-200 dark:bg-gray-600 md:w-2/3" />
        </div>

        <article className="flex animate-pulse flex-col space-y-8 md:col-span-3">
          <header className="flex flex-col gap-4">
            {/* <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-600 md:w-2/3 w-full mb-10" /> */}
            <div className="mb-2 h-4 w-1/3 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="mb-2 h-7 w-4/5 rounded-full bg-gray-300 dark:bg-gray-700" />
          </header>

          <div className="prose mt-8 dark:prose-invert">
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

            <div role="status" className="mt-12 space-y-4">
              <div className="flex w-full items-center">
                <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center">
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center">
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center">
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center">
                <div className="ms-2 h-2.5 w-32 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="flex w-full max-w-full items-center">
                <div className="ms-2 h-2.5 w-1/3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-1/3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>

            <div role="status" className="mt-12 space-y-4">
              <div className="flex w-full items-center">
                <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center">
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center">
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center">
                <div className="ms-2 h-2.5 w-1/4 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-1/4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>

            <div role="status" className="mt-12 space-y-4">
              <div className="flex w-full items-center">
                <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center">
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center">
                <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center">
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex w-full max-w-full items-center">
                <div className="ms-2 h-2.5 w-1/3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="ms-2 h-2.5 w-1/3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </article>
      </MaxWidthWrapper>
    </div>
  );
}
