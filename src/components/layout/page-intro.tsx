import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

/**
 * Standard top-of-page header used on every interior page (i.e. everything
 * except the home page, which has its own full-bleed hero). Accounts for the
 * fixed header height so content never sits underneath it.
 */
export function PageIntro({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("container-px mx-auto max-w-8xl pb-12 pt-36 sm:pt-40", className)}>
      <Reveal className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy-dynamic">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 text-lg leading-relaxed text-fg-muted">
            {description}
          </p>
        ) : null}
      </Reveal>
    </section>
  );
}
