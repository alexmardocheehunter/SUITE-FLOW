import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  size?: number;
  delayIndex?: number;
  href?: string;
  priority?: boolean;
};

const FLOAT_CLASSES = [
  "floating-badge",
  "floating-badge-d1",
  "floating-badge-d2",
  "floating-badge-d3",
  "floating-badge-d4",
];

/**
 * Logo satellite brut sans conteneur, animé en CSS GPU pur (0 KB JS, aucun TBT)
 * avec Image Next.js WebP et dimensions fixes pour éliminer tout CLS.
 */
export default function FloatingBadge({
  src,
  alt,
  className,
  size = 72,
  delayIndex = 0,
  href,
  priority = false,
}: Props) {
  // Remplacement automatique .png -> .webp
  const webpSrc = src.endsWith(".png") ? src.replace(".png", ".webp") : src;
  const floatClass = FLOAT_CLASSES[delayIndex % FLOAT_CLASSES.length];

  const content = (
    <div
      className={cn(
        "group pointer-events-auto relative flex items-center justify-center cursor-pointer select-none",
        floatClass,
        className
      )}
    >
      <div className="transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
        <Image
          src={webpSrc}
          alt={alt}
          width={size}
          height={size}
          className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.38)] transition-all duration-300 group-hover:drop-shadow-[0_16px_36px_rgba(0,82,255,0.6)]"
          priority={priority}
          quality={80}
        />
      </div>
      {/* Tooltip au survol */}
      <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#040E33] px-2.5 py-1 text-[11px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 border border-slate-700 shadow-xl z-40">
        {alt}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={`Découvrir ${alt}`} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
