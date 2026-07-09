import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Landmark residential and institutional projects fabricated and installed by Jabal Al-Sheikh Marble, including Pagani Tower by DarGlobal and the American University of Sharjah.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Recent work"
        description="Landmark residential and institutional projects — filter by category to explore."
      />
      <section className="container-px mx-auto max-w-8xl pb-24 sm:pb-32">
        <ProjectGrid projects={projects} />
      </section>
    </>
  );
}
