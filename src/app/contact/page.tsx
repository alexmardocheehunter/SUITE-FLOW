import { MapPin, Phone, Mail, Clock, Video } from "lucide-react";
import ContactForm from "@/components/contact-form";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Réserver une démo — Suite Flow | Cabinet DC-KNOWING Abidjan",
  description: "Discutons de vos besoins lors d'une démonstration en visio ou par WhatsApp : +225 07 67 13 19 93 / 27 22 42 14 43.",
};

const CALENDLY_URL = "https://calendly.com/dcknowing";

const INFOS = [
  { icon: MapPin, label: "Adresse", value: "Riviera Bonoumin, Cocody — Abidjan, Côte d'Ivoire" },
  { icon: Phone, label: "Téléphone", value: "+225 27 22 42 14 43 / +225 07 67 13 19 93" },
  { icon: Mail, label: "Email", value: "dcknowing@gmail.com" },
  { icon: Clock, label: "Horaires", value: "Lun – Ven · 8h – 18h" },
];

export default function ContactPage() {
  return (
    <div className="bg-[#050814]">
      {/* HERO DÉMONSTRATION */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#0A1628_0%,#050814_70%)] px-6 pb-14 pt-32 text-center md:px-10 md:pt-40">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0052FF]/25 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <p className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-200 backdrop-blur-xl">
              DÉMONSTRATION DU LOGICIEL
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Discutons de vos besoins lors d&apos;une démonstration
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
              Réservez un créneau en visio avec notre équipe à Abidjan, ou écrivez-nous directement sur WhatsApp pour planifier un échange.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORMULAIRE DE RÉSERVATION ET COORDONNÉES */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-8 md:grid-cols-[1.2fr_1fr] md:px-10" aria-label="Formulaire et coordonnées">
        <Reveal>
          <ContactForm />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4">
            {INFOS.map((info) => (
              <div key={info.label} className="flex items-start gap-4 rounded-2xl border border-white/12 bg-white/[0.03] p-5 backdrop-blur-md">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#0052FF]/20 text-blue-200">
                  <info.icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-widest text-white/45">{info.label}</span>
                  <span className="mt-1 block text-sm font-semibold text-white">{info.value}</span>
                </span>
              </div>
            ))}
            <div className="overflow-hidden rounded-2xl border border-white/12">
              <iframe
                title="Carte — Riviera Bonoumin, Cocody, Abidjan"
                src="https://www.google.com/maps?q=Riviera+Bonoumin+Cocody+Abidjan&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION RÉSERVATION DIRECTE / CALENDLY */}
      <section className="px-6 py-14 md:px-10 md:py-20" aria-label="Prendre rendez-vous en visio">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-[32px] bg-gradient-to-r from-[#030B2A] via-[#002288] to-[#0052FF] px-6 py-12 text-center md:py-14 shadow-2xl">
            <Video className="size-10 text-cyan-300" aria-hidden />
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
              Planifier directement votre créneau en visio
            </h2>
            <p className="max-w-md text-sm text-blue-100/80 leading-relaxed">
              Choisissez votre créneau de démonstration personnalisée en visio (30 min avec nos consultants à Abidjan).
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wide text-[#0A1628] transition hover:scale-105 shadow-lg active:scale-95"
              >
                Ouvrir le calendrier de réservation
              </a>
              <a
                href="https://wa.me/2250767131993"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-emerald-400/50 bg-emerald-500/25 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-500 shadow-md"
              >
                Écrire sur WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
