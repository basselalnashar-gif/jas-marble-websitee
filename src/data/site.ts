export const site = {
  name: "Jabal Al-Sheikh Marble",
  shortName: "JAS Marble",
  nameArabic: "جبل الشيخ للرخام",
  founded: 1989,
  founder: "Jamal Ahmad Al Nashar",
  description:
    "Founded in 1989 and headquartered in Ajman, UAE, Jabal Al-Sheikh Marble supplies and fabricates marble, granite, quartz, and sintered stone for kitchen countertops, flooring, wall cladding, and luxury interior projects. Trusted by architects, designers, contractors, and homeowners.",
  url: "https://www.jasmarble.com",
  contact: {
    phone: "+971 6 748 9265",
    phoneMobile: "+971 52 692 5128",
    whatsapp: "https://wa.me/971526925128",
    email: "jabal_alshiekh@hotmail.com",
    address: "Ajman, United Arab Emirates",
    hours: "Sat–Thu: 9:00 AM – 6:00 PM · Friday: By appointment",
  },
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
  divisions: [
    {
      name: "Jabal Al Sheikh Marble Factory",
      description:
        "Supply and fabrication of marble, granite, and natural stone — the division behind this site.",
    },
    {
      name: "Jabal Al Sheikh Contracting",
      description: "Full interior finishing and contracting services.",
    },
    {
      name: "Jabal Al Sheikh Darna Interiors",
      description: "Bespoke luxury interior design and fit-out.",
    },
  ],
  clients: [
    { name: "Nesto", logo: "/images/clients/nesto.jpg" },
    { name: "QHC Architects & Engineers", logo: "/images/clients/qhc-architects.jpg" },
    { name: "Ali & Sons Contracting", logo: "/images/clients/ali-and-sons.jpg" },
    { name: "Durar Group", logo: "/images/clients/durar-group.jpg" },
    { name: "Government of Sharjah — Department of Public Works", logo: "/images/clients/sharjah-public-works.jpg" },
    { name: "Government of Sharjah — Town Planning & Survey", logo: "/images/clients/sharjah-planning.jpg" },
  ],
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
  { label: "Travertine", href: "/materials/travertine", description: "Warm, textured, quietly luxurious" },
  { label: "Onyx", href: "/materials/onyx", description: "Translucent, dramatic, one of a kind" },
  { label: "Limestone", href: "/materials/limestone", description: "Soft, even tone, natural matte finish" },
];

export const applicationsNav: NavLink[] = [
  { label: "Kitchen Countertops", href: "/applications/kitchen-countertops", description: "The centerpiece of the home" },
  { label: "Flooring", href: "/applications/flooring", description: "Seamless, elegant, built to last" },
  { label: "Wall Cladding", href: "/applications/wall-cladding", description: "Statement surfaces, interior and exterior" },
  { label: "Luxury Interior Projects", href: "/applications/luxury-interior-projects", description: "Full-scale bespoke transformations" },
];

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
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
