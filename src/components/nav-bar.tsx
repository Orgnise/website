"use client";
import { AUTH_APP_URL, AUTH_LOGIN_URL, AUTH_SIGNUP_URL } from "@/lib/constants";
import { TrackingEvents } from "@/lib/utility/analytics/events-type";
import { track } from "@/lib/utility/analytics/tracking";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "./ui/navlink";

const TABS: {
  name: string;
  segment: string;
  trackEvent: TrackingEvents[number];
}[] = [
  {
    name: "How it works",
    segment: "/#features",
    trackEvent: "menu-features-clicked",
  },
  {
    name: "Pricing",
    segment: "/pricing",
    trackEvent: "menu-pricing-clicked",
  },
  {
    name: "Enterprise",
    segment: "/enterprise",
    trackEvent: "menu-enterprise-clicked",
  },
  {
    name: "Use Cases",
    segment: "/use-cases",
    trackEvent: "menu-usecase-clicked",
  },
  {
    name: "Help",
    segment: "/help",
    trackEvent: "menu-help-clicked",
  },
  {
    name: "Changelog",
    segment: "/changelog",
    trackEvent: "menu-changelog-clicked",
  },
];

export function Navbar() {
  const [top, setTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const session = useSession();
  const status = session.status;
  const isLoading = status === "loading";
  const isSignedIn = Boolean(session.data);

  useEffect(() => {
    const handleScroll = () => setTop(window.scrollY <= 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div
      className={clsx("fixed inset-x-0 top-0 z-30 w-full transition-all", {
        "border-b border-border bg-background/10 backdrop-blur-lg dark:bg-background":
          !top || menuOpen,
      })}
    >
      <div className="mx-auto w-full px-2.5 lg:px-20">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-1"
              onClick={() => {
                track("menu-logo-clicked", { place: "navbar" });
                closeMenu();
              }}
            >
              <Image
                src="/_static/logo.svg"
                alt="Orgnise Logo"
                className="dark:invert"
                width={30}
                height={30}
                priority
              />
              <h1 className="text-2xl font-bold">Orgnise</h1>
            </Link>
            <nav className="hidden items-center font-medium text-secondary-foreground/85 lg:flex">
              {TABS.map(({ name, segment, trackEvent }) => (
                <NavLink
                  key={segment}
                  segment={segment}
                  onClick={() => {
                    track(trackEvent, { place: "navbar" });
                  }}
                >
                  {name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            {isSignedIn ? (
              <Link
                className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                href={AUTH_APP_URL}
              >
                Dashboard
              </Link>
            ) : isLoading ? null : (
              <div className="flex items-center">
                <Link
                  className="hidden rounded-full px-4 py-1.5 text-sm font-medium text-secondary-foreground/85 transition-colors hover:text-foreground sm:inline-flex"
                  href={AUTH_LOGIN_URL}
                  onClick={() => {
                    track("menu-login-clicked", { place: "navbar" });
                  }}
                >
                  Log in
                </Link>
                <Link
                  className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                  href={AUTH_SIGNUP_URL}
                  onClick={() => {
                    track("menu-signup-clicked", { place: "navbar" });
                  }}
                >
                  Sign Up
                </Link>
              </div>
            )}
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-nav"
            className="flex flex-col gap-1 border-t border-border py-3 lg:hidden"
          >
            {TABS.map(({ name, segment, trackEvent }) => (
              <NavLink
                key={segment}
                segment={segment}
                onClick={() => {
                  track(trackEvent, { place: "navbar" });
                  closeMenu();
                }}
              >
                {name}
              </NavLink>
            ))}
            {!isSignedIn && !isLoading ? (
              <div className="mt-2 flex flex-col gap-2 px-2.5 sm:hidden">
                <Link
                  className="rounded-full px-4 py-2 text-sm font-medium text-secondary-foreground"
                  href={AUTH_LOGIN_URL}
                  onClick={() => {
                    track("menu-login-clicked", { place: "navbar" });
                    closeMenu();
                  }}
                >
                  Log in
                </Link>
                <Link
                  className="rounded-full border border-black bg-black px-4 py-2 text-center text-sm text-white"
                  href={AUTH_SIGNUP_URL}
                  onClick={() => {
                    track("menu-signup-clicked", { place: "navbar" });
                    closeMenu();
                  }}
                >
                  Sign Up
                </Link>
              </div>
            ) : null}
          </nav>
        ) : null}
      </div>
    </div>
  );
}
