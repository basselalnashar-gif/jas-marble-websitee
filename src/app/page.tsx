import { Hero } from "@/components/home/hero";
import { MaterialTiles } from "@/components/home/material-tiles";
import { FeaturedProject } from "@/components/home/featured-project";
import { TrustPoints } from "@/components/home/trust-points";
import { ApplicationsStrip } from "@/components/home/applications-strip";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { ClosingCTA } from "@/components/home/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MaterialTiles />
      <FeaturedProject />
      <TrustPoints />
      <ApplicationsStrip />
      <GalleryPreview />
      <ClosingCTA />
    </>
  );
}
