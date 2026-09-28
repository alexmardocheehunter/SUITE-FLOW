import Link from "next/link";
import { ShieldCheck, FileCheck2, MapPin, Award, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "À propos — DC-KNOWING, The bespoke partner | Suite Flow",
  description: "Cabinet d'expertise comptable ivoirien devenu éditeur logiciel : 15+ experts, +250 PME et cabinets, 100% conçu en Côte d'Ivoire.",
};

const EQUIPE = [
  { initials: "KC", name: "Keyman-Bi I. Constant", role: "Directeur Général" },
  { initials: "MY", name: "M. Yapi", role: "Contrôle de gestion" },
  { initials: "KA", name: "Alex Mardochée Koffi", role: "Transformation digitale & IA" },
  { initials: "WD", name: "Williams", role: "Développement technique" },
  { initials: "DD", name: "Donalde", role: "Relation client & IA" },
  { initials: "+9", name: "Pôle comptable", role: "7 collaborateurs + managers" },
];

const VALEURS = [
  { icon: MapPin, title: "Proximité terrain", text: "Basés à Riviera Bonoumin, présents sur vos sites d'Abidjan à San Pedro et Bouaké." },
  { icon: FileCheck2, title: "Conformité stricte", text: "Agréé MBPE & FDFP. Chaque fonctionnalité respecte la réglementation ivoirienne (DGI, CNPS, SYSCOHADA)." },
  { icon: ShieldCheck, title: "Souveraineté numérique", text: "Vos données d'entreprise hébergées et sécurisées dans un cadre maîtrisé, 100% conçu en Côte d'Ivoire." },
];

const CHIFFRES = [
  { value: "+250", label: "PME et cabinets accompagnés" },
  { value: "15+", label: "experts sur site" },
  { value: "5", label: "logiciels métier interconnectés" },
  { value: "100 %", label: "conçu en Côte d'Ivoire" },
];

export default function AProposPage() {
  return (
    <div className="bg-[#F8FAFC] text-[#0A1440]">
      {/* 1. HERO INSTITUTIONNEL CLAIR */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/70 via-white to-slate-50 px-6 pb-20 pt-32 text-center md:px-10 md:pt-40 border-b border-slate-200/80">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 size-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0052FF]/10 blur-[130px]"
        />

        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#0052FF] shadow-sm">
              <Award className="size-4" /> Cabinet DC-KNOWING
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-4xl font-black tracking-tight text-[#0A1440] md:text-6xl leading-[1.08]">
              Nous sommes DC-KNOWING.{" "}
              <span className="bg-gradient-to-r from-[#0052FF] to-[#002288] bg-clip-text text-transparent">
                The bespoke partner.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#475569] md:text-xl">
              Cabinet d&apos;expertise comptable ivoirien, transformé en éditeur logiciel pour doter les PME d&apos;outils de gouvernance dignes des multinationales.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. HISTOIRE + MISSION (CARTES CLAIRES) */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24" aria-label="Histoire et mission">
        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
                  Genèse
                </span>
                <h2 className="mt-2 text-2xl font-black text-[#0A1440]">Notre histoire</h2>
                <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
                  Né de la pratique quotidienne auprès de dizaines de PME abidjanaises, le cabinet a industrialisé ses propres méthodes : chaque tâche répétitive est devenue un module logiciel, chaque contrôle un automatisme.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                  La Suite Flow est née sur le terrain ivoirien, au contact des commissaires aux comptes, des directeurs administratifs et financiers et des commerçants locaux.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
                <CheckCircle2 className="size-4 text-emerald-600" />
                <span>Développé et certifié à Abidjan</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-50/70 via-white to-cyan-50/40 p-8 md:p-10 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
                  Engagement
                </span>
                <h2 className="mt-2 text-2xl font-black text-[#0A1440]">Notre mission</h2>
                <p className="mt-4 text-xl font-extrabold leading-snug text-[#0A1440] md:text-2xl">
                  « Doter les PME ivoiriennes d&apos;outils dignes des grandes entreprises. »
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#475569]">
                  Rigueur juridique, excellence comptable SYSCOHADA et innovation numérique : le même niveau d&apos;exigence, du commerçant de détail au groupe multi-filiales.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-100">
                <span className="inline-block rounded-full bg-blue-100 text-[#0052FF] font-bold text-xs px-3.5 py-1">
                  100% Conforme DGI · CNPS · OHADA
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. ÉQUIPE DIRIGEANTE & EXPERTS */}
      <section className="bg-white py-16 md:py-24 border-y border-slate-200/80" aria-label="L'équipe">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0052FF]">L&apos;équipe</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A1440] md:text-4xl">
              Plus de 15 experts à vos côtés
            </h2>
            <p className="mt-2 text-sm text-[#475569] max-w-xl">
              Comptables agréés, auditeurs financiers, juristes et ingénieurs logiciels mobilisés chaque jour à Abidjan.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EQUIPE.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 0.1}>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 shadow-sm hover:bg-white hover:shadow-md transition-all">
                  <span
                    className="grid size-14 shrink-0 place-items-center rounded-xl bg-[#0052FF] text-base font-black text-white shadow-md"
                    aria-hidden
                  >
                    {m.initials}
                  </span>
                  <div>
                    <span className="block text-base font-bold text-[#0A1440]">{m.name}</span>
                    <span className="block text-xs font-medium text-[#64748B] mt-0.5">{m.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VALEURS */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24" aria-label="Nos valeurs">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
              Principes directeurs
            </span>
            <h2 className="mt-2 text-3xl font-black text-[#0A1440]">Ce qui guide nos actions</h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {VALEURS.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all">
                <span className="grid size-12 place-items-center rounded-xl bg-blue-50 text-[#0052FF] border border-blue-200/60 mb-5">
                  <v.icon className="size-6 text-[#0052FF]" aria-hidden />
                </span>
                <h3 className="text-lg font-bold text-[#0A1440]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. CHIFFRES CLÉS & BANDEAU DE CONTACT (FOND DÉGRADÉ BLEU DE MARQUE) */}
      <section className="px-6 pb-20 md:px-10 md:pb-28" aria-label="Chiffres clés">
        <Reveal>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-3xl bg-gradient-to-r from-[#030B2A] via-[#002288] to-[#0052FF] px-6 py-12 text-center text-white md:grid-cols-4 md:py-16 shadow-2xl">
            {CHIFFRES.map((c) => (
              <div key={c.label}>
                <p className="text-4xl font-black tracking-tight text-white md:text-5xl">{c.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-200/90 md:text-sm">{c.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* DOUBLE CTA (radius 6-8px : rounded-lg) */}
        <Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-[#0052FF] px-8 py-3.5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-blue-600 shadow-xl hover:scale-105 active:scale-95"
            >
              Réserver une démo
            </Link>
            <a
              href="https://wa.me/2250767131993"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-700 shadow-md"
            >
              <span>💬 Discuter sur WhatsApp</span>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
