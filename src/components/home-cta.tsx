import { ClientLink } from "@/components/client-link";
import { AUTH_SIGNUP_URL } from "@/lib/constants";
import Link from "next/link";

const DARK = "#0a0a0a";

export function HomeCta() {
  return (
    <section id="get-started" className="relative">
      <CtaBackdrop />
      <div aria-hidden className="h-16" />
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-4 pb-20 pt-16 text-center sm:pb-28 sm:pt-30">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white/90 sm:text-5xl">
          Start organizing with your team
        </h2>
        <p className="mt-6 max-w-[560px] text-pretty text-lg font-medium text-neutral-400 sm:text-xl">
          Create a free workspace and bring docs, collections, and boards into
          one place.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <ClientLink
            href={AUTH_SIGNUP_URL}
            className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
            trackEvent={{
              event: "signup-for-free-CTA-clicked",
              data: { place: "home-cta" },
            }}
          >
            Get started
          </ClientLink>
          <Link
            href="/pricing"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-white/10 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

function CtaBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <svg className="absolute inset-0 size-full">
        <defs>
        <mask
          id="home-cta-fill"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
        >
          <rect width="100%" height="100%" fill="white" />
          <svg x="50%" y="0" overflow="visible">
            <svg x="-320" y="0" width="640" height="64" viewBox="0 0 640 64">
              <path
                fill="black"
                d="M50 45C57.3095 56.6952 71.2084 63.9997 85 64V0H0C13.7915 0 26.6905 7.30481 34 19L50 45Z"
              />
              <rect x="85" y="0" width="470" height="64" fill="black" />
              <path
                fill="black"
                d="M590 45C582.6905 56.6952 568.7916 63.9997 555 64V0H640C626.2085 0 613.3095 7.30481 606 19L590 45Z"
              />
            </svg>
          </svg>
        </mask>
        <radialGradient
          id="cta-glow-clip"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="96"
          r="200"
        >
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="50%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask
          id="cta-glow-mask"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
        >
          <rect width="100%" height="100%" fill="url(#cta-glow-clip)" />
        </mask>
        <radialGradient
          id="cta-glow"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="96"
          r="180"
        >
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.22" />
          <stop offset="70%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cta-rainbow" x1="30%" y1="0%" x2="70%" y2="0%">
          <stop offset="0%" stopColor="rgb(68, 255, 154)" />
          <stop offset="25%" stopColor="rgb(68, 176, 255)" />
          <stop offset="50%" stopColor="rgb(139, 68, 255)" />
          <stop offset="75%" stopColor="rgb(255, 102, 68)" />
          <stop offset="100%" stopColor="rgb(235, 255, 112)" />
        </linearGradient>
      </defs>
      <g mask="url(#home-cta-fill)">
        <rect width="100%" height="100%" fill={DARK} />
        <g mask="url(#cta-glow-mask)">
          <rect width="100%" height="100%" fill="url(#cta-glow)" />
          <rect
            width="100%"
            height="100%"
            fill="url(#cta-rainbow)"
            opacity="0.12"
          />
        </g>
      </g>
    </svg>
    <svg
      className="pointer-events-none absolute inset-0 text-white/15 mask-intersect mask-[linear-gradient(black,transparent),radial-gradient(black,transparent),url(#home-cta-fill)] [-webkit-mask-composite:source-in]"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id="cta-grid"
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
      <rect fill="url(#cta-grid)" width="100%" height="100%" />
    </svg>
    </div>
  );
}
