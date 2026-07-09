import { Gem, Hammer, Layers, ShieldCheck } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";

const points = [
  {
    icon: Gem,
    title: "Sourced with intent",
    description:
      "Every slab is selected for grain, veining, and consistency before it reaches our workshop.",
  },
  {
    icon: Hammer,
    title: "Precision craftsmanship",
    description:
      "Templating, fabrication, and installation handled by our own team, start to finish.",
  },
  {
    icon: Layers,
    title: "Any scale of project",
    description:
      "From a single kitchen countertop to full-building material programs.",
  },
  {
    icon: ShieldCheck,
    title: "Built on quality",
    description:
      "Materials and installation held to a standard that stands up to daily use.",
  },
];

export function TrustPoints() {
  return (
    <section className="border-y border-hairline bg-canvas-alt py-20 sm:py-24">
      <div className="container-px mx-auto max-w-8xl">
        <StaggerGroup className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <StaggerItem key={point.title} className="flex flex-col gap-4">
              <point.icon className="h-6 w-6 text-navy-dynamic" strokeWidth={1.25} />
              <h3 className="font-display text-lg font-medium text-fg">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-fg-muted">
                {point.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
