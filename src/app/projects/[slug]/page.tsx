import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { materials } from "@/data/materials";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const projectMaterials = materials.filter((m) =>
    project.materialSlugs.includes(m.slug)
  );
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="relative flex h-[60vh] min-h-[420px] w-full items-end overflow-hidden">
        {project.coverImage.src ? (
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <PlaceholderImage label={project.category} className="absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5" />
        <div className="container-px relative mx-auto w-full max-w-8xl pb-16 pt-36">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {project.category} Project
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-white/80">{project.location}</p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-2xl font-medium tracking-tight">
              Project Summary
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
              {project.summary}
            </p>

            {project.testimonial ? (
              <blockquote className="mt-10 border-l-2 border-navy-800 pl-6 dark:border-navy-100">
                <p className="font-display text-xl italic leading-relaxed text-fg">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <footer className="mt-3 text-sm text-fg-muted">
                  {project.testimonial.author}, {project.testimonial.role}
                </footer>
              </blockquote>
            ) : null}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-hairline p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-fg-muted">
                Project Details
              </h3>
              <dl className="flex flex-col gap-4 text-sm">
                <div>
                  <dt className="text-fg-muted">Scope</dt>
                  <dd className="mt-0.5 font-medium text-fg">{project.scope}</dd>
                </div>
                {project.squareFootage ? (
                  <div>
                    <dt className="text-fg-muted">Size</dt>
                    <dd className="mt-0.5 font-medium text-fg">
                      {project.squareFootage}
                    </dd>
                  </div>
                ) : null}
                {project.timeline ? (
                  <div>
                    <dt className="text-fg-muted">Timeline</dt>
                    <dd className="mt-0.5 font-medium text-fg">{project.timeline}</dd>
                  </div>
                ) : null}
                {projectMaterials.length > 0 ? (
                  <div>
                    <dt className="text-fg-muted">Materials used</dt>
                    <dd className="mt-1.5 flex flex-wrap gap-2">
                      {projectMaterials.map((material) => (
                        <Link
                          key={material.slug}
                          href={`/materials/${material.slug}`}
                          className="rounded-full border border-hairline px-3 py-1 text-xs font-medium text-fg transition-colors hover:bg-canvas-alt"
                        >
                          {material.name}
                        </Link>
                      ))}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {project.images.length > 0 ? (
        <section className="container-px mx-auto max-w-8xl pb-20 sm:pb-24">
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.images.map((image) => (
              <StaggerItem key={image.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      ) : (
        <section className="container-px mx-auto max-w-8xl pb-20 sm:pb-24">
          <PlaceholderImage
            label="Full project gallery — photography coming soon"
            className="aspect-[21/9] w-full rounded-2xl"
          />
        </section>
      )}

      <section className="border-t border-hairline bg-canvas-alt py-16">
        <div className="container-px mx-auto flex max-w-8xl items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg-muted">
              Next Project
            </p>
            <h3 className="mt-1 font-display text-xl font-medium">
              {nextProject.title}
            </h3>
          </div>
          <Button href={`/projects/${nextProject.slug}`} variant="ghost">
            View
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </Button>
        </div>
      </section>
    </>
  );
}
