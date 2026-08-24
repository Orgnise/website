import { EditorFeature } from "@/components/editor-feature";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { HomeCta } from "@/components/home-cta";
import { HomeUseCases } from "@/components/home-use-cases";
import { HowItWorks } from "@/components/how-it-works";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export default function Home() {
  return (
    <main className="h-full w-full">
      <MaxWidthWrapper>
        <HeroSection />
        <HowItWorks />
        <EditorFeature />
        <HomeUseCases />
      </MaxWidthWrapper>
      <HomeCta />
      <Footer embedded/>
    </main>
  );
}
