"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Les 5 modules logiciels officiels avec leurs vrais logos 3D satellites
const MODULES = [
  {
    href: "/sell-flow",
    label: "Sell Flow",
    logo: "/logos/sell-flow.webp",
  },
  {
    href: "/compta-flow",
    label: "Compta Flow",
    logo: "/logos/compta-flow.webp",
  },
  {
    href: "/rh-flow",
    label: "RH Flow",
    logo: "/logos/rh-flow.webp",
  },
  {
    href: "/legal-flow",
    label: "Legal Flow",
    logo: "/logos/legal-flow.webp",
  },
  {
    href: "/task-flow",
    label: "Task Flow",
    logo: "/logos/task-flow.webp",
  },
];

/** Icône SVG WhatsApp officielle */
function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="0"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.49 14.47 13.45 14.31 13.7C14.14 13.95 13.67 14.51 13.52 14.68C13.38 14.84 13.23 14.86 12.98 14.74C12.73 14.61 11.93 14.35 10.98 13.5C10.24 12.84 9.74 12.03 9.6 11.78C9.45 11.53 9.58 11.4 9.71 11.27C9.82 11.16 9.96 10.98 10.08 10.83C10.21 10.69 10.25 10.58 10.33 10.42C10.41 10.25 10.37 10.11 10.31 9.98C10.25 9.86 9.76 8.65 9.55 8.16C9.35 7.67 9.15 7.74 9 7.73C8.86 7.72 8.7 7.72 8.53 7.72C8.36 7.72 8.09 7.78 7.86 8.03C7.63 8.28 6.99 8.88 6.99 10.1C6.99 11.32 7.88 12.5 8 12.67C8.13 12.83 9.74 15.31 12.21 16.38C12.8 16.63 13.25 16.78 13.61 16.9C14.2 17.08 14.74 17.06 15.17 17C15.64 16.93 16.4 16.83 15.82C17.04 15.25 17.04 14.76 16.98 14.66C16.92 14.55 16.81 14.51 16.56 14.39Z" />
    </svg>
  );
}

/**
 * Navbar globale sous forme de capsule arrondie (pill shape),
 * centrée horizontalement avec effet glassmorphism transparent.
 * Reste fixe en haut de page à sa position initiale.
 */
