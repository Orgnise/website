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
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Built for how teams actually work
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Pick a workflow and see how Orgnise fits — then explore the rest.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {cases.map((useCase) => {
          const href = `/use-cases/${useCase.slug}`;
          return (
            <div
              key={useCase.slug}
              className="group relative rounded-xl border border-border bg-background p-6 transition-shadow hover:border-primary/20 hover:shadow-md hover:shadow-gray-900/5"
            >
              {useCase.icon}
              <h3 className="mt-4 text-lg font-semibold text-foreground">
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
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {useCase.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/use-cases"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          See all use cases
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
