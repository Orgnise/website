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
      className="bg-gradient-to-b from-background/10 w-full via-background/80 to-background/10 mx-auto pt-8 pb-20 overflow-hidden  relative"
    >
      <MaxWidthWrapper className=" flex flex-col place-content-center max-w-md sm:max-w-xl  text-center ">
        <Image
          src="/_static/logo.svg"
          className="bg-background object-cover w-32 h-32 rounded-[30px]  border p-6  shadow-md"
          alt="Hero"
          width={100}
          height={100}
          style={{
            boxShadow: "8px -7px 15px 6px rgba(229,229,229,1) inset",
          }}
        />
        <div className="flex flex-col gap-4 mt-4 place-content-center">
          <h1 className="mb-3 text-4xl sm:text-5xl lg:text-7xl font-bold">
            A better way to align your team
          </h1>
          <p className="text-md text-secondary-foreground/80 lg:text-md max-w-sm lg:max-w-full mx-auto">
            Join our growing waitlist and we&apos;ll let you in as soon as
            possible
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-background rounded flex items-center gap-1 p-1 mx-auto w-3/4 mt-6 shadow-[0px_10px_20px_10px_#E6E6E6AD] border border-border/60"
          >
            <input
              ref={emailRef}
              className="flex-grow px-2 py-1 bg-transparent text-md text-secondary-foreground/80 focus:outline-none"
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
                className="flex items-center gap-1 text-green-500 border-green-500"
              >
                <CheckCircle2Icon size={20} />
              </Button>
            ) : (
              <Button className="flex gap-1">
                {status === "loading" ? (
                  <span className="flex gap-1 items-center">
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
