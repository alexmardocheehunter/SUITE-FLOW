"use client";

import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ShoppingCart, QrCode, Store, Wallet, FileText, Package, BarChart3,
  Calculator, BookOpen, ScanLine, RefreshCw, FileSpreadsheet, Upload, Send,
  Users, FileBadge, Percent, ShieldCheck, CalendarOff, Download,
  Scale, CalendarDays, MessageCircle, Archive, Radar,
  LayoutDashboard, KanbanSquare, UserPlus, BellRing, PieChart, Eye, Activity,
  Sparkles, ArrowRight, CheckCircle2, FileSignature, CheckSquare,
} from "lucide-react";
import FeatureCard from "./feature-card";
import TestimonialCard from "./testimonial-card";
import Reveal from "./Reveal";

/** Noms d'icônes sérialisables */
const ICONS: Record<string, LucideIcon> = {
  cart: ShoppingCart, qr: QrCode, store: Store, wallet: Wallet, doc: FileText,
  stock: Package, stats: BarChart3, calc: Calculator, book: BookOpen, scan: ScanLine,
  refresh: RefreshCw, sheet: FileSpreadsheet, upload: Upload, send: Send,
  users: Users, badge: FileBadge, percent: Percent, shield: ShieldCheck,
  leave: CalendarOff, download: Download, scale: Scale, calendar: CalendarDays,
  chat: MessageCircle, archive: Archive, radar: Radar, board: LayoutDashboard,
  kanban: KanbanSquare, assign: UserPlus, bell: BellRing, pie: PieChart,
  eye: Eye, pulse: Activity, contract: FileSignature, task: CheckSquare,
};

export type ProductFeature = { icon: string; title: string; text: string };
export type Testimonial = { quote: string; name: string; role: string; initials: string };

type Props = {
  appName: string;
  tagline: string;
  title: string;
  subtitle: string;
  icon: string;
  logoSrc: string;
  moduleColor: string; // ex: "#0052FF", "#1E40AF", "#0891B2", "#7C3AED", "#334155"
  auraClass?: string;
  features: ProductFeature[];
  practiceTitle: string;
  practiceText: string;
  practiceBullets: string[];
  practiceStats: { value: string; label: string }[];
  testimonials: Testimonial[];
  ctaTitle: string;
  ctaButton: string;
};

// 5 modules avec leurs couleurs de charte officielles
const ALL_MODULES = [
  { id: "sell-flow", name: "Sell Flow", desc: "Facturation FNE-DGI, caisse & stocks", href: "/sell-flow", icon: ShoppingCart, color: "#003061" },
  { id: "compta-flow", name: "Compta Flow", desc: "Comptabilité SYSCOHADA & banques", href: "/compta-flow", icon: Calculator, color: "#1E40AF" },
  { id: "rh-flow", name: "RH Flow", desc: "Paie ivoirienne ITS/CNPS & pointage", href: "/rh-flow", icon: Users, color: "#263e88" },
  { id: "legal-flow", name: "Legal Flow", desc: "Bouclier fiscal & alertes WhatsApp", href: "/legal-flow", icon: Scale, color: "#7C3AED" },
  { id: "task-flow", name: "Task Flow", desc: "CRM & contrats de mission automatisés", href: "/task-flow", icon: LayoutDashboard, color: "#334155" },
];

/**
 * Template des 5 pages produit en mode CLAIR (#FFFFFF / #F8FAFC)
 * avec typographies sombres (#0A1440), accents et CTA à la couleur officielle du module.
 */
