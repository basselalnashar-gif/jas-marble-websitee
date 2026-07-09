import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  markOnly = false,
}: {
  className?: string;
  markOnly?: boolean;
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
      <span className="relative block aspect-[219/126] h-11 w-auto shrink-0">
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
      </span>
      {!markOnly ? (
        <span className="whitespace-nowrap font-display text-sm font-medium leading-none tracking-tight text-fg-muted sm:text-lg">
          {site.name}
        </span>
      ) : null}
    </Link>
  );
}
