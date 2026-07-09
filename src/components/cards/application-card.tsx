import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Application } from "@/types";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function ApplicationCard({
  application,
  index = 0,
}: {
  application: Application;
  index?: number;
}) {
  const cover = application.images[0];

  return (
    <Link
      href={`/applications/${application.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl"
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
        <PlaceholderImage label={application.name} seed={index} className="absolute inset-0" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="relative flex items-end justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-medium text-white">
            {application.name}
          </h3>
          <p className="mt-0.5 text-sm text-white/75">{application.tagline}</p>
        </div>
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-white/80 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
          strokeWidth={1.5}
        />
      </div>
    </Link>
  );
}
