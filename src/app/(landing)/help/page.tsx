import { TwitterIcon } from "@/components";
import { MaxWidthWrapper } from "@/components";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import ChangeLogPageHeader from "@/components/changelog/change-log-header";
import PlainPageHeader from "@/components/plain-page-header";
import { HELP_CATEGORIES } from "@/lib/constants";
import CategoryCard from "@/components/ui/content/category-card";

export default function HelpPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full border-b bg-background">
        <MaxWidthWrapper className="w-full flex-grow">
          <PlainPageHeader
            title="Help Center"
            description="Find answers to your questions about the platform."
            className="border-none bg-transparent"
          />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="max-w-screen-lg bg-gradient-to-b from-background/50 to-transparent pb-20 pt-10 backdrop-blur">
        <div className="not-prose grid gap-4 py-6 md:grid-cols-2 lg:grid-cols-3">
          {HELP_CATEGORIES.map((category) => (
            <CategoryCard
              key={category.slug}
              href={`/help/category/${category.slug}`}
              name={category.title}
              description={category.description}
              icon={category.icon}
              pattern={{
                y: 16,
                squares: [
                  [0, 1],
                  [1, 3],
                ],
              }}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
