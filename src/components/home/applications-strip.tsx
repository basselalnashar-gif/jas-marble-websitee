import { applications } from "@/data/applications";
import { SectionHeading } from "@/components/ui/section-heading";
import { ApplicationCard } from "@/components/cards/application-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";

export function ApplicationsStrip() {
  return (
    <section className="container-px mx-auto max-w-8xl py-24 sm:py-32">
      <SectionHeading
        eyebrow="Applications"
        title="Wherever stone belongs in your project."
        description="From the kitchen island to the building facade — see how each application comes together."
      />
      <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {applications.map((application, index) => (
          <StaggerItem key={application.slug}>
            <ApplicationCard application={application} index={index} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
