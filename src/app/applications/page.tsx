import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { ApplicationCard } from "@/components/cards/application-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { applications } from "@/data/applications";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Kitchen countertops, flooring, wall cladding, and luxury interior projects — see how stone comes together in every part of a space.",
};

export default function ApplicationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Applications"
        title="Wherever stone belongs in your project."
        description="From the kitchen island to the building facade, each application has its own process, finish options, and material recommendations."
      />
      <section className="container-px mx-auto max-w-8xl pb-24 sm:pb-32">
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {applications.map((application, index) => (
            <StaggerItem key={application.slug}>
              <ApplicationCard application={application} index={index} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
