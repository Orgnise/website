import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card2 } from "./card";
import { GlowingStarsBackgroundCard } from "./glowing-stars";
export function Features() {
  return (
    <div
      id="features"
      className="mb-10 w-full bg-gradient-to-b from-background/10 via-background/80 to-background/10 sm:my-32"
    >
      <div className="mx-auto my-14 sm:max-w-2xl lg:my-20">
        <div className="flex items-end justify-center">
          <div className="relative z-10">
            <h2 className="font-display text-center text-4xl font-extrabold sm:text-5xl">
              Features
            </h2>
          </div>
        </div>
        <p className="mt-5 text-center text-muted-foreground/95 sm:text-lg">
          we have a set of features that will help you to get the most out of
          Orgnise. Here are some of the features that we offer. We are always on
          the lookout for new features to add to our platform.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 space-y-8 sm:grid-cols-2">
        <FeatureCard
          title={"Teams"}
          description={
            "A team serves as a collaborative space for you and your team members to work together. It unites all your workspaces, collections, and pages."
          }
          image={"/_static/create-team-2.png"}
          className={"bg-gradient-to-tl from-indigo-900/10 to-indigo-900/5"}
        />

        <FeatureCard
          title={"Workspaces"}
          description={
            "A workspace is where you can structure your team's data based on major projects or subjects like design, marketing, or engineering."
          }
          image={"/_static/workspaces.png"}
          className={
            "bg-gradient-to-tl from-indigo-900/10 to-indigo-900/5 sm:translate-y-1/4"
          }
        />
        <FeatureCard
          title={"Collections"}
          description={
            "Collections bring together pages that are related, enabling you to establish a more intricate hierarchical layout and maintain well-organized content."
          }
          image={"/_static/hero-section-zoom.png"}
          className={"bg-gradient-to-tl from-indigo-900/10 to-indigo-900/5"}
        />
        <FeatureCard
          title={"Notion like editor"}
          description={
            "Create rich content with our headless Notion-style WYSIWYG editor that allows you to effortlessly design and format your documents exactly as they will appear."
          }
          image={"/_static/rich-editor.png"}
          className={
            "bg-gradient-to-tl from-indigo-900/10 to-indigo-900/5 sm:translate-y-1/4"
          }
        />
        <FeatureCard
          title={"Board view"}
          description={
            "With board view, collections can be transformed into columns on a board, enabling you to visualize your workflows by setting up a collection for each stage."
          }
          image={"/_static/board-view.png"}
          className={"bg-gradient-to-tl from-indigo-900/10 to-indigo-900/5"}
        />
        <FeatureCard
          title={"Invite team members"}
          description={
            "Easy to invite team members to your team and start collaborating."
          }
          image={"/_static/invite-team-member-2.png"}
          className={
            "bg-gradient-to-tl from-indigo-900/10 to-indigo-900/5 sm:translate-y-1/4"
          }
        />
      </div>
    </div>
  );
}

interface Prop {
  title: string;
  description: string;
  image: string;
  className: string;
}
function FeatureCard({ title, description, image, className }: Prop) {
  return (
    <GlowingStarsBackgroundCard
      disabledGlow
      className={cn(
        "relative h-[440px] transform-gpu overflow-hidden rounded-xl border border-border p-4 lg:p-8 xl:h-[480px]",
        className,
      )}
    >
      <div className={cn("highlight-white-md bg-gray-750/60 relative z-30")}>
        <h3 className="relative max-w-md text-xl font-semibold text-secondary-foreground lg:text-2xl">
          {title}
        </h3>
        <p className="relative mt-5 max-w-lg text-base text-secondary-foreground/[85%]">
          {description}
        </p>

        <div className="relative -mb-10 -ml-9 -mr-2 mt-8">
          <div className="relative overflow-hidden rounded-tr-xl border-border/40 shadow-2xl">
            <Image
              src={image}
              className="relative -mr-px -mt-px rounded-tr-xl"
              alt="Hero"
              width={600}
              height={400}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </GlowingStarsBackgroundCard>
  );
}

export function Features2() {
  return (
    <div className="mb-10 w-full bg-accent/20 bg-gradient-to-b from-background/5 via-background/30 to-background/5 sm:my-16">
      <div>
        <div className="mx-auto my-14 lg:my-20">
          <div className="flex items-end justify-center">
            <h2 className="font-display text-center text-4xl font-extrabold sm:text-5xl">
              Centralize all your needs
            </h2>
          </div>
          <p className="mt-5 text-center text-muted-foreground/95 sm:text-lg">
            Easily manage knowledge, projects, idea-sharing, and beyond.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-2">
          <Card
            className="bg-gradient-to-tl to-[rgba(132,114,83,0.19)]"
            title="One Tool, One Solution"
            description="Streamline your collaboration efforts by replacing multiple tools with just one, eliminating silos and reducing the need for constant context switching."
          />

          <Card
            className="bg-gradient-to-b to-[rgba(255,102,68,0.07)]"
            imageClassName="rotate-180 -translate-y-64"
            title="Simply Easy Space"
            description="Experience a platform that is straightforward and user-friendly,free from unnecessary complexities or distractions"
          />
          <Card
            title="Speedy Hub"
            description="Experience a platform designed for quick and efficient use, with fast setup, instant search capabilities, hotkeys, and more."
          />
        </div>
      </div>
    </div>
  );

  function Card({
    title,
    description,
    className,
    imageClassName,
  }: {
    title: string;
    description: string;
    className?: string;
    imageClassName?: string;
  }) {
    return (
      <div
        className={cn(
          "relative cursor-default overflow-hidden rounded-2xl border border-border bg-background/20 bg-gradient-to-tr from-transparent via-transparent to-[rgb(133,94,255,0.25)] backdrop-blur-lg",
          className,
        )}
      >
        <Card2>
          <div className="mx-auto flex h-full flex-col items-center gap-8 p-6 py-10">
            <h3 className="text-2xl font-bold text-primary">{title}</h3>
            <p className="max-w-[380px] text-center text-base text-secondary-foreground/75 [text-wrap:balance]">
              {description}
            </p>
          </div>
        </Card2>
      </div>
    );
  }
}
