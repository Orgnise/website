"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/loader";
import { useState } from "react";
import { CheckCircle2Icon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { track } from "@/lib/utility/analytics/tracking";

export default function EnterpriseForm() {
  type FormStatus = "idle" | "pending" | "success" | "error";
  const [status, setStatus] = useState<FormStatus>("idle");
  async function onSubmit(e: any) {
    e.preventDefault();
    track("enterprise-form-submit");
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
      track("enterprise-form-submitted");
    } else {
      setStatus("error");
      track("enterprise-form-failed");
      console.log("Unable to submit request");
    }
  }
  return (
    <div className="mx-auto my-10 w-full max-w-xl">
      <div className="w-full space-y-6 rounded-xl border border-border bg-background/80 p-10 shadow">
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
                htmlFor="company"
                className="mb-2 block text-xs font-medium text-gray-500"
              >
                COMPANY NAME
              </label>
              <Input required type="text" name="company" />
            </div>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium text-gray-500"
              >
                YOUR FULL NAME
              </label>
              <Input required autoComplete="name" type="text" name="name" />
            </div>
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
                htmlFor="companySize"
                className="mb-2 block text-xs font-medium text-gray-500"
              >
                Company Size
              </label>
              <Select name="companySize">
                <SelectTrigger className="w-full gap-1 border border-border px-2">
                  <SelectValue placeholder="Please select" />
                </SelectTrigger>
                <SelectContent className="border-border">
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="51-200">51-200</SelectItem>
                  <SelectItem value="500+">500+</SelectItem>
                </SelectContent>
              </Select>
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
                maxLength={1000}
                placeholder="We're a product based saas company that has huge team. We're looking for a knowledge base management platform with the infrastructure that can handle our scale."
                aria-invalid="true"
              />
            </div>
            <Button
              type="submit"
              className="gap-1 bg-secondary-foreground dark:bg-secondary"
            >
              {status === "pending" ? (
                <Spinner className="text-primary-foreground" />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
