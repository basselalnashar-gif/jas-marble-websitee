import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/layout/page-intro";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 1989 in Ajman, UAE — the story, divisions, and craftsmanship process behind Jabal Al-Sheikh Marble.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Our Story"
        description={`The name ${site.name} carries the weight of the mountain it's named for — a symbol of permanence, standing since long before us and long after. Founded in ${site.founded} by ${site.founder}, we've built every piece of stone we fabricate to carry that same sense of permanence into the spaces our clients live and work in.`}
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
              Headquartered in Ajman, UAE, {site.name} has grown since{" "}
              {site.founded} into three divisions working under one roof —
              from raw block to finished, installed surface.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20 sm:pb-24">
        <Reveal>
          <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
            Three divisions, one standard
          </h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {site.divisions.map((division) => (
            <StaggerItem
              key={division.name}
              className="rounded-2xl border border-hairline bg-canvas-alt p-8"
            >
              <h3 className="font-display text-lg font-medium text-fg">
                {division.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {division.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
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
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/about/factory-worker.jpg"
                alt="Fabrication of a marble slab in the Jabal Al-Sheikh workshop"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline bg-canvas-alt py-20 sm:py-24">
        <div className="container-px mx-auto max-w-8xl">
          <Reveal>
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Our Team
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
              A highly qualified, hands-on team — from management to
              fabrication — trained to deliver every project with the same
              attention to detail, whatever its scale.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mt-10 aspect-[16/6] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/team/team-storefront.jpg"
                alt="The Jabal Al-Sheikh Marble team outside the showroom"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl py-20 sm:py-24">
        <Reveal>
          <p className="max-w-3xl text-sm leading-relaxed text-fg-muted">
            Recognized by the UAE Ministry of Interior (Ajman Police G.H.Q.)
            and the Ministry of Human Resources &amp; Emiratisation for our
            community contribution, and trusted by government and private
            clients including the Government of Sharjah, Ali &amp; Sons
            Contracting, and Durar Group.
          </p>
        </Reveal>
      </section>
    </>
  );
}
