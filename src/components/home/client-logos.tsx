import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export function ClientLogos() {
  return (
    <section className="container-px mx-auto max-w-8xl py-20 sm:py-24">
      <Reveal>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-fg-muted">
          Trusted by
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {site.clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center rounded-xl border border-hairline bg-canvas-alt p-4"
            >
              <span className="relative block h-12 w-full grayscale transition-all duration-300 hover:grayscale-0">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
