import React from "react";

export function ProsArticle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center bg-background/30 bg-top p-10 sm:pt-20 lg:px-20">
      <div className="prose prose-slate lg:prose-lg w-full max-w-screen-md">
        {children}
      </div>
    </div>
  );
}
