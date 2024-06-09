import { ClientLink } from "@/components/client-link";
import ExpandingArrow from "@/components/icons/expanding-arrow";
import { TrackingEvents } from "@/lib/utility/analytics/events-type";

interface Props {
  article: {
    slug: string;
    title: string;
  };
  trackEvent?: {
    event: TrackingEvents[number];
    data?: { [key: string]: any };
  };
}
export default function HelpArticleLink({ article, trackEvent }: Props) {
  return (
    <ClientLink
      href={`/help/article/${article.slug}`}
      trackEvent={trackEvent}
      className="group flex items-center justify-between rounded-lg px-2 py-3 transition-colors hover:bg-purple-100 active:bg-purple-200 sm:px-4"
    >
      <h3 className="text-sm font-medium text-gray-600 group-hover:text-purple-600 sm:text-base">
        {article.title}
      </h3>
      <ExpandingArrow className="-ml-4 h-4 w-4 text-gray-400 group-hover:text-purple-600" />
    </ClientLink>
  );
}
