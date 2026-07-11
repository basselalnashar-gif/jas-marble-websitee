import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CraftsmanshipShowcase() {
  return (
    <section className="container-px mx-auto max-w-8xl py-20 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg-muted">
            From our workshop
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-fg sm:text-4xl">
            Craftsmanship you can see, from slab to staircase.
          </h2>
          <p className="mt-5 max-w-lg text-balance leading-relaxed text-fg-muted">
            Every step is templated, cut, and installed by our own team —
            precision joinery, seamless veining, and a finish built to last.
            This staircase is one example of what we deliver on-site.
          </p>
          <div className="mt-8">
            <Button href="/projects" size="lg">
              View More Projects
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="order-1 lg:order-2">
          <div className="mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl shadow-lift">
            <video
              className="h-full w-full object-cover"
              src="/videos/staircase-showcase.mp4"
              poster="/videos/staircase-showcase-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Jabal Al-Sheikh Marble travertine staircase installation"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
