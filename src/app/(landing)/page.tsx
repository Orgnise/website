import { Features, Features2 } from "@/components/features";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Navbar } from "@/components/nav-bar";
import { WaitList } from "@/components/waitlist";

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-auto w-full">
      <Navbar />
      <MaxWidthWrapper>
        <HeroSection />
        <Features />
        <Features2 />
      </MaxWidthWrapper>
      <WaitList />
      <Footer />
    </main>
  );
}
