import type { Material } from "@/types";

/**
 * Add a new material by adding an object to this array — the /materials hub
 * and /materials/[slug] page pick it up automatically. Leave `images` empty
 * until real photography is available; the pages render an elegant
 * placeholder in the meantime.
 */
export const materials: Material[] = [
  {
    slug: "marble",
    name: "Marble",
    tagline: "Timeless veining, quarried character",
    description:
      "Natural marble has been the material of choice for the world's most enduring architecture for a reason: no two slabs are alike, and its soft veining brings warmth and movement no engineered surface can fully replicate. We select and fabricate marble for countertops, flooring, wall cladding, and signature interior features.",
    images: [],
    specs: [
      { label: "Durability", value: "Good — softer than granite, avoid acidic contact" },
      { label: "Porosity", value: "Medium-high — sealing recommended" },
      { label: "Heat resistance", value: "Very good" },
      { label: "Best use cases", value: "Feature walls, flooring, bathrooms, low-acid kitchen counters" },
    ],
    bestUseCases: ["Wall Cladding", "Flooring", "Luxury Interior Projects"],
  },
  {
    slug: "granite",
    name: "Granite",
    tagline: "Dense, durable, endlessly varied",
    description:
      "Granite is among the hardest natural stones available, prized for kitchens and high-traffic surfaces that need to perform as well as they look. Its crystalline structure gives every slab a distinctive, speckled depth.",
    images: [],
    specs: [
      { label: "Durability", value: "Excellent — resists scratching and chipping" },
      { label: "Porosity", value: "Low-medium — sealing recommended" },
      { label: "Heat resistance", value: "Excellent" },
      { label: "Best use cases", value: "Kitchen countertops, flooring, outdoor surfaces" },
    ],
    bestUseCases: ["Kitchen Countertops", "Flooring"],
  },
  {
    slug: "quartz",
    name: "Quartz",
    tagline: "Engineered consistency and strength",
    description:
      "Quartz surfaces are engineered from natural quartz crystals bound with resin, giving architects and homeowners a non-porous, highly consistent surface available in a wide range of colors and patterns — ideal where uniformity and low maintenance matter most.",
    images: [],
    specs: [
      { label: "Durability", value: "Excellent — resists scratching and staining" },
      { label: "Porosity", value: "Non-porous — no sealing required" },
      { label: "Heat resistance", value: "Good — avoid direct prolonged contact" },
      { label: "Best use cases", value: "Kitchen countertops, bathroom vanities, commercial surfaces" },
    ],
    bestUseCases: ["Kitchen Countertops"],
  },
  {
    slug: "sintered-stone",
    name: "Sintered Stone",
    tagline: "Ultra-compact, heat and scratch resistant",
    description:
      "Sintered stone is produced under extreme heat and pressure, replicating in hours the geological process that forms natural stone over millennia. The result is an ultra-compact surface with exceptional resistance to heat, scratching, and UV exposure — equally suited to kitchens, facades, and large-format flooring.",
    images: [
      { src: "/images/materials/sintered-stone/sintered-stone-01.jpg", alt: "Sintered stone slab, light travertine-look finish" },
      { src: "/images/materials/sintered-stone/sintered-stone-02.jpg", alt: "Sintered stone slab, warm veined finish" },
      { src: "/images/materials/sintered-stone/sintered-stone-03.jpg", alt: "Sintered stone slab, linear travertine texture" },
      { src: "/images/materials/sintered-stone/sintered-stone-04.jpg", alt: "Sintered stone slab, soft cream tone" },
      { src: "/images/materials/sintered-stone/sintered-stone-05.jpg", alt: "Sintered stone slab, deep beige with dramatic veining" },
      { src: "/images/materials/sintered-stone/sintered-stone-06.jpg", alt: "Sintered stone slab, cloudy natural-stone pattern" },
      { src: "/images/materials/sintered-stone/sintered-stone-07.jpg", alt: "Sintered stone slab, fine hairline veining" },
      { src: "/images/materials/sintered-stone/sintered-stone-08.jpg", alt: "Sintered stone slab, warm marble-look finish" },
    ],
    specs: [
      { label: "Durability", value: "Outstanding — highly scratch and impact resistant" },
      { label: "Porosity", value: "Near-zero — stain and moisture resistant" },
      { label: "Heat resistance", value: "Outstanding — safe for direct hot cookware" },
      { label: "Best use cases", value: "Kitchen countertops, facades, large-format flooring and cladding" },
    ],
    bestUseCases: ["Kitchen Countertops", "Flooring", "Wall Cladding"],
  },
];

export function getMaterialBySlug(slug: string) {
  return materials.find((m) => m.slug === slug);
}
