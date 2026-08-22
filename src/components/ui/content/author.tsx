import { BlurImage } from "@/components/";
import { timeAgo } from "@/lib/functions";
import Link from "next/link";

export default async function Author({
  username,
  updatedAt,
  imageOnly,
}: {
  username: string;
  updatedAt?: string;
  imageOnly?: boolean;
}) {
  const authors = {
    ["TheAlphamerc"]: {
      name: "Sonu Sharma",
      image:
        "https://avatars.githubusercontent.com/u/37103237?s=80&v=4",
    },
  };

  return imageOnly ? (
    <BlurImage
      src={authors["TheAlphamerc"].image}
      alt={authors["TheAlphamerc"].name}
      width={36}
      height={36}
      className="rounded-full transition-all group-hover:brightness-90"
    />
  ) : updatedAt ? (
    <div className="flex items-center space-x-3">
      <BlurImage
        src={authors["TheAlphamerc"].image}
        alt={authors["TheAlphamerc"].name}
        width={36}
        height={36}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <p className="text-sm text-gray-500">
          Written by {authors["TheAlphamerc"].name}
        </p>
        <time dateTime={updatedAt} className="text-sm font-light text-gray-400">
          Last updated {timeAgo(new Date(updatedAt))}
        </time>
      </div>
    </div>
  ) : (
    <Link
      href={`https://twitter.com/${username}`}
      className="group flex items-center space-x-3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BlurImage
        src={authors["TheAlphamerc"].image}
        alt={authors["TheAlphamerc"].name}
        width={40}
        height={40}
        className="rounded-full transition-all group-hover:brightness-90"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-gray-700">
          {authors["TheAlphamerc"].name}
        </p>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>
    </Link>
  );
}
