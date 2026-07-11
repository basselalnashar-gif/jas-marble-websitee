"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const slides = [
  "/images/hero/slideshow/hero-slab-01.jpg",
  "/images/hero/slideshow/hero-slab-02.jpg",
  "/images/hero/slideshow/hero-slab-03.jpg",
  "/images/hero/slideshow/hero-slab-04.jpg",
  "/images/hero/slideshow/hero-slab-05.jpg",
  "/images/hero/slideshow/hero-slab-06.jpg",
  "/images/hero/slideshow/hero-slab-07.jpg",
  "/images/hero/slideshow/hero-slab-08.jpg",
];

const SLIDE_DURATION = 6000;
const FADE_DURATION = 2200;

export function Hero() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex h-[92vh] min-h-[640px] w-full items-end overflow-hidden">
      {/* All slides stay mounted and simply cross-fade opacity — avoids any
          remount/reload flash and lets the browser compositor handle the
          transition, which is what makes the fade feel smooth. */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: i === index ? 1 : 0,
              transitionDuration: `${FADE_DURATION}ms`,
            }}
          >
            <Image
              src={src}
              alt="Natural stone slab with dramatic veining, studio lit"
              fill
              priority={i === 0}
              loading={i === 0 ? undefined : "eager"}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

      <div className="container-px relative mx-auto w-full max-w-8xl pb-20 pt-40 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
        >
          Marble · Granite · Quartz · Sintered Stone
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Natural stone, shaped for lasting impressions.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/85"
        >
          Jabal Al-Sheikh Marble supplies and fabricates marble, granite,
          quartz, and sintered stone for kitchens, flooring, wall cladding,
          and full-scale luxury interiors — trusted by architects, designers,
          contractors, and homeowners.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/materials" size="lg">
            Explore Materials
          </Button>
          <Button href="/contact" size="lg" variant="outline-light">
            Request a Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
