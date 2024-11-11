"use client";
import { TrackingEvents } from "@/lib/utility/analytics/events-type";
import { track } from "@/lib/utility/analytics/tracking";
import { clsx } from "clsx";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "./ui/navlink";
export function Navbar() {
  const [top, setTop] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => setTop(window.scrollY <= 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  type tabs = {
    name: string;
    segment: string;
    trackEvent: TrackingEvents[number];
  }[];
  const session = useSession();
  const status = session.status;
  const isLoading = status === "loading";
  const tabs: tabs = [
    {
      name: "Features",
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
      name: "ChangeLog",
      segment: "/changelog",
      trackEvent: "menu-changelog-clicked",
    },
  ] as const;
  return (
    <div
      className={clsx("fixed inset-x-0 top-0 z-30 w-full transition-all", {
        "border-b border-border bg-background/10 backdrop-blur-lg dark:bg-background":
          !top,
      })}
    >
      <div className="mx-auto w-full px-2.5 lg:px-20">
        <div className="flex h-14 items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center space-x-10">
            <Link
              href="/"
              className="flex items-center gap-1"
              onClick={() => {
                track("menu-logo-clicked", { place: "navbar" });
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
            {/* NAVIGATION */}
            <nav className="text-md space-x48 hidden items-center font-medium text-secondary-foreground/85 lg:flex">
              {tabs.map(({ name, segment, trackEvent }, index) => (
                <NavLink
                  key={index}
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

          <div></div>
          <div className="flex flex-row gap-4">
            {/* <Link
              href="/#waitlist"
              className=""
              onClick={() => {
                track("menu-join-waitlist-clicked", { place: "navbar" });
              }}
            >
              <Button variant={"default"}>Join Waitlist</Button>
            </Link> */}
            {/* <ModeToggle /> */}
          </div>
          {/* Login/Sign up/Dashboard CTA */}
          {session.data ? (
            <Link
              className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
              href="https://app.orgnise.in"
            >
              Dashboard
            </Link>
          ) : (
            <div
              className={clsx("", {
                hidden: isLoading,
              })}
            >
              <div className="">
                <Link
                  className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-secondary-foreground/85 transition-colors ease-out hover:text-black"
                  href="https://go.orgnise.in/login"
                  onClick={() => {
                    track("menu-login-clicked", { place: "navbar" });
                  }}
                >
                  Log in
                </Link>
                <Link
                  className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                  href="https://go.orgnise.in/signup"
                  onClick={() => {
                    track("menu-signup-clicked", { place: "navbar" });
                  }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
