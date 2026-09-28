"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "PACK SOLO",
    price: "30 000",
    unit: "FCFA / mois",
    note: "Idéal pour démarrer",
    desc: "Formule à la carte sans engagement (résiliable en fin de mois). Idéal pour démarrer sereinement.",
    features: [
      "3 modules au choix (ex : Sell + Compta + Task)",
      "Facturation normalisée FNE illimitée",
      "1 Utilisateur Administrateur",
      "Sans engagement, résiliable en fin de mois",
      "Support technique par email & WhatsApp",
    ],
    highlight: false,
    cta: "Choisir le Pack Solo",
  },
  {
    name: "PACK BUSINESS",
    price: "75 000",
    unit: "FCFA / mois",
    note: "L'arsenal complet",
    desc: "L'arsenal complet pour les PME en croissance. Les 5 modules inclus sans restriction.",
    features: [
      "Les 5 modules inclus (Sell, Compta, RH, Legal, Task)",
      "Jusqu'à 10 collaborateurs connectés",
      "Interconnexion totale : Une Seule Saisie",
      "Alertes fiscales WhatsApp personnalisées",
      "Sans engagement, résiliable en fin de mois",
      "Support WhatsApp prioritaire 6j/7",
    ],
    highlight: true,
    cta: "Démarrer avec le Pack Business",
  },
  {
    name: "PACK PREMIUM / VIP",
    price: "135 000",
    unit: "FCFA / mois",
    note: "Accompagnement complet",
    desc: "Accompagnement complet et multi-établissements avec le cabinet DC-KNOWING à Abidjan.",
    features: [
      "Tout débloqué en illimité (5 modules)",
      "Multi-établissements & multi-sociétés",
      "Accompagnement dédié par le cabinet DC-KNOWING",
      "Formation sur site de vos équipes à Abidjan",
      "Sans engagement, résiliable en fin de mois",
      "Assistance directe gestionnaire senior",
    ],
    highlight: false,
    cta: "Contacter la Direction VIP",
  },
];

const FAQS = [
  {
    q: "Puis-je changer de formule à tout moment ?",
    a: "Oui, à tout moment. La mise à niveau est immédiate et l'ensemble de vos données financières et sociales reste préservé sans interruption.",
  },
  {
    q: "Y a-t-il un engagement de durée ?",
    a: "Non. Nos formules sont sans engagement et résiliables simplement pour la fin du mois en cours, en toute transparence.",
  },
  {
    q: "Le déploiement et le paramétrage sont-ils inclus ?",
    a: "Oui : le paramétrage initial conforme aux barèmes DGI/CNPS, l'import de vos données et la prise en main sont assurés par les équipes du cabinet DC-KNOWING à Abidjan.",
  },
  {
    q: "Puis-je ne choisir que 3 logiciels ?",
    a: "Oui, c'est le principe du Pack Solo qui vous permet de sélectionner 3 modules au choix. Le Pack Business réunit les 5 logiciels pour éliminer toute ressaisie.",
  },
  {
    q: "Et si j'ai besoin d'un accompagnement comptable certifié ?",
    a: "Le cabinet DC-KNOWING (agréé ONECCA) peut prendre en charge l'intégralité de votre comptabilité, de vos déclarations fiscales et de vos bilans légaux en synergie avec la Suite Flow.",
  },
];

/**
 * Section Tarifs intégrée directement sur la page d'accueil (/),
 * positionnée avant la section Témoignages, sur fond blanc lumineux.
 */
