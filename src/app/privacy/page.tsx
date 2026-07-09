import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy" />
      <section className="container-px mx-auto max-w-8xl pb-24 sm:pb-32">
        <Reveal className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-xl border border-dashed border-hairline bg-canvas-alt p-5 text-sm text-fg-muted">
            <strong className="text-fg">Placeholder content.</strong> This is a
            starting template, not legal advice — have a lawyer review and
            finalize this policy (including cookie/analytics disclosures)
            before publishing the site.
          </div>
          <div className="prose prose-sm max-w-none prose-headings:font-display dark:prose-invert">
            <h2>What we collect</h2>
            <p>
              When you submit the quote request or trade account forms, we
              collect the information you provide — name, contact details,
              project details, and any files you upload — in order to
              respond to your inquiry.
            </p>
            <h2>How we use it</h2>
            <p>
              Information submitted through this site is used only to follow
              up on your request. We do not sell your information to third
              parties.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
