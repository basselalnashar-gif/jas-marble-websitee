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
    images: [
      { src: "/images/applications/kitchen-countertops/kc-01.jpg", alt: "Dark marble double-sink vanity countertop" },
      { src: "/images/applications/kitchen-countertops/kc-02.jpg", alt: "Double vanity with dark stone countertop" },
    ],
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
    images: [
      { src: "/images/applications/flooring/fl-01.jpg", alt: "Large-format flooring slab being installed on site" },
    ],
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
    images: [
      { src: "/images/applications/wall-cladding/wc-01.jpg", alt: "Book-matched dark stone cladding installation" },
      { src: "/images/applications/wall-cladding/wc-02.jpg", alt: "Marble wall cladding in a bathroom" },
      { src: "/images/applications/wall-cladding/wc-03.jpg", alt: "Bookmatched marble slab, floor to ceiling" },
    ],
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
    images: [
      { src: "/images/applications/luxury-interior-projects/li-01.jpg", alt: "Marble staircase with glass balustrade" },
      { src: "/images/applications/luxury-interior-projects/li-02.jpg", alt: "Marble-clad bathroom with backlit mirror" },
    ],
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
  {
    slug: "staircase",
    name: "Staircase",
    tagline: "A first impression, carved in stone",
    description:
      "The staircase is often the focal point of a home or lobby — every tread, riser, and handrail detail is visible at once. We fabricate staircases in marble, travertine, and granite, from book-matched risers to fully clad curved and floating designs, with precision cutting for glass balustrades and integrated lighting.",
    images: [
      { src: "/images/applications/staircase/st-01.jpg", alt: "Grey marble staircase with glass balustrade and hanging feather lights" },
      { src: "/images/applications/staircase/st-02.jpg", alt: "Travertine staircase with glass railing, seen from above" },
      { src: "/images/applications/staircase/st-03.jpg", alt: "Curved black and white marble staircase under construction" },
      { src: "/images/applications/staircase/st-04.jpg", alt: "White marble staircase with book-matched veining against a travertine wall" },
      { src: "/images/applications/staircase/st-05.jpg", alt: "Marble staircase installation with scaffolding in an unfinished stairwell" },
      { src: "/images/applications/staircase/st-06.jpg", alt: "Floating marble staircase with glass balustrade and herringbone floor" },
      { src: "/images/applications/staircase/st-07.jpg", alt: "Travertine staircase with black metal trim and recessed lighting" },
      { src: "/images/applications/staircase/st-08.jpg", alt: "Grey marble staircase with brass handrail and hanging feather lights" },
      { src: "/images/applications/staircase/st-09.jpg", alt: "Beige travertine staircase with wall cladding detail" },
      { src: "/images/applications/staircase/st-10.jpg", alt: "Travertine staircase with wood-trimmed glass balustrade" },
      { src: "/images/applications/staircase/st-11.jpg", alt: "Grey marble staircase with black metal railing beside an olive tree" },
      { src: "/images/applications/staircase/st-12.jpg", alt: "Travertine staircase with recessed step lighting" },
    ],
    options: [
      "Book-matched and curved riser fabrication",
      "Marble, travertine, granite, and sintered stone treads",
      "Precision cutouts for glass and metal balustrades",
      "Integrated LED step lighting channels",
    ],
    process: [
      { title: "Consultation", description: "We review the staircase design, structure, and material preferences." },
      { title: "Template & measure", description: "On-site templating of every tread, riser, and landing." },
      { title: "Fabrication", description: "Slabs are cut, book-matched, and finished to the exact profile." },
      { title: "Install", description: "Careful on-site installation, including balustrade coordination." },
    ],
    recommendedMaterialSlugs: ["marble", "travertine", "granite"],
  },
];

export function getApplicationBySlug(slug: string) {
  return applications.find((a) => a.slug === slug);
}
