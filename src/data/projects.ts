import type { Project } from "@/types";

/**
 * Real completed projects. Add a new project by adding an object to this
 * array — the /projects grid and /projects/[slug] page pick it up
 * automatically. Add photos to /public/images/projects/<slug>/.
 */
export const projects: Project[] = [
  {
    slug: "pagani-tower-by-darglobal",
    title: "Pagani Tower by DarGlobal",
    location: "Dubai, UAE",
    category: "Residential",
    materialSlugs: ["marble", "granite", "quartz"],
    applicationSlugs: ["kitchen-countertops", "wall-cladding", "luxury-interior-projects"],
    summary:
      "Natural stone supply for Pagani Tower, an ultra-luxury residential tower developed by DarGlobal in collaboration with Pagani Automobili.",
    scope: "Stone supply for interior surfaces across the tower.",
    images: [],
    coverImage: {
      src: "/images/projects/pagani-tower-darglobal.jpg",
      alt: "Pagani Tower by DarGlobal facade",
    },
  },
  {
    slug: "american-university-of-sharjah",
    title: "The American University of Sharjah",
    location: "Sharjah, UAE",
    category: "Institutional",
    materialSlugs: ["marble", "limestone"],
    applicationSlugs: ["wall-cladding", "flooring"],
    summary:
      "Natural stone supply and installation across the AUS campus, home to one of the region's most recognizable pieces of Islamic-influenced architecture.",
    scope: "Stone facade detailing and flooring across campus buildings.",
    images: [],
    coverImage: {
      src: "/images/projects/american-university-sharjah.jpg",
      alt: "The American University of Sharjah facade",
    },
  },
  {
    slug: "sharjah-education-council",
    title: "Sharjah Education Council",
    location: "Sharjah, UAE",
    category: "Institutional",
    materialSlugs: ["marble", "limestone"],
    applicationSlugs: ["wall-cladding"],
    summary:
      "Stone supply and facade work for the Sharjah Education Council building, delivered for the Government of Sharjah.",
    scope: "Exterior stone cladding and detailing.",
    images: [],
    coverImage: {
      src: "/images/projects/sharjah-education-council.jpg",
      alt: "Sharjah Education Council building facade",
    },
  },
  {
    slug: "sharjah-suburbs-and-villages-affairs",
    title: "Sharjah Suburbs and Villages Affairs Department",
    location: "Sharjah, UAE",
    category: "Institutional",
    materialSlugs: ["marble", "limestone"],
    applicationSlugs: ["wall-cladding"],
    summary:
      "Natural stone facade for a Government of Sharjah civic building, part of our ongoing work with Sharjah government departments.",
    scope: "Exterior stone cladding and entrance detailing.",
    images: [],
    coverImage: {
      src: "/images/projects/sharjah-suburbs-affairs.jpg",
      alt: "Sharjah Suburbs and Villages Affairs Department building facade",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Institutional",
] as const;
