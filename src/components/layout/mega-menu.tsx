"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/data/site";

export function MegaMenu({
  label,
  href,
  items,
  activePanel,
  setActivePanel,
  triggerClassName,
}: {
  label: string;
  href: string;
  items: NavLink[];
  activePanel: string | null;
  setActivePanel: (v: string | null) => void;
  triggerClassName?: string;
}) {
  const isOpen = activePanel === label;

  return (
    <div
      className="relative"
      onMouseEnter={() => setActivePanel(label)}
      onMouseLeave={() => setActivePanel(null)}
    >
      <Link
        href={href}
        className={cn(
          "flex items-center gap-1 py-2 text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg",
          triggerClassName
        )}
        onFocus={() => setActivePanel(label)}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
          strokeWidth={1.75}
        />
      </Link>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-40 w-[560px] -translate-x-1/2 pt-4"
          >
            <div className="grid grid-cols-2 gap-1 rounded-2xl border border-hairline bg-surface p-3 shadow-lift">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-xl p-4 transition-colors duration-200 hover:bg-canvas-alt"
                >
                  <span className="block font-display text-base font-medium text-fg">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="mt-1 block text-sm text-fg-muted">
                      {item.description}
                    </span>
                  ) : null}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
