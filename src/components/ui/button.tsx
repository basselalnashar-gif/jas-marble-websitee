import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 dark:bg-navy-100 dark:text-navy-900 dark:hover:bg-white",
  secondary:
    "bg-stone-150 text-navy-900 hover:bg-stone-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
  ghost:
    "bg-transparent text-fg hover:bg-fg/5 border border-hairline",
  "outline-light":
    "bg-transparent text-white border border-white/40 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;

type ButtonAsButton = BaseProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  // Destructure every BaseProps key out up front so `rest` can never contain
  // a stray variant/size/className/children that would leak onto the DOM
  // node or silently override the merged `classes` string via spread order.
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest as { href: string } & typeof rest;
    return (
      <Link
        href={href}
        className={classes}
        {...(linkRest as Omit<
          React.AnchorHTMLAttributes<HTMLAnchorElement>,
          keyof BaseProps
        >)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        keyof BaseProps
      >)}
    >
      {children}
    </button>
  );
}
