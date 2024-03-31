"use client";
import Image from "next/image";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Button } from "./ui/button";
import { useRef, useState } from "react";
import { APP_DOMAIN } from "@/lib/constants";
import { Spinner } from "./ui/loader";
import { CheckCircle2Icon } from "lucide-react";

export function WaitList() {
  type Status = "idle" | "loading" | "success" | "error";
  const [status, setStatus] = useState<Status>("idle");
  const emailRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    console.log(email);
    setStatus("loading");
    fetch(`${APP_DOMAIN}/api/waitlist`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          setStatus("success");
          setTimeout(() => {
            setStatus("idle");
          }, 3000);
        } else {
          setStatus("error");
        }
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        if (emailRef.current) emailRef.current!.value = "";
      });
  }
  return (
    <div
      id="waitlist"
      className="relative mx-auto w-full overflow-hidden bg-gradient-to-b from-background/10 via-background/80 to-background/10 pb-20  pt-8"
    >
      <MaxWidthWrapper className=" flex max-w-md flex-col place-content-center text-center  sm:max-w-xl ">
        <Image
          src="/_static/logo.svg"
          className="h-32 w-32 rounded-[30px] border border-border  bg-background  object-cover p-6  antialiased  shadow-[8px_-7px_15px_6px_rgba(229,229,229,1)_inset] invert"
          alt="Hero"
          width={100}
          height={100}
        />
        <div className="mt-4 flex flex-col place-content-center gap-4">
          <h1 className="mb-3 text-4xl font-bold sm:text-5xl lg:text-7xl">
            A better way to align your team
          </h1>
          <p className="text-md lg:text-md mx-auto max-w-sm text-secondary-foreground/80 lg:max-w-full">
            Join our growing waitlist and we&apos;ll let you in as soon as
            possible
          </p>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 flex items-center gap-1 rounded border border-border/60 bg-background p-1 shadow-[0px_10px_20px_10px_#E6E6E6AD] dark:shadow-none sm:w-3/4"
          >
            <input
              ref={emailRef}
              className="text-md flex-grow bg-transparent px-2 py-1 text-secondary-foreground/80 focus:outline-none"
              placeholder="Enter your email"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
            {status === "success" ? (
              <Button
                variant={"outline"}
                type="reset"
                size={"icon"}
                className="flex items-center gap-1 border-green-500 text-green-500"
              >
                <CheckCircle2Icon size={20} />
              </Button>
            ) : (
              <Button className="flex gap-1">
                {status === "loading" ? (
                  <span className="flex items-center gap-1">
                    <Spinner className="text-primary-foreground" />
                  </span>
                ) : (
                  "Join waitlist"
                )}
              </Button>
            )}
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
