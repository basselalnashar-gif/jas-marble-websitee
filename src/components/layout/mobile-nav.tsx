"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import {
  applicationsNav,
  materialsNav,
  primaryNav,
  site,
} from "@/data/site";

function MobileAccordion({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { label: string; href: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left font-display text-lg text-fg"
      >
        {label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-4 pl-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className="rounded-lg px-3 py-2.5 text-sm text-fg-muted transition-colors hover:bg-canvas-alt hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function MobileNav({
  triggerClassName,
}: {
  triggerClassName?: string;
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className={cn(
          "flex h-10 w-10 touch-manipulation items-center justify-center text-fg",
          triggerClassName
        )}
      >
        <Menu className="h-6 w-6" strokeWidth={1.5} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-canvas"
          >
            <div className="container-px flex h-20 items-center justify-between border-b border-hairline">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center text-fg"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="container-px flex h-[calc(100%-5rem)] flex-col overflow-y-auto py-2"
            >
              <MobileAccordion
                label="Materials"
                items={materialsNav}
                onNavigate={() => setOpen(false)}
              />
              <MobileAccordion
                label="Applications"
                items={applicationsNav}
                onNavigate={() => setOpen(false)}
              />
              {primaryNav
                .filter((l) => l.label !== "Materials" && l.label !== "Applications")
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-hairline py-4 font-display text-lg text-fg"
                  >
                    {link.label}
                  </Link>
                ))}

              <div className="mt-8 flex flex-col gap-4">
                <Button href="/contact" size="lg" onClick={() => setOpen(false)}>
                  Request a Quote
                </Button>
                <a
                  href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                  className="text-sm text-fg-muted"
                >
                  {site.contact.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
