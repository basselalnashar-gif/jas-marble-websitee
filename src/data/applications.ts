import type { Application } from "@/types";

/**
 * Add a new application by adding an object to this array — the
 * /applications hub and /applications/[slug] page pick it up automatically.
 */
export const applications: Application[] = [
  {
    slug: "kitchen-countertops",
    name: "Kitchen Countertops",
    tagline: "The centerpiece of the home",
    description:
      "The kitchen countertop sees more daily use than almost any other surface in the home — it needs to withstand heat, knives, and spills while still being the first thing guests notice. We template, fabricate, and install countertops in marble, granite, quartz, and sintered stone to match both your kitchen's style and how you actually use it.",
    images: [],
    options: [
      "Eased, bullnose, waterfall, and mitered edge profiles",
      "Honed, polished, or leathered finishes",
      "Integrated sinks and drainboards",
      "Full-height backsplashes and waterfall islands",
    ],
    process: [
      { title: "Consultation", description: "We discuss your layout, usage, and material preferences." },
      { title: "Template & measure", description: "Precise on-site digital templating once cabinetry is set." },
      { title: "Fabrication", description: "Slabs are cut, edged, and finished in our workshop." },
      { title: "Install", description: "Careful delivery and installation, typically completed in a day." },
    ],
    recommendedMaterialSlugs: ["granite", "quartz", "sintered-stone"],
  },
  {
    slug: "flooring",
    name: "Flooring",
    tagline: "Seamless, elegant, built to last",
    description:
      "Stone flooring brings a scale and continuity that few other materials can match — from grand entryways to full-home installations. We work with architects and contractors to select formats, finishes, and slip ratings appropriate to each space.",
    images: [],
    options: [
      "Large-format slabs for minimal grout lines",
      "Honed, polished, or textured anti-slip finishes",
      "Radiant heating compatible installations",
      "Indoor and covered-outdoor applications",
    ],
    process: [
      { title: "Consultation", description: "We assess the space, traffic level, and desired finish." },
      { title: "Template & measure", description: "Precise site measurement and layout planning." },
      { title: "Fabrication", description: "Slabs are cut to format and finished for underfoot use." },
      { title: "Install", description: "Professional installation with attention to leveling and joints." },
    ],
    recommendedMaterialSlugs: ["marble", "granite", "sintered-stone"],
  },
  {
    slug: "wall-cladding",
    name: "Wall Cladding",
    tagline: "Statement surfaces, interior and exterior",
    description:
      "A stone-clad wall turns a lobby, feature wall, or facade into a signature moment. We fabricate cladding in large-format slabs or panels, book-matched where the material allows, for a continuous and dramatic effect.",
    images: [],
    options: [
      "Book-matched slab pairs for symmetrical veining",
      "Interior feature walls and exterior facades",
      "Mechanical and adhesive fixing systems",
      "Backlit and textured finish options",
    ],
    process: [
      { title: "Consultation", description: "We review the wall, lighting, and desired visual effect." },
      { title: "Template & measure", description: "Detailed site survey and panel layout planning." },
      { title: "Fabrication", description: "Slabs are cut, book-matched, and finished to spec." },
      { title: "Install", description: "Installed by our team or coordinated with your contractor." },
    ],
    recommendedMaterialSlugs: ["marble", "sintered-stone"],
  },
  {
    slug: "luxury-interior-projects",
    name: "Luxury Interior Projects",
    tagline: "Full-scale bespoke transformations",
    description:
      "For architects and designers managing a full interior — countertops, flooring, cladding, staircases, and custom furniture pieces in a single material story — we act as a single fabrication partner from concept through installation.",
    images: [],
    options: [
      "Single-source material sourcing across an entire project",
      "Custom furniture and fixture fabrication",
      "Staircases, vanities, and architectural details",
      "Dedicated project management from design through install",
    ],
    process: [
      { title: "Consultation", description: "We meet with your design team to understand the full scope." },
      { title: "Template & measure", description: "Coordinated site surveys across all affected areas." },
      { title: "Fabrication", description: "All elements fabricated to a consistent material and finish story." },
      { title: "Install", description: "Phased installation coordinated with your project timeline." },
    ],
    recommendedMaterialSlugs: ["marble", "granite", "quartz", "sintered-stone"],
  },
];

export function getApplicationBySlug(slug: string) {
  return applications.find((a) => a.slug === slug);
}
