import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { site } from "@/data/site";

const currentYear = new Date().getFullYear();
const yearsInBusiness = currentYear - site.founded;

const stats = [
  { value: `${site.founded}`, label: "Founded in Ajman, UAE" },
  { value: `${yearsInBusiness}+`, label: "Years of craftsmanship" },
  { value: "2", label: "Divisions under one roof" },
  { value: "100+", label: "Natural & engineered stones" },
];

export function Stats() {
  return (
    <section className="border-y border-hairline bg-navy-900 py-16 sm:py-20">
      <div className="container-px mx-auto max-w-8xl">
        <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <p className="font-display text-4xl font-medium text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
