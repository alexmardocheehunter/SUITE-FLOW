"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

/**
 * Hexagone central : animation statique en boucle indépendante de la souris
 * (translateY 6-8px, ease-in-out infinite), zéro rotation 3D, ombre portée fixe.
 */
export default function HexagonLogo({ className }: Props) {
  return (
    <motion.div
      aria-label="Logo Suite Flow"
      role="img"
      animate={{ y: [-7, 7, -7] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      className={cn("relative z-20 inline-block select-none", className)}
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
      {/* Image avec filtre drop-shadow statique fixe (non recalculé dynamiquement) */}
      <Image
        src="/logos/suite-flow.png"
        alt="Suite Flow - O central"
        width={460}
        height={460}
        priority
        className="relative h-auto w-[1.6em] drop-shadow-[0_25px_50px_rgba(0,40,200,0.65)]"
      />
    </motion.div>
  );
}
