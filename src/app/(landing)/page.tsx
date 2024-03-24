import { Features, Features2 } from "@/components/features";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { WaitList } from "@/components/waitlist";

export default function Home() {
  return (
    <main className="h-full w-full">
      <MaxWidthWrapper>
        <HeroSection />
        <Features />
        <Features2 />
      </MaxWidthWrapper>
      <WaitList />
    </main>
  );
}
