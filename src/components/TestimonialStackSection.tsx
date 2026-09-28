"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  stars: number;
  quote: string;
  theme: "light" | "dark";
  cardBg: string;
  textColor: string;
  quoteColor: string;
  stacked: {
    xPercent: number;
    yPercent: number;
    rotate: number;
    zIndex: number;
  };
  exploded: {
    xPercent: number;
    yPercent: number;
    rotate: number;
    zIndex: number;
  };
}

// 5 cartes avec disposition en éventail soignée, sans aucun chevauchement destructeur de texte
const TESTIMONIALS: Testimonial[] = [
  {
    id: "sell",
    name: "Amadou K.",
    role: "Gérant de Quincaillerie",
    company: "Abidjan",
    avatarText: "AK",
    stars: 5,
    quote:
      "Avant, j'avais une boule au ventre à chaque visite des impôts. Avec Sell Flow, mes factures sortent avec le QR code FNE direct. Je dors enfin sur mes deux oreilles.",
    theme: "light",
    cardBg: "bg-[#F8FAFC] border border-[#E2E8F0]",
    textColor: "text-[#0A1440]",
    quoteColor: "text-[#555B72]",
    stacked: { xPercent: 0, yPercent: 4, rotate: -6, zIndex: 1 },
    exploded: { xPercent: -88, yPercent: -42, rotate: -6, zIndex: 15 },
  },
  {
    id: "compta",
    name: "Sarah M.",
    role: "Directrice Financière",
    company: "Plateau",
    avatarText: "SM",
    stars: 5,
    quote:
      "Le rapprochement bancaire nous prenait 3 jours chaque fin de mois. Aujourd'hui, on plie ça en 45 minutes. Mon équipe ne fait plus de saisie, on fait du vrai conseil financier.",
    theme: "dark",
    cardBg: "bg-[#1E40C7] text-white", // flow-compta
    textColor: "text-white",
    quoteColor: "text-blue-100",
    stacked: { xPercent: 0, yPercent: 2, rotate: -3, zIndex: 2 },
    exploded: { xPercent: 18, yPercent: -75, rotate: 3, zIndex: 25 },
  },
  {
    id: "task",
    name: "Koffi A.",
    role: "Entrepreneur",
    company: "Cocody",
    avatarText: "KA",
    stars: 5,
    quote:
      "Le support client basé à Abidjan comprend nos urgences. Un vrai gain de temps au quotidien pour piloter toute mon entreprise.",
    theme: "light",
    cardBg: "bg-[#F8FAFC] border border-[#E2E8F0] shadow-lg",
    textColor: "text-[#0A1440]",
    quoteColor: "text-[#555B72]",
    stacked: { xPercent: 0, yPercent: 0, rotate: 0, zIndex: 5 },
    exploded: { xPercent: -6, yPercent: 0, rotate: -1, zIndex: 20 },
  },
  {
    id: "rh",
    name: "Mariam Y.",
    role: "Responsable RH",
    company: "Logistique Vridi",
    avatarText: "MY",
    stars: 5,
    quote:
      "Faire les fiches de paie et déclarations CNPS avec Excel me prenait une semaine entière. Maintenant, avec RH Flow, le 25 du mois à midi, tout est imprimé et déclaré. C'est magique.",
    theme: "light",
    cardBg: "bg-[#F8FAFC] border border-[#E2E8F0]",
    textColor: "text-[#0A1440]",
    quoteColor: "text-[#555B72]",
    stacked: { xPercent: 0, yPercent: 1, rotate: 3, zIndex: 3 },
    exploded: { xPercent: -76, yPercent: 58, rotate: -4, zIndex: 30 },
  },
  {
    id: "sell-dark",
    name: "Brice K.",
    role: "Directeur Général",
    company: "Cabinet BTP",
    avatarText: "BK",
    stars: 5,
    quote:
      "La centralisation des 5 modules nous a permis de diviser nos coûts administratifs par deux tout en restant 100% conformes DGI et CNPS.",
    theme: "dark",
    cardBg: "bg-[#0E3A4A] text-white", // flow-sell
    textColor: "text-white",
    quoteColor: "text-slate-200",
    stacked: { xPercent: 0, yPercent: 3, rotate: 6, zIndex: 4 },
    // Décalage et z-index prioritaires pour empêcher tout chevauchement ou coupure de texte
    exploded: { xPercent: 68, yPercent: 48, rotate: 4, zIndex: 50 },
  },
];

