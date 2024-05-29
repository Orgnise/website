import { TwitterIcon } from "@/components/icons/twitter-icon";

export default function ChangeLogPageHeader() {
  return (
    <div className="border-border0 relative grid w-full border-b bg-background py-20 md:grid-cols-4">
      <div className="md:col-span-1"></div>
      <div className="mx-5 flex flex-col space-y-6 md:col-span-3 md:mx-0">
        <h1 className="font-display text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
          Changelog
        </h1>
        <p className="text-lg text-gray-500">
          All the latest updates, improvements, and fixes to Orgnise.in
        </p>
      </div>
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
    </div>
  );
}
