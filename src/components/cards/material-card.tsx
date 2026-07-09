import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Material } from "@/types";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function MaterialCard({
  material,
  index = 0,
  size = "default",
}: {
  material: Material;
  index?: number;
  size?: "default" | "large";
}) {
  const cover = material.images[0];

  return (
    <Link
      href={`/materials/${material.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-surface transition-all duration-500 ease-premium hover:shadow-lift"
    >
      <div
        className={
          size === "large"
            ? "relative aspect-[4/3] w-full overflow-hidden"
            : "relative aspect-square w-full overflow-hidden"
        }
      >
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        ) : (
          <PlaceholderImage label={material.name} seed={index} className="h-full w-full" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-medium text-fg">
            {material.name}
          </h3>
          <p className="mt-0.5 text-sm text-fg-muted">{material.tagline}</p>
        </div>
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-fg-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
          strokeWidth={1.5}
        />
      </div>
    </Link>
  );
}
