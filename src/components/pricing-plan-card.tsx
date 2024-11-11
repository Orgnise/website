"use client";

import { CheckCircle2Icon } from "lucide-react";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FREE_PLAN } from "./pricing";
import { track } from "@/lib/utility/analytics/tracking";
import { TrackingEvents } from "@/lib/utility/analytics/events-type";
import Link from "next/link";

export function PricingPlanCard({
  plan,
  isMonthly,
  className,
  isPopular,
}: {
  plan: typeof FREE_PLAN;
  isMonthly?: boolean;
  className?: string;
  isPopular?: boolean;
}) {
  return (
    <div
      className={clsx(
        "relative flex w-full max-w-[420px] flex-col rounded-xl border border-border bg-background p-4 text-left shadow-sm lg:min-w-[320px]",
        className,
      )}
      style={{}}
    >
      <h2 className="py-3 text-base font-bold">{plan.name}</h2>

      <p className="">
        <span className="text-3xl font-bold">
          ${isMonthly ? plan.price.monthly : plan.price.yearly}
        </span>
        <span className="px-1 text-sm text-secondary-foreground/80">
          / per month
        </span>
      </p>
      <p className="py-3 text-sm text-secondary-foreground/80">
        {plan.tagline}
      </p>
      <hr />
      <h4 className={clsx("mt-4 text-base font-bold", plan.colors.text)}>
        {plan.featureTitle}
      </h4>
      <ul className="flex-grow py-3">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm leading-9 text-secondary-foreground/70"
          >
            <CheckCircle2Icon size={20} className={plan.colors.text} />
            {feature.text ?? ""}
          </li>
        ))}
      </ul>
      <Link href={plan.cta.href}>
        <Button
          className={cn(clsx("w-full text-primary-foreground", plan.colors.bg))}
          variant={"outline"}
          onClick={() => {
            const name =
              `pricing-${plan.name!.toLowerCase()}-CTA-choose-plan-clicked` as TrackingEvents[number];
            track(name, { place: "pricing-page" });
          }}
        >
          {plan.cta.text}
        </Button>
      </Link>

      {isPopular && (
        <div className="absolute -top-5 left-[35%] inline-flex whitespace-nowrap rounded-full border border-solid border-primary bg-gradient-to-tr from-indigo-800 via-violet-600 to-purple-700 px-4 py-2 font-bold text-primary-foreground hover:bg-primary hover:text-primary-foreground">
          Popular
        </div>
      )}
    </div>
  );
}
