import { cn } from "@/lib/utils";
import clsx from "clsx";
import React from "react";

export function ProsArticle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        clsx(
          "flex w-full flex-col items-center bg-background/30 bg-top p-10 sm:pt-20 lg:px-20",
          className,
        ),
      )}
    >
      <div className="prose prose-slate w-full max-w-screen-md lg:prose-lg">
        {children}
      </div>
    </div>
  );
}