export default function TestimonialStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // 1. DESKTOP (>= 768px) SANS REDUCED MOTION :
      // Scroll-linked animation avec pin: true et scrub: 1
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=130%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        TESTIMONIALS.forEach((t, i) => {
          tl.fromTo(
            `.testimonial-card-${i}`,
            {
              xPercent: t.stacked.xPercent,
              yPercent: t.stacked.yPercent,
              rotation: t.stacked.rotate,
              scale: 0.96,
            },
            {
              xPercent: t.exploded.xPercent,
              yPercent: t.exploded.yPercent,
              rotation: t.exploded.rotate,
              scale: 1,
              ease: "power2.out",
            },
            0
          );
        });
      });

      // 2. ACCESSIBILITÉ : REDUCED MOTION
      mm.add("(prefers-reduced-motion: reduce)", () => {
        TESTIMONIALS.forEach((t, i) => {
          gsap.set(`.testimonial-card-${i}`, {
            xPercent: t.exploded.xPercent,
            yPercent: t.exploded.yPercent,
            rotation: t.exploded.rotate,
            scale: 1,
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="temoignages"
      aria-label="Témoignages clients Suite Flow"
      className="relative bg-white py-16 md:py-24 text-[#555B72]"
    >
      <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* EN-TÊTE : Typographie Georgia (serif) & Hiérarchie */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#2F5BFF]">
            Témoignages
          </span>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0A1440] leading-tight">
            Ce que disent nos utilisateurs sur Suite Flow
          </h2>

          <p className="mt-4 text-base sm:text-lg font-normal text-[#555B72] max-w-2xl mx-auto leading-relaxed">
            Des entrepreneurs et indépendants ivoiriens qui gèrent leur croissance sans stress.
          </p>
        </div>

        {/* 1. VERSION DESKTOP (MD+) : PILE ANIMÉE AU SCROLL (SANS DÉBORDEMENT NI COUPE DE TEXTE) */}
        <div className="hidden md:block relative mx-auto mt-20 max-w-6xl h-[620px]">
          <div
            id="testimonial-container"
            role="region"
            aria-label="Pile de témoignages déployée au scroll"
            className="relative size-full flex items-center justify-center select-none"
          >
            {TESTIMONIALS.map((item, index) => (
              <article
                key={item.id}
                tabIndex={0}
                role="article"
                aria-label={`Avis de ${item.name}`}
                className={`testimonial-card-${index} absolute w-[350px] lg:w-[390px] rounded-3xl p-7 shadow-2xl transition-shadow hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)] ${item.cardBg}`}
                style={{
                  zIndex: item.exploded.zIndex,
                  willChange: "transform",
                }}
              >
                {/* 5 Étoiles dorées */}
                <div className="flex items-center gap-1 text-amber-400 text-sm" aria-label="5 étoiles sur 5">
                  {"★★★★★"}
                </div>

                {/* Citation intégrale sans rognage */}
                <p className={`mt-4 text-sm sm:text-[14.5px] leading-relaxed font-normal ${item.quoteColor}`}>
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Profil utilisateur */}
                <footer className="mt-6 flex items-center gap-3 pt-2 border-t border-black/5 dark:border-white/10">
                  <div
                    className={`grid size-10 place-items-center rounded-full text-xs font-black shrink-0 ${
                      item.theme === "dark"
                        ? "bg-white/15 text-white border border-white/20"
                        : "bg-gradient-to-br from-[#002288] to-[#0052FF] text-white shadow-sm"
                    }`}
                  >
                    {item.avatarText}
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold leading-none ${item.textColor}`}>
                      {item.name}
                    </h3>
                    <p className={`text-xs mt-1 leading-none ${item.theme === "dark" ? "text-slate-300" : "text-slate-500"}`}>
                      {item.role} ({item.company})
                    </p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>

        {/* 2. VERSION MOBILE (< 768px) : CARROUSEL HORIZONTAL FLUIDE SANS CASSE DE POSITION ABSOLUE */}
        <div className="md:hidden mt-10">
          <div
            role="region"
            aria-label="Carrousel des avis clients"
            className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none"
          >
            {TESTIMONIALS.map((item) => (
              <article
                key={`mobile-${item.id}`}
                className={`min-w-[85vw] sm:min-w-[340px] shrink-0 snap-center rounded-2xl p-6 shadow-lg ${item.cardBg}`}
              >
                <div className="flex items-center gap-1 text-amber-400 text-sm">
                  {"★★★★★"}
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${item.quoteColor}`}>
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-5 flex items-center gap-3 pt-2 border-t border-black/5 dark:border-white/10">
                  <div
                    className={`grid size-10 place-items-center rounded-full text-xs font-black shrink-0 ${
                      item.theme === "dark"
                        ? "bg-white/20 text-white"
                        : "bg-gradient-to-br from-[#002288] to-[#0052FF] text-white shadow-sm"
                    }`}
                  >
                    {item.avatarText}
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold leading-none ${item.textColor}`}>
                      {item.name}
                    </h3>
                    <p className={`text-xs mt-1 ${item.theme === "dark" ? "text-slate-300" : "text-slate-500"}`}>
                      {item.role} ({item.company})
                    </p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 font-medium">
            ← Faites glisser pour lire tous les avis →
          </p>
        </div>
      </div>
    </section>
  );
}
