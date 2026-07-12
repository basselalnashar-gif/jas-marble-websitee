import type { Application } from "@/types";

/**
 * Add a new application by adding an object to this array — the
 * /applications hub and /applications/[slug] page pick it up automatically.
 */
export const applications: Application[] = [
  {
    slug: "vanity-counters",
    name: "Vanity Counters",
    tagline: "The centerpiece of the bathroom",
    description:
      "The vanity counter is where fine finishes matter most — a surface seen up close, every day, that needs to resist water, cosmetics, and daily wear while still looking flawless. We template, fabricate, and install vanity counters in marble, granite, quartz, and sintered stone, with integrated sinks and edge profiles to match your bathroom's style.",
    images: [
      { src: "/images/applications/vanity-counters/vc-01.jpg", alt: "Greywood double vanity with backlit mirrors and floating stone counter" },
      { src: "/images/applications/vanity-counters/vc-02.jpg", alt: "Double vanity with gold-framed mirrors, gold fixtures, and dark wood cabinetry" },
      { src: "/images/applications/vanity-counters/vc-03.jpg", alt: "Tundra Grey marble vanity with carved sink and glass shower behind" },
      { src: "/images/applications/vanity-counters/vc-04.jpg", alt: "Light beige travertine and sintered stone vanity with undermount sink" },
      { src: "/images/applications/vanity-counters/vc-05.jpg", alt: "Travertine double vanity with angled trough sinks and mixed black and copper faucets" },
      { src: "/images/applications/vanity-counters/vc-06.jpg", alt: "Dramatic beige and grey marble powder room with cylindrical pedestal sink" },
      { src: "/images/applications/vanity-counters/vc-07.jpg", alt: "Vanity counter stand cut from dramatic Calacatta Viola marble" },
    ],
    options: [
      "Eased, bullnose, waterfall, and mitered edge profiles",
      "Honed, polished, or leathered finishes",
      "Integrated sinks, basins, and backsplashes",
      "Single and double-vanity configurations",
    ],
    process: [
      { title: "Consultation", description: "We discuss your layout, sink style, and material preferences." },
      { title: "Template & measure", description: "Precise on-site digital templating once cabinetry is set." },
      { title: "Fabrication", description: "Slabs are cut, edged, and finished in our workshop." },
      { title: "Install", description: "Careful delivery and installation, typically completed in a day." },
    ],
    recommendedMaterialSlugs: ["marble", "granite", "quartz", "sintered-stone"],
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
      { src: "/images/applications/wall-cladding/wc-02.jpg", alt: "Marble wall cladding in a bathroom" },
      { src: "/images/applications/wall-cladding/wc-03.jpg", alt: "Bookmatched marble slab, floor to ceiling" },
      { src: "/images/applications/wall-cladding/wc-04.jpg", alt: "Volakas marble bookmatched wall cladding with dramatic veining" },
      { src: "/images/applications/wall-cladding/wc-05.jpg", alt: "Grigio Orobico bookmatched marble feature wall beside timber battens" },
      { src: "/images/applications/wall-cladding/wc-06.jpg", alt: "Fluted travertine wall cladding beside a matching stone staircase" },
      { src: "/images/applications/wall-cladding/wc-07.jpg", alt: "Bookmatched marble cladding rising two storeys beside glazing and a chandelier" },
      { src: "/images/applications/wall-cladding/wc-08.jpg", alt: "Backlit agate stone wall cladding beside a copper-framed elevator" },
      { src: "/images/applications/wall-cladding/wc-09.jpg", alt: "Bookmatched marble cladding surrounding an elevator and staircase" },
      { src: "/images/applications/wall-cladding/wc-10.jpg", alt: "Fluted travertine cladding on an exterior facade and columns" },
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
      { src: "/images/applications/staircase/st-13.jpg", alt: "Travertine staircase with glass balustrade, seen from below against a fluted wall" },
      { src: "/images/applications/staircase/st-14.jpg", alt: "Travertine staircase with glass balustrade beside a fluted wall and floor-to-ceiling windows" },
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
  {
    slug: "furniture",
    name: "Furniture",
    tagline: "Sculptural pieces, built to be the centerpiece",
    description:
      "Stone furniture turns a functional piece into a statement — a dining table with dramatic book-matched veining, a floating vanity, or a sculptural side table cut from a single slab. We fabricate custom furniture and fixtures in marble, granite, quartz, and onyx, working from your design or ours, with the same precision we bring to full architectural installations.",
    images: [
      { src: "/images/applications/furniture/fn-01.jpg", alt: "Grand 22-seater dining table in travertine, seen from the head of the table" },
      { src: "/images/applications/furniture/fn-02.jpg", alt: "Travertine dining table and matching console along the wall" },
      { src: "/images/applications/furniture/fn-03.jpg", alt: "Console table with a book-matched Calacatta gold marble waterfall leg" },
      { src: "/images/applications/furniture/fn-04.jpg", alt: "Travertine console table with sculptural curved legs, detail views" },
      { src: "/images/applications/furniture/fn-05.jpg", alt: "Travertine reception bar with fluted edge detail" },
      { src: "/images/applications/furniture/fn-06.jpg", alt: "Bar-height travertine console table with a floating shelf" },
      { src: "/images/applications/furniture/fn-07.jpg", alt: "Green marble side table with book-matched veining" },
      { src: "/images/applications/furniture/fn-08.jpg", alt: "Fluted travertine cube side table and matching trinket box" },
      { src: "/images/applications/furniture/fn-09.jpg", alt: "Round travertine coffee and side tables with ribbed pedestal bases" },
      { src: "/images/applications/furniture/fn-10.jpg", alt: "Round travertine coffee tables in a seating area" },
      { src: "/images/applications/furniture/fn-11.jpg", alt: "Square polished travertine coffee table beside a staircase" },
      { src: "/images/applications/furniture/fn-12.jpg", alt: "Square travertine and sintered stone coffee table on a wood base" },
      { src: "/images/applications/furniture/fn-13.jpg", alt: "Sculptural angular marble coffee table with book-matched veining" },
      { src: "/images/applications/furniture/fn-14.jpg", alt: "Arched marble bench carved from a single dramatic slab" },
      { src: "/images/applications/furniture/fn-15.jpg", alt: "Sculptural marble and walnut coffee table" },
      { src: "/images/applications/furniture/fn-16.jpg", alt: "Burgundy marble coffee tables with dramatic white veining" },
    ],
    options: [
      "Dining, coffee, and side tables cut from a single slab",
      "Book-matched and waterfall-edge designs",
      "Custom vanities, consoles, and reception desks",
      "Backlit onyx pieces for a dramatic glow effect",
    ],
    process: [
      { title: "Consultation", description: "We discuss the piece, dimensions, and material character you're after." },
      { title: "Slab selection", description: "You choose the exact slab — every piece of natural stone is unique." },
      { title: "Fabrication", description: "Cut, edged, and finished in our workshop to a furniture-grade polish." },
      { title: "Delivery", description: "Careful packaging and delivery, with placement assistance on request." },
    ],
    recommendedMaterialSlugs: ["marble", "granite", "quartz", "onyx"],
  },
];

export function getApplicationBySlug(slug: string) {
  return applications.find((a) => a.slug === slug);
}
