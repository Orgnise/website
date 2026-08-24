import Link from "next/link";

const FAQS = [
  {
    question: "What is a page?",
    answer: (
      <>
        Pages are living documents — notes, specs, policies, and the rest of
        your writing. Collections and pages both count toward the page limit.{" "}
        <Link
          href="/help/article/what-is-page"
          className="font-medium text-primary hover:underline"
        >
          Learn more
        </Link>
      </>
    ),
  },
  {
    question: "What is a workspace?",
    answer: (
      <>
        A workspace groups collections for one area of the team, such as
        Engineering or Support. One team can have several workspaces.{" "}
        <Link
          href="/help/article/what-is-workspace"
          className="font-medium text-primary hover:underline"
        >
          Learn more
        </Link>
      </>
    ),
  },
  {
    question: "Do I need a credit card for the Free plan?",
    answer:
      "No. You can start for free without a card. Upgrade when the team needs more seats, workspaces, or pages.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes. Team owners can upgrade from billing when you need more room. Yearly billing is a lower monthly rate paid up front.",
  },
  {
    question: "What does Enterprise include?",
    answer:
      "Custom limits, a dedicated success manager, priority support, and a Slack channel. Contact us if those matter more than a self-serve plan.",
  },
] as const;

export function PricingFaq() {
  return (
    <section className="relative bg-background px-4 py-16 sm:py-20">
      <FaqPattern />
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-border/80 bg-linear-to-tl from-indigo-900/8 to-background p-6 text-left shadow-sm sm:p-10 lg:p-14">
        
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Questions
            </h2>
            <p className="mt-3 max-w-sm text-muted-foreground">
              Quick answers about pages, workspaces, billing, and Enterprise.
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {FAQS.map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="cursor-pointer list-none font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span
                      aria-hidden
                      className="text-lg leading-none text-muted-foreground transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 text-indigo-950/15 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_58%)]"
    >
      <svg className="size-full">
        <defs>
          <pattern
            id="pricing-faq-dots"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1" fill="currentColor" />
          </pattern>
          <pattern
            id="pricing-faq-grid"
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
        <rect width="100%" height="100%" fill="url(#pricing-faq-dots)" />
        <rect
          width="100%"
          height="100%"
          fill="url(#pricing-faq-grid)"
          className="opacity-40"
        />
      </svg>
    </div>
  );
}
