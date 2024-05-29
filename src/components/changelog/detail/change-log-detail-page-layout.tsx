import { MaxWidthWrapper, ProsArticle } from "@/components";

interface Props {
  children: React.ReactNode;
  title?: string;
  time?: string;
  link?: string;
}
export default function ChangelogDetailPageLayout({
  children,
  time,
  title,
}: Props) {
  return (
    <MaxWidthWrapper>
      <div className="grid py-10 md:grid-cols-4 md:px-5 md:py-20 xl:px-0">
        <div className="sticky top-20  hidden self-start md:col-span-1 md:block">
          <a
            href={"/changelog"}
            className="text-sm  text-gray-500 transition-colors hover:text-gray-800 "
          >
            ← Back to Changelog
          </a>
        </div>

        <div className="flex flex-col space-y-8 md:col-span-3">
          <div className="mx-5 grid gap-5 md:mx-0">
            <div className="flex flex-col">
              <a
                href={"/changelog"}
                className="my-5  text-sm text-gray-500 transition-colors hover:text-gray-800 md:hidden"
              >
                ← Back to Changelog
              </a>
              <time className="text-sm  text-gray-500">{time}</time>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl">
              {title}
            </h1>
          </div>
          <ProsArticle className="p-0 px-5 sm:pt-0 lg:px-0">
            {children}
          </ProsArticle>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
