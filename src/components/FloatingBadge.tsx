"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  size?: number;
  delay?: number;
  href?: string;
};

/**
 * Badge verre bleu sombre + icône PNG 3D nette, relief + glow.
 * Cliquable pour naviguer vers le module correspondant.
 */
export default function FloatingBadge({
  src,
  alt,
  className,
  size = 56,
  delay = 0,
  href,
}: Props) {
  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay },
      }}
      whileHover={{ scale: 1.15, filter: "brightness(1.1)" }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group pointer-events-auto relative flex items-center justify-center p-2.5 bg-[#0A1E5B]/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-[0_12px_32px_rgba(0,20,120,0.55),0_0_24px_rgba(0,82,255,0.35)] transition-shadow hover:shadow-[0_16px_40px_rgba(0,82,255,0.6)] cursor-pointer z-30",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-xl object-contain"
        priority
      />
      {/* Tooltip au survol */}
      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#030B2A]/90 px-2 py-0.5 text-[11px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 border border-white/20 shadow-md">
        {alt}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={`Accéder au module ${alt}`}>
        {content}
      </Link>
    );
  }

  return content;
}
