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
    images: [
      { src: "/images/materials/marble/marble-hero-rosa-levanto.jpg", alt: "Rosa Levanto marble slab texture" },
      { src: "/images/materials/marble/marble-01.jpg", alt: "Marble stair treads, fabricated and installed" },
      { src: "/images/materials/marble/marble-02.jpg", alt: "Book-matched marble vanity countertop" },
      { src: "/images/materials/marble/marble-03.jpg", alt: "Bookmatched dark marble slab, floor-to-ceiling" },
      { src: "/images/materials/marble/marble-04.jpg", alt: "Marble wall cladding installation in progress" },
      { src: "/images/materials/marble/marble-05.jpg", alt: "Marble staircase with glass balustrade" },
    ],
    varieties: [
      { name: "Arabescato Rosso Orobico", image: { src: "/images/materials/marble/varieties/arabescato-rosso-orobico.jpg", alt: "Arabescato Rosso Orobico marble slab" } },
      { name: "Zebra Black", image: { src: "/images/materials/marble/varieties/zebra-black.jpg", alt: "Zebra Black marble slab" } },
      { name: "Calacutta Viola", image: { src: "/images/materials/marble/varieties/calacutta-viola.jpg", alt: "Calacutta Viola marble slab" } },
      { name: "Verde Alpi", image: { src: "/images/materials/marble/varieties/verde-alpi.jpg", alt: "Verde Alpi marble slab" } },
      { name: "Fusion Red", image: { src: "/images/materials/marble/varieties/fusion-red.jpg", alt: "Fusion Red marble slab" } },
      { name: "White Wood - Sarbejante", image: { src: "/images/materials/marble/varieties/white-wood-sarbejante.jpg", alt: "White Wood Sarbejante marble slab" } },
      { name: "Avocatus", image: { src: "/images/materials/marble/varieties/avocatus.jpg", alt: "Avocatus marble slab" } },
      { name: "Taj Mahal", image: { src: "/images/materials/marble/varieties/taj-mahal.jpg", alt: "Taj Mahal marble slab" } },
      { name: "Crystal Agate", image: { src: "/images/materials/marble/varieties/crystal-agate.jpg", alt: "Crystal Agate marble slab" } },
      { name: "Emperador Light", image: { src: "/images/materials/marble/varieties/emperador-light.jpg", alt: "Emperador Light marble slab" } },
      { name: "EraMosa Brown", image: { src: "/images/materials/marble/varieties/eramosa-brown.jpg", alt: "EraMosa Brown marble slab" } },
      { name: "Black Marquina Spain", image: { src: "/images/materials/marble/varieties/black-marquina-spain.jpg", alt: "Black Marquina Spain marble slab" } },
      { name: "Rosa Levanto", image: { src: "/images/materials/marble/varieties/rosa-levanto.jpg", alt: "Rosa Levanto marble slab" } },
      { name: "Azul Macubas", image: { src: "/images/materials/marble/varieties/azul-macubas.jpg", alt: "Azul Macubas marble slab" } },
      { name: "Bloody Mary", image: { src: "/images/materials/marble/varieties/bloody-mary.jpg", alt: "Bloody Mary marble slab" } },
      { name: "Giallo Silvia Oro", image: { src: "/images/materials/marble/varieties/giallo-silvia-oro.jpg", alt: "Giallo Silvia Oro marble slab" } },
      { name: "Lilac", image: { src: "/images/materials/marble/varieties/lilac.jpg", alt: "Lilac marble slab" } },
      { name: "Boccino", image: { src: "/images/materials/marble/varieties/boccino.jpg", alt: "Boccino marble slab" } },
      { name: "Panda White", image: { src: "/images/materials/marble/varieties/panda-white.jpg", alt: "Panda White marble slab" } },
      { name: "Palisandro", image: { src: "/images/materials/marble/varieties/palisandro.jpg", alt: "Palisandro marble slab" } },
      { name: "Green Patagonia", image: { src: "/images/materials/marble/varieties/green-patagonia.jpg", alt: "Green Patagonia marble slab" } },
      { name: "Azul Bahia", image: { src: "/images/materials/marble/varieties/azul-bahia.jpg", alt: "Azul Bahia marble slab" } },
    ],
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
    images: [
      { src: "/images/materials/granite/varieties/kuppam-white.jpg", alt: "Kuppam White granite slab texture" },
      { src: "/images/materials/granite/granite-01.jpg", alt: "Granite double-vanity bathroom countertop" },
    ],
    varieties: [
      { name: "Kuppam White", image: { src: "/images/materials/granite/varieties/kuppam-white.jpg", alt: "Kuppam White granite slab" } },
      { name: "Green Pearl", image: { src: "/images/materials/granite/varieties/green-pearl.jpg", alt: "Green Pearl granite slab" } },
      { name: "Luna Pearl", image: { src: "/images/materials/granite/varieties/luna-pearl.jpg", alt: "Luna Pearl granite slab" } },
      { name: "Kashmir White", image: { src: "/images/materials/granite/varieties/kashmir-white.jpg", alt: "Kashmir White granite slab" } },
      { name: "Moon White", image: { src: "/images/materials/granite/varieties/moon-white.jpg", alt: "Moon White granite slab" } },
      { name: "Desert Brown", image: { src: "/images/materials/granite/varieties/desert-brown.jpg", alt: "Desert Brown granite slab" } },
      { name: "Tan Brown", image: { src: "/images/materials/granite/varieties/tan-brown.jpg", alt: "Tan Brown granite slab" } },
      { name: "Red Multi", image: { src: "/images/materials/granite/varieties/red-multi.jpg", alt: "Red Multi granite slab" } },
      { name: "Blue Dunes", image: { src: "/images/materials/granite/varieties/blue-dunes.jpg", alt: "Blue Dunes granite slab" } },
      { name: "Colonial White", image: { src: "/images/materials/granite/varieties/colonial-white.jpg", alt: "Colonial White granite slab" } },
      { name: "Colonial Gold", image: { src: "/images/materials/granite/varieties/colonial-gold.jpg", alt: "Colonial Gold granite slab" } },
    ],
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
    images: [
      { src: "/images/materials/quartz/quartz-01.jpg", alt: "Custom quartz-topped table, fabricated in-house" },
    ],
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
  {
    slug: "travertine",
    name: "Travertine",
    tagline: "Warm, textured, quietly luxurious",
    description:
      "Travertine's soft, linear texture and warm tonal range make it a favorite for spa-like bathrooms and sun-washed interiors. We fabricate it for vanities, wall cladding, and flooring across both honed and filled finishes.",
    images: [
      { src: "/images/materials/travertine/travertine-01.jpg", alt: "Travertine vanity with backlit mirror" },
      { src: "/images/materials/travertine/travertine-02.jpg", alt: "Travertine bathroom with marble accent wall" },
    ],
    specs: [
      { label: "Durability", value: "Good — softer stone, best in low-impact areas" },
      { label: "Porosity", value: "High — filling and sealing recommended" },
      { label: "Heat resistance", value: "Very good" },
      { label: "Best use cases", value: "Bathrooms, wall cladding, feature flooring" },
    ],
    bestUseCases: ["Wall Cladding", "Flooring", "Luxury Interior Projects"],
  },
  {
    slug: "onyx",
    name: "Onyx",
    tagline: "Translucent, dramatic, one of a kind",
    description:
      "Onyx is prized above all for its translucency — backlit, its veining glows in a way no other stone can match. We reserve onyx for signature features: feature walls, bar tops, and backlit reception surfaces.",
    images: [],
    specs: [
      { label: "Durability", value: "Delicate — best for feature, low-traffic surfaces" },
      { label: "Porosity", value: "High — sealing required" },
      { label: "Heat resistance", value: "Moderate" },
      { label: "Best use cases", value: "Backlit feature walls, bar tops, reception desks" },
    ],
    bestUseCases: ["Wall Cladding", "Luxury Interior Projects"],
  },
  {
    slug: "limestone",
    name: "Limestone",
    tagline: "Soft, even tone with a natural matte finish",
    description:
      "Limestone offers a quieter, more uniform look than marble or granite, with a natural matte finish that suits understated, contemporary interiors and exteriors alike.",
    images: [],
    specs: [
      { label: "Durability", value: "Good — softer stone, sealing recommended" },
      { label: "Porosity", value: "Medium-high — sealing recommended" },
      { label: "Heat resistance", value: "Good" },
      { label: "Best use cases", value: "Flooring, wall cladding, exterior facades" },
    ],
    bestUseCases: ["Flooring", "Wall Cladding"],
  },
];

export function getMaterialBySlug(slug: string) {
  return materials.find((m) => m.slug === slug);
}
