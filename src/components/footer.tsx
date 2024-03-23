import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background/10 p-4 border-t border-border flex flex-row items-center place-content-between text-xs">
      <p className="text-muted-foreground/95 ">
        © 2024 Orgnise. All rights reserved.
      </p>
      <span className="flex items-center gap-8">
        <Link href={`#policy`}>Privacy</Link>
        <Link href={`#terms`}>Terms of Service</Link>
      </span>
    </footer>
  );
}
