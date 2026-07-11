import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import {
  applicationsNav,
  footerCompanyNav,
  footerUtilityNav,
  materialsNav,
  site,
} from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-canvas-alt">
      <div className="container-px mx-auto max-w-8xl py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <span className="relative block h-8 w-8">
                <Image
                  src="/images/logo/logo-mark-navy.png"
                  alt={site.name}
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/images/logo/logo-mark-white.png"
                  alt={site.name}
                  fill
                  className="hidden object-contain dark:block"
                />
              </span>
              <span className="font-brand text-base font-semibold text-fg">
                {site.shortName}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-fg-muted">
              {site.description}
            </p>
          </div>

          <FooterColumn title="Materials" links={materialsNav} />
          <FooterColumn title="Applications" links={applicationsNav} />
          <FooterColumn title="Company" links={footerCompanyNav} />
        </div>

        <div className="mt-12 grid gap-3 border-t border-hairline pt-10 text-sm text-fg-muted sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={site.contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 hover:text-fg"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
            <span>{site.contact.address}</span>
          </a>
          <a href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 hover:text-fg">
            <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            <span>{site.contact.phone}</span>
          </a>
          <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 hover:text-fg">
            <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            <span>{site.contact.email}</span>
          </a>
          <span>{site.contact.hours}</span>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-6 border-t border-hairline pt-8 sm:flex-row">
          <p className="text-xs text-fg-muted">
            © {year} {site.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {footerUtilityNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-fg-muted hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href={site.social.instagram} aria-label="Instagram" className="text-fg-muted hover:text-fg">
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn" className="text-fg-muted hover:text-fg">
              <Linkedin className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href={site.social.facebook} aria-label="Facebook" className="text-fg-muted hover:text-fg">
              <Facebook className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-fg-muted">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
