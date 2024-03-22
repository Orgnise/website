"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import Link from "next/link";
export function Navbar() {
  const session = useSession();
  const status = session.status;
  const isLoading = status === "loading";
  return (
    <div className="sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/_static/logo.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={30}
                height={30}
                priority
              />
            </Link>
          </div>
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
                  className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
                  href="https://app.orgnise.in/login"
                >
                  Log in
                </Link>
                <Link
                  className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                  href="https://app.orgnise.in/register"
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
