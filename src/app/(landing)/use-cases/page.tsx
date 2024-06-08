import { MaxWidthWrapper } from "@/components";
import PlainPageHeader from "@/components/plain-page-header";
import { USE_CASES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="min-h-[50vh] border-t border-border bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-lg">
      <div className="mx-auto w-full border-b bg-background/60">
        <MaxWidthWrapper className="w-full flex-grow">
          <PlainPageHeader
            title="Use Cases"
            description="Discover how Orgnise can help you reach your goals, no matter your team or workflow"
            className="border-none bg-transparent"
          />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="bg-gradient-to-b from-background/50 to-transparent pb-20 pt-10 backdrop-blur">
        <div className="not-prose grid gap-4 py-6 md:grid-cols-2 lg:grid-cols-3 px-2">
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
function FeatureCard({ name, description, icon, className ,href}: Prop) {
  return (
    <div
      className={cn(
        "group relative transform-gpu overflow-hidden rounded-xl border border-border  transition-shadow hover:shadow-md hover:shadow-gray-900/5 hover:border-primary/15 " ,
        className,
      )}
    >
      <div className={cn("bg-gradient-to-t from-white to-background backdrop-blur-lg/10 p-4 lg:p-8")}>
      {icon}
        <h3 className="mt-4 font-semibold leading-7 text-gray-900">
          <Link href={href}>
            <span className="absolute inset-0 rounded-2xl" />
            {name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
       
      </div>
    </div>
  );
}


