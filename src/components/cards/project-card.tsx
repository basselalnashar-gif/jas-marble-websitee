import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/types";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-4"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        {project.coverImage.src ? (
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        ) : (
          <PlaceholderImage label={project.category} seed={index} className="h-full w-full" />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur-sm">
          {project.category}
        </span>
      </div>
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-medium text-fg">
            {project.title}
          </h3>
          <ArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-fg-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
            strokeWidth={1.5}
          />
        </div>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-fg-muted">
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
          {project.location}
        </p>
      </div>
    </Link>
  );
}
