"use client";

import Image from "next/image";
import Link from "next/link";
import { Landmark, Handshake, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

/**
 * Section Écosystème intégrée directement sur la page d'accueil (/),
 * positionnée juste avant la section Témoignages, sur fond dégradé bleu (pas noir).
 * Les 3 cartes forment un alignement horizontal direct relié par une ligne connectrice fine (≥768px).
 */
export default function EcosystemeSection() {
  return (
    <section
      id="ecosysteme"
      aria-label="Écosystème économique et réseau bancaire Suite Flow"
      className="relative overflow-hidden bg-gradient-to-r from-[#030B2A] via-[#002288] to-[#0052FF] py-16 md:py-24 text-white"
    >
      {/* Halo d'ambiance lumineux */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 size-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* EN-TÊTE DE LA SECTION ÉCOSYSTÈME */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/25 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-200 backdrop-blur-xl">
              L&apos;Écosystème Nodal Unique
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
              Plus qu&apos;un logiciel.{" "}
              <span className="block mt-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-white bg-clip-text text-transparent">
                Un moteur économique local.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-blue-100/90">
              Pensé par des experts-comptables ivoiriens pour les réalités des PME d&apos;Abidjan et de l&apos;intérieur.
              La Suite Flow vous connecte directement à votre expert ONECCA, aux centres de gestion agréés et sécurise vos règlements.
            </p>
          </Reveal>
        </div>

        {/* 3 CARTES BENTO DE L'ÉCOSYSTÈME AVEC LIGNE CONNECTRICE (≥768px) */}
        <div className="relative mt-12 md:mt-16">
          {/* Ligne connectrice fine en dégradé sous les icônes, visible uniquement ≥768px (masquée sur mobile) */}
          <div
            aria-hidden
            className="hidden md:block pointer-events-none absolute top-14 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-cyan-400/30 via-white/80 to-cyan-400/30 shadow-[0_0_12px_rgba(56,189,248,0.6)] z-0"
          />

          <div className="relative z-10 grid gap-6 md:grid-cols-3 items-stretch">
            {/* Carte 1 : Consultance Flow (Navy) */}
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-[#040E33]/70 p-8 backdrop-blur-xl transition-all hover:bg-[#040E33]/90 hover:border-white/35 shadow-xl">
                <div className="space-y-4">
                  <span
                    className="relative z-10 grid size-12 place-items-center rounded-xl border border-blue-300/30 bg-[#002288] text-xl text-blue-200 shadow-md"
                    aria-hidden
                  >
                    <Landmark className="size-6 text-blue-200" />
                  </span>
                  <h3 className="text-xl font-black text-white">Consultance Flow</h3>
                  <p className="text-sm leading-relaxed text-blue-100/85">
                    Donnez un accès sécurisé et certifié à votre cabinet comptable &amp; commissaire aux comptes agréé ONECCA. Fini les allers-retours de classeurs papier.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/15 pt-4">
                  <span className="text-xs font-black uppercase tracking-wider text-cyan-200 flex items-center gap-1.5">
                    <span>Connexion ONECCA &amp; CGA</span>
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Carte 2 : Suite Flow (Noyau central bleu vif) */}
            <Reveal delay={0.1}>
              <div className="relative flex h-full flex-col items-center justify-between overflow-hidden rounded-2xl border-2 border-cyan-300/60 bg-gradient-to-br from-[#0038D1] via-[#0052FF] to-[#002288] p-8 text-center shadow-[0_0_60px_-10px_rgba(0,82,255,0.6)] backdrop-blur-2xl">
                <div aria-hidden className="absolute -right-12 -top-12 size-40 rounded-full bg-cyan-400/30 blur-2xl" />
                <div className="relative mb-2 w-20">
                  <div aria-hidden className="absolute inset-0 animate-pulse rounded-2xl bg-cyan-400 blur-xl opacity-60" />
                  <Image
                    src="/icon-landing-page.webp"
                    alt="Noyau Suite Flow"
                    width={160}
                    height={160}
                    quality={80}
                    className="relative h-auto w-full object-contain drop-shadow-xl"
                  />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-white/20 border border-white/30 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-cyan-100 shadow-sm">
                    Noyau Central
                  </span>
                  <h3 className="mt-2 text-2xl font-black text-white">LA SUITE FLOW</h3>
                  <p className="mt-2 max-w-xs text-xs sm:text-sm leading-relaxed text-blue-100/95">
                    Le pont d&apos;intelligence entre toutes vos filiales, vos données financières SYSCOHADA et vos partenaires d&apos;affaires.
                  </p>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
                  5 Modules · 1 Seule Base de Données
                </div>
              </div>
            </Reveal>

            {/* Carte 3 : Business Flow & Wallet (Navy) */}
            <Reveal delay={0.15}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-[#040E33]/70 p-8 backdrop-blur-xl transition-all hover:bg-[#040E33]/90 hover:border-white/35 shadow-xl">
                <div className="space-y-4">
                  <span
                    className="relative z-10 grid size-12 place-items-center rounded-xl border border-cyan-300/30 bg-[#002288] text-xl text-cyan-200 shadow-md"
                    aria-hidden
                  >
                    <Handshake className="size-6 text-cyan-200" />
                  </span>
                  <h3 className="text-xl font-black text-white">Business Flow &amp; Wallet</h3>
                  <p className="text-sm leading-relaxed text-blue-100/85">
                    Place de marché B2B intégrée entre entreprises abonnées en Côte d&apos;Ivoire. Règlements directs compatibles Wave, Orange Money, MTN et virements interbancaires BCEAO.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/15 pt-4">
                  <span className="text-xs font-black uppercase tracking-wider text-cyan-200 flex items-center gap-1.5">
                    <span>Réseau B2B &amp; Mobile Money</span>
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* CALL TO ACTION D'OUVERTURE DE COMPTE / DÉMONSTRATION (radius 6-8px : rounded-lg) */}
        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-[#0A1440] shadow-xl hover:bg-slate-100 hover:scale-105 transition-all"
          >
            <span>Rejoindre l&apos;Écosystème Suite Flow</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
