"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import type { ImageRef } from "@/types";

type GalleryImage = ImageRef & { caption?: string };

/**
 * A grid of images that opens a full-screen lightbox (with prev/next and
 * keyboard navigation) when a tile is clicked. Drop-in replacement for a
 * plain StaggerGroup/Image grid — pass the same image list plus optional
 * per-image captions.
 */
export function LightboxGallery({
  images,
  gridClassName = "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
  tileClassName = "aspect-[4/5]",
}: {
  images: GalleryImage[];
  gridClassName?: string;
  tileClassName?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);
  const showNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, close, showPrev, showNext]);

  const active = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <StaggerGroup className={gridClassName}>
        {images.map((image, index) => (
          <StaggerItem key={image.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group block w-full cursor-zoom-in text-left"
              aria-label={`Open ${image.caption ?? image.alt}`}
            >
              <div className={`relative ${tileClassName} overflow-hidden rounded-xl`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
                  sizes="(min-width: 1024px) 25vw, 33vw"
                />
              </div>
              {image.caption ? (
                <p className="mt-2 text-sm font-medium text-fg">{image.caption}</p>
              ) : null}
            </button>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </>
          ) : null}

          <div
            className="relative h-[75vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {active.caption ? (
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium text-white">
              {active.caption}
            </p>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
