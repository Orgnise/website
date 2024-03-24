const BUSINESS_PLAN_MODIFIER = ({
  name = "Business",
  monthly = 49,
  yearly = 39,
  team = 1,
  workspace = 20,
  pages = 20,
  users = 12,
}: {
  name: string;
  monthly: number;
  yearly: number;
  team: number;
  workspace: number;
  pages: number;
  users: number;
}) => ({
  name: name,
  tagline: "For larger teams with increased usage",
  link: "#",
  price: {
    monthly,
    yearly,
  },
  limits: {
    team,
    workspace,
    pages,
    users,
  },
  colors: {
    bg: "bg-sky-900",
    text: "text-sky-900",
  },
  cta: {
    text: "Get started with Business",
    shortText: "Get started",
    href: "#",
    color: "bg-sky-900 border-sky-900 hover:text-sky-900",
  },
  featureTitle: "Everything in Pro, plus:",
  features: [
    { text: `${users} users` },
    {
      text: `${workspace} workspace`,
    },
    {
      text: `${pages} pages`,
      footnote: {
        title: "Counted as the total number of collections and pages.",
        cta: "Learn more.",
        href: "#",
      },
    },
    { text: "Email and chat support", footnote: "Email and chat support." },
  ],
});

export const PLANS = [
  {
    name: "Free",
    tagline: "For hobby & side projects",
    price: {
      monthly: 0,
      yearly: 0,
    },
    limits: {
      team: 1,
      workspace: 3,
      pages: 30,
      users: 1,
    },
    colors: {
      bg: "bg-black",
      text: "text-black",
    },
    cta: {
      text: "Start for free",
      href: "#",
      color: "bg-black border-black hover:text-black",
    },
    featureTitle: "What's included:",
    features: [
      { text: "1 user" },
      {
        text: "Up to 3 Workspaces",
      },
      { text: "upto 30 pages " },
      {
        text: "Community support",
        footnote: "Help center + GitHub discussions.",
      },
    ],
  },
  {
    name: "Pro",
    tagline: "For startups & small businesses",
    price: {
      monthly: 19,
      yearly: 15,
    },
    limits: {
      team: 1,
      workspace: 3,
      pages: 35,
      users: 1,
    },
    colors: {
      bg: "bg-violet-600",
      text: "text-violet-600",
    },
    cta: {
      text: "Contact us",
      href: "/enterprise",
      color: "bg-violet-600 border-violet-600 hover:text-violet-600",
    },
    featureTitle: "Everything in Free, plus:",
    features: [
      { text: "5 user" },
      { text: "9 Workspaces" },
      { text: "70 pages" },
      { text: "Email support", footnote: "Basic email support." },
    ],
  },
  BUSINESS_PLAN_MODIFIER({
    name: "Business",
    monthly: 49,
    yearly: 39,
    pages: 150,
    users: 12,
    team: 1,
    workspace: 20,
  }),
  ,
  {
    name: "Enterprise",
    tagline:
      "Custom tailored plans for large enterprises. Whether you're running a SMS campaign with millions of short links or a large marketing campaign with billions of clicks, we've got you covered.",
    link: "https://organise.in/enterprise",
    price: {
      monthly: null,
      yearly: null,
    },
    limits: {
      links: null,
      clicks: null,
      domains: null,
    },
    colors: {
      bg: "bg-violet-600",
      text: "text-violet-600",
    },
    cta: {
      text: "Contact us",
      href: "/enterprise",
      color: "bg-violet-600 border-violet-600 hover:text-violet-600",
    },
    featureTitle: "Everything in Business, plus:",
    features: [
      { text: "Custom usage limits" },
      { text: "Dedicated success manager" },
      { text: "Priority support" },
      { text: "Dedicated Slack channel" },
    ],
  },
];

export const FREE_PLAN = PLANS.find((plan) => plan?.name === "Free")!;
export const PRO_PLAN = PLANS.find((plan) => plan?.name === "Pro")!;
export const BUSINESS_PLAN = PLANS.find((plan) => plan?.name === "Business")!;
export const ENTERPRISE_PLAN = PLANS.find(
  (plan) => plan?.name === "Enterprise",
)!;

export const PUBLIC_PLANS = [
  FREE_PLAN,
  PRO_PLAN,
  BUSINESS_PLAN,
  ENTERPRISE_PLAN,
];
