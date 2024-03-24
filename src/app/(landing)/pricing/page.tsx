import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import {
  BUSINESS_PLAN,
  FREE_PLAN,
  PLANS,
  PRO_PLAN,
} from "@/components/pricing";
import { CheckCircle2Icon } from "lucide-react";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-auto w-full mb-10">
      <MaxWidthWrapper>
        <div className="mt-[10vh] flex flex-col items-center place-content-center mx-auto text-center w-full">
          <h1 className="text-2xl font-bold">Pricing Plans</h1>
          <p>Simple pricing. No surprise feed</p>

          <Tabs defaultValue="monthly" className="my-10 w-full max-w-fit">
            <TabsList className="bg-secondary-foreground/5 mb-10">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:p-10 place-items-center">
                <PlanCard plan={FREE_PLAN} isMonthly />
                <PlanCard
                  plan={PRO_PLAN}
                  className={
                    "border border-primary lg:-translate-y-10 shadow-[0px_5px_20px_5px_#88D7FF83]"
                  }
                  isPopular
                  isMonthly
                />
                <PlanCard plan={BUSINESS_PLAN} isMonthly />
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:p-10 place-items-center">
                <PlanCard plan={FREE_PLAN} />
                <PlanCard
                  plan={PRO_PLAN}
                  className={
                    "border border-primary lg:-translate-y-10 shadow-[0px_5px_20px_5px_#88D7FF83]"
                  }
                  isPopular
                />
                <PlanCard plan={BUSINESS_PLAN} />
              </div>
            </TabsContent>
          </Tabs>
          {/* Enterprise */}
          <div className="border border-border bg-background p-10 w-full text-left flex flex-row items-center gap-2 max-w-4xl mx-auto rounded-xl">
            <div className="flex flex-col gap-4 flex-grow">
              <h2 className="text-3xl font-bold ">
                Orgnise{" "}
                <span className="bg-gradient-to-r from-indigo-800 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                  Enterprise
                </span>
              </h2>
              <p className="text-secondary-foreground/80">
                Tailored plans for large corporations are available. Whether you
                are managing a multinational company or a local business, it is
                important to have a plan that fits your specific needs and
                goals. Our team of experts will work with you to create a
                customized strategy that maximizes efficiency and drives success
                in your industry.
              </p>
            </div>

            <Link
              href="https://orgnise.in/enterprise"
              className="inline-flex whitespace-nowrap rounded-full border border-solid  border-primary px-4 py-2  font-bold  hover:bg-primary hover:text-primary-foreground bg-gradient-to-tr from-indigo-800 via-violet-600 to-purple-700  text-primary-foreground"
            >
              Contact us
            </Link>
          </div>

          <p className="my-20 text-secondary-foreground/80">
            Trusted & loved by modern teams at world-class companies
          </p>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

function PlanCard({
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
        "relative flex flex-col bg-background rounded-xl shadow-sm p-4 border border-border text-left  w-full max-w-[420px] lg:min-w-[320px]",
        className,
      )}
      style={{}}
    >
      <h2 className="text-base font-bold py-3">{plan.name}</h2>

      <p className="">
        <span className="text-3xl font-bold">
          ${isMonthly ? plan.price.monthly : plan.price.yearly}
        </span>
        <span className="px-1 text-sm text-secondary-foreground/80">
          / per month
        </span>
      </p>
      <p className="text-sm py-3 text-secondary-foreground/80">
        {plan.tagline}
      </p>
      <hr />
      <h4 className={clsx("text-base font-bold mt-4", plan.colors.text)}>
        {plan.featureTitle}
      </h4>
      <ul className="py-3 flex-grow">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="text-secondary-foreground/70 text-sm leading-9 flex items-center gap-2"
          >
            <CheckCircle2Icon size={20} className={plan.colors.text} />
            {feature.text ?? ""}
          </li>
        ))}
      </ul>
      <Button
        className={cn(clsx("w-full text-primary-foreground", plan.colors.bg))}
        variant={"outline"}
      >
        Choose Plan
      </Button>

      {isPopular && (
        <div className="absolute -top-5 left-[35%] inline-flex whitespace-nowrap rounded-full border border-solid  border-primary px-4 py-2  font-bold  hover:bg-primary hover:text-primary-foreground bg-gradient-to-tr from-indigo-800 via-violet-600 to-purple-700  text-primary-foreground">
          Popular
        </div>
      )}
    </div>
  );
}
