import type { Metadata } from "next";
import { Calendar, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageIntro } from "@/components/layout/page-intro";
import { QuoteForm } from "@/components/forms/quote-form";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Quote Request",
  description:
    "Request a quote, book a showroom visit, or get in touch with Jabal Al-Sheikh Marble.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's start your project."
        description="Tell us a little about what you're working on and we'll follow up shortly — whether it's a single countertop or a full building program."
      />

      <section className="container-px mx-auto max-w-8xl pb-24 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="rounded-2xl border border-hairline bg-surface p-6 sm:p-10">
              <QuoteForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="rounded-2xl border border-hairline p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-fg-muted">
                Get in touch directly
              </h3>
              <div className="flex flex-col gap-4 text-sm">
                <a
                  href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-3 text-fg hover:text-navy-dynamic"
                >
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  {site.contact.phone}
                </a>
                <a
                  href={site.contact.whatsapp}
                  className="flex items-center gap-3 text-fg hover:text-navy-dynamic"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  Message on WhatsApp
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-3 text-fg hover:text-navy-dynamic"
                >
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  {site.contact.email}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-hairline p-6">
              <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-fg-muted">
                <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
                Showroom Visit
              </h3>
              <a
                href={site.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-fg-muted hover:text-fg"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <span>{site.contact.address}</span>
              </a>
              <p className="mt-3 text-sm text-fg-muted">{site.contact.hours}</p>
              <p className="mt-4 text-sm text-fg-muted">
                Prefer to see samples in person? Call or message us on
                WhatsApp to book a showroom visit at a time that works for
                you.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-hairline">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src={site.contact.mapsEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jabal Al-Sheikh Marble location"
                />
              </div>
              <a
                href={site.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-t border-hairline bg-surface px-4 py-3 text-sm text-fg hover:text-navy-dynamic"
              >
                <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
