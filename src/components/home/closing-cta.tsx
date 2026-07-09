import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export function ClosingCTA() {
  return (
    <section className="container-px mx-auto max-w-8xl pb-24 sm:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-navy-800 px-8 py-16 text-center sm:px-16 sm:py-24 dark:bg-navy-900">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(600px circle at 20% 20%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(500px circle at 80% 80%, rgba(255,255,255,0.06), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Start your project with Jabal Al-Sheikh Marble.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-balance text-base text-white/75 sm:text-lg">
              Whether you're specifying materials for a client, renovating a
              kitchen, or planning a full building program — we're ready when
              you are.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg" variant="primary" className="bg-white text-navy-900 hover:bg-white/90 dark:bg-white dark:text-navy-900">
                Request a Quote
              </Button>
              <a
                href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex h-14 items-center gap-2 px-2 text-base font-medium text-white/90 hover:text-white"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                {site.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
