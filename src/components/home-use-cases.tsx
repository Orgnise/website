import { ClientLink } from "@/components/client-link";
import { USE_CASES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HOME_USE_CASE_SLUGS = [
  "engineering",
  "customer-support",
  "project-management",
  "company-wide-collaboration",
] as const;

export function HomeUseCases() {
  const cases = HOME_USE_CASE_SLUGS.map((slug) => {
    const found = USE_CASES.find((useCase) => useCase.slug === slug);
    if (!found) {
      throw new Error(`Missing home use case: ${slug}`);
    }
    return found;
  });

  return (
    <section className="mb-10 w-full bg-linear-to-b from-background/10 via-background/80 to-background/10 px-4 sm:my-32">
      <div className="mx-auto my-14 max-w-2xl text-center lg:my-20">
        <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
          Built for how teams actually work
        </h2>
        <p className="mt-5 text-muted-foreground/95 sm:text-lg">
          Pick a workflow and see how Orgnise fits — then explore the rest.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {cases.map((useCase) => {
          const href = `/use-cases/${useCase.slug}`;
          return (
            <div
              key={useCase.slug}
              className="group relative overflow-hidden rounded-xl border border-border bg-linear-to-tl from-background to-indigo-900/5 p-6 transition-shadow hover:border-primary/15 hover:shadow-md hover:shadow-gray-900/5 lg:p-8"
            >
              <CardPattern id={useCase.slug} />
              <span className="relative flex size-11 items-center justify-center rounded-lg bg-primary/10 [&>svg]:size-5 [&>svg]:text-primary">
                {useCase.icon}
              </span>
              <h3 className="relative mt-5 text-xl font-semibold text-secondary-foreground">
                <ClientLink
                  href={href}
                  trackEvent={{
                    event: "usecase-article-clicked",
                    data: { usecase: useCase.title, path: href },
                  }}
                >
                  <span className="absolute inset-0 rounded-xl" />
                  {useCase.title}
                </ClientLink>
              </h3>
              <p className="relative mt-3 text-base leading-7 text-secondary-foreground/80">
                {useCase.description}
              </p>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Learn more
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/use-cases"
          className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
        >
          See all use cases
          <ArrowRight className="ml-1.5 size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

function CardPattern({ id }: { id: string }) {
  const dots = `${id}-dots`;
  const grid = `${id}-grid`;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 text-indigo-950/25 mask-[radial-gradient(ellipse_at_top_right,black_15%,transparent_58%)] [-webkit-mask-image:radial-gradient(ellipse_at_top_right,black_15%,transparent_58%)] dark:text-white/20"
    >
      <svg className="h-full w-full">
        <defs>
          <pattern
            id={dots}
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1" fill="currentColor" />
          </pattern>
          <pattern
            id={grid}
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M48 0H0V48"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${dots})`} />
        <rect
          width="100%"
          height="100%"
          fill={`url(#${grid})`}
          className="opacity-40"
        />
      </svg>
    </div>
  );
}
