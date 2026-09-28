"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const inputCls =
  "w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#0052FF] focus:bg-white/10";

/** Formulaire de réservation de démo B2B + alternative directe WhatsApp */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="grid place-items-center rounded-2xl border border-white/15 bg-white/5 p-10 text-center backdrop-blur-md">
        <CheckCircle2 className="size-12 text-emerald-400" aria-hidden />
        <p className="mt-4 text-xl font-extrabold text-white">Demande de démo enregistrée !</p>
        <p className="mt-2 max-w-sm text-sm text-white/70">
          Un expert du cabinet DC-KNOWING vous contacte sous 24 h ouvrées pour confirmer votre créneau de démonstration en visio.
        </p>
        <a
          href="https://wa.me/2250767131993"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg hover:bg-emerald-600 transition"
        >
          <span>Écrire en direct sur WhatsApp (+225 07 67 13 19 93)</span>
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md md:p-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-white/60">
            Nom &amp; Prénom
            <input required placeholder="Awa Koné" className={`${inputCls} mt-2`} />
          </label>
          <label className="block text-xs font-bold uppercase tracking-wider text-white/60">
            Entreprise
            <input required placeholder="ETS Koné" className={`${inputCls} mt-2`} />
          </label>
          <label className="block text-xs font-bold uppercase tracking-wider text-white/60">
            Téléphone
            <input required type="tel" placeholder="07 00 00 00 00" className={`${inputCls} mt-2`} />
          </label>
          <label className="block text-xs font-bold uppercase tracking-wider text-white/60">
            Email
            <input required type="email" placeholder="vous@entreprise.ci" className={`${inputCls} mt-2`} />
          </label>
          <label className="block text-xs font-bold uppercase tracking-wider text-white/60">
            Nombre de salariés
            <select required defaultValue="" className={`${inputCls} mt-2`}>
              <option value="" disabled>Choisir…</option>
              <option value="1-10">1 – 10</option>
              <option value="11-50">11 – 50</option>
              <option value="51-200">51 – 200</option>
              <option value="200+">200+</option>
            </select>
          </label>
          <label className="block text-xs font-bold uppercase tracking-wider text-white/60">
            Secteur d&apos;activité
            <select required defaultValue="" className={`${inputCls} mt-2`}>
              <option value="" disabled>Choisir…</option>
              <option value="commerce">Commerce &amp; Distribution</option>
              <option value="btp">BTP &amp; Immobilier</option>
              <option value="services">Services</option>
              <option value="agro">Agro &amp; Négoce</option>
              <option value="autre">Autre</option>
            </select>
          </label>
          <label className="block text-xs font-bold uppercase tracking-wider text-white/60 sm:col-span-2">
            Message
            <textarea
              required
              rows={4}
              placeholder="Décrivez brièvement vos attentes ou vos logiciels actuels…"
              className={`${inputCls} mt-2 resize-none`}
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-white px-8 py-3.5 text-sm font-black uppercase tracking-wide text-[#0A1628] shadow-xl transition hover:scale-[1.01] hover:bg-slate-100 active:scale-95"
        >
          RÉSERVER MA DÉMO EN VISIO
        </button>
      </form>

      {/* Alternative directe WhatsApp obligatoire et proéminente */}
      <div className="mt-6 pt-6 border-t border-white/10 text-center">
        <p className="text-xs font-semibold text-white/60 mb-3">
          Vous préférez un échange direct et immédiat ?
        </p>
        <a
          href="https://wa.me/2250767131993"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-400/50 bg-emerald-500/25 px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wide text-white transition hover:bg-emerald-500 shadow-md backdrop-blur-md"
        >
          <span>💬 Écrire directement sur WhatsApp (+225 07 67 13 19 93)</span>
        </a>
      </div>
    </div>
  );
}
