import {
  LockOpen,
  LucidePencilRuler,
  RocketIcon,
  SquareLibrary,
} from "lucide-react";

export function OurValues() {
  return (
    <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Our values
        </h2>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-secondary-foreground/75 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
        <ValueCard
          icon={
            <RocketIcon
              size={24}
              className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
            />
          }
          title="Help you grow."
          description="Our goal is to support your business growth by offering the necessary tools and resources for success."
        />
        <ValueCard
          icon={
            <LucidePencilRuler
              size={24}
              className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
            />
          }
          title="Craft the best."
          description="We value feedback and are committed to enhancing our products. We continuously refine our tools to ensure they meet your needs and expectations."
        />
        <ValueCard
          icon={
            <LockOpen
              size={24}
              className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
            />
          }
          title="Reasonable pricing."
          description="Our aim is to ensure that our tools are available to all size of business. We are dedicated to maintaining affordable prices so that as many business as possible can benefit from using our tools."
        />
        <ValueCard
          icon={
            <SquareLibrary
              size={24}
              className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
            />
          }
          title="Share everything we know."
          description="We continually learn and are committed to sharing our knowledge with you. We will provide you with valuable tips and tricks to support the growth of your business."
        />
      </dl>
    </div>
  );
}

interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
}
function ValueCard({ description, icon, title }: Props) {
  return (
    <div className="relative pl-9">
      <dt className="inline font-semibold">
        {icon}
        {title}
      </dt>{" "}
      <dd className="inline">{description}</dd>
    </div>
  );
}
