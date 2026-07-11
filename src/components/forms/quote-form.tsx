"use client";

import * as React from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Field, Input, Select, Textarea } from "@/components/forms/field";
import { PhoneField } from "@/components/forms/phone-field";
import { Button } from "@/components/ui/button";
import { materials } from "@/data/materials";
import { sendToWhatsApp } from "@/lib/whatsapp";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [fileName, setFileName] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const phone = [formData.get("phoneCountry"), formData.get("phoneNumber")]
      .filter(Boolean)
      .join(" ")
      .trim();
    const payload = {
      role: formData.get("role"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone,
      projectType: formData.get("projectType"),
      materialInterest: formData.get("materialInterest"),
      projectStage: formData.get("projectStage"),
      message: formData.get("message"),
      fileName,
    };

    try {
      await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Best-effort logging only — WhatsApp below is the primary delivery path.
    }

    sendToWhatsApp(
      [
        "New quote request from jasmarble.com",
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        phone ? `Phone: ${phone}` : null,
        `I am a: ${payload.role}`,
        `Project type: ${payload.projectType}`,
        payload.materialInterest ? `Material interest: ${payload.materialInterest}` : null,
        payload.projectStage ? `Project stage: ${payload.projectStage}` : null,
        payload.message ? `Message: ${payload.message}` : null,
      ]
        .filter(Boolean)
        .join("\n")
    );

    setStatus("success");
    form.reset();
    setFileName(null);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-hairline bg-surface p-8">
        <CheckCircle2 className="h-8 w-8 text-navy-dynamic" strokeWidth={1.5} />
        <div>
          <h3 className="font-display text-xl font-medium">Request received</h3>
          <p className="mt-2 text-sm text-fg-muted">
            Thank you — a member of our team will be in touch shortly to
            discuss your project.
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
      <Field label="I am a..." htmlFor="role" required>
        <Select id="role" name="role" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option value="homeowner">Homeowner</option>
          <option value="architect">Architect</option>
          <option value="designer">Interior Designer</option>
          <option value="contractor">Construction Company</option>
        </Select>
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required>
          <Input id="name" name="name" type="text" required placeholder="Jane Doe" />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <Input id="email" name="email" type="email" required placeholder="jane@email.com" />
        </Field>
      </div>

      <PhoneField label="Phone" />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Project type" htmlFor="projectType" required>
          <Select id="projectType" name="projectType" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option value="countertop">Kitchen Countertop</option>
            <option value="flooring">Flooring</option>
            <option value="cladding">Wall Cladding</option>
            <option value="full-interior">Full Interior Project</option>
          </Select>
        </Field>
        <Field label="Material interest" htmlFor="materialInterest">
          <Select id="materialInterest" name="materialInterest" defaultValue="">
            <option value="">Not sure yet</option>
            {materials.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.name}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Project stage" htmlFor="projectStage">
        <Select id="projectStage" name="projectStage" defaultValue="">
          <option value="">Select one</option>
          <option value="planning">Still planning</option>
          <option value="ready">Ready to install</option>
        </Select>
      </Field>

      <Field label="Floor plans or inspiration images" htmlFor="file">
        <label
          htmlFor="file"
          className="flex cursor-pointer items-center justify-between rounded-lg border border-dashed border-hairline bg-surface px-4 py-3 text-sm text-fg-muted transition-colors hover:border-navy-500"
        >
          <span>{fileName ?? "Click to upload a file"}</span>
          <span className="text-xs text-navy-dynamic">Browse</span>
        </label>
        <input
          id="file"
          name="file"
          type="file"
          accept="image/*,.pdf"
          className="hidden"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </Field>

      <Field label="Anything else we should know?" htmlFor="message">
        <Textarea id="message" name="message" placeholder="Tell us about your project..." />
      </Field>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
            Sending...
          </>
        ) : (
          "Request a Quote"
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