export default function SiteNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer les menus lors d'un changement de route
  useEffect(() => {
    setMobileOpen(false);
    setModulesDropdownOpen(false);
  }, [pathname]);

  // Fermer le dropdown en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setModulesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* 1. CONTENEUR EN HAUT DE PAGE FIXE Z-50 (FOND OPAQUE STABLE SUR TOUTES LES PAGES) */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-4 sm:px-8 pointer-events-none">
        {/* Capsule 100% opaque, fond plein et stable sans transparence, contraste garanti partout */}
        <div className="relative pointer-events-auto w-full max-w-[1320px] rounded-full px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 flex items-center justify-between transition-all bg-[#040E33] border border-slate-700/80 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
          
          {/* Logo Suite Flow officiel : Fichier fourni "icon landing page.png" avec mention Cabinet DC-KNOWING */}
          <Link
            href="/"
            className="flex items-center gap-3 group select-none shrink-0"
            aria-label="Suite Flow (Cabinet DC-KNOWING) — Accueil"
          >
            <div className="relative size-10 sm:size-11 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/icon-landing-page.webp"
                alt="Logo Suite Flow"
                width={44}
                height={44}
                priority
                quality={80}
                className="size-full object-contain drop-shadow-[0_4px_16px_rgba(0,82,255,0.45)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white leading-none whitespace-nowrap">
                Suite Flow
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-blue-200/80 tracking-wide mt-1 whitespace-nowrap">
                Cabinet DC-KNOWING
              </span>
            </div>
          </Link>

          {/* 2. NAVIGATION DESKTOP CENTRALE AÉRÉE SANS RETOUR À LA LIGNE */}
          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-2 lg:gap-5 xl:gap-7 text-[14px] lg:text-[15px] font-bold text-white md:flex mx-4 shrink-0"
          >
            {/* Lien Accueil */}
            <Link
              href="/"
              className={cn(
                "rounded-full px-3.5 py-1.5 transition-colors hover:text-white hover:bg-white/20 whitespace-nowrap",
                pathname === "/" ? "text-white bg-white/20 shadow-xs" : "text-white/90"
              )}
            >
              Accueil
            </Link>

            {/* Dropdown Les Modules */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setModulesDropdownOpen(true)}
              onMouseLeave={() => setModulesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setModulesDropdownOpen((prev) => !prev)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-colors hover:text-white hover:bg-white/20 whitespace-nowrap",
                  pathname.includes("flow") || modulesDropdownOpen
                    ? "text-white bg-white/20 shadow-xs"
                    : "text-white/90"
                )}
                aria-expanded={modulesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Les Modules</span>
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-200",
                    modulesDropdownOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>

              {/* Menu déroulant des 5 modules */}
              <div
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 z-50",
                  modulesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                )}
              >
                <div className="w-[260px] rounded-2xl border border-slate-200/90 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.08)]">
                  <ul className="space-y-0.5">
                    {MODULES.map((m) => (
                      <li key={m.href}>
                        <Link
                          href={m.href}
                          className="flex items-center gap-3.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50 group"
                        >
                          <div className="relative size-9 shrink-0 transition-transform group-hover:scale-105">
                            <Image
                              src={m.logo}
                              alt={m.label}
                              width={36}
                              height={36}
                              className="size-full object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                            />
                          </div>
                          <span className="text-[14px] font-bold text-[#0F172A] group-hover:text-[#0052FF] transition-colors">
                            {m.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Lien Écosystème */}
            <Link
              href="/#ecosysteme"
              className="rounded-full px-3.5 py-1.5 transition-colors hover:text-white hover:bg-white/20 text-white/90 whitespace-nowrap"
            >
              Écosystème
            </Link>

            {/* Lien Tarifs */}
            <Link
              href="/#tarifs"
              className="rounded-full px-3.5 py-1.5 transition-colors hover:text-white hover:bg-white/20 text-white/90 whitespace-nowrap"
            >
              Tarifs
            </Link>

            {/* Lien Comparatif */}
            <Link
              href="/comparatif"
              className={cn(
                "rounded-full px-3.5 py-1.5 transition-colors hover:text-white hover:bg-white/20 whitespace-nowrap",
                pathname === "/comparatif" ? "text-white bg-white/20 shadow-xs" : "text-white/90"
              )}
            >
              Comparatif
            </Link>

            {/* Lien À propos — Garanti sans retour à la ligne */}
            <Link
              href="/a-propos"
              className={cn(
                "rounded-full px-3.5 py-1.5 transition-colors hover:text-white hover:bg-white/20 whitespace-nowrap",
                pathname === "/a-propos" ? "text-white bg-white/20 shadow-xs" : "text-white/90"
              )}
            >
              À propos
            </Link>
          </nav>

          {/* 3. ACTIONS PERMANENTES (WhatsApp direct + Réserver une démo épuré, radius 6-8px) */}
          <div className="hidden items-center gap-3 lg:gap-4 md:flex shrink-0">
            {/* Discuter sur WhatsApp */}
            <a
              href="https://wa.me/2250767131993"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/25 px-4 lg:px-5 py-2.5 text-xs lg:text-sm font-bold text-emerald-100 border border-emerald-400/40 transition hover:bg-emerald-500 hover:text-white shadow-sm whitespace-nowrap"
              title="Discuter sur WhatsApp (+225 07 67 13 19 93)"
              aria-label="Discuter sur WhatsApp"
            >
              <WhatsAppIcon className="size-4 text-emerald-300" />
              <span className="hidden xl:inline">Discuter sur WhatsApp</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>

            {/* Réserver une démo — Bouton blanc épuré, aéré, radius 6-8px */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 lg:px-6 py-2.5 text-xs lg:text-sm font-black text-[#0A1628] shadow-md transition-all hover:bg-slate-100 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Réserver une démo
            </Link>
          </div>

          {/* 4. BOUTON MENU BURGER MOBILE */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://wa.me/2250767131993"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-8 items-center justify-center rounded-full bg-emerald-500/25 text-emerald-200 border border-emerald-400/30"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="size-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="grid size-9 place-items-center rounded-full bg-white/15 text-white border border-white/25 transition hover:bg-white/25"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          {/* 5. MENU MOBILE FLOTTANT AUX COINS ARRONDIS SOUS LA CAPSULE (100% OPAQUE) */}
          {mobileOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full mt-3 rounded-3xl border border-slate-700 bg-[#040E33] px-6 py-6 shadow-2xl max-h-[82vh] overflow-y-auto">
              <nav className="flex flex-col space-y-4 text-[15px] font-bold text-white">
                <Link
                  href="/"
                  className="py-1 border-b border-white/10 text-blue-200"
                >
                  Accueil
                </Link>

                {/* Sous-section Modules avec vrais logos 3D */}
                <div className="py-1 border-b border-white/10">
                  <p className="text-xs font-black uppercase tracking-wider text-blue-400 mb-2">
                    Nos 5 Logiciels
                  </p>
                  <div className="grid gap-2 pl-2">
                    {MODULES.map((m) => (
                      <Link
                        key={m.href}
                        href={m.href}
                        className="flex items-center gap-3 py-1 text-slate-200 hover:text-white"
                      >
                        <div className="relative size-7 shrink-0">
                          <Image
                            src={m.logo}
                            alt={m.label}
                            width={28}
                            height={28}
                            className="size-full object-contain"
                          />
                        </div>
                        <span>{m.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/#ecosysteme"
                  className="py-1 border-b border-white/10"
                >
                  Écosystème (Banques & Réseau)
                </Link>

                <Link
                  href="/#tarifs"
                  className="py-1 border-b border-white/10 text-emerald-300 font-extrabold"
                >
                  Grille des Tarifs
                </Link>

                <Link
                  href="/comparatif"
                  className="py-1 border-b border-white/10 text-cyan-300 font-bold"
                >
                  Comparatif (vs Marché)
                </Link>

                <Link
                  href="/a-propos"
                  className="py-1 border-b border-white/10"
                >
                  À propos de DC-KNOWING
                </Link>

                {/* Bouton Démo & WhatsApp sur mobile - radius 6-8px */}
                <div className="pt-2 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="w-full rounded-lg bg-[#0052FF] py-3 text-center text-sm font-black text-white shadow-lg"
                  >
                    Réserver une démo
                  </Link>

                  <a
                    href="https://wa.me/2250767131993"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/20 py-2.5 text-center text-xs font-bold text-emerald-300"
                  >
                    <WhatsAppIcon className="size-4" />
                    <span>Discuter sur WhatsApp (+225 07 67 13 19 93)</span>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* 6. BOUTON WHATSAPP FLOTTANT PERSISTANT SUR MOBILE */}
      <a
        href="https://wa.me/2250767131993"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 md:hidden flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-xs font-black text-white shadow-xl shadow-emerald-900/30 hover:bg-emerald-600 transition-transform active:scale-95"
        aria-label="Contacter par WhatsApp"
      >
        <WhatsAppIcon className="size-4" />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