export default function ProductPageTemplate({
  appName,
  tagline,
  title,
  subtitle,
  icon: iconName,
  logoSrc,
  moduleColor,
  features,
  practiceTitle,
  practiceText,
  practiceBullets,
  practiceStats,
  testimonials,
  ctaTitle,
  ctaButton,
}: Props) {
  const AppIcon = ICONS[iconName] ?? Sparkles;

  // Filtrer les 4 autres modules pour la section écosystème
  const otherModules = ALL_MODULES.filter(
    (m) => !m.name.toLowerCase().includes(appName.toLowerCase().split(" ")[0])
  );

  return (
    <div className="bg-[#F8FAFC] text-[#0A1440]">
      {/* 1. HERO CLAIR */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/70 via-white to-slate-50 px-6 pb-20 pt-32 md:px-10 md:pt-40 border-b border-slate-200/80">
        {/* Aura subtile et lumineuse (opacité 8-10% pour fond clair) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 size-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          style={{ backgroundColor: `${moduleColor}15` }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <Reveal>
              <p
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest border shadow-sm backdrop-blur-md"
                style={{
                  color: moduleColor,
                  borderColor: `${moduleColor}30`,
                  backgroundColor: `${moduleColor}0F`,
                }}
              >
                <AppIcon className="size-4" aria-hidden />
                <span>{tagline}</span>
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className="mt-6 text-balance text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
                style={{ color: moduleColor }}
              >
                {title}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-[#475569] md:text-lg">
                {subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {/* CTA principal à la couleur du module (radius 6-8px : rounded-lg) */}
                <Link
                  href="/contact"
                  className="rounded-lg px-8 py-3.5 text-xs sm:text-sm font-black text-white shadow-lg transition-all hover:scale-[1.02] hover:opacity-95 active:scale-95 uppercase tracking-wide"
                  style={{ backgroundColor: moduleColor }}
                >
                  {ctaButton}
                </Link>

                {/* Bouton WhatsApp direct vert émeraude */}
                <a
                  href="https://wa.me/2250767131993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-emerald-700 shadow-md flex items-center gap-2"
                >
                  <span>💬 WhatsApp direct</span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative flex items-center justify-center">
              <div className="relative size-64 sm:size-80 flex items-center justify-center">
                <Image
                  src={logoSrc.endsWith(".png") ? logoSrc.replace(".png", ".webp") : logoSrc}
                  alt={appName}
                  width={280}
                  height={280}
                  priority
                  quality={80}
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. FONCTIONNALITÉS CLÉS */}
      <section className="bg-white py-16 md:py-24" aria-label="Fonctionnalités principales">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <p
              className="text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: moduleColor }}
            >
              Ce que ça change
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A1440] md:text-4xl">
              Pensé pour le terrain ivoirien
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard
                key={f.title}
                icon={ICONS[f.icon] ?? Sparkles}
                title={f.title}
                text={f.text}
                delay={i * 0.08}
                accentColor={moduleColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. EN PRATIQUE */}
      <section className="border-y border-slate-200/80 bg-slate-50/90 py-16 md:py-24" aria-label={`${appName} en pratique`}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:px-10">
          <Reveal>
            <p
              className="text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: moduleColor }}
            >
              En pratique
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A1440] md:text-4xl">
              {practiceTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
              {practiceText}
            </p>
            <ul className="mt-6 space-y-3.5">
              {practiceBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm font-semibold text-[#1E293B]">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md md:p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                {practiceStats.map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-2xl font-black tracking-tight md:text-3xl"
                      style={{ color: moduleColor }}
                    >
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs font-medium leading-snug text-[#64748B]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="mt-6 rounded-xl p-4 text-center text-xs sm:text-sm font-bold border"
                style={{
                  backgroundColor: `${moduleColor}0D`,
                  color: moduleColor,
                  borderColor: `${moduleColor}25`,
                }}
              >
                Connecté en temps réel aux 4 autres apps de la Suite Flow
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. TÉMOIGNAGES */}
      <section className="bg-white py-16 md:py-24" aria-label="Témoignages clients">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <p
              className="text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: moduleColor }}
            >
              Ils l&apos;utilisent déjà
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-[#0A1440] md:text-4xl">
              Ils ont adopté {appName}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                role={t.role}
                initials={t.initials}
                delay={i * 0.1}
                accentColor={moduleColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. MINI-SÉLECTEUR ÉCOSYSTÈME (AUTRES MODULES) */}
      <section className="border-t border-slate-200/80 bg-slate-50/80 py-16 px-6 md:px-10" aria-label="Autres modules">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: moduleColor }}
              >
                Écosystème unifié
              </p>
              <h3 className="mt-2 text-2xl font-black text-[#0A1440]">
                Voir aussi les 4 autres modules de Suite Flow
              </h3>
            </div>
            <Link
              href="/#modules"
              className="text-xs font-bold text-[#0052FF] hover:underline flex items-center gap-1.5"
            >
              <span>Voir la démo globale sur l&apos;accueil</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherModules.map((m) => (
              <Link
                key={m.id}
                href={m.href}
                className="group rounded-2xl border border-slate-200/90 bg-white p-5 transition-all hover:bg-slate-50 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div
                  className="grid size-10 place-items-center rounded-xl text-white shadow-md mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: m.color }}
                >
                  <m.icon className="size-5 text-white" />
                </div>
                <h4 className="text-base font-bold text-[#0A1440] group-hover:text-[#0052FF] flex items-center justify-between">
                  <span>{m.name}</span>
                  <span className="text-xs text-slate-400 group-hover:text-[#0052FF]">→</span>
                </h4>
                <p className="mt-1.5 text-xs text-[#64748B] leading-relaxed">
                  {m.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BANDEAU CTA FINAL IMMERSIF (DÉGRADÉ OFFICIEL BLEU) */}
      <section className="px-6 pb-20 md:px-10 md:pb-28 pt-8" aria-label="Appel à l'action">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#030B2A] via-[#002288] to-[#0052FF] px-6 py-14 text-center md:py-20 shadow-2xl text-white">
            <h2 className="relative text-3xl font-black tracking-tight text-white md:text-5xl">
              {ctaTitle}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm text-blue-100/90 md:text-base leading-relaxed">
              Déploiement accompagné à Abidjan par le cabinet DC-KNOWING. Sans engagement, sans stress.
            </p>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-4 text-sm font-black uppercase tracking-wide text-[#0A1628] transition hover:scale-105 shadow-xl active:scale-95"
              >
                {ctaButton}
              </Link>
              <a
                href="https://wa.me/2250767131993"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-emerald-400/50 bg-emerald-500/30 px-8 py-4 text-sm font-bold text-white hover:bg-emerald-500 transition shadow-md flex items-center gap-2 backdrop-blur-md"
              >
                <span>💬 WhatsApp (+225 07 67 13 19 93)</span>
              </a>
              <Link
                href="/#tarifs"
                className="rounded-lg border border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition"
              >
                Consulter les tarifs
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
