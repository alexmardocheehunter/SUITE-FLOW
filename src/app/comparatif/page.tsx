import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  Unlink,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  CheckCircle,
} from "lucide-react";
import ComparatifTable from "@/components/ComparatifTable";
import ComparatifTabs from "@/components/ComparatifTabs";
import ComparatifCalculator from "@/components/ComparatifCalculator";
import ComparatifFAQ from "@/components/ComparatifFAQ";
import { COMPARATIF_FAQS } from "@/lib/comparatif-data";

export const metadata: Metadata = {
  title: "Suite Flow vs HubSpot, Pennylane, PayFit — Comparatif Logiciel PME 2026",
  description:
    "Comparez Suite Flow aux solutions du marché (HubSpot, Pennylane, Monday, PayFit). CRM, facturation, RH, juridique, tâches : tout en un seul outil, à partir de 149€/mois. Tableau comparatif complet.",
  alternates: {
    canonical: "https://suiteflow.fr/comparatif",
  },
  openGraph: {
    title: "Suite Flow vs HubSpot, Pennylane, PayFit — Comparatif Logiciel PME 2026",
    description:
      "Comparez Suite Flow aux solutions du marché (HubSpot, Pennylane, Monday, PayFit). CRM, facturation, RH, juridique, tâches : tout en un seul outil, à partir de 149€/mois. Tableau comparatif complet.",
    url: "https://suiteflow.fr/comparatif",
    siteName: "Suite Flow",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://suiteflow.fr/logos/suite-flow.webp",
        width: 1200,
        height: 630,
        alt: "Tableau comparatif Suite Flow vs alternatives logicielles PME",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suite Flow vs HubSpot, Pennylane, PayFit — Comparatif Logiciel PME 2026",
    description:
      "CRM, facturation, RH, juridique, tâches : tout en un seul outil, à partir de 149€/mois. Comparez votre stack actuelle face à Suite Flow.",
    images: ["https://suiteflow.fr/logos/suite-flow.webp"],
  },
};

const TESTIMONIALS = [
  {
    name: "Nicolas R.",
    role: "Directeur Général",
    company: "Conseil & Ingénierie B2B",
    employees: "35 salariés",
    quote:
      "On payait plus de 480€ par mois entre HubSpot, Trello et notre logiciel comptable. Les commerciaux perdaient 4h par semaine à retaper les données des devis pour la facturation. Depuis la bascule sur Suite Flow, un devis accepté génère automatiquement la facture, le projet et le contrat. On a divisé notre facture logicielle par 3.",
    rating: 5,
    initials: "NR",
  },
  {
    name: "Claire D.",
    role: "Responsable des Opérations",
    company: "Services Numériques",
    employees: "22 salariés",
    quote:
      "La migration s'est faite en 10 jours chrono. Notre équipe a immédiatement adopté l'interface sans aucune formation lourde. Fini les relances permanentes entre la compta et les chefs de projet : chaque contrat et chaque facture sont directement reliés au client dans une seule base.",
    rating: 5,
    initials: "CD",
  },
  {
    name: "Marc T.",
    role: "Gérant",
    company: "Distribution & Négoce",
    employees: "60 salariés",
    quote:
      "Ce qui nous a convaincus, c'est l'honnêteté de la démarche. Suite Flow ne prétend pas remplacer un ERP industriel à 50 000€, mais pour une PME en pleine croissance qui veut un CRM, de la compta, de la gestion RH et des tâches connectées, c'est imbattable. Le support en France répond en moins de 15 minutes.",
    rating: 5,
    initials: "MT",
  },
];

