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
      <span className="relative block h-8 w-8 shrink-0">
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
        <span className="font-display text-[1.05rem] font-medium leading-none tracking-tight text-fg">
          {site.shortName}
        </span>
      ) : null}
    </Link>
  );
}
