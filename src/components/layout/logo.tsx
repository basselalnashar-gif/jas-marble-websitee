import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  markOnly = false,
  theme = "auto",
}: {
  className?: string;
  markOnly?: boolean;
  /** "auto" follows the site's light/dark mode; "onDark" always renders the
   * white mark + white text, for use on a permanently dark/navy backdrop
   * (e.g. the solid navy header) regardless of the site's own theme. */
  theme?: "auto" | "onDark";
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 shrink-0",
        className
      )}
      aria-label={`${site.name} — home`}
    >
      <span className="relative block aspect-[1186/624] h-11 w-auto shrink-0">
        {theme === "onDark" ? (
          <Image
            src="/images/logo/logo-mark-white.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        ) : (
          <>
            <Image
              src="/images/logo/logo-mark-navy.png"
              alt=""
              fill
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src="/images/logo/logo-mark-white.png"
              alt=""
              fill
              className="hidden object-contain dark:block"
              priority
            />
          </>
        )}
      </span>
      {!markOnly ? (
        <span
          className={cn(
            "whitespace-nowrap font-brand text-sm font-semibold leading-none tracking-tight sm:text-lg",
            theme === "onDark" ? "text-white/90" : "text-fg-muted"
          )}
        >
          {site.name}
        </span>
      ) : null}
    </Link>
  );
}
