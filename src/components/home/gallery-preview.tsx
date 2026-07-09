import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/cards/project-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function GalleryPreview() {
  const preview = projects.slice(0, 3);

  return (
    <section className="container-px mx-auto max-w-8xl py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Projects"
          title="Recent work"
          description="A selection of residential, commercial, and hospitality projects."
        />
        <Button href="/projects" variant="ghost" className="hidden sm:inline-flex">
          View all projects
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </Button>
      </div>
      <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((project, index) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} index={index} />
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Button href="/projects" variant="ghost" className="mt-10 w-full sm:hidden">
        View all projects
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
      </Button>
    </section>
  );
}
