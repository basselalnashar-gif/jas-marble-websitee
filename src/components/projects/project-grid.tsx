"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/cards/project-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { projectCategories } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = React.useState<ProjectCategory | "All">("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {(["All", ...projectCategories] as const).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
              filter === category
                ? "border-navy-800 bg-navy-800 text-white dark:border-navy-100 dark:bg-navy-100 dark:text-navy-900"
                : "border-hairline text-fg-muted hover:text-fg"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} index={index} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      ) : (
        <p className="text-sm text-fg-muted">No projects in this category yet.</p>
      )}
    </div>
  );
}
