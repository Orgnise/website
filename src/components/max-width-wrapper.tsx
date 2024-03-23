import { cn } from "@/lib/utils";

export function MaxWidthWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-col items-center px-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