export default function TarifsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section
      id="tarifs"
      aria-label="Grille tarifaire et formules Suite Flow"
      className="relative bg-white py-20 md:py-28 text-[#0F172A]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* EN-TÊTE DE SECTION SUR FOND BLANC */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-black uppercase tracking-widest text-[#2F5BFF]">
              Tarifs Transparents
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0A1440] leading-tight">
              Un investissement rentable dès le 1er mois
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base sm:text-lg text-[#555B72] max-w-2xl mx-auto leading-relaxed">
              Bien moins cher que vos pénalités de retard fiscales, erreurs de facturation ou journées perdues en ressaisie comptable.
            </p>
          </Reveal>
        </div>

        {/* 3 FORMULES TARIFAIRES */}
        <div className="mt-14 grid gap-6 md:grid-cols-3 items-stretch">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300",
                  p.highlight
                    ? "bg-gradient-to-br from-[#030B2A] via-[#002288] to-[#0052FF] text-white shadow-2xl shadow-blue-500/25 ring-2 ring-cyan-400 scale-[1.03]"
                    : "bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A1440] hover:shadow-xl hover:border-slate-300"
                )}
              >
                {p.highlight && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#0052FF] px-4 py-1.5 text-xs font-black text-white shadow-md">
                    <Sparkles className="size-3.5" aria-hidden /> Le Choix des PME Ivoiriennes
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <h3
                    className={cn(
                      "text-xl font-extrabold tracking-tight",
                      p.highlight ? "text-white" : "text-[#0A1440]"
                    )}
                  >
                    {p.name}
                  </h3>
                  <span
                    className={cn(
                      "text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full",
                      p.highlight ? "bg-white/15 text-blue-200" : "bg-slate-200/70 text-slate-700"
                    )}
                  >
                    {p.note}
                  </span>
                </div>

                <p
                  className={cn(
                    "mt-2 text-xs sm:text-sm leading-relaxed",
                    p.highlight ? "text-blue-100" : "text-[#555B72]"
                  )}
                >
                  {p.desc}
                </p>

                {/* Prix */}
                <div className="mt-6 pb-6 border-b border-black/10 dark:border-white/10">
                  <span
                    className={cn(
                      "text-4xl sm:text-5xl font-black tracking-tight",
                      p.highlight ? "text-white" : "text-[#0A1440]"
                    )}
                  >
                    {p.price}
                  </span>
                  <span
                    className={cn(
                      "ml-2 text-xs font-bold",
                      p.highlight ? "text-blue-200" : "text-[#64748B]"
                    )}
                  >
                    {p.unit}
                  </span>
                </div>

                {/* Caractéristiques */}
                <ul className="mt-6 flex-1 space-y-3.5 text-sm font-medium">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          p.highlight ? "text-emerald-400" : "text-[#0052FF]"
                        )}
                        aria-hidden
                      />
                      <span className={p.highlight ? "text-slate-100" : "text-[#334155]"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bouton CTA - radius 6-8px : rounded-lg, dégradé bleu sur fond blanc ou blanc sur fond dégradé */}
                <Link
                  href="/contact"
                  className={cn(
                    "mt-8 block rounded-lg py-3.5 text-center text-sm font-bold transition-all shadow-md active:scale-95",
                    p.highlight
                      ? "bg-white text-[#0A1440] hover:bg-slate-100 hover:scale-[1.02]"
                      : "bg-gradient-to-r from-[#002288] to-[#0052FF] text-white hover:from-[#001c6e] hover:to-[#0047e0] hover:scale-[1.02]"
                  )}
                >
                  {p.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* OFFRES COMPLÉMENTAIRES */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <Reveal>
            <h3 className="text-xl sm:text-2xl font-black text-[#0A1440] tracking-tight">
              Offres &amp; Services Complémentaires
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 hover:shadow-lg transition-all">
                <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
                  Pack Facturation &amp; Compta
                </span>
                <h4 className="mt-1 text-lg font-extrabold text-[#0A1440]">
                  Sell Flow + Compta Flow
                </h4>
                <p className="mt-2 text-sm text-[#555B72] leading-relaxed">
                  De l&apos;encaissement à la caisse jusqu&apos;au bilan SYSCOHADA : facturez en règle avec la FNE-DGI et alimentez automatiquement votre comptabilité sans aucune double saisie.
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#0A1440]">25 000</span>
                  <span className="text-xs font-bold text-slate-500">FCFA HT / mois, dès</span>
                </div>
                <Link
                  href="/contact"
                  className="mt-5 inline-block rounded-lg bg-gradient-to-r from-[#002288] to-[#0052FF] px-5 py-2.5 text-xs font-bold text-white hover:from-[#001c6e] hover:to-[#0047e0] transition shadow-md"
                >
                  Demander ce pack →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 hover:shadow-lg transition-all">
                <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
                  Direction Financière Externalisée
                </span>
                <h4 className="mt-1 text-lg font-extrabold text-[#0A1440]">
                  Pack DFE &amp; Expertise Cabinet
                </h4>
                <p className="mt-2 text-sm text-[#555B72] leading-relaxed">
                  Un Directeur Financier senior dédié du cabinet DC-KNOWING + l&apos;ensemble de la Suite Flow pour piloter votre entreprise au sommet.
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#0A1440]">Sur mesure</span>
                  <span className="text-xs font-bold text-slate-500">(selon volume d&apos;activité)</span>
                </div>
                <Link
                  href="/contact"
                  className="mt-5 inline-block rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-[#0A1440] hover:bg-slate-100 transition shadow-xs"
                >
                  Parler à un expert DC-KNOWING →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* FAQ TARIFS ACCORDÉON */}
        <div className="mt-16 mx-auto max-w-3xl">
          <Reveal>
            <h3 className="text-center font-serif text-2xl sm:text-3xl font-black text-[#0A1440]">
              Questions Fréquentes sur les Tarifs
            </h3>
          </Reveal>
          <div className="mt-8 space-y-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-4 text-left transition hover:border-slate-300 shadow-xs"
                >
                  <span className="flex items-center justify-between gap-4 text-sm font-bold text-[#0A1440]">
                    {f.q}
                    <ChevronDown
                      className={cn(
                        "size-4 shrink-0 transition-transform duration-200 text-slate-500",
                        openFaq === i && "rotate-180 text-[#0052FF]"
                      )}
                      aria-hidden
                    />
                  </span>
                  {openFaq === i && (
                    <span className="mt-3 block text-sm leading-relaxed text-[#555B72] border-t border-[#E2E8F0] pt-3">
                      {f.a}
                    </span>
                  )}
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
