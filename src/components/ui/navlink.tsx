"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";

export default function NavLink({
  segment,
  children,
}: {
  segment: string | null;
  children: ReactNode;
}) {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  const href = segment ? `${segment}` : "";

  return (
    <Link
      key={href}
      href={href}
      className={cn("rounded-md p-2.5 text-sm transition-all duration-75", {
        "font-semibold text-secondary-foreground":
          selectedLayoutSegment === segment?.replace("/", ""),
      })}
    >
      {children}
    </Link>
  );
}
