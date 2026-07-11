import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { TrustPoints } from "@/components/home/trust-points";
import { CraftsmanshipShowcase } from "@/components/home/craftsmanship-showcase";
import { ClientLogos } from "@/components/home/client-logos";
import { ClosingCTA } from "@/components/home/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <TrustPoints />
      <CraftsmanshipShowcase />
      <ClientLogos />
      <ClosingCTA />
    </>
  );
}
