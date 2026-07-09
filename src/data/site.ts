export const site = {
  name: "Jabal Al-Sheikh Marble",
  shortName: "JAS Marble",
  nameArabic: "جبل الشيخ للرخام",
  description:
    "Marble, granite, quartz, and sintered stone for kitchen countertops, flooring, wall cladding, and luxury interior projects. Trusted by architects, designers, contractors, and homeowners.",
  url: "https://www.jasmarble.com",
  contact: {
    phone: "+1 (555) 010-2030",
    whatsapp: "https://wa.me/15550102030",
    email: "info@jasmarble.com",
    address: "Showroom address, City, Country",
    hours: "Sun–Thu: 9:00 AM – 6:00 PM · Fri–Sat: By appointment",
  },
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const materialsNav: NavLink[] = [
  { label: "Marble", href: "/materials/marble", description: "Timeless veining, quarried character" },
  { label: "Granite", href: "/materials/granite", description: "Dense, durable, endlessly varied" },
  { label: "Quartz", href: "/materials/quartz", description: "Engineered consistency and strength" },
  { label: "Sintered Stone", href: "/materials/sintered-stone", description: "Ultra-compact, heat and scratch resistant" },
];

export const applicationsNav: NavLink[] = [
  { label: "Kitchen Countertops", href: "/applications/kitchen-countertops", description: "The centerpiece of the home" },
  { label: "Flooring", href: "/applications/flooring", description: "Seamless, elegant, built to last" },
  { label: "Wall Cladding", href: "/applications/wall-cladding", description: "Statement surfaces, interior and exterior" },
  { label: "Luxury Interior Projects", href: "/applications/luxury-interior-projects", description: "Full-scale bespoke transformations" },
];

export const primaryNav: NavLink[] = [
  { label: "Materials", href: "/materials" },
  { label: "Applications", href: "/applications" },
  { label: "Projects", href: "/projects" },
  { label: "Trade Program", href: "/trade-program" },
  { label: "About", href: "/about" },
];

export const footerCompanyNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Trade Program", href: "/trade-program" },
  { label: "Contact", href: "/contact" },
];

export const footerUtilityNav: NavLink[] = [
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
