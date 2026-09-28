import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

/**
 * Hexagone central "O" de FLOW : animé en CSS GPU pur (floating-hexagon),
 * 0 KB de runtime JS, image WebP optimisée (34 KB au lieu de 2 MB), LCP < 1.0s.
 */
export default function HexagonLogo({ className }: Props) {
  return (
    <div
      aria-label="Logo Suite Flow"
      role="img"
      className={cn("relative z-20 inline-block select-none floating-hexagon", className)}
    >
      {/* Halo statique d'ambiance */}
      <div
        className="pointer-events-none absolute inset-0 scale-125 rounded-full bg-[#0052FF]/60 blur-[60px]"
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent"
      />
      {/* Image WebP avec filtre drop-shadow fixe */}
      <Image
        src="/logos/suite-flow.webp"
        alt="Suite Flow - O central"
        width={460}
        height={460}
        priority
        quality={80}
        className="relative h-auto w-[1.6em] drop-shadow-[0_25px_50px_rgba(0,40,200,0.65)]"
      />
    </div>
  );
}
