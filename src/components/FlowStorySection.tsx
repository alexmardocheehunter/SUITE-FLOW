"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Link2,
  ZoomIn,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const MODULES = [
  {
    id: "sell-flow",
    step: "01",
    name: "Sell Flow",
    accentColor: "#003061", // Bleu Marine Officiel
    checkClass: "text-[#003061]",
    linkClass: "text-[#003061] hover:text-[#001f42]",
    ringClass: "ring-[#003061]",
    title: "Ventes et facturation FNE",
    subtitle:
      "Gestion des ventes, des achats, des stocks multi-magasins et de la caisse. Émettez vos factures conformes à la facturation normalisée (FNE-DGI) avec génération instantanée du QR code fiscal, sans double saisie.",
    flowNarrative: "Encaissement instantané → Transmet les écritures de vente à Compta Flow",
    bullets: [
      "Facturation Normalisée Électronique (FNE) 100% conforme DGI",
      "Génération immédiate du QR code fiscal et sticker DGI sur chaque facture",
      "Gestion des stocks multi-magasins et encaissements Mobile Money (Wave, Orange, MTN)",
    ],
    floatingCard: {
      title: "Facturation Normalisée DGI",
      subtitle: "QR Code certifié actif & Sticker DGI",
      icon: "✅",
    },
    dashboardTitle: "Sell Flow · Gestion Commerciale & Caisse FNE",
    badge: "Période 2026",
    imageMain: "/screenshots/sell-dashboard.webp",
    logo: "/logos/sell-flow.webp",
  },
  {
    id: "compta-flow",
    step: "02",
    name: "Compta Flow",
    accentColor: "#1E40AF", // Bleu Royal
    checkClass: "text-[#1E40AF]",
    linkClass: "text-[#1E40AF] hover:text-[#172554]",
    ringClass: "ring-[#1E40AF]",
    title: "Comptabilité SYSCOHADA automatisée",
    subtitle:
      "Tenue de la comptabilité sous référentiel SYSCOHADA révisé. L'OCR extrait automatiquement les données de vos factures pour générer les écritures, et les rapprochements bancaires multi-banques se réalisent en quelques minutes.",
    flowNarrative: "Reçoit les ventes & la paie → Construit automatiquement le bilan SYSCOHADA",
    bullets: [
      "Plan comptable SYSCOHADA révisé pré-configuré pour la Côte d'Ivoire",
      "Rapprochement bancaire intelligent en quelques clics (relevés multi-banques)",
      "Export certifié des écritures révisées vers votre expert-comptable (Sage 100)",
    ],
    floatingCard: {
      title: "SYSCOHADA Révisé 2026",
      subtitle: "Écritures équilibrées · Clôture automatique",
      icon: "⚡",
    },
    dashboardTitle: "Flow Compta · Pilotage Performance & SYSCOHADA",
    badge: "Solde Consolidé",
    imageMain: "/screenshots/compta-dashboard.webp",
    logo: "/logos/compta-flow.webp",
  },
  {
    id: "rh-flow",
    step: "03",
    name: "RH Flow",
    accentColor: "#263e88", // Indigo Royal Officiel
    checkClass: "text-[#263e88]",
    linkClass: "text-[#263e88] hover:text-[#18285c]",
    ringClass: "ring-[#263e88]",
    title: "Paie et gestion sociale",
    subtitle:
      "Gestion de la paie, du personnel, des congés et du pointage mobile (QR code/GPS). Calculez les bulletins de salaire, l'ITS, la CNPS et la CMU selon la législation ivoirienne en vigueur pour sécuriser vos déclarations.",
    flowNarrative: "Valide les bulletins de salaire → Déverse les charges de personnel en Compta Flow",
    bullets: [
      "Calcul automatique et opposable : ITS, CNPS, CMU et taxes patronales",
      "Bordereaux de cotisation CNPS et état DISA téléchargeables en 1 clic",
      "Pointage mobile officiel par QR Code avec géolocalisation anti-fraude",
    ],
    floatingCard: {
      title: "Barèmes DGI & CNPS 2026",
      subtitle: "0 Anomalie détectée · Bulletins officiels",
      icon: "🛡️",
    },
    dashboardTitle: "RH Flow · Traitement de la Paie Mensuelle",
    badge: "Barème 2026",
    imageMain: "/screenshots/rh-paie.webp",
    logo: "/logos/rh-flow.webp",
  },
  {
    id: "legal-flow",
    step: "04",
    name: "Legal Flow",
    accentColor: "#7C3AED", // Violet Impérial
    checkClass: "text-[#7C3AED]",
    linkClass: "text-[#7C3AED] hover:text-purple-800",
    ringClass: "ring-[#7C3AED]",
    title: "Conformité fiscale et juridique",
    subtitle:
      "Suivi de la conformité légale et administrative de l'entreprise. Le calendrier fiscal intègre vos obligations selon votre régime (RSI ou Réel Normal) et vous envoie des alertes WhatsApp proactives avant chaque échéance pour éviter les pénalités.",
    flowNarrative: "Surveille les flux financiers → Bloque les majorations et pénalités de retard",
    bullets: [
      "Calendrier fiscal intelligent configuré selon votre régime (RSI, Réel Normal)",
      "Alertes WhatsApp proactives à J-30, J-15, J-3 pour anticiper vos règlements",
      "Registre d'entreprise centralisé : statuts, baux, PV d'AG et veille réglementaire OHADA",
    ],
    floatingCard: {
      title: "Bouclier Fiscal DGI & CNPS",
      subtitle: "Alertes WhatsApp proactives · 0 pénalité",
      icon: "⚖️",
    },
    dashboardTitle: "Legal Flow · Portail de Conformité Fiscale & Sociale",
    badge: "DGI / CNPS / CMU",
    imageMain: "/screenshots/legal.webp",
    logo: "/logos/legal-flow.webp",
  },
  {
    id: "task-flow",
    step: "05",
    name: "Task Flow",
    accentColor: "#334155", // Ardoise / Slate-700
    checkClass: "text-[#334155]",
    linkClass: "text-[#334155] hover:text-slate-900",
    ringClass: "ring-[#334155]",
    title: "CRM & Contrats automatisés",
    subtitle:
      "Cockpit CRM et générateur automatique de contrats, lettres de mission et conventions de prestation. Suivez l'avancement des dossiers, surveillez les jalons et mesurez la rentabilité exacte par mission.",
    flowNarrative: "Orchestre l'ensemble → Relie les contrats, la facturation et la compta en 1 vue",
    bullets: [
      "Génération en 1 clic de contrats de prestation et lettres de mission OHADA",
      "CRM commercial, onboarding client et signature dématérialisée",
      "Mesure en temps réel de la rentabilité brute et nette par mission",
    ],
    floatingCard: {
      title: "Cockpit CRM & Contrats Actifs",
      subtitle: "Lettres de mission prêtes · Marges nettes",
      icon: "📌",
    },
    dashboardTitle: "Task Flow · CRM Commercial & Contrats de Mission",
    badge: "Cockpit Global",
    imageMain: "/screenshots/task.webp",
    logo: "/logos/task-flow.webp",
  },
];

