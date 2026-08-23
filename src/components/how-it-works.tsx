import { FolderKanban, LayoutGrid, PenLine, Users } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Start a team",
    description:
      "Invite people into one shared space so work is not scattered across chats and drives.",
    icon: Users,
  },
  {
    step: "02",
    title: "Open a workspace",
    description:
      "Group work by project or function — design, marketing, engineering, or a new launch.",
    icon: LayoutGrid,
  },
  {
    step: "03",
    title: "Write in the editor",
    description:
      "Draft docs that look the way you write them, with headings, lists, and embeds in one page.",
    icon: PenLine,
  },
  {
    step: "04",
    title: "Move work on a board",
    description:
      "Turn a collection into columns and watch the same pages move through your workflow.",
    icon: FolderKanban,
  },
] as const;

export function HowItWorks() {
  return (
    <section id="features" className="scroll-mt-20 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          How teams use Orgnise
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Four steps from an empty team to a living workspace.
        </p>
      </div>
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(({ step, title, description, icon: Icon }) => (
          <li
            key={step}
            className="rounded-xl border border-border bg-background/80 p-6"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="text-xs font-semibold tracking-widest text-muted-foreground">
                {step}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
