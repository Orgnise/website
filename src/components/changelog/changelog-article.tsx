import { ProsArticle } from "@/components";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  title?: string;
  time?: string;
  link?: string;
  imageLink?: string;
}
export default function ChangelogArticle({
  children,
  time,
  title,
  link,
  imageLink,
}: Props) {
  return (
    <div className="grid py-10 md:grid-cols-4 md:px-5 md:py-20 xl:px-0">
      <div className="sticky top-20 hidden self-start md:col-span-1 md:block">
        <a href={link ?? "#"} className="">
          <time className="text-sm  text-gray-500 transition-colors hover:text-gray-800">
            {time}
          </time>
        </a>
      </div>
      <div className="flex flex-col gap-6 md:col-span-3">
        {imageLink && (
          <a
            href={link ?? "#"}
            className="overflow-hidden rounded-xl border border-border bg-gray-50/50 p-2"
          >
            <Image
              src={imageLink}
              alt={title ?? "Changelog Image"}
              className="aspect-video w-full rounded-lg border border-gray-100 object-cover md:h-96"
              unoptimized
              width={766}
              height={382}
            />
          </a>
        )}
        <a
          className="group mx-5 flex items-center space-x-3 md:mx-0 md:hidden"
          href={link ?? "#"}
        >
          <time className="text-sm  text-gray-500 transition-colors hover:text-gray-800 ">
            {time}
          </time>
        </a>
        <a className="mx-5 md:mx-0" href={link ?? "#"}>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 hover:underline hover:decoration-1 hover:underline-offset-4 md:text-3xl">
            {title}
          </h2>
        </a>
        <ProsArticle className="p-0 px-5 sm:pt-0 lg:px-0">
          {children}
        </ProsArticle>
      </div>
    </div>
  );
}
