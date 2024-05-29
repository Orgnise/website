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
        "mx-auto flex w-full max-w-screen-xl flex-col items-center px-0 lg:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
