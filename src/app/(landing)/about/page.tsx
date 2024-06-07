import { GlowingStarsBackgroundCard } from "@/components/glowing-stars";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Meteors } from "@/components/meteors";
import { OurValues } from "@/components/our-values";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "About - Orgnise",
});

export default function Home() {
  return (
    <main className="mb-10 w-full flex-grow overflow-y-auto">
      <MaxWidthWrapper className="z-10 pt-10 lg:pt-16">
        <div className="mx-auto flex w-full max-w-4xl flex-col place-content-center items-center text-center">
          <h1 className="font-display text-center text-5xl font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[3rem]">
            <span className="">
              Orgnise
              <span className="bg-gradient-to-r from-indigo-800 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                <br />
                Built for your business
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 w-full text-center text-muted-foreground/95 md:text-xl">
            At Orgnise, we believe that every business should have access to the
            best tools and resources to help them grow. Orgnise is designed to
            support your business growth by offering the necessary tools and
            resources for success.
          </p>
        </div>
        <OurValues />
        <GetStartedSection />
      </MaxWidthWrapper>
    </main>
  );
}

function GetStartedSection() {
  return (
    <div className="relative isolate mt-32 overflow-hidden border border-l-0 border-r-0 border-primary bg-secondary-foreground px-6 py-8 text-center shadow-2xl dark:border-indigo-900 dark:bg-background sm:rounded-3xl sm:border sm:px-16">
      <GlowingStarsBackgroundCard>
        <Meteors />
      </GlowingStarsBackgroundCard>
      <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold tracking-tight text-primary-foreground">
        Have everything conveniently located in one central hub.
      </h2>
      <ul
        role="list"
        className="mx-auto my-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 text-sm leading-7 text-primary-foreground sm:grid-cols-3"
      >
        <li className="flex flex-row items-center justify-center gap-x-3 font-bold">
          <CheckCircle2 size={15} />
          Start Quickly
        </li>
        <li className="flex items-center justify-center gap-x-3 font-bold">
          <CheckCircle2 size={15} />
          Stay Organized
        </li>
        <li className="flex items-center justify-center gap-x-3 font-bold">
          <CheckCircle2 size={15} />
          Grow Your Business
        </li>
      </ul>
      <Link href={"/pricing"} className="flex-grow-0">
        <Button className="gap-2">
          <span>Get started</span>
          <ArrowRight size={18} />
        </Button>
      </Link>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#gradient)"
          fill-opacity="0.7"
        ></circle>
        <defs>
          <radialGradient id="gradient">
            <stop stop-color="#7775D6"></stop>
            <stop offset="1" stop-color="#E935C1"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
