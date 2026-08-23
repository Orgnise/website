import { ClientLink } from "@/components/client-link";
import Image from "next/image";
import Link from "next/link";

export function HomeCta() {
  return (
    <section
      id="get-started"
      className="border-t border-border bg-background/80 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <Image
          src="/_static/logo.svg"
          className="size-16 rounded-2xl border border-border bg-background object-cover p-3 dark:invert"
          alt="Orgnise logo"
          width={64}
          height={64}
        />
        <h2 className="font-display mt-6 text-3xl font-bold sm:text-5xl">
          Start organizing with your team
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Create a free workspace and bring docs, collections, and boards into
          one place.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <ClientLink
            href="https://go.orgnise.in/signup"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            trackEvent={{
              event: "signup-for-free-CTA-clicked",
              data: { place: "home-cta" },
            }}
          >
            Get started
          </ClientLink>
          <Link
            href="/pricing"
            className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-foreground hover:underline"
          >
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