// Variantes de transition (power2.inOut / cubic-bezier(0.4, 0, 0.2, 1))
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 90 : -90,
    opacity: 0,
    scale: 1.04,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export default function FlowStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightbox, setLightbox] = useState<{ image: string; title: string } | null>(null);

  // Fermer la lightbox avec la touche Échap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Écoute du défilement dans la zone globale de scroll (500vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const totalModules = MODULES.length;
    const rawIndex = Math.min(
      totalModules - 1,
      Math.floor(progress * totalModules)
    );

    if (rawIndex !== activeIndex) {
      setDirection(rawIndex > activeIndex ? 1 : -1);
      setActiveIndex(rawIndex);
    }
  });

  // Défilement automatique vers le module sélectionné au clic
  const handleSelectModule = (index: number) => {
    if (!containerRef.current) return;
    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const containerHeight = containerRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = containerHeight - viewportHeight;

    const targetScroll = containerTop + (index / (MODULES.length - 1)) * scrollableDistance;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const currentModule = MODULES[activeIndex];

  return (
    <section
      ref={containerRef}
      id="modules"
      aria-label="Modules Suite Flow — Expérience Sticky Scroll"
      className="relative h-[500vh] bg-white text-[#4B5563]"
    >
      {/* 1. CONTENEUR STICKY (100vh fixe à l'écran avec fond rythmé subtil et halo personnalisé) */}
      <div
        className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 50% 15%, ${currentModule.accentColor}0a 0%, #F8FAFC 55%, #FFFFFF 100%)`,
        }}
      >
        {/* Halo doux d'ambiance dynamique */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/4 size-[520px] rounded-full blur-[140px] opacity-10 transition-colors duration-1000"
          style={{ backgroundColor: currentModule.accentColor }}
        />

        {/* 2. BARRE DE NAVIGATION FLOTTANTE AVEC VRAIS LOGOS 3D & ZOOM MARQUÉ SUR L'ACTIF */}
        <header className="relative z-30 pt-4 sm:pt-6 px-4 flex flex-col items-center">
          <nav
            aria-label="Barre de navigation des 5 modules"
            className="flex items-center gap-3 sm:gap-6 md:gap-8 rounded-full border border-slate-200/90 bg-white/95 px-5 sm:px-8 py-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all"
            role="tablist"
          >
            {MODULES.map((m, idx) => {
              const isActive = activeIndex === idx;
              const shortName = m.name.split(" ")[0];

              return (
                <button
                  key={m.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Accéder au module ${m.name}`}
                  onClick={() => handleSelectModule(idx)}
                  className={cn(
                    "group relative flex items-center gap-2.5 py-1 transition-all select-none",
                    isActive ? "scale-105" : "hover:opacity-90"
                  )}
                >
                  {/* LOGO DU MODULE AVEC ANNEAU COLORÉ SELON L'ACCENTUATION DU LOGICIEL */}
                  <div
                    className={cn(
                      "relative shrink-0 overflow-hidden rounded-xl transition-all duration-300 flex items-center justify-center bg-white shadow-sm border border-slate-100",
                      isActive
                        ? cn("size-11 sm:size-12 ring-3 ring-offset-2 ring-offset-white shadow-md scale-110", m.ringClass)
                        : "size-8 sm:size-9 opacity-65 group-hover:opacity-100 group-hover:scale-105"
                    )}
                  >
                    <Image
                      src={m.logo}
                      alt={`Logo officiel ${m.name}`}
                      width={48}
                      height={48}
                      priority
                      className="size-full object-contain p-0.5"
                    />
                  </div>

                  {/* Nom du module en typographie soignée */}
                  <span
                    className={cn(
                      "text-xs sm:text-sm font-bold tracking-tight transition-colors hidden xs:inline-block",
                      isActive ? "text-[#0F172A] font-black" : "text-[#4B5563] group-hover:text-[#0F172A]"
                    )}
                  >
                    {shortName}
                  </span>

                  {/* Indicateur de sélection sous l'onglet actif */}
                  {isActive && (
                    <motion.div
                      layoutId="stickyActiveModuleDot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 size-1.5 rounded-full"
                      style={{ backgroundColor: m.accentColor }}
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mini barre de progression intégrée sous la capsule */}
          <div className="mt-2 w-48 sm:w-64 h-1 rounded-full bg-slate-100 overflow-hidden border border-slate-200/50">
            <motion.div
              style={{
                scaleX: scrollYProgress,
                backgroundColor: currentModule.accentColor,
              }}
              className="h-full origin-left rounded-full transition-colors duration-500"
            />
          </div>
        </header>

        {/* 3. SCÈNE CENTRALE : MODULES SUPERPOSÉS & CHORÉGRAPHIE TRANSITION ANIMÉE */}
        <div className="relative z-20 flex-1 flex items-center justify-center px-6 md:px-12 lg:px-16 w-full max-w-7xl mx-auto my-auto">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={currentModule.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ willChange: "transform, opacity" }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* COLONNE GAUCHE : IDENTITÉ, TITRE, BULLETS & CTA BOUTON PROÉMINENT */}
              <div className="lg:col-span-5 space-y-4 md:space-y-5">
                {/* 1 & 2. EN-TÊTE DU MODULE : LOGO 3D MASSIF LIBÉRÉ (SANS CADRE BLANC) + NOM DU LOGICIEL EN H2 GROS ET COLORÉ */}
                <div className="flex items-center gap-4 sm:gap-6 pb-1">
                  <div className="relative size-20 sm:size-24 md:size-28 lg:size-32 shrink-0 drop-shadow-[0_16px_28px_rgba(0,0,0,0.18)] transition-transform hover:scale-105">
                    <Image
                      src={currentModule.logo}
                      alt={currentModule.name}
                      width={140}
                      height={140}
                      priority
                      className="size-full object-contain"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
                      Module {currentModule.step} / 05
                    </span>
                    <h2
                      className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none pt-1"
                      style={{ color: currentModule.accentColor }}
                    >
                      {currentModule.name}
                    </h2>
                  </div>
                </div>

                {/* Titre percutant en noir profond #0F172A */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
                  {currentModule.title}
                </h3>

                {/* Sous-titre épuré en gris foncé #4B5563 */}
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed max-w-xl">
                  {currentModule.subtitle}
                </p>

                {/* Narration de flux sur fond blanc / bordure douce */}
                <div className="rounded-xl border border-slate-200 bg-white/80 p-2.5 sm:p-3 text-xs font-semibold text-[#334155] flex items-center gap-2 shadow-xs">
                  <Link2
                    className="size-4 shrink-0"
                    style={{ color: currentModule.accentColor }}
                    aria-hidden
                  />
                  <span className="line-clamp-2">{currentModule.flowNarrative}</span>
                </div>

                {/* Puces avec couleur d'accentuation spécifique à chaque logiciel */}
                <ul className="space-y-2 sm:space-y-2.5 pt-1 text-xs sm:text-sm font-semibold text-[#334155]">
                  {currentModule.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={cn("size-4 sm:size-5 shrink-0 mt-0.5", currentModule.checkClass)}
                        aria-hidden
                      />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* BOUTON D'ACTION DE CONVERSION PRINCIPALE : EN SAVOIR PLUS → (radius 6-8px, slate-700 pour Task Flow) */}
                <div className="pt-2">
                  <Link
                    href={`/${currentModule.id}`}
                    className="group inline-flex items-center gap-2.5 rounded-lg px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl transition-all hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: currentModule.accentColor,
                      boxShadow: `0 10px 28px ${currentModule.accentColor}35`,
                    }}
                  >
                    <span>En savoir plus sur {currentModule.name}</span>
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1.5"
                      aria-hidden
                    />
                  </Link>
                </div>
              </div>

              {/* COLONNE DROITE : MOCKUP RÉEL AVEC ZOOM / LIGHTBOX & BADGE PARALLAX */}
              <div className="lg:col-span-7 relative">
                {/* Cadre mockup sur fond blanc */}
                <div className="relative rounded-2xl border border-slate-200 bg-white p-2 sm:p-2.5 shadow-xl shadow-slate-900/5 overflow-hidden">
                  {/* En-tête macOS */}
                  <div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 rounded-lg mb-2 border border-slate-100 text-[11px] text-[#64748B] font-semibold">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-rose-400 inline-block" />
                      <span className="size-2 rounded-full bg-amber-400 inline-block" />
                      <span className="size-2 rounded-full bg-emerald-400 inline-block" />
                      <span className="ml-2 font-bold text-[#0F172A] truncate max-w-[200px] sm:max-w-none">
                        {currentModule.dashboardTitle}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#4B5563] bg-slate-200/70 px-2 py-0.5 rounded">
                      {currentModule.badge}
                    </span>
                  </div>

                  {/* Screenshot haute fidélité avec effet de zoom au clic (Lightbox) */}
                  <div
                    onClick={() =>
                      setLightbox({
                        image: currentModule.imageMain,
                        title: currentModule.dashboardTitle,
                      })
                    }
                    className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 max-h-[380px] sm:max-h-[460px] cursor-zoom-in"
                  >
                    <Image
                      src={currentModule.imageMain}
                      alt={`Interface officielle ${currentModule.name}`}
                      width={900}
                      height={600}
                      priority
                      className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    {/* Badge de zoom au survol */}
                    <div className="absolute inset-0 bg-[#030B2A]/0 group-hover:bg-[#030B2A]/25 transition-colors flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-black text-[#0A1628] shadow-xl backdrop-blur-md">
                        <ZoomIn className="size-4 text-[#0052FF]" />
                        Cliquer pour agrandir le dashboard
                      </span>
                    </div>
                  </div>
                </div>

                {/* EFFET DE PARALLAXE : Badge flottant sur fond blanc pur (règle du design system) */}
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="absolute -bottom-5 sm:-bottom-6 right-2 sm:right-6 z-20 flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-xl shadow-slate-900/10 select-none"
                >
                  <span className="text-xl shrink-0" aria-hidden>
                    {currentModule.floatingCard.icon}
                  </span>
                  <div>
                    <p className="text-xs font-black text-[#0F172A]">
                      {currentModule.floatingCard.title}
                    </p>
                    <p className="text-[11px] font-semibold text-[#64748B]">
                      {currentModule.floatingCard.subtitle}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. PIED DU CONTENEUR STICKY : COMPTEUR D'ÉTAPE ET INDICATION DE DÉFILEMENT */}
        <footer className="relative z-30 pb-4 sm:pb-6 px-6 sm:px-12 flex items-center justify-between text-xs font-bold text-[#64748B] max-w-7xl mx-auto w-full border-t border-slate-100/80 pt-3">
          <div className="flex items-center gap-2 text-[#0F172A]">
            <span
              className="text-sm font-black"
              style={{ color: currentModule.accentColor }}
            >
              {currentModule.step}
            </span>
            <span className="text-slate-300">/</span>
            <span>05</span>
            <span className="hidden sm:inline text-[#64748B] font-medium ml-2">
              — {currentModule.name}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#64748B] font-semibold">
            {activeIndex < MODULES.length - 1 ? (
              <button
                onClick={() => handleSelectModule(activeIndex + 1)}
                className="hover:text-[#0F172A] transition-colors flex items-center gap-1.5"
              >
                <span>Module suivant : {MODULES[activeIndex + 1].name}</span>
                <ArrowRight className="size-3.5" />
              </button>
            ) : (
              <span className="text-emerald-700 flex items-center gap-1.5 font-bold">
                <span>Tous les modules explorés</span>
                <CheckCircle2 className="size-3.5" />
              </span>
            )}
          </div>
        </footer>
      </div>

      {/* MODAL LIGHTBOX PLEIN ÉCRAN POUR INSPECTER LES DASHBOARDS */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#030B2A]/85 p-4 sm:p-8 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-6xl w-full rounded-2xl overflow-hidden border border-white/20 bg-white shadow-2xl flex flex-col"
            >
              {/* Entête Lightbox */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50 shrink-0">
                <div>
                  <p className="text-sm font-black text-[#0F172A]">
                    {lightbox.title}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Capture d&apos;écran haute fidélité · Cliquez n&apos;importe où ou appuyez sur Échap pour fermer
                  </p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="rounded-full p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition"
                  aria-label="Fermer le zoom"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Image zoomée */}
              <div className="p-3 sm:p-6 overflow-auto flex items-center justify-center bg-slate-100/60">
                <Image
                  src={lightbox.image}
                  alt={lightbox.title}
                  width={1400}
                  height={900}
                  className="rounded-lg object-contain w-full h-auto max-h-[75vh] shadow-lg border border-slate-200/80"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
