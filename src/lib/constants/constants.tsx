import { Logo } from "@/components/ui/logo";
import type { JSX } from "react";
import {
  BookCopyIcon,
  BookTextIcon,
  BookUserIcon,
  BracesIcon,
  Building,
  CircleDollarSignIcon,
  CodeIcon,
  FolderKanban,
  Gamepad2Icon,
  GripIcon,
  HeadsetIcon,
  LayoutGrid,
  LayoutGridIcon,
  ListChecksIcon,
  RadioIcon,
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

export const USE_CASES_ARTICLES = [
  "project-management",
  "knowledge-sharing",
  "customer-support",
  "sales",
  "product",
  "engineering",
  "marketing",
  "publishers",
  "human-resource",
  "game-development",
  "onboarding-and-training",
  "company-wide-collaboration",
  "technical-documentation",
] as const;
export const USE_CASES: {
  title: string;
  slug: (typeof USE_CASES_ARTICLES)[number];
  description: string;
  icon: JSX.Element;
}[] = [
  {
    slug: "project-management",
    title: "Project Management",
    description:
      "Plan, track, and manage projects more effectively with a centralized knowledge base.",
    icon: <GripIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    slug: "knowledge-sharing",
    title: "Knowledge Sharing",
    description:
      "Fostering Knowledge Sharing and Collaboration with a Knowledge Base.",
    icon: <BookTextIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    slug: "customer-support",
    title: "Customer Support",
    description:
      "Centralized knowledge base to store and share customer support articles, FAQs, and troubleshooting guides",
    icon: <HeadsetIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    slug: "sales",
    title: "Sales",
    description: "Manage your sales process and close deals faster.",
    icon: <CircleDollarSignIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    slug: "product",
    title: "Product",
    description:
      "Brainstorm, plan, and develop products with a centralized knowledge base.",
    icon: <LayoutGridIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    slug: "engineering",
    title: "Engineering",
    description: "Your engineering team's single source of truth",
    icon: <CodeIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    slug: "marketing",
    title: "Marketing",
    description:
      "Manage marketing materials, campaign results, and customer insights in a centralized knowledge base.",
    icon: <RadioIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    slug: "publishers",
    title: "Publishers",
    description:
      "Keep your content organized and accessible with a centralized knowledge base.",
    icon: <BookCopyIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    slug: "human-resource",
    title: "Human Resources",
    description:
      "Capture, organize, and share HR policies, procedures, and training materials in a centralized knowledge base.",
    icon: <BookUserIcon className="h-6 w-6 text-gray-500" />,
  },
  // {
  //   slug: "game-development",
  //   title: "Game Development",
  //   description:
  //     "Create game, organize assets, and share knowledge with a centralized knowledge base.",
  //   icon: <Gamepad2Icon className="h-6 w-6 text-gray-500" />,
  // },
  {
    slug: "onboarding-and-training",
    title: "Onboarding and Training",
    description: "Accelerating Employee Onboarding with a Knowledge Base",
    icon: <ListChecksIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    slug: "company-wide-collaboration",
    title: "Company Wide Collaboration",
    description:
      "Align teammates on a single tool so everyone knows where to go for all the information.",
    icon: <Building className="h-6 w-6 text-gray-500" />,
  },
  {
    slug: "technical-documentation",
    title: "Technical Documentation",
    description:
      "Centralized knowledge base to store and share technical documentation, API references, and code snippets.",
    icon: <BracesIcon className="h-6 w-6 text-gray-500" />,
  },
];

export const getPopularArticles = (slug: string) => {
  const article = HELP_CATEGORIES.find((article) => article.slug === slug);

  return article;
};
