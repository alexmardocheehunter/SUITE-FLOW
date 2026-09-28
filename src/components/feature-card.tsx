"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  text: string;
  delay?: number;
  accentColor?: string;
};

/**
 * Carte fonctionnalité épurée sur fond clair,
 * icône SVG monochrome blanche sur pastille de couleur pleine du module.
 */
export default function FeatureCard({
  icon: Icon,
  title,
  text,
  delay = 0,
  accentColor = "#0052FF",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
    >
      <div>
        {/* Pastille pleine avec icône SVG monochrome blanche */}
        <span
          className="grid size-11 place-items-center rounded-xl text-white shadow-md shrink-0"
          style={{ backgroundColor: accentColor }}
          aria-hidden
        >
          <Icon className="size-5 text-white stroke-[2.2]" />
        </span>
        <h3 className="mt-4 text-base font-bold text-[#0A1440]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#555B72]">{text}</p>
      </div>
    </motion.div>
  );
}
