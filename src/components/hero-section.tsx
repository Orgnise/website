"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

export function HeroSection() {
  // const session = useSession();
  // const status = session.status;
  // const isLoading = status === "loading";
  return (
    <div>
      <div className="z-10 pt-10 lg:pt-16">
        <h1 className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text7xl md:leading-[5rem] ">
          <span className="">
            Organize,
            <span className="bg-gradient-to-r from-indigo-800 via-violet-600 to-purple-700 bg-clip-text text-transparent">
              {" "}
              collaborate and create
            </span>
          </span>
        </h1>
        <div>
          <h2 className="mt-6 text-center text-zinc-600 md:text-xl max-w-[600px] mx-auto">
            Bringing your team&apos;s knowledge and projects together in one
            place, simply and fast
          </h2>
        </div>
        <div className="my-12  flex place-content-center mx-auto">
          {/* {isLoading ? (
            <div className=" h-14 w-[188px] px-10 py-2"></div>
          ) : session.data ? (
            <Link
              href="https://app.orgnise.in"
              className="flex flex-row items-center rounded-full border border-solid  border-primary px-10 py-3  font-bold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Go to Dashboard
            </Link>
          ) : (
            <Link
              href="https://app.orgnise.in/signup"
              className="flex flex-row items-center rounded-full border border-solid  border-primary px-10 py-3  font-bold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Sign up for free
            </Link>
          )} */}
          <Link
            href="#waitlist"
            className="flex flex-row items-center rounded-full border border-solid  border-primary px-10 py-3  font-bold text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {/* <Button variant={"default"}> */}
            Join Waitlist
            {/* </Button> */}
          </Link>
        </div>
      </div>
      <div className=" border-border relative aspect-video w-full rounded-xl border bg-background drop-shadow-[0px_25px_25px_rgba(230,222,255,0.99)] md:drop-shadow-[0px_50px_50px_rgba(230,222,255,0.99)] lg:rounded-[25px]">
        <div
          className="-inset-2 -z-10 absolute blur-xl filter md:blur-3xl opacity-20 rounded-xl"
          style={{
            background:
              "linear-gradient(90deg, rgb(68, 255, 154) -0.55%, rgb(68, 176, 255) 22.86%, rgb(139, 68, 255) 48.36%, rgb(255, 102, 68) 73.33%, rgb(235, 255, 112) 99.34%)",
          }}
        />
        <Image
          src="/_static/hero-section.png"
          className="bg-background lg:rounded-[25px] object-cover rounded-xl"
          alt="Hero"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
