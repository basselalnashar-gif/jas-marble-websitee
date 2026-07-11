"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { MegaMenu } from "@/components/layout/mega-menu";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { applicationsNav, materialsNav } from "@/data/site";

const navLinkClass =
  "text-sm font-medium text-white/75 transition-colors duration-200 hover:text-white";

export function Header() {
  const [activePanel, setActivePanel] = React.useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-navy-800">
      <div className="container-px mx-auto flex h-20 max-w-8xl items-center justify-between">
        <Logo theme="onDark" />

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <MegaMenu
            label="Materials"
            href="/materials"
            items={materialsNav}
            activePanel={activePanel}
            setActivePanel={setActivePanel}
            triggerClassName={navLinkClass}
          />
          <MegaMenu
            label="Applications"
            href="/applications"
            items={applicationsNav}
            activePanel={activePanel}
            setActivePanel={setActivePanel}
            triggerClassName={navLinkClass}
          />
          <Link href="/projects" className={navLinkClass}>
            Projects
          </Link>
          <Link href="/trade-program" className={navLinkClass}>
            Trade Program
          </Link>
          <Link href="/about" className={navLinkClass}>
            About
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle className="border-white/25 text-white/80 hover:border-white/50 hover:text-white" />
          <Button href="/contact" size="md" variant="secondary">
            Request a Quote
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className="border-white/25 text-white/80 hover:border-white/50 hover:text-white" />
          <MobileNav triggerClassName="text-white" />
        </div>
      </div>
    </header>
  );
}
