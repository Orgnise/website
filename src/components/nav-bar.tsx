"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { clsx } from "clsx";
import Link from "next/link";
import { Button } from "./ui/button";
import NavLink from "./ui/navlink";
import { ModeToggle } from "./toggle-theme";
export function Navbar() {
  // const session = useSession();
  // const status = session.status;
  // const isLoading = status === "loading";
  const tabs = [
    {
      name: "Features",
      segment: "/#features",
    },
    {
      name: "Pricing",
      segment: "/pricing",
    },
    {
      name: "Enterprise",
      segment: "/enterprise",
    },
    {
      name: "About",
      segment: "/about",
    },
    {
      name: "ChangeLog",
      segment: "/changelog",
    }
  ];
  return (
    <div className="fixed inset-x-0 top-0 z-30 w-full border-b border-border bg-background/10 backdrop-blur-lg transition-all dark:bg-background">
      <div className="mx-auto w-full px-2.5 lg:px-20">
        <div className="flex h-14 items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center space-x-10">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/_static/logo.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={30}
                height={30}
                priority
              />
              <h1 className="text-2xl font-bold">Orgnise</h1>
            </Link>
            {/* NAVIGATION */}
            <nav className="text-md space-x48 hidden items-center font-medium text-secondary-foreground/85 lg:flex">
              {tabs.map(({ name, segment }, index) => (
                <NavLink key={index} segment={segment}>
                  {name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div></div>
          <div className="flex flex-row gap-4">
            <Link href="/#waitlist" className="">
              <Button variant={"default"}>Join Waitlist</Button>
            </Link>
            {/* <ModeToggle /> */}
          </div>
          {/* Login/Sign up/Dashboard CTA */}
          {/* {session.data ? (
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
                  href="https://app.orgnise.in/login"
                >
                  Log in
                </Link>
                <Link
                  className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                  href="https://app.orgnise.in/signup"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
