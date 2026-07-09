import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/layout/page-intro";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Our story and craftsmanship process — the people and process behind Jabal Al-Sheikh Marble.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Our Story"
        description={`The name ${site.name} carries the weight of the mountain it's named for — a symbol of permanence, standing since long before us and long after. We build every piece of stone we fabricate to carry that same sense of permanence into the spaces our clients live and work in.`}
      />

      <section className="container-px mx-auto max-w-8xl pb-20 sm:pb-24">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-hairline bg-canvas-alt px-8 py-16 text-center">
            <span className="relative block h-16 w-16">
              <Image
                src="/images/logo/logo-mark-navy.png"
                alt=""
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/images/logo/logo-mark-white.png"
                alt=""
                fill
                className="hidden object-contain dark:block"
              />
            </span>
            <p className="font-display text-3xl text-fg" dir="rtl" lang="ar">
              {site.nameArabic}
            </p>
            <p className="max-w-md text-sm text-fg-muted">
              {site.name} — named for Jabal Al-Sheikh, the mountain, and
              carrying that heritage into every project we take on.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24 sm:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Craftsmanship Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-fg-muted">
              Every project moves through the same disciplined process,
              whether it&apos;s a single countertop or a full building program:
              careful material selection, precise fabrication in our own
              workshop, and installation by a team that treats each slab as
              a finished piece, not a commodity. We control every stage
              ourselves, from the block to the final polish, so quality
              never depends on a subcontractor we don&apos;t oversee directly.
            </p>
            <Button href="/contact" variant="secondary" className="mt-8">
              Start a Conversation
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <PlaceholderImage
              label="Workshop & fabrication photography coming soon"
              className="aspect-[4/3] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
