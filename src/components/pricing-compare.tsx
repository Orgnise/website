import {
  BUSINESS_PLAN,
  ENTERPRISE_PLAN,
  FREE_PLAN,
  PRO_PLAN,
} from "@/components/pricing";
import { Check } from "lucide-react";

const COLUMNS = [FREE_PLAN, PRO_PLAN, BUSINESS_PLAN, ENTERPRISE_PLAN] as const;

type Cell = string | true | false;

const ROWS: { label: string; values: Cell[] }[] = [
  {
    label: "Docs, collections, and boards",
    values: [true, true, true, true],
  },
  {
    label: "Users",
    values: [
      `${FREE_PLAN.limits.users}`,
      `${PRO_PLAN.limits.users}`,
      `${BUSINESS_PLAN.limits.users}`,
      "Custom",
    ],
  },
  {
    label: "Workspaces",
    values: [
      `${FREE_PLAN.limits.workspace}`,
      `${PRO_PLAN.limits.workspace}`,
      `${BUSINESS_PLAN.limits.workspace}`,
      "Custom",
    ],
  },
  {
    label: "Pages",
    values: [
      `${FREE_PLAN.limits.pages}`,
      `${PRO_PLAN.limits.pages}`,
      `${BUSINESS_PLAN.limits.pages}`,
      "Custom",
    ],
  },
  {
    label: "Support",
    values: ["Community", "Email", "Email and chat", "Priority + Slack"],
  },
  {
    label: "Dedicated success manager",
    values: [false, false, false, true],
  },
  {
    label: "Custom usage limits",
    values: [false, false, false, true],
  },
];

export function PricingCompare() {
  return (
    <section className="relative mt-16 overflow-hidden border-y border-border bg-zinc-50/50 dark:bg-muted">
      <ComparePattern />
      <div className="relative mx-auto w-full max-w-5xl px-4 py-16 text-left sm:py-20">
        <h2 className="font-display text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Compare plans
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
          Every plan includes the editor, collections, and boards. Limits and
          support scale as the team grows.
        </p>
        <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-background shadow-sm">
          <table className="w-full min-w-160 border-collapse text-sm">
            <caption className="sr-only">
              Feature comparison across Free, Pro, Business, and Enterprise
            </caption>
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-muted-foreground"
                >
                  Feature
                </th>
                {COLUMNS.map((plan) => (
                  <th
                    key={plan.name}
                    scope="col"
                    className="px-4 py-3 text-center font-semibold"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-border last:border-0"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 text-left font-medium text-foreground"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, index) => (
                    <td
                      key={`${row.label}-${COLUMNS[index].name}`}
                      className="px-4 py-3 text-center text-muted-foreground"
                    >
                      <CompareCell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CompareCell({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <Check className="mx-auto size-4 text-primary" aria-label="Included" />
    );
  }
  if (value === false) {
    return (
      <span className="text-muted-foreground/50" aria-label="Not included">
        —
      </span>
    );
  }
  return <span>{value}</span>;
}

function ComparePattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 text-indigo-950/15 mask-add mask-[radial-gradient(ellipse_62%_90%_at_0%_0%,black_22%,transparent_68%),radial-gradient(ellipse_62%_90%_at_100%_0%,black_22%,transparent_68%)]"
    >
      <svg className="size-full">
        <defs>
          <pattern
            id="pricing-compare-grid"
            x="-1"
            y="-1"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pricing-compare-grid)" />
      </svg>
    </div>
  );
}
