import { HomeCta } from "@/components/home-cta";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ENTERPRISE_PLAN } from "@/components/pricing";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { Check } from "lucide-react";
import EnterpriseForm from "./form";

export const metadata = constructMetadata({
  title: "Enterprise - Orgnise",
  description:
    "Custom limits, a dedicated success manager, and priority support, with the same docs, collections, and boards.",
});

const FEATURE_DETAILS: Record<string, string> = {
  "Custom usage limits":
    "Seats, workspaces, and pages that match how the team actually works.",
  "Dedicated success manager":
    "A named partner for rollout and ongoing questions.",
  "Priority support": "Faster response when something blocks the team.",
  "Dedicated Slack channel": "Talk to us where the team already works.",
};

export default function EnterprisePage() {
  return (
    <main className="w-full">
      <MaxWidthWrapper className="z-10 px-4 pt-12 sm:pt-16 lg:px-20">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl sm:leading-[1.1] lg:text-6xl">
            Enterprise-scale solutions{" "}
            <span className="bg-linear-to-r from-indigo-800 via-violet-600 to-purple-700 bg-clip-text text-transparent">
              for larger teams
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            The same docs, collections, and boards, with custom limits, a
            dedicated partner, and priority support.
          </p>
        </header>
        <div className="mt-12 grid items-start gap-12 pb-16 lg:mt-16 lg:grid-cols-2 lg:gap-16 lg:pb-24">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What larger teams get
            </h2>
            <ul className="mt-8 space-y-5">
              {ENTERPRISE_PLAN.features.map((feature) => (
                <li key={feature.text} className="flex gap-3">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>
                    <span className="font-medium text-foreground">
                      {feature.text}
                    </span>
                    {FEATURE_DETAILS[feature.text] && (
                      <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                        {FEATURE_DETAILS[feature.text]}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <EnterpriseForm />
        </div>
      </MaxWidthWrapper>
      <HomeCta secondaryHref="/pricing" secondaryLabel="See pricing" />
    </main>
  );
}
