"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import HexagonLogo from "./HexagonLogo";
import FloatingBadge from "./FloatingBadge";

// 5 badges cliquables renvoyant vers leur page respective
const badges = [
  // Sell (S) : à gauche, sous le F
  { src: "/logos/sell-flow.png", alt: "Sell Flow", href: "/sell-flow", pos: "left-[4%] top-[60%]", size: 68, delay: 0 },
  // Legal (L) : en haut, chevauchant la barre du L
  { src: "/logos/legal-flow.png", alt: "Legal Flow", href: "/legal-flow", pos: "left-[28%] top-[8%]", size: 56, delay: 0.5 },
  // Compta (C) : en haut à droite, au-dessus du W
  { src: "/logos/compta-flow.png", alt: "Compta Flow", href: "/compta-flow", pos: "right-[29%] top-[4%]", size: 64, delay: 1 },
  // Task (T) : en bas à droite, chevauchant le bas du W
  { src: "/logos/task-flow.png", alt: "Task Flow", href: "/task-flow", pos: "right-[20%] bottom-[6%]", size: 60, delay: 1.5 },
  // RH : tout à droite, en lévitation
  { src: "/logos/rh-flow.png", alt: "RH Flow", href: "/rh-flow", pos: "right-[3%] top-[30%]", size: 68, delay: 2 },
];

export default function Hero() {
  return (
    <section
      id="suite"
      aria-label="Suite Flow - Hero"
      className="relative w-full min-h-[92vh] overflow-clip bg-gradient-to-r from-[#030B2A] via-[#002288] to-[#0052FF] px-6 pb-20 pt-28 md:px-12 md:pb-24 md:pt-32 flex flex-col items-center justify-start"
    >
      {/* ZONE CENTRALE : TYPOGRAPHIE IMMERSIVE "FLOW" + HEXAGONE + BADGES CLIQUABLES */}
      <div className="relative z-10 w-full pt-2">
        {/* LA SUITE au-dessus de FLOW : centrage parfait, graisse épaisse (font-black) pour une forte lisibilité */}
        <p className="w-full text-center text-base sm:text-xl md:text-2xl font-black tracking-[0.28em] text-white uppercase drop-shadow-sm select-none">
          LA SUITE
        </p>

        {/* FLOW géant + hexagone : animation statique en boucle, sans écouteur souris */}
        <div className="relative mt-1 flex items-center justify-center font-black leading-[0.85] tracking-tighter text-white select-none">
          {/* FL arrière-plan statique */}
          <span className="text-[30vw] md:text-[13rem] lg:text-[16rem]">
            FL
          </span>

          {/* Hexagone central avec animation statique en boucle translateY (6–8px, ease-in-out infinite) */}
          <HexagonLogo className="-mx-[0.18em] text-[30vw] md:text-[13rem] lg:text-[16rem]" />

          {/* W arrière-plan statique */}
          <span className="text-[30vw] md:text-[13rem] lg:text-[16rem]">
            W
          </span>

          {/* Badges satellites cliquables avec flottement doux indépendant — Desktop */}
          <div className="pointer-events-none absolute inset-0 z-30 hidden md:block">
            {badges.map((b) => (
              <div key={b.alt} className={`absolute ${b.pos} pointer-events-auto`}>
                <FloatingBadge
                  src={b.src}
                  alt={b.alt}
                  href={b.href}
                  size={b.size}
                  delay={b.delay}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Badges cliquables — Mobile */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 md:hidden">
          {badges.map((b) => (
            <FloatingBadge
              key={b.alt}
              src={b.src}
              alt={b.alt}
              href={b.href}
              size={48}
              delay={b.delay}
            />
          ))}
        </div>
      </div>

      {/* BAS DU HERO : TITRE PRINCIPAL H1 + SOUS-TITRE + DOUBLE CTA AÉRÉ */}
      <div className="relative z-20 mx-auto mt-4 sm:mt-6 md:mt-7 max-w-4xl text-center px-4">
        {/* Titre Principal (H1) — Directement sous FLOW, épuré sans badge, et en italique */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-5xl font-black italic text-white tracking-tight leading-tight">
          La suite logicielle pour gérer votre PME en Côte d&apos;Ivoire
        </h1>

        {/* Sous-titre (La réalité en 2 phrases) */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-blue-100/90 leading-relaxed max-w-3xl mx-auto">
          Facturation normalisée FNE, comptabilité SYSCOHADA et paie aux normes locales. Enregistrez vos opérations une seule fois : nos applications connectées transmettent l&apos;information automatiquement.
        </p>

        {/* Boutons d'action principaux : aérés, sans pastille bleue parasite imbriquée, radius 6-8px */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-[#0A1628] shadow-xl shadow-black/25 hover:bg-slate-100 transition whitespace-nowrap"
          >
            Réserver une démo
          </motion.a>
          <motion.a
            href="https://wa.me/2250767131993"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-emerald-400/50 bg-emerald-500/25 px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-white hover:bg-emerald-500 transition shadow-lg shadow-emerald-950/20 backdrop-blur-md whitespace-nowrap"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              className="text-emerald-300"
              aria-hidden
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.49 14.47 13.45 14.31 13.7C14.14 13.95 13.67 14.51 13.52 14.68C13.38 14.84 13.23 14.86 12.98 14.74C12.73 14.61 11.93 14.35 10.98 13.5C10.24 12.84 9.74 12.03 9.6 11.78C9.45 11.53 9.58 11.4 9.71 11.27C9.82 11.16 9.96 10.98 10.08 10.83C10.21 10.69 10.25 10.58 10.33 10.42C10.41 10.25 10.37 10.11 10.31 9.98C10.25 9.86 9.76 8.65 9.55 8.16C9.35 7.67 9.15 7.74 9 7.73C8.86 7.72 8.7 7.72 8.53 7.72C8.36 7.72 8.09 7.78 7.86 8.03C7.63 8.28 6.99 8.88 6.99 10.1C6.99 11.32 7.88 12.5 8 12.67C8.13 12.83 9.74 15.31 12.21 16.38C12.8 16.63 13.25 16.78 13.61 16.9C14.2 17.08 14.74 17.06 15.17 17C15.64 16.93 16.4 16.83 15.82C17.04 15.25 17.04 14.76 16.98 14.66C16.92 14.55 16.81 14.51 16.56 14.39Z" />
            </svg>
            <span>Discuter par WhatsApp</span>
          </motion.a>
        </div>

        {/* Signaux de confiance et conformité */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-blue-100/85">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            +250 PME et cabinets accompagnés à Abidjan
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span>100% Conforme DGI · FNE · CNPS · SYSCOHADA</span>
        </div>
      </div>

      {/* Bouton de scroll flottant : pilule capsule */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
        <motion.a
          href="#modules"
          aria-label="Faire défiler vers les modules"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.08 }}
          className="flex items-center justify-center rounded-full bg-white/95 px-5 py-2 text-[#0A1628] shadow-[0_8px_20px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all hover:bg-white border border-white/40"
        >
          <ArrowDown className="size-4 text-[#0A1628]" strokeWidth={2.2} aria-hidden />
        </motion.a>
      </div>
    </section>
  );
}
