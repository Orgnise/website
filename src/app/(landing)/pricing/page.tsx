import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { BUSINESS_PLAN, FREE_PLAN, PRO_PLAN } from "@/components/pricing";
import { CheckCircle2Icon } from "lucide-react";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { constructMetadata } from "@/lib/utility/construct-metadata";

export const metadata = constructMetadata({
  title: "Pricing Plans- Orgnise",
});
export default function Home() {
  return (
    <main className="mb-10 min-h-screen w-full overflow-y-auto">
      <MaxWidthWrapper className="z-10 pt-10 lg:pt-16">
        <div className="mx-auto flex w-full flex-col place-content-center items-center text-center">
          <h1 className="font-display md:text7xl text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[5rem] ">
            <span className="">
              Simple,
              <span className="bg-gradient-to-r from-indigo-800 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                {" "}
                and Affordable Pricing Options
              </span>
            </span>
          </h1>
          <div>
            <h2 className="mx-auto mt-6 max-w-[600px] text-center text-zinc-600 [text-wrap:balance] md:text-xl">
              Discover the Perfect Plan for You - Get Started for Free Without
              Any Credit Card Needed
            </h2>
          </div>

          <Tabs defaultValue="monthly" className="my-10 w-full ">
            <TabsList className="mb-10 bg-secondary-foreground/5">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-3 lg:p-10">
                <PlanCard plan={FREE_PLAN} isMonthly />
                <PlanCard
                  plan={PRO_PLAN}
                  className={
                    "border border-primary shadow-[0px_5px_20px_5px_#88D7FF83] lg:-translate-y-10"
                  }
                  isPopular
                  isMonthly
                />
                <PlanCard plan={BUSINESS_PLAN} isMonthly />
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-3 lg:p-10">
                <PlanCard plan={FREE_PLAN} />
                <PlanCard
                  plan={PRO_PLAN}
                  className={
                    "border border-primary shadow-[0px_5px_20px_5px_#88D7FF83] lg:-translate-y-10"
                  }
                  isPopular
                />
                <PlanCard plan={BUSINESS_PLAN} />
              </div>
            </TabsContent>
          </Tabs>
          {/* Enterprise */}
          <div className="mx-auto flex w-full max-w-4xl flex-row items-center gap-2 rounded-xl border border-border bg-background p-10 text-left">
            <div className="flex flex-grow flex-col gap-4">
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
              className="inline-flex whitespace-nowrap rounded-full border border-solid  border-primary bg-gradient-to-tr from-indigo-800  via-violet-600  to-purple-700 px-4 py-2 font-bold text-primary-foreground hover:bg-primary  hover:text-primary-foreground"
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
        "relative flex w-full max-w-[420px] flex-col rounded-xl border border-border bg-background p-4  text-left shadow-sm lg:min-w-[320px]",
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
      <Button
        className={cn(clsx("w-full text-primary-foreground", plan.colors.bg))}
        variant={"outline"}
      >
        Choose Plan
      </Button>

      {isPopular && (
        <div className="absolute -top-5 left-[35%] inline-flex whitespace-nowrap rounded-full border border-solid  border-primary bg-gradient-to-tr from-indigo-800  via-violet-600  to-purple-700 px-4 py-2 font-bold text-primary-foreground hover:bg-primary  hover:text-primary-foreground">
          Popular
        </div>
      )}
    </div>
  );
}
