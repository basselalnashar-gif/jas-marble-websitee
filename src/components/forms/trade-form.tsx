"use client";

import * as React from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Field, Input, Select, Textarea } from "@/components/forms/field";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

export function TradeForm() {
  const [status, setStatus] = React.useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      companyName: formData.get("companyName"),
      contactName: formData.get("contactName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      role: formData.get("role"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/trade-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-hairline bg-surface p-8">
        <CheckCircle2 className="h-8 w-8 text-navy-dynamic" strokeWidth={1.5} />
        <div>
          <h3 className="font-display text-xl font-medium">Request received</h3>
          <p className="mt-2 text-sm text-fg-muted">
            Thanks for your interest in the Trade Program — our team will
            follow up to set up your account.
          </p>
        </div>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Company name" htmlFor="companyName" required>
          <Input id="companyName" name="companyName" required placeholder="Studio or firm name" />
        </Field>
        <Field label="Contact name" htmlFor="contactName" required>
          <Input id="contactName" name="contactName" required placeholder="Jane Doe" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" required>
          <Input id="email" name="email" type="email" required placeholder="jane@studio.com" />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
        </Field>
      </div>

      <Field label="I am a..." htmlFor="role" required>
        <Select id="role" name="role" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option value="architect">Architect</option>
          <option value="designer">Interior Designer</option>
          <option value="contractor">Construction Company</option>
          <option value="other">Other trade professional</option>
        </Select>
      </Field>

      <Field label="Tell us about your firm and typical project scope" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          placeholder="Project types, typical volume, timeline expectations..."
        />
      </Field>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
            Sending...
          </>
        ) : (
          "Request Trade Account"
        )}
      </Button>

      {status === "error" ? (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again, or reach us directly by
          phone or email.
        </p>
      ) : null}
    </form>
  );
}
