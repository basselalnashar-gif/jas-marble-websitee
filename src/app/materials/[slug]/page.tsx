import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getMaterialBySlug, materials } from "@/data/materials";
import { projects } from "@/data/projects";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/cards/project-card";

export function generateStaticParams() {
  return materials.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const material = getMaterialBySlug(params.slug);
  if (!material) return {};
  return {
    title: material.name,
    description: material.description,
  };
}

export default function MaterialPage({
  params,
}: {
  params: { slug: string };
}) {
  const material = getMaterialBySlug(params.slug);
  if (!material) notFound();

  const relatedProjects = projects.filter((p) =>
    p.materialSlugs.includes(material.slug)
  );

  const hero = material.images[0];

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
          <PlaceholderImage label={material.name} className="absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5" />
        <div className="container-px relative mx-auto w-full max-w-8xl pb-16 pt-36">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Material
          </p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            {material.name}
          </h1>
          <p className="mt-3 max-w-lg text-lg text-white/80">
            {material.tagline}
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-2xl font-medium tracking-tight">
              About {material.name}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
              {material.description}
            </p>
            <Button href="/contact" className="mt-8" variant="secondary">
              Request a Sample or Quote
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-hairline p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-fg-muted">
                Specifications
              </h3>
              <dl className="flex flex-col gap-4">
                {material.specs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-sm text-fg-muted">{spec.label}</dt>
                    <dd className="mt-0.5 text-sm font-medium text-fg">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {material.varieties && material.varieties.length > 0 ? (
        <section className="border-t border-hairline bg-canvas-alt py-20 sm:py-24">
          <div className="container-px mx-auto max-w-8xl">
            <Reveal>
              <h2 className="mb-2 font-display text-2xl font-medium tracking-tight">
                Colors we offer
              </h2>
              <p className="mb-8 max-w-2xl text-base text-fg-muted">
                A selection of the {material.name.toLowerCase()} varieties available through JAS Marble.
              </p>
            </Reveal>
            <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {material.varieties.map((variety) => (
                <StaggerItem key={variety.name}>
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={variety.image.src}
                      alt={variety.image.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-premium hover:scale-[1.05]"
                      sizes="(min-width: 1024px) 25vw, 33vw"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-fg">{variety.name}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      ) : null}

      {relatedProjects.length > 0 ? (
        <section className="border-t border-hairline bg-canvas-alt py-20 sm:py-24">
          <div className="container-px mx-auto max-w-8xl">
            <Reveal>
              <h2 className="mb-10 font-display text-2xl font-medium tracking-tight">
                Projects using {material.name}
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
