import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms of Use" />
      <section className="container-px mx-auto max-w-8xl pb-24 sm:pb-32">
        <Reveal className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-xl border border-dashed border-hairline bg-canvas-alt p-5 text-sm text-fg-muted">
            <strong className="text-fg">Placeholder content.</strong> This is a
            starting template, not legal advice — have a lawyer review and
            finalize these terms (including any quote/estimate disclaimers
            specific to your fabrication contracts) before publishing the
            site.
          </div>
          <div className="prose prose-sm max-w-none prose-headings:font-display dark:prose-invert">
            <h2>Use of this website</h2>
            <p>
              This website is provided for informational purposes to help
              you learn about our materials, applications, and past
              projects, and to request a quote.
            </p>
            <h2>Quotes and estimates</h2>
            <p>
              Quotes requested through this site are estimates only and are
              subject to confirmation following an in-person or on-site
              consultation.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
