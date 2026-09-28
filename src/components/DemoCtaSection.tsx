"use client";

import ContactForm from "./contact-form";
import Reveal from "./Reveal";
import { Video, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

export default function DemoCtaSection() {
  return (
    <section
      id="reservation-demo"
      aria-label="Discutons de vos besoins lors d'une démonstration"
      className="relative overflow-hidden bg-[#050814] py-20 md:py-28 text-white"
    >
      {/* Halo d'ambiance */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0052FF]/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-200 backdrop-blur-xl">
              <Video className="size-3.5 text-blue-300" /> Démonstration Sans Engagement
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Discutons de vos besoins lors d&apos;une démonstration
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-blue-100/85">
              Réservez un créneau en visio avec notre équipe à Abidjan, ou écrivez-nous directement sur WhatsApp pour planifier un échange.
            </p>
          </Reveal>
        </div>

        {/* Grille avec Formulaire et Réassurance Cabinet */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 items-start">
          {/* Colonne Gauche : Formulaire de réservation */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <ContactForm />
            </Reveal>
          </div>

          {/* Colonne Droite : Ce qui se passe pendant la démo (30 min) */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.25}>
              <div className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-md">
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <Video className="size-5 text-[#0052FF]" />
                  <span>Au programme de vos 30 min :</span>
                </h3>
                <ul className="mt-4 space-y-3.5 text-sm font-medium text-blue-100/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>Démonstration en direct adaptée à votre activité (commerce, services, BTP, négoce).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>Vérification de votre conformité FNE-DGI et barèmes de paie ivoirienne 2026.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>Estimation des gains de temps et de rentabilité pour vos équipes.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="rounded-3xl border border-white/12 bg-white/[0.03] p-6 backdrop-blur-md space-y-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-500/20 text-blue-200">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-white/50">
                      Cabinet DC-KNOWING
                    </p>
                    <p className="text-sm font-bold text-white">
                      Riviera Bonoumin, Cocody — Abidjan
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <span className="grid size-10 place-items-center rounded-xl bg-emerald-500/20 text-emerald-200">
                    <ShieldCheck className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-white/50">
                      Accompagnement Agréé
                    </p>
                    <p className="text-sm font-bold text-white">
                      Agréé ONECCA · FDFP · MBPE
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Lien direct Agenda */}
            <Reveal delay={0.35}>
              <div className="rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-900/40 to-blue-600/20 p-5 text-center">
                <p className="text-xs font-bold text-blue-200 uppercase tracking-wider">
                  Accès Direct Calendrier
                </p>
                <p className="text-sm font-medium text-white mt-1">
                  Vous souhaitez bloquer votre créneau immédiatement en visio ?
                </p>
                <a
                  href="https://calendly.com/dcknowing"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block rounded-lg bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#0A1628] hover:bg-slate-100 transition shadow-md"
                >
                  Ouvrir l&apos;agenda de réservation →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
