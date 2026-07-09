import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { MaterialCard } from "@/components/cards/material-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { materials } from "@/data/materials";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "Marble, granite, quartz, sintered stone, travertine, onyx, and limestone — explore specifications, finishes, and ideal applications for each material we work with.",
};

export default function MaterialsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Materials"
        title="Seven materials, each with its own character."
        description="Every project starts with choosing the right material for how a space will be lived in and used. Explore specifications, finishes, and best applications for each."
      />
      <section className="container-px mx-auto max-w-8xl pb-24 sm:pb-32">
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {materials.map((material, index) => (
            <StaggerItem key={material.slug}>
              <MaterialCard material={material} index={index} size="large" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
