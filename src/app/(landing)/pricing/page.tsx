import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BUSINESS_PLAN, FREE_PLAN, PRO_PLAN } from "@/components/pricing";
import { PricingPlanCard } from "@/components/pricing-plan-card";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Pricing Plans- Orgnise",
});
export default function Home() {
  return (
    <main className=" w-full flex-grow">
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
            <h2 className="mx-auto mt-6 max-w-[600px] text-center text-muted-foreground/95 [text-wrap:balance] md:text-xl">
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
                <PricingPlanCard plan={FREE_PLAN} isMonthly />
                <PricingPlanCard
                  plan={PRO_PLAN}
                  className={
                    "border border-primary shadow-[0px_5px_20px_5px_#88D7FF83] lg:-translate-y-10"
                  }
                  isPopular
                  isMonthly
                />
                <PricingPlanCard plan={BUSINESS_PLAN} isMonthly />
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-3 lg:p-10">
                <PricingPlanCard plan={FREE_PLAN} />
                <PricingPlanCard
                  plan={PRO_PLAN}
                  className={
                    "border border-primary shadow-[0px_5px_20px_5px_#88D7FF83] lg:-translate-y-10"
                  }
                  isPopular
                />
                <PricingPlanCard plan={BUSINESS_PLAN} />
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
