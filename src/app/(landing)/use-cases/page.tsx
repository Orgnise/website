import { MaxWidthWrapper } from "@/components";
import { ClientLink } from "@/components/client-link";
import DotPattern from "@/components/pattern/dot-background";
import PlainPageHeader from "@/components/plain-page-header";
import { USE_CASES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="min-h-[50vh] border-t border-border bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-lg">
      <DotPattern className="mx-auto w-full border-b">
        <MaxWidthWrapper className="w-full flex-grow">
          <PlainPageHeader
            title="Use Cases"
            description="Discover how Orgnise can help you reach your goals, no matter your team or workflow"
            className="border-none bg-transparent"
          />
        </MaxWidthWrapper>
      </DotPattern>
      <MaxWidthWrapper className="bg-gradient-to-b from-background/50 to-transparent pb-20 pt-10 backdrop-blur">
        <div className="not-prose grid gap-4 px-2 py-6 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((usecase) => (
            <FeatureCard
              key={usecase.slug}
              href={`use-cases/${usecase.slug}`}
              name={usecase.title}
              description={usecase.description}
              icon={usecase.icon}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

interface Prop {
  name: string;
  description: string;
  icon: JSX.Element;
  className?: string;
  href: string;
}
function FeatureCard({ name, description, icon, className, href }: Prop) {
  return (
    <div
      className={cn(
        "group relative h-full w-full transform-gpu overflow-hidden rounded-xl border border-border transition-shadow hover:border-primary/15 hover:shadow-md hover:shadow-gray-900/5",
        className,
      )}
    >
      <div
        className={cn(
          "p-4 lg:p-8",
          // "backdrop-blur-lg/10 bg-gradient-to-t from-white/5 to-background/5 ",
        )}
      >
        {icon}
        <h3 className="mt-4 font-semibold leading-7 text-gray-900">
          <ClientLink
            href={href}
            trackEvent={{
              event: "usecase-article-clicked",
              data: { usecase: name, path: href },
            }}
          >
            <span className="absolute inset-0 rounded-2xl" />
            {name}
          </ClientLink>
        </h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
