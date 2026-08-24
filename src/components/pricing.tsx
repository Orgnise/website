import { AUTH_SIGNUP_URL } from "@/lib/constants";

export type PlanFeature = {
  text: string;
  detail?: string;
  href?: string;
};

export type Plan = {
  name: string;
  tagline: string;
  link?: string;
  price: {
    monthly: number | null;
    yearly: number | null;
    ids: string[];
  };
  limits: {
    workspace: number | null;
    pages: number | null;
    users: number | null;
  };
  cta: {
    text: string;
    href: string;
    isExternalLink?: boolean;
  };
  featureTitle: string;
  features: PlanFeature[];
};

export const PLANS: Plan[] = [
  {
    name: "Free",
    tagline: "For trying Orgnise with a small project",
    price: {
      monthly: 0,
      yearly: 0,
      ids: [],
    },
    limits: {
      workspace: 3,
      pages: 30,
      users: 1,
    },
    cta: {
      text: "Start for free",
      href: AUTH_SIGNUP_URL,
      isExternalLink: true,
    },
    featureTitle: "What's included",
    features: [
      { text: "Docs, collections, and boards" },
      { text: "1 user" },
      { text: "3 workspaces" },
      {
        text: "30 pages",
        detail: "Pages and collections count toward this limit.",
        href: "/help/article/what-is-page",
      },
      {
        text: "Community support",
        detail: "Help center and GitHub discussions.",
      },
    ],
  },
  {
    name: "Pro",
    tagline: "For startups and small teams",
    price: {
      monthly: 24,
      yearly: 19,
      ids: [],
    },
    limits: {
      workspace: 10,
      pages: 200,
      users: 5,
    },
    cta: {
      text: "Get started with Pro",
      href: AUTH_SIGNUP_URL,
      isExternalLink: true,
    },
    featureTitle: "Everything in Free, plus",
    features: [
      { text: "5 users" },
      { text: "10 workspaces" },
      {
        text: "200 pages",
        detail: "Pages and collections count toward this limit.",
        href: "/help/article/what-is-page",
      },
      { text: "Email support" },
    ],
  },
  {
    name: "Business",
    tagline: "For teams that need more room and support",
    price: {
      monthly: 59,
      yearly: 49,
      ids: [],
    },
    limits: {
      workspace: 30,
      pages: 600,
      users: 10,
    },
    cta: {
      text: "Get started with Business",
      href: AUTH_SIGNUP_URL,
      isExternalLink: true,
    },
    featureTitle: "Everything in Pro, plus",
    features: [
      { text: "10 users" },
      { text: "30 workspaces" },
      {
        text: "600 pages",
        detail: "Pages and collections count toward this limit.",
        href: "/help/article/what-is-page",
      },
      { text: "Email and chat support" },
    ],
  },
  {
    name: "Enterprise",
    tagline:
      "Custom limits, a dedicated success manager, and priority support for larger organizations.",
    link: "/enterprise",
    price: {
      monthly: null,
      yearly: null,
      ids: [],
    },
    limits: {
      workspace: null,
      pages: null,
      users: null,
    },
    cta: {
      text: "Contact us",
      href: "/enterprise",
      isExternalLink: false,
    },
    featureTitle: "Everything in Business, plus",
    features: [
      { text: "Custom usage limits" },
      { text: "Dedicated success manager" },
      { text: "Priority support" },
      { text: "Dedicated Slack channel" },
    ],
  },
];

export const FREE_PLAN = PLANS.find((plan) => plan.name === "Free")!;
export const PRO_PLAN = PLANS.find((plan) => plan.name === "Pro")!;
export const BUSINESS_PLAN = PLANS.find((plan) => plan.name === "Business")!;
export const ENTERPRISE_PLAN = PLANS.find(
  (plan) => plan.name === "Enterprise",
)!;

export const PUBLIC_PLANS = [
  FREE_PLAN,
  PRO_PLAN,
  BUSINESS_PLAN,
  ENTERPRISE_PLAN,
];

export const SELF_SERVE_PAID_PLANS = PLANS.filter(
  (plan) => plan.name !== "Free" && plan.name !== "Enterprise",
);

export const FREE_WORKSPACES_LIMIT = 3;

export const getPlanFromPriceId = (priceId: string) => {
  return PLANS.find((plan) => plan.price.ids.includes(priceId)) || null;
};

export const getPlanDetails = (plan: string) => {
  return SELF_SERVE_PAID_PLANS.find(
    (item) => item.name.toLowerCase() === plan.toLowerCase(),
  )!;
};

export const getNextPlan = (plan?: string | null) => {
  if (!plan) return PRO_PLAN;
  return PLANS[
    PLANS.findIndex((item) => item.name.toLowerCase() === plan.toLowerCase()) +
      1
  ];
};
