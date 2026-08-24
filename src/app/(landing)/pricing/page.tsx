import { HomeCta } from "@/components/home-cta";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import {
  BUSINESS_PLAN,
  ENTERPRISE_PLAN,
  FREE_PLAN,
  PRO_PLAN,
} from "@/components/pricing";
import { PricingCompare } from "@/components/pricing-compare";
import { PricingFaq } from "@/components/pricing-faq";
import { PricingPlanCard } from "@/components/pricing-plan-card";
import { ClientLink } from "@/components/client-link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { Check } from "lucide-react";

export const metadata = constructMetadata({
  title: "Pricing - Orgnise",
  description:
    "Start free. Upgrade when the team needs more seats, workspaces, and pages for docs, collections, and boards.",
});

export default function PricingPage() {
  return (
    <main className="w-full">
      <MaxWidthWrapper className="z-10 pt-12 sm:pt-16">
        <div className="mx-auto flex w-full flex-col items-center px-4 text-center">
          <h1 className="font-display max-w-3xl text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl sm:leading-[1.1] lg:text-6xl">
            Plans for teams that write and{" "}
            <span className="bg-linear-to-r from-indigo-800 via-violet-600 to-purple-700 bg-clip-text text-transparent">
              ship together
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            Start free, no credit card. Upgrade when you need more people,
            workspaces, and pages.
          </p>

          <Tabs defaultValue="monthly" className="mt-10 w-full">
            <TabsList className="bg-muted">
              <TabsTrigger
                value="monthly"
                trackEvent={{ event: "pricing-monthly-tab-clicked" }}
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                trackEvent={{ event: "pricing-yearly-tab-clicked" }}
              >
                Yearly
                <span className="ml-1.5 hidden text-[11px] font-semibold text-primary sm:inline">
                  Save 20%
                </span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="mt-10">
              <PlanGrid isMonthly />
            </TabsContent>
            <TabsContent value="yearly" className="mt-10">
              <PlanGrid />
            </TabsContent>
          </Tabs>

          <EnterpriseBand />
        </div>
      </MaxWidthWrapper>
      <PricingCompare />
      <PricingFaq />
      <div className="bg-background">
        <HomeCta
        secondaryHref="/#features"
        secondaryLabel="See how it works"
      />
      </div>
    </main>
  );
}

function PlanGrid({ isMonthly }: { isMonthly?: boolean }) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
      <PricingPlanCard plan={FREE_PLAN} isMonthly={isMonthly} />
      <PricingPlanCard plan={PRO_PLAN} isMonthly={isMonthly} isPopular />
      <PricingPlanCard plan={BUSINESS_PLAN} isMonthly={isMonthly} />
    </div>
  );
}

function EnterpriseBand() {
  return (
    <div className="mt-16 flex w-full max-w-5xl flex-col gap-8 rounded-xl border border-border bg-background p-6 text-left sm:p-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-xl">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {ENTERPRISE_PLAN.name}
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
          {ENTERPRISE_PLAN.tagline}
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {ENTERPRISE_PLAN.features.map((feature) => (
            <li
              key={feature.text}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <Check className="size-4 text-primary" aria-hidden />
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
      <ClientLink
        href="/enterprise"
        className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        trackEvent={{ event: "pricing-enterprise-contact-us-clicked" }}
      >
        Contact us
      </ClientLink>
    </div>
  );
}
