import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import EnterpriseForm from "./form";

export const metadata = constructMetadata({
  title: "Enterprise - Orgnise",
});

export default function Home() {
  return (
    <div className="w-full flex-grow">
      <MaxWidthWrapper className="z-10 pt-10 lg:pt-16">
        <div className="mx-auto flex w-full max-w-xl flex-col place-content-center items-center text-center">
          <h1 className="font-display md:text9xl text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[3rem] ">
            <span className="">
              Enterprise-scale
              <span className="bg-gradient-to-r from-indigo-800 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                <br />
                solutions For your team
              </span>
            </span>
          </h1>

          <h2 className="mx-auto mt-6 max-w-[600px] text-center text-muted-foreground/95 [text-wrap:balance] md:text-xl">
            Whether you&apos;re creating a new product or scaling your team,
            Orgnise has the tools you need to succeed.
          </h2>
          <EnterpriseForm />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
