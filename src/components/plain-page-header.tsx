import { cn } from "@/lib/utils";
import clsx from "clsx";

interface Props {
  title: string;
  description?: string;
  className?: string;
  bottomContent?: React.ReactNode;
}
export default function PlainPageHeader({
  title,
  description,
  className,
  bottomContent,
}: Props) {
  return (
    <div
      className={cn(
        clsx(
          "relative grid w-full border-b border-border bg-background py-20 md:grid-cols-4",
          className,
        ),
      )}
    >
      <div className="md:col-span-1"></div>
      <div className="mx-5 flex flex-col space-y-6 md:col-span-3 md:mx-0">
        <h1 className="font-display text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
          {title}
        </h1>
        {description && <p className="text-lg text-gray-500">{description}</p>}
      </div>
      {bottomContent && bottomContent}
    </div>
  );
}
