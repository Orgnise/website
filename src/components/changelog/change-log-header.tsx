import { TwitterIcon } from "@/components/icons";
import PlainPageHeader from "../plain-page-header";

export default function ChangeLogPageHeader() {
  return (
    <PlainPageHeader
      title="Changelog"
      description="All the latest updates, improvements, and fixes to Orgnise.in"
      bottomContent={
        <div className="absolute bottom-2 right-0 flex items-center space-x-2">
          <p className="text-sm text-gray-500">Subscribe to updates →</p>
          <a
            className="disabled:border-border0 border-border0 mx-auto max-w-fit rounded-full border bg-white px-2 py-2 text-sm font-medium text-gray-500 shadow-sm transition-all hover:border-gray-400 hover:text-gray-800 hover:ring-4 hover:ring-gray-200 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500 disabled:hover:ring-0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/orgniseapp"
          >
            <TwitterIcon />
          </a>
        </div>
      }
    />
  );
}
