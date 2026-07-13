import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageIntro } from "@/components/layout/page-intro";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const services = [
  "Supply and application of all types of marbles and stones",
  "Manufacture and installation of vanity counters",
  "All types of interior finishing",
  "Manufacture of adhesive materials",
];

const capabilities = [
  "Marble Fabrication",
  "Stone Cladding",
  "Luxury Interiors",
  "Villa Projects",
  "Commercial Projects",
  "Custom Designs",
];

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
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-hairline bg-navy-900 px-8 py-16 text-center">
            <span className="relative block h-16 w-16">
              <Image
                src="/images/logo/logo-mark-white.png"
                alt=""
                fill
                className="object-contain"
              />
            </span>
            <p className="font-display text-3xl text-white" dir="rtl" lang="ar">
              {site.nameArabic}
            </p>
            <p className="font-brand text-lg font-bold tracking-tight text-white">
              {site.name}
            </p>
            <p className="max-w-md text-sm text-white/70">
              Headquartered in Ajman, UAE, {site.name} has grown since{" "}
              {site.founded} into two divisions working under one roof —
              from raw block to finished, installed surface.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20 sm:pb-24">
        <Reveal>
          <div className="rounded-2xl border border-hairline bg-navy-900 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              A Message from Our Managing Director
            </p>
            <blockquote className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              &ldquo;Growth, innovation, and quality are what we strive to
              deliver to every customer. Providing the highest-quality
              products at competitive rates, backed by excellent,
              customer-centric service, is what I always aim to deliver. It
              is vital for us to consolidate our position as the preferred
              supplier for our current and potential clients. We have a
              significant edge over our competition thanks to our
              team&apos;s hard work, innovative approach, and excellent
              service. I am proud of our team and our valuable suppliers,
              and the commitment they have shown in helping us reach our
              goals. Along with my team, I look forward to maintaining
              long-term relationships with all our clients.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-medium text-white">
              Founder &amp; Managing Director
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20 sm:pb-24">
        <Reveal>
          <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
            Two divisions, one standard
          </h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {site.divisions.map((division) => (
            <StaggerItem
              key={division.name}
              className="rounded-2xl border border-hairline bg-navy-900 p-8"
            >
              <h3 className="font-display text-lg font-medium text-white">
                {division.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {division.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20 sm:pb-24">
        <Reveal>
          <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
            Our Approach
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
            We have the best resources to fulfill the demands of every
            division we operate in. Our strategic approach and valuable
            resources make us uniquely positioned to deliver products in
            their best possible form, at a competitive price.
          </p>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted">
              {site.name} provides the following main services:
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-2.5 text-sm text-fg-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy-dynamic" strokeWidth={1.75} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Our Capabilities
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted">
              With advanced manufacturing capabilities and a highly skilled
              team, we provide premium marble and stone solutions that meet
              the highest standards of quality, precision, and reliability.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="rounded-xl border border-hairline bg-navy-900 px-4 py-3 text-sm font-medium text-white"
                >
                  {capability}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20 sm:pb-24">
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <StaggerItem className="rounded-2xl border border-hairline bg-navy-900 p-8">
            <h3 className="font-display text-lg font-medium text-white">
              Our Goal
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Our goal is to become one of the preferred choices for our
              customers, while maintaining the quality of both our products
              and services.
            </p>
          </StaggerItem>
          <StaggerItem className="rounded-2xl border border-hairline bg-navy-900 p-8">
            <h3 className="font-display text-lg font-medium text-white">
              Our Mission
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Our mission is to deliver the most customer-centric service
              while providing high-quality, reliable products, every time.
            </p>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20 sm:pb-24">
        <Reveal>
          <div className="rounded-2xl border border-hairline bg-navy-900 p-8 sm:p-10 text-white">
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Quality Assurance
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              Quality and safety are our top priorities at {site.name}. We are
              constantly striving to innovate and improve our services to
              ensure they meet regulatory standards and deliver the highest
              quality. Our team undergoes continuous training, and our
              products and procedures are regularly monitored to guarantee
              compliance with both internal and international standards.
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
