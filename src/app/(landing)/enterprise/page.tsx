"use client";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/loader";
import { useState } from "react";
import { CheckCircle2Icon } from "lucide-react";

export default function Home() {
  return (
    <main className="mb-10 min-h-screen w-full overflow-y-auto">
      <MaxWidthWrapper className="z-10 pt-10 lg:pt-16">
        <div className="mx-auto flex w-full max-w-xl flex-col place-content-center items-center text-center">
          <h1 className="font-display md:text9xl text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[3rem] ">
            <span className="">
              Enterprise-scale
              <span className="bg-gradient-to-r from-indigo-800 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                <br />
                solutions For your team
              </span>
            </span>
          </h1>

          <h2 className="mx-auto mt-6 max-w-[600px] text-center text-zinc-600 [text-wrap:balance] md:text-xl">
            Whether you&apos;re creating a new product or scaling your team,
            Orgnise has the tools you need to succeed.
          </h2>
          <Form />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

function Form() {
  type FormStatus = "idle" | "pending" | "success" | "error";
  const [status, setStatus] = useState<FormStatus>("idle");
  async function onSubmit(e: any) {
    e.preventDefault();
    setStatus("pending");
    const form = new FormData(e.target);
    const rawFormData = Object.fromEntries(form);
    const res = await fetch("api/enterprise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });
    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      console.log("Unable to submit request");
    }
  }
  return (
    <div className="mx-auto my-10  w-full max-w-xl">
      <div className="w-full space-y-6 rounded-xl border border-border bg-background p-10 shadow">
        {status === "success" ? (
          <div className="flex h-[528px] flex-col place-content-center items-center">
            <CheckCircle2Icon className="text-green-600" size={25} />
            <p className="mt-6 leading-7 text-muted-foreground/85">
              Thank you for contacting us!
              <br />
              We will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-5 p-7 text-left">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium text-gray-500"
              >
                YOUR WORK EMAIL
              </label>
              <Input required autoComplete="email" type="email" name="email" />
            </div>
            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-xs font-medium text-gray-500"
              >
                COMPANY NAME
              </label>
              <Input required type="text" name="company" />
            </div>

            <div>
              <label
                htmlFor="comments"
                className="mb-2 block text-xs font-medium text-gray-500"
              >
                HOW CAN WE HELP?
              </label>
              <Textarea
                name="comments"
                id="comments"
                required
                rows={6}
                placeholder="We're a product based saas company that has huge team. We're looking for a knowledge base management platform with the infrastructure that can handle our scale."
                aria-invalid="true"
              />
            </div>
            <Button type="submit" className="bg-secondary-foreground">
              Submit {status === "pending" ? <Spinner /> : null}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