export default function ComparatifPage() {
  // Schémas JSON-LD pour référencement riche Google (FAQPage, SoftwareApplication, WebPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://suiteflow.fr/comparatif#webpage",
        url: "https://suiteflow.fr/comparatif",
        name: "Suite Flow vs HubSpot, Pennylane, PayFit — Comparatif Logiciel PME 2026",
        description:
          "Tableau comparatif détaillé de Suite Flow face aux logiciels de gestion PME du marché.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Accueil",
              item: "https://suiteflow.fr",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Comparatif",
              item: "https://suiteflow.fr/comparatif",
            },
          ],
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://suiteflow.fr/#software",
        name: "Suite Flow",
        operatingSystem: "Web",
        applicationCategory: "BusinessApplication",
        description:
          "Suite logicielle intégrée tout-en-un pour PME : CRM, facturation, comptabilité, gestion RH, contrats et tâches.",
        offers: {
          "@type": "Offer",
          price: "149.00",
          priceCurrency: "EUR",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "250",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://suiteflow.fr/comparatif#faq",
        mainEntity: COMPARATIF_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen w-full bg-white text-[#0A1440]">
        {/* SECTION 1 — HERO */}
        <section
          aria-label="En-tête comparatif Suite Flow"
          className="relative w-full overflow-hidden bg-gradient-to-r from-[#030B2A] via-[#002288] to-[#0052FF] px-6 pb-20 pt-32 sm:pt-36 md:px-12 md:pb-24 text-white"
        >
          {/* Halos d'ambiance visuels discrets */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-blue-400/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-indigo-400/20 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Badge de contexte */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-100 backdrop-blur-md">
              <Zap className="size-3.5 text-amber-300" />
              Benchmark Opérations & Logiciels PME 2026
            </span>

            {/* H1 direct et sans détour */}
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Suite Flow vs les outils que vous utilisez déjà
            </h1>

            {/* Sous-titre orienté dirigeant */}
            <p className="mt-5 text-base sm:text-lg md:text-xl font-medium text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
              Vous payez 5 abonnements différents pour faire ce que Suite Flow regroupe en un seul. Comparez point par point, sans filtre.
            </p>

            {/* Double CTA Hero */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0052FF] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-black/20 transition-all hover:bg-blue-600 hover:scale-105 active:scale-95"
              >
                <span>Voir la démo gratuite</span>
                <ArrowRight className="size-4" />
              </Link>

              <a
                href="#tableau-comparatif"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
              >
                Comparer les fonctionnalités
              </a>
            </div>

            {/* Rassurance immédiate */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-emerald-400" />
                Déploiement en 2 semaines
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-emerald-400" />
                100% Données hébergées en France
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span>Sans engagement obligatoire</span>
            </div>
          </div>
        </section>

        {/* SECTION 2 — LE PROBLÈME (Storytelling court & concret) */}
        <section
          aria-label="Le problème de la fragmentation logicielle"
          className="w-full bg-[#F8FAFC] py-20 px-6 md:px-12 border-b border-[#E2E8F0]"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
                Le constat des dirigeants de PME
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black text-[#0A1440] tracking-tight">
                Votre stack actuelle vous coûte plus que vous ne le pensez
              </h2>
              <p className="mt-3 text-base text-slate-600">
                La multiplication des outils spécialisés semblait être une bonne idée. Aujourd&apos;hui, elle freine votre croissance.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {/* Bloc 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5">
                <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100/70 text-[#0052FF]">
                  <Layers className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-black text-[#0A1440]">
                  4 à 7 outils séparés
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  Vous jonglez chaque jour entre HubSpot, Pennylane, PayFit, Trello et Yousign. Chaque outil a sa propre interface, son login distinct, ses factures mensuelles et son support client.
                </p>
              </div>

              {/* Bloc 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5">
                <div className="flex size-12 items-center justify-center rounded-lg bg-indigo-100/70 text-[#1E40AF]">
                  <Unlink className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-black text-[#0A1440]">
                  Données éparpillées en silos
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  Le client signé dans le CRM n&apos;apparaît pas dans la facturation. Le contrat juridique n&apos;est pas lié au projet. Vos équipes perdent des heures à copier-coller et ressaisir manuellement.
                </p>
              </div>

              {/* Bloc 3 */}
              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5">
                <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-100/70 text-emerald-700">
                  <DollarSign className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-black text-[#0A1440]">
                  Budget mensuel multiplié par 3
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  5 outils à 80€/mois en moyenne = 400€ à 600€ chaque mois, souvent pour n&apos;utiliser que 20% des options. Suite Flow réunit l&apos;essentiel opérationnel à partir de <strong>149€/mois</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — TABLEAU COMPARATIF PRINCIPAL (LE CŒUR DE LA PAGE) */}
        <section
          id="tableau-comparatif"
          aria-label="Tableau comparatif des fonctionnalités et prix"
          className="w-full py-20 px-6 md:px-12 scroll-mt-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
                Comparaison directe
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black text-[#0A1440] tracking-tight">
                Suite Flow vs les solutions du marché
              </h2>
              <p className="mt-3 text-base text-slate-600">
                La différence concrète entre payer 5 outils cloisonnés et piloter votre PME depuis une plateforme unique.
              </p>
            </div>

            <ComparatifTable />
          </div>
        </section>

        {/* SECTION 4 — COMPARAISONS DÉTAILLÉES PAR MODULE (TABS) */}
        <section
          aria-label="Détail par module Suite Flow"
          className="w-full bg-[#F8FAFC] py-20 px-6 md:px-12 border-y border-[#E2E8F0]"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
                Analyse module par module
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black text-[#0A1440] tracking-tight">
                Zoom sur chaque brique opérationnelle
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Découvrez les atouts de Suite Flow face à chaque leader spécialisé, avec nos points forts et leurs limites respectives en toute transparence.
              </p>
            </div>

            <ComparatifTabs />
          </div>
        </section>

        {/* SECTION 5 — CALCULATEUR D'ÉCONOMIES (INTERACTIF) */}
        <section
          id="calculateur"
          aria-label="Calculateur d'économies en ligne"
          className="w-full py-20 px-6 md:px-12 scroll-mt-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                Simulateur de rentabilité
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black text-[#0A1440] tracking-tight">
                Combien vous coûte votre stack actuelle ?
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Cochez les briques que vous utilisez et estimez immédiatement les économies d&apos;abonnements que vous pouvez réinjecter dans votre entreprise.
              </p>
            </div>

            <ComparatifCalculator />
          </div>
        </section>

        {/* SECTION 6 — TÉMOIGNAGES DE MIGRATION */}
        <section
          aria-label="Témoignages de dirigeants ayant migré vers Suite Flow"
          className="w-full bg-[#F8FAFC] py-20 px-6 md:px-12 border-t border-[#E2E8F0]"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
                Retours d&apos;expérience réels
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black text-[#0A1440] tracking-tight">
                Ils ont remplacé 4 outils par Suite Flow
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Voici comment des dirigeants de PME ont simplifié leur quotidien tout en réduisant leurs dépenses opérationnelles.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5 flex flex-col justify-between"
                >
                  <div>
                    {/* Étoiles dorées */}
                    <div className="flex text-amber-400 text-sm tracking-widest" aria-label="5 étoiles sur 5">
                      ★★★★★
                    </div>

                    <p className="mt-4 text-sm sm:text-[14.5px] leading-relaxed text-slate-700 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                    <div className="size-10 rounded-full bg-gradient-to-br from-[#002288] to-[#0052FF] text-white font-black text-xs grid place-items-center shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0A1440]">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {t.role} · {t.company}
                      </div>
                      <div className="text-[11px] font-semibold text-[#0052FF] mt-0.5">
                        {t.employees}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — FAQ ACCESSIBLE AVEC SCHEMA FAQPAGE */}
        <section
          aria-label="Foire aux questions sur la migration vers Suite Flow"
          className="w-full py-20 px-6 md:px-12"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
                Foire aux questions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black text-[#0A1440] tracking-tight">
                Tout ce que vous devez savoir avant de migrer
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Des réponses précises et transparentes aux interrogations les plus fréquentes des dirigeants et DAF.
              </p>
            </div>

            <ComparatifFAQ />
          </div>
        </section>

        {/* SECTION 8 — CTA FINAL */}
        <section
          aria-label="Passez à Suite Flow"
          className="w-full bg-gradient-to-r from-[#030B2A] via-[#002288] to-[#0052FF] py-20 px-6 md:px-12 text-center text-white"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Arrêtez de payer 5 outils. Passez à un seul.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-blue-100/90 leading-relaxed">
              Démo gratuite de 30 minutes. Sans engagement. On vous montre en direct comment Suite Flow remplace votre stack actuelle sans perdre une seule donnée.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0052FF] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-black/20 transition-all hover:bg-blue-600 hover:scale-105 active:scale-95"
              >
                <span>Réserver ma démo</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/#tarifs"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
              >
                Voir les tarifs détaillés
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-blue-200/80">
              <Users className="size-3.5" />
              <span>Plus de 250 PME utilisent déjà Suite Flow au quotidien</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
