"use client";
import { track } from "@/lib/utility/analytics/tracking";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const session = useSession();
  const status = session.status;
  const isLoading = status === "loading";
  const isSignedIn = Boolean(session.data);

  return (
    <div className="px-4 pt-12 sm:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl sm:leading-[1.1] lg:text-6xl">
          One place for team{" "}
          <span className="bg-linear-to-r from-indigo-800 via-violet-600 to-purple-700 bg-clip-text text-transparent">
            knowledge and projects
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
          Write docs, organize collections, and move work across boards without
          jumping between tools.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {isLoading ? (
            <div className="h-12 w-44 rounded-full bg-muted" />
          ) : (
            <Link
              href={
                isSignedIn
                  ? "https://app.orgnise.in"
                  : "https://app.orgnise.in/signup"
              }
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={() => {
                track(
                  isSignedIn
                    ? "go-to-dashboard-clicked"
                    : "signup-for-free-CTA-clicked",
                  { place: "hero-section" },
                );
              }}
            >
              {isSignedIn ? "Go to Dashboard" : "Sign up for free"}
            </Link>
          )}
          <Link
            href="#features"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            See how it works
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Free to start · No credit card required
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl">
        <div className="pointer-events-none absolute inset-x-8 -top-8 -z-10 h-48 rounded-full bg-primary/20 blur-3xl" />
        <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg lg:rounded-2xl">
          <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-red-400/80" />
            <span className="size-2.5 rounded-full bg-amber-400/80" />
            <span className="size-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-3 truncate text-xs text-muted-foreground">
              app.orgnise.in
            </span>
          </div>
          <Image
            src="/_static/hero-section.webp"
            className="w-full bg-background object-cover"
            alt="Orgnise workspace with pages, collections, and team navigation"
            width={1920}
            height={1080}
            priority
          />
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          See the{" "}
          <Link href="/changelog" className="font-medium text-foreground underline-offset-4 hover:underline">
            latest updates
          </Link>{" "}
          or browse the{" "}
          <Link href="/help" className="font-medium text-foreground underline-offset-4 hover:underline">
            help center
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
