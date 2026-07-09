import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

/**
 * Elegant stand-in for real photography that hasn't been supplied yet.
 * Renders a soft stone-toned gradient with subtle veining lines and a label,
 * so unfinished sections still look intentional rather than broken.
 *
 * Swap any <PlaceholderImage /> for a real <Image /> once photography exists.
 */
export function PlaceholderImage({
  label,
  className,
  seed = 0,
}: {
  label: string;
  className?: string;
  seed?: number;
}) {
  const angle = 18 + (seed % 4) * 9;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-150 via-stone-100 to-stone-300 dark:from-stone-800 dark:via-stone-900 dark:to-stone-950",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35] dark:opacity-[0.15]"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`veins-${seed}`}
            width="120"
            height="120"
            patternTransform={`rotate(${angle})`}
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="120" stroke="currentColor" strokeWidth="1" className="text-stone-500 dark:text-stone-400" />
            <line x1="40" y1="0" x2="40" y2="120" stroke="currentColor" strokeWidth="0.5" className="text-stone-500 dark:text-stone-400" />
            <line x1="85" y1="0" x2="85" y2="120" stroke="currentColor" strokeWidth="0.5" className="text-stone-500 dark:text-stone-400" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#veins-${seed})`} />
      </svg>
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <ImageIcon
          className="h-5 w-5 text-stone-500 dark:text-stone-500"
          strokeWidth={1.25}
        />
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-stone-600 dark:text-stone-400">
          {label}
        </span>
      </div>
    </div>
  );
}
