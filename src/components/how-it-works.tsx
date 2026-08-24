import { cn } from "@/lib/utils";
import Image from "next/image";
import { GlowingStarsBackgroundCard } from "./glowing-stars";

const STEPS = [
  {
    title: "Start a team",
    description:
      "Invite people into one shared space so work is not scattered across chats and drives.",
    image: "/_static/create-team-2.png",
    imageAlt: "Creating a team and inviting members in Orgnise",
    className: "bg-gradient-to-tl from-indigo-900/10 to-indigo-900/5",
  },
  {
    title: "Open a workspace",
    description:
      "Group work by project or function — design, marketing, engineering, or a new launch.",
    image: "/_static/workspaces.png",
    imageAlt: "Orgnise workspaces grouped by project",
    className:
      "bg-gradient-to-tl from-indigo-900/10 to-indigo-900/5 sm:translate-y-1/4",
  },
  {
    title: "Write in the editor",
    description:
      "Draft docs that look the way you write them, with headings, lists, and embeds in one page.",
    image: "/_static/rich-editor.png",
    imageAlt: "Orgnise rich text editor with a formatted page",
    className: "bg-gradient-to-tl from-indigo-900/10 to-indigo-900/5",
  },
  {
    title: "Move work on a board",
    description:
      "Turn a collection into columns and watch the same pages move through your workflow.",
    image: "/_static/board-view.png",
    imageAlt: "Collection shown as a kanban board in Orgnise",
    className:
      "bg-gradient-to-tl from-indigo-900/10 to-indigo-900/5 sm:translate-y-1/4",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="features"
      className="scroll-mt-20 mb-10 w-full bg-gradient-to-b from-background/10 via-background/80 to-background/10 px-4 sm:my-32"
    >
      <div className="mx-auto my-14 sm:max-w-2xl lg:my-20">
        <h2 className="font-display text-center text-4xl font-extrabold sm:text-5xl">
          How teams use Orgnise
        </h2>
        <p className="mt-5 text-center text-muted-foreground/95 sm:text-lg">
          Four steps from an empty team to a living workspace.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 space-y-8 sm:grid-cols-2">
        {STEPS.map((step) => (
          <FeatureCard
            key={step.title}
            title={step.title}
            description={step.description}
            image={step.image}
            imageAlt={step.imageAlt}
            className={step.className}
          />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  image,
  imageAlt,
  className,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  className: string;
}) {
  return (
    <GlowingStarsBackgroundCard
      disabledGlow
      className={cn(
        "relative h-[440px] transform-gpu overflow-hidden rounded-xl border border-border p-4 lg:p-8 xl:h-[480px]",
        className,
      )}
    >
      <div className="highlight-white-md bg-gray-750/60 relative z-30">
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
              alt={imageAlt}
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
