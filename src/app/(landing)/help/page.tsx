import { MaxWidthWrapper } from "@/components";
import PlainPageHeader from "@/components/plain-page-header";
import CategoryCard from "@/components/ui/content/category-card";
import { HELP_CATEGORIES } from "@/lib/constants";

export default function HelpPage() {
  return (
    <div className="min-h-[50vh] border-t border-border bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-lg">
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
              trackEvent={{
                event: `help-${category.slug}-clicked` as any,
                data: {
                  category: category.slug,
                  href: `/help/category/${category.slug}`,
                  name: category.title,
                },
              }}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
