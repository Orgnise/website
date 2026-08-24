"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/loader";
import { Textarea } from "@/components/ui/textarea";
import { track } from "@/lib/utility/analytics/tracking";
import { CheckCircle2Icon } from "lucide-react";
import { FormEvent, type ReactNode, useEffect, useState } from "react";

type FormStatus = "idle" | "pending" | "success" | "error";

const FIELD_CLASS =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

export default function EnterpriseForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    if (status !== "success") {
      return;
    }
    const timeout = window.setTimeout(() => {
      setStatus("idle");
      setFormKey((key) => key + 1);
    }, 3000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = {
      company: String(form.get("company") ?? ""),
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      companySize: String(form.get("companySize") ?? ""),
      comments: String(form.get("comments") ?? ""),
    };

    track("enterprise-form-submit");
    setStatus("pending");
    const res = await fetch("/api/enterprise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      setStatus("success");
      track("enterprise-form-submitted");
      return;
    }
    setStatus("error");
    track("enterprise-form-failed");
  }

  return (
    <div className="w-full rounded-xl border border-border bg-background p-6 sm:p-8">
      {status === "success" ? (
        <div className="flex min-h-80 flex-col items-center justify-center text-center">
          <CheckCircle2Icon className="size-6 text-primary" />
          <p className="mt-4 text-base font-medium text-foreground">
            Thanks. We got your request.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            We will get back to you shortly.
          </p>
        </div>
      ) : (
        <form
          key={formKey}
          onSubmit={onSubmit}
          className="grid gap-5 text-left"
        >
          <Field label="Company name" htmlFor="company">
            <Input id="company" type="text" name="company" required />
          </Field>
          <Field label="Your full name" htmlFor="name">
            <Input
              id="name"
              autoComplete="name"
              type="text"
              name="name"
              required
            />
          </Field>
          <Field label="Work email" htmlFor="email">
            <Input
              id="email"
              autoComplete="email"
              type="email"
              name="email"
              required
            />
          </Field>
          <Field label="Company size" htmlFor="companySize">
            <select
              id="companySize"
              name="companySize"
              required
              defaultValue=""
              className={FIELD_CLASS}
            >
              <option value="" disabled>
                Please select
              </option>
              <option value="1-10">1–10</option>
              <option value="11-50">11–50</option>
              <option value="51-200">51–200</option>
              <option value="201-500">201–500</option>
              <option value="500+">500+</option>
            </select>
          </Field>
          <Field label="How can we help?" htmlFor="comments">
            <Textarea
              name="comments"
              id="comments"
              required
              minLength={10}
              rows={5}
              maxLength={1000}
              placeholder="Team size, how you use docs and boards, and what you need beyond the self-serve plans."
            />
          </Field>
          {status === "error" && (
            <p className="text-sm text-destructive">
              Something went wrong. Try again, or email us if it keeps failing.
            </p>
          )}
          <Button type="submit" className="h-11" disabled={status === "pending"}>
            {status === "pending" ? (
              <Spinner className="text-primary-foreground" />
            ) : (
              "Contact us"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
