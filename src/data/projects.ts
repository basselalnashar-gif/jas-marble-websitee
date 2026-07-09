import type { Project } from "@/types";

/**
 * SAMPLE PLACEHOLDER PROJECTS — replace with real completed work and
 * photography before launch. Structure (category, materials, images) mirrors
 * exactly what a real project entry needs, so swapping in real content is a
 * drop-in edit: update the fields and add real photos to /public/images/projects.
 *
 * Add a new project by adding an object to this array — the /projects grid
 * and /projects/[slug] page pick it up automatically.
 */
export const projects: Project[] = [
  {
    slug: "riverside-residence",
    title: "Riverside Residence",
    location: "Sample project — replace with a real address/city",
    category: "Residential",
    materialSlugs: ["sintered-stone", "granite"],
    applicationSlugs: ["kitchen-countertops", "flooring"],
    summary:
      "A full kitchen and living-area renovation pairing a sintered stone island with granite flooring throughout the ground floor.",
    scope:
      "Kitchen countertop and waterfall island, ground-floor flooring, and a matching bathroom vanity.",
    squareFootage: "2,400 sq ft",
    timeline: "6 weeks",
    testimonial: {
      quote:
        "Replace with a real client or architect quote once the project is complete.",
      author: "Client name",
      role: "Homeowner",
    },
    images: [],
    coverImage: { src: "", alt: "Riverside Residence — sample project" },
  },
  {
    slug: "the-orchard-house",
    title: "The Orchard House",
    location: "Sample project — replace with a real address/city",
    category: "Residential",
    materialSlugs: ["marble"],
    applicationSlugs: ["wall-cladding", "luxury-interior-projects"],
    summary:
      "A book-matched marble feature wall anchoring a double-height entry hall.",
    scope: "Entry hall cladding, staircase details, and powder room vanity.",
    squareFootage: "600 sq ft of cladding",
    timeline: "4 weeks",
    images: [],
    coverImage: { src: "", alt: "The Orchard House — sample project" },
  },
  {
    slug: "meridian-office-tower",
    title: "Meridian Office Tower — Lobby",
    location: "Sample project — replace with a real address/city",
    category: "Commercial",
    materialSlugs: ["granite", "sintered-stone"],
    applicationSlugs: ["wall-cladding", "flooring"],
    summary:
      "Large-format flooring and reception cladding for a corporate lobby renovation.",
    scope: "Lobby flooring, reception desk, and feature wall cladding.",
    squareFootage: "3,200 sq ft",
    timeline: "10 weeks",
    testimonial: {
      quote:
        "Replace with a real client or architect quote once the project is complete.",
      author: "Project architect",
      role: "Lead Architect",
    },
    images: [],
    coverImage: { src: "", alt: "Meridian Office Tower lobby — sample project" },
  },
  {
    slug: "harbor-view-offices",
    title: "Harbor View Offices",
    location: "Sample project — replace with a real address/city",
    category: "Commercial",
    materialSlugs: ["quartz"],
    applicationSlugs: ["kitchen-countertops"],
    summary: "Break-room and pantry countertops across four office floors.",
    scope: "Quartz countertops and backsplashes for four pantry areas.",
    squareFootage: "180 sq ft of countertop",
    timeline: "3 weeks",
    images: [],
    coverImage: { src: "", alt: "Harbor View Offices — sample project" },
  },
  {
    slug: "the-lantern-hotel",
    title: "The Lantern Hotel — Spa & Lobby",
    location: "Sample project — replace with a real address/city",
    category: "Hospitality",
    materialSlugs: ["marble", "sintered-stone"],
    applicationSlugs: ["flooring", "wall-cladding", "luxury-interior-projects"],
    summary:
      "A full material program spanning the lobby floor, spa wet areas, and guest bathroom vanities.",
    scope: "Lobby flooring, spa wall cladding, and 120 guest bathroom vanities.",
    squareFootage: "8,500 sq ft",
    timeline: "16 weeks",
    testimonial: {
      quote:
        "Replace with a real client or architect quote once the project is complete.",
      author: "Development team",
      role: "Owner's Representative",
    },
    images: [],
    coverImage: { src: "", alt: "The Lantern Hotel — sample project" },
  },
  {
    slug: "coastal-club-restaurant",
    title: "Coastal Club Restaurant",
    location: "Sample project — replace with a real address/city",
    category: "Hospitality",
    materialSlugs: ["granite", "quartz"],
    applicationSlugs: ["kitchen-countertops", "flooring"],
    summary:
      "Back-of-house and bar countertops built for a high-volume restaurant kitchen.",
    scope: "Bar countertop, service line, and back-of-house prep surfaces.",
    squareFootage: "450 sq ft of countertop",
    timeline: "5 weeks",
    images: [],
    coverImage: { src: "", alt: "Coastal Club Restaurant — sample project" },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = ["Residential", "Commercial", "Hospitality"] as const;
