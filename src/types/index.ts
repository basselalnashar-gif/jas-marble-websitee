export type ImageRef = {
  /** Path under /public, e.g. "/images/materials/sintered-stone/sintered-stone-01.jpg" */
  src: string;
  alt: string;
};

export type MaterialSpec = {
  label: string;
  value: string;
};

export type Material = {
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;
  description: string;
  /** Real photography if available; otherwise the material renders a styled placeholder. */
  images: ImageRef[];
  specs: MaterialSpec[];
  bestUseCases: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Application = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  images: ImageRef[];
  options: string[];
  process: ProcessStep[];
  recommendedMaterialSlugs: string[];
};

export type ProjectCategory = "Residential" | "Commercial" | "Hospitality";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  materialSlugs: string[];
  applicationSlugs: string[];
  summary: string;
  scope: string;
  squareFootage?: string;
  timeline?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  images: ImageRef[];
  coverImage: ImageRef;
};
