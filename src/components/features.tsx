import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card2 } from "./card";

export function Features() {
  return (
    <div
      id="features"
      className="w-full bg-gradient-to-b from-background/10 via-background/80 to-background/10 mb-10 sm:my-32"
    >
      <div className="mx-auto my-14 sm:max-w-2xl lg:my-20">
        <div className="flex items-end justify-center">
          <div className="relative z-10">
            <h2 className="font-display text-center text-4xl font-extrabold  sm:text-5xl">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-32">
        <div className="">
          <div className="flex flex-col justify-center gap-2">
            <div className="relative  w-full overflow-hidden whitespace-nowrap rounded-2xl bg-background  shadow-sm border">
              <Image
                src="/_static/create-team-2.png"
                className="bg-background object-cover "
                alt="Hero"
                width={1920}
                height={1080}
              />
            </div>
            <div className="mt-4">
              <h2 className="lg:text:6xl mb-3 text-2xl font-bold">Teams</h2>
              <p className="text-md text-zinc-500 lg:text-lg">
                Create your team to collaborate, organize all your work,
                projects and ideas in one place.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:translate-y-1/3">
          <div className="flex flex-col justify-center gap-2">
            <div className="relative  w-full overflow-hidden whitespace-nowrap rounded-2xl bg-background  shadow-sm border">
              <Image
                src="/_static/invite-team-member-2.png"
                className="bg-background object-cover "
                alt="Hero"
                width={1920}
                height={1080}
              />
            </div>
            <div className="mt-4">
              <h2 className="lg:text:6xl mb-3 text-2xl font-bold">
                Invite team members
              </h2>
              <p className="text-md text-zinc-500 lg:text-lg">
                Easy to invite team members to your team and start
                collaborating.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center gap-2">
            <div className="relative  w-full overflow-hidden whitespace-nowrap rounded-2xl bg-background  shadow-sm border">
              <Image
                src="/_static/workspaces.png"
                className="bg-background object-cover "
                alt="Hero"
                width={1920}
                height={1080}
              />
            </div>
            <div className="mt-4">
              <h2 className="lg:text:6xl mb-3 text-2xl font-bold">
                Workspaces
              </h2>
              <p className="text-md text-zinc-500 lg:text-lg">
                Create workspaces to organize your projects, ideas, and more.
                Invite team members to collaborate on projects, assign them to
                workspace as per their role.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:translate-y-1/3">
          <div className="flex flex-col justify-center gap-2">
            <div className="relative  w-full overflow-hidden whitespace-nowrap rounded-2xl bg-background  shadow-sm border">
              <Image
                src="/_static/hero-section.png"
                className="bg-background object-cover "
                alt="Hero"
                width={1920}
                height={1080}
              />
            </div>
            <div className="mt-4">
              <h2 className="lg:text:6xl mb-3 text-2xl font-bold">
                Collections
              </h2>
              <p className="text-md text-zinc-500 lg:text-lg">
                Put all the information related to your project in one place.
                and allows team members to work together in Orgnise instead of
                emailing back and forth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Features2() {
  return (
    <div className="w-full bg-gradient-to-b from-background/5 via-background/30 to-background/5 mb-10 sm:my-16 bg-accent/20">
      <div>
        <div className="mx-auto my-14 lg:my-20">
          <div className="flex items-end justify-center">
            <h2 className="font-display text-center text-4xl font-extrabold  sm:text-5xl">
              Centralize all your needs
            </h2>
          </div>
          <p className="mt-5 text-center text-muted-foreground/95 sm:text-lg">
            Easily manage knowledge, projects, idea-sharing, and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-2 w-full ">
          <Card
            className="to-[rgba(132,114,83,0.19)] bg-gradient-to-tl"
            title="One Tool, One Solution"
            description="Streamline your collaboration efforts by replacing multiple tools with just one, eliminating silos and reducing the need for constant context switching."
          />

          <Card
            className="to-[rgba(255,102,68,0.07)] bg-gradient-to-b "
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
          "relative overflow-hidden border border-border rounded-2xl backdrop-blur-lg bg-gradient-to-tr bg-background/20 from-transparent via-transparent to-[rgb(133,94,255,0.25)] cursor-default relative",
          className,
        )}
      >
        <Card2>
          <div className="flex flex-col gap-8 items-center p-6 py-10 h-full">
            <h3 className="text-2xl font-bold text-primary">{title}</h3>
            <p className="text-center max-w-[380px] text-base text-secondary-foreground/75">
              {description}
            </p>
          </div>
        </Card2>
      </div>
    );
  }
}
