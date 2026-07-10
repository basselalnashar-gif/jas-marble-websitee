import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { TrustPoints } from "@/components/home/trust-points";
import { ClientLogos } from "@/components/home/client-logos";
import { ClosingCTA } from "@/components/home/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <TrustPoints />
      <ClientLogos />
      <ClosingCTA />
    </>
  );
}
