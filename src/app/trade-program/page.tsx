import type { Metadata } from "next";
import { FileText, LineChart, Palette, UserCheck } from "lucide-react";
import { PageIntro } from "@/components/layout/page-intro";
import { TradeForm } from "@/components/forms/trade-form";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Trade Program",
  description:
    "Dedicated support, sample program, and spec resources for architects, designers, and construction companies.",
};

const offerings = [
  {
    icon: UserCheck,
    title: "A dedicated representative",
    description: "One point of contact who knows your projects and preferences.",
  },
  {
    icon: Palette,
    title: "Sample program",
    description: "Request physical samples for client presentations and material boards.",
  },
  {
    icon: FileText,
    title: "CAD & BIM downloads",
    description: "Drawing files for the materials and formats you specify most.",
  },
  {
    icon: LineChart,
    title: "Spec sheets",
    description: "Technical documentation ready to drop into your project specs.",
  },
];

export default function TradeProgramPage() {
  const tradeProjects = projects.filter(
    (p) => p.category === "Commercial" || p.category === "Hospitality"
  );

  return (
    <>
      <PageIntro
        eyebrow="Trade Program"
        title="Partner with us on your next project."
        description="Built for architects, interior designers, and construction companies who need a fabrication partner they can rely on project after project."
      />

      <section className="container-px mx-auto max-w-8xl pb-24 sm:pb-32">
        <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item) => (
            <StaggerItem key={item.title} className="flex flex-col gap-4">
              <item.icon className="h-6 w-6 text-navy-dynamic" strokeWidth={1.25} />
              <h3 className="font-display text-lg font-medium">{item.title}</h3>
              <p className="text-sm leading-relaxed text-fg-muted">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {tradeProjects.length > 0 ? (
        <section className="border-y border-hairline bg-canvas-alt py-20 sm:py-24">
          <div className="container-px mx-auto max-w-8xl">
            <Reveal>
              <h2 className="mb-10 font-display text-2xl font-medium tracking-tight">
                Commercial &amp; hospitality work
              </h2>
            </Reveal>
            <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {tradeProjects.map((project, index) => (
                <StaggerItem key={project.slug}>
                  <ProjectCard project={project} index={index} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      ) : null}

      <section className="container-px mx-auto max-w-8xl py-20 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="mb-2 font-display text-2xl font-medium tracking-tight">
              Request a trade account
            </h2>
            <p className="mb-10 text-sm text-fg-muted">
              Separate from the general quote form — this sets up an ongoing
              account for your firm.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-hairline bg-surface p-6 sm:p-10">
              <TradeForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
