"use client";

import { ClientLink } from "@/components/client-link";
import type { Plan } from "@/components/pricing";
import { cn } from "@/lib/utils";
import { TrackingEvents } from "@/lib/utility/analytics/events-type";
import { Check } from "lucide-react";
import Link from "next/link";

export function PricingPlanCard({
  plan,
  isMonthly,
  isPopular,
}: {
  plan: Plan;
  isMonthly?: boolean;
  isPopular?: boolean;
}) {
  const monthly = plan.price.monthly ?? 0;
  const yearly = plan.price.yearly ?? 0;
  const displayPrice = isMonthly ? monthly : yearly;
  const yearlySavings =
    !isMonthly && monthly > 0 && yearly < monthly ? monthly - yearly : 0;

  const eventName =
    `pricing-${plan.name.toLowerCase()}-CTA-choose-plan-clicked` as TrackingEvents[number];

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col rounded-xl border bg-background p-6 text-left",
        isPopular ? "border-primary" : "border-border",
      )}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          Popular
        </span>
      )}
      <h2 className="text-base font-semibold">{plan.name}</h2>
      <p className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold tracking-tight">
          ${displayPrice}
        </span>
        <span className="text-sm text-muted-foreground">/ month</span>
      </p>
      {monthly === 0 ? (
        <p className="mt-1 text-xs text-muted-foreground">
          No credit card required
        </p>
      ) : yearlySavings > 0 ? (
        <p className="mt-1 text-xs text-muted-foreground">
          Billed yearly · save ${yearlySavings}/mo
        </p>
      ) : (
        <p className="mt-1 text-xs text-muted-foreground">Billed monthly</p>
      )}
      <p className="mt-3 text-sm text-muted-foreground">{plan.tagline}</p>
      <div className="my-5 h-px bg-border" />
      <h3 className="text-sm font-semibold">{plan.featureTitle}</h3>
      <ul className="mt-3 flex flex-1 flex-col gap-2.5">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-2.5 text-sm">
            <Check
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden
            />
            <span>
              <span className="text-foreground">{feature.text}</span>
              {feature.detail && (
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {feature.detail}{" "}
                  {feature.href && (
                    <Link
                      href={feature.href}
                      className="font-medium text-primary hover:underline"
                    >
                      Learn more
                    </Link>
                  )}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
      <ClientLink
        href={plan.cta.href}
        className={cn(
          "mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-semibold transition-colors",
          isPopular
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "border border-border bg-background text-foreground hover:bg-accent",
        )}
        trackEvent={{
          event: eventName,
          data: { place: "pricing-page" },
        }}
      >
        {plan.cta.text}
      </ClientLink>
    </div>
  );
}
