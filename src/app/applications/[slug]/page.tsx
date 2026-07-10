import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { applications, getApplicationBySlug } from "@/data/applications";
import { materials } from "@/data/materials";
import { projects } from "@/data/projects";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MaterialCard } from "@/components/cards/material-card";
import { ProjectCard } from "@/components/cards/project-card";

export function generateStaticParams() {
  return applications.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const application = getApplicationBySlug(params.slug);
  if (!application) return {};
  return {
    title: application.name,
    description: application.description,
  };
}

export default function ApplicationPage({
  params,
}: {
  params: { slug: string };
}) {
  const application = getApplicationBySlug(params.slug);
  if (!application) notFound();

  const recommendedMaterials = materials.filter((m) =>
    application.recommendedMaterialSlugs.includes(m.slug)
  );
  const relatedProjects = projects.filter((p) =>
    p.applicationSlugs.includes(application.slug)
  );
  const hero = application.images[0];

  return (
    <>
      <section className="relative flex h-[60vh] min-h-[420px] w-full items-end overflow-hidden">
        {hero ? (
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <PlaceholderImage label={application.name} className="absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5" />
        <div className="container-px relative mx-auto w-full max-w-8xl pb-16 pt-36">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Application
          </p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            {application.name}
          </h1>
          <p className="mt-3 max-w-lg text-lg text-white/80">
            {application.tagline}
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-2xl font-medium tracking-tight">
              Overview
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
              {application.description}
            </p>
            <Button href="/contact" className="mt-8" variant="secondary">
              Request a Quote
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-hairline p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-fg-muted">
                Options
              </h3>
              <ul className="flex flex-col gap-3">
                {application.options.map((option) => (
                  <li key={option} className="flex items-start gap-2.5 text-sm text-fg-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy-dynamic" strokeWidth={1.75} />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {application.images.length > 1 ? (
        <section className="container-px mx-auto max-w-8xl pb-20 sm:pb-24">
          <Reveal>
            <h2 className="mb-8 font-display text-2xl font-medium tracking-tight">
              Gallery
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {application.images.map((image) => (
              <StaggerItem key={image.src}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-premium hover:scale-[1.05]"
                    sizes="(min-width: 1024px) 25vw, 33vw"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      ) : null}

      <section className="border-y border-hairline bg-canvas-alt py-20 sm:py-24">
        <div className="container-px mx-auto max-w-8xl">
          <Reveal>
            <h2 className="mb-10 font-display text-2xl font-medium tracking-tight">
              How it comes together
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {application.process.map((step, index) => (
              <StaggerItem key={step.title} className="relative">
                <span className="mb-4 block font-display text-3xl font-medium text-navy-dynamic">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {step.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {recommendedMaterials.length > 0 ? (
        <section className="container-px mx-auto max-w-8xl py-20 sm:py-24">
          <Reveal>
            <h2 className="mb-10 font-display text-2xl font-medium tracking-tight">
              Recommended materials
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {recommendedMaterials.map((material, index) => (
              <StaggerItem key={material.slug}>
                <MaterialCard material={material} index={index} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      ) : null}

      {relatedProjects.length > 0 ? (
        <section className="border-t border-hairline bg-canvas-alt py-20 sm:py-24">
          <div className="container-px mx-auto max-w-8xl">
            <Reveal>
              <h2 className="mb-10 font-display text-2xl font-medium tracking-tight">
                {application.name} projects
              </h2>
            </Reveal>
            <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project, index) => (
                <StaggerItem key={project.slug}>
                  <ProjectCard project={project} index={index} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      ) : null}
    </>
  );
}
