"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";
import { MegaMenu } from "@/components/layout/mega-menu";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { applicationsNav, materialsNav } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activePanel, setActivePanel] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/80 backdrop-blur-md border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-px mx-auto flex h-20 max-w-8xl items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          <MegaMenu
            label="Materials"
            href="/materials"
            items={materialsNav}
            activePanel={activePanel}
            setActivePanel={setActivePanel}
          />
          <MegaMenu
            label="Applications"
            href="/applications"
            items={applicationsNav}
            activePanel={activePanel}
            setActivePanel={setActivePanel}
          />
          <Link
            href="/projects"
            className="text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg"
          >
            Projects
          </Link>
          <Link
            href="/trade-program"
            className="text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg"
          >
            Trade Program
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg"
          >
            About
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/contact" size="md">
            Request a Quote
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
