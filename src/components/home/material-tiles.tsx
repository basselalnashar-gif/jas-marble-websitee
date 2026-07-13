import { materials } from "@/data/materials";
import { SectionHeading } from "@/components/ui/section-heading";
import { MaterialCard } from "@/components/cards/material-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const featured = materials.slice(0, 4);

export function MaterialTiles() {
  return (
    <section className="container-px mx-auto max-w-8xl py-24 sm:py-32">
      <SectionHeading
        eyebrow="Materials"
        title="Six materials. One standard of craft."
        description="Every project starts with the right material for how a space will actually be used. Explore what we work with."
      />
      <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {featured.map((material, index) => (
          <StaggerItem key={material.slug}>
            <MaterialCard material={material} index={index} />
          </StaggerItem>
        ))}
      </StaggerGroup>
      <div className="mt-10 flex justify-center">
        <Button href="/materials" variant="secondary">
          View All Materials
        </Button>
      </div>
    </section>
  );
}
