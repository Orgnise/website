import { Logo } from "@/components/ui/logo";
import {
  Building,
  FolderKanban,
  LayoutGrid,
  Settings,
  ShieldCheck,
  SquareGanttChart,
} from "lucide-react";

export const APP_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? `https://app.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000";

export const HOME_DOMAIN = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`;

export const POPULAR_ARTICLES = [
  "what-is-orgnise",
  "what-is-team",
  "what-is-workspace",
  "what-is-collection",
  "what-is-page",
  "team",
];

export const HELP_ARTICLES = [
  "overview",
  "getting-started",
  "team",
  "workspace",
  "collection",
  "page",
  "account",
  "role",
  "plan",
] as const;

export const HELP_CATEGORIES: {
  title: string;
  slug: (typeof HELP_ARTICLES)[number];
  description: string;
  icon: JSX.Element;
}[] = [
  {
    title: "Orgnise Overview",
    slug: "overview",
    description: "Learn about Orgnise and how it can help you.",
    icon: <Logo className="h-6 w-6 text-gray-500" />,
  },
  // {
  //   title: "Getting Started",
  //   slug: "getting-started",
  //   description: "Learn how to get started with Orgnise.",
  //   icon: <Settings className="h-6 w-6 text-gray-500" />,
  // },
  {
    title: "Team",
    slug: "team",
    description: "Learn how to manage your team in Orgnise.",
    icon: <Building className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "Workspace",
    slug: "workspace",
    description: "Learn how to manage your workspaces in Orgnise.",
    icon: <LayoutGrid className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "Collection",
    slug: "collection",
    description: "Learn how to manage your collections in Orgnise.",
    icon: <FolderKanban className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "Page",
    slug: "page",
    description: "Learn how to manage your pages in Orgnise.",
    icon: <SquareGanttChart className="h-6 w-6 text-gray-500" />,
  },
  // {
  //   title: "Account",
  //   slug: "account",
  //   description: "Learn how to manage your account in Orgnise.",
  //   icon: <ShieldCheck className="h-6 w-6 text-gray-500" />,
  // },
  {
    title: "Roles and Permission",
    slug: "role",
    description: "Learn how to manage roles and permissions in Orgnise.",
    icon: <ShieldCheck className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "Plan and Billing",
    slug: "plan",
    description: "Learn how to manage roles and permissions in Orgnise.",
    icon: <ShieldCheck className="h-6 w-6 text-gray-500" />,
  },
];

export const getPopularArticles = (slug: string) => {
  const article = HELP_CATEGORIES.find((article) => article.slug === slug);

  return article;
};
