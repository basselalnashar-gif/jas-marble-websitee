import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { projects } from "@/data/projects";

export function FeaturedProject() {
  const project = projects[0];
  if (!project) return null;

  return (
    <section className="container-px mx-auto max-w-8xl py-24 sm:py-32">
      <Reveal>
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-hairline bg-surface lg:grid-cols-2 lg:gap-0">
          <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[480px]">
            {project.coverImage.src ? (
              <Image
                src={project.coverImage.src}
                alt={project.coverImage.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            ) : (
              <PlaceholderImage label={project.category} className="h-full w-full" />
            )}
          </div>
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy-dynamic">
              Featured Project
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl">
              {project.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-fg-muted">
              {project.summary}
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-fg-muted">Scope</dt>
                <dd className="mt-1 font-medium text-fg">{project.scope}</dd>
              </div>
              {project.squareFootage ? (
                <div>
                  <dt className="text-fg-muted">Size</dt>
                  <dd className="mt-1 font-medium text-fg">
                    {project.squareFootage}
                  </dd>
                </div>
              ) : null}
            </dl>
            <Button
              href={`/projects/${project.slug}`}
              variant="secondary"
              className="mt-10"
            >
              View Project
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
