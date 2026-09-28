"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Info, ArrowRight } from "lucide-react";

interface ModuleComparison {
  id: string;
  name: string;
  tagline: string;
  color: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  competitor: string;
  highlights: string[];
  honestLimitation: string;
  href: string;
}

const MODULES_DATA: ModuleComparison[] = [
  {
    id: "sell-flow",
    name: "Sell Flow",
    tagline: "CRM, Pipeline commercial & Devis",
    color: "#0052FF",
    textColor: "text-[#0052FF]",
    bgColor: "bg-blue-50/70",
    borderColor: "border-[#0052FF]",
    competitor: "HubSpot CRM",
    highlights: [
      "Pipeline visuel intuitif : vos commerciaux adoptent l'outil en 10 minutes sans formation coûteuse.",
      "Génération immédiate de devis et bons de commande sans ressaisie vers la facturation.",
      "Synchronisation native en temps réel avec Compta Flow et Legal Flow (zéro double saisie).",
    ],
    honestLimitation:
      "HubSpot est plus adapté pour le marketing automation lourd (lead scoring complexe, séquences d'e-mailing poussées) et les entreprises de plus de 500 salariés disposant d'un administrateur dédié.",
    href: "/sell-flow",
  },
  {
    id: "compta-flow",
    name: "Compta Flow",
    tagline: "Facturation, Notes de frais & Comptabilité",
    color: "#1E40AF",
    textColor: "text-[#1E40AF]",
    bgColor: "bg-indigo-50/70",
    borderColor: "border-[#1E40AF]",
    competitor: "Pennylane",
    highlights: [
      "Rapprochement bancaire simplifié dès qu'un encaissement client intervient dans Sell Flow.",
      "Notes de frais scannées et imputées directement sur les fiches des collaborateurs RH.",
      "Export d'écritures propre et certifié pour votre expert-comptable sans surcoût d'API.",
    ],
    honestLimitation:
      "Pennylane dispose d'un réseau plus étendu de partenariats directs avec les grands cabinets d'expertise comptable et gère nativement des volumétries de flux bancaires internationaux très denses.",
    href: "/compta-flow",
  },
  {
    id: "rh-flow",
    name: "RH Flow",
    tagline: "Gestion RH, Congés, Absences & Onboarding",
    color: "#0891B2",
    textColor: "text-[#0891B2]",
    bgColor: "bg-cyan-50/70",
    borderColor: "border-[#0891B2]",
    competitor: "PayFit",
    highlights: [
      "Suivi des congés et temps de travail déversé en temps réel dans les plannings de Task Flow.",
      "Onboarding collaborateur créant d'un coup le profil, le contrat de travail et les accès projets.",
      "Tarification forfaitaire claire et lisible, sans facturation opaque au bulletin unitaire.",
    ],
    honestLimitation:
      "PayFit inclut une équipe de juristes sociaux internalisés pour l'édition déléguée et la télétransmission directe de la DSN pour des entreprises sous conventions collectives très complexes.",
    href: "/rh-flow",
  },
  {
    id: "legal-flow",
    name: "Legal Flow",
    tagline: "Contrats, Signature électronique & Registre juridique",
    color: "#7C3AED",
    textColor: "text-[#7C3AED]",
    bgColor: "bg-purple-50/70",
    borderColor: "border-[#7C3AED]",
    competitor: "Yousign / Tomorro",
    highlights: [
      "Contrats de vente et conventions pré-remplis automatiquement avec les variables du CRM.",
      "Signature électronique juridiquement opposable (eIDAS) incluse sans achat de crédits séparés.",
      "Alertes d'échéances et de préavis de reconduction tacite pour ne plus jamais manquer une date clé.",
    ],
    honestLimitation:
      "Tomorro ou Yousign offrent des circuits de négociation contractuelle multi-juristes et des clauses conditionnelles poussées adaptées aux directions juridiques de grands comptes.",
    href: "/legal-flow",
  },
  {
    id: "task-flow",
    name: "Task Flow",
    tagline: "Gestion de projets, Tâches & Suivi de rentabilité",
    color: "#334155",
    textColor: "text-[#334155]",
    bgColor: "bg-slate-100/70",
    borderColor: "border-[#334155]",
    competitor: "Monday / Asana",
    highlights: [
      "Chaque projet est directement relié au devis signé et au contrat client pour mesurer la marge réelle.",
      "Vue simple et efficace (Kanban, liste, jalons) qui évite le piège de l'usine à gaz inutilisable.",
      "Temps passés imputés en 1 clic pour suivre la rentabilité de chaque mission sans logiciel tiers.",
    ],
    honestLimitation:
      "Monday propose des centaines d'automatisations visuelles et de widgets sur-mesure (diagrammes de Gantt complexes) précieux pour les équipes de pure ingénierie logicielle de 50+ développeurs.",
    href: "/task-flow",
  },
];

export default function ComparatifTabs() {
  const [activeTab, setActiveTab] = useState(MODULES_DATA[0].id);
  const current = MODULES_DATA.find((m) => m.id === activeTab) || MODULES_DATA[0];

  return (
    <div className="w-full">
      {/* Sélecteur d'onglets (Boutons horizontaux avec scroll sur mobile) */}
      <div className="flex gap-2 overflow-x-auto pb-3 border-b border-slate-200">
        {MODULES_DATA.map((m) => {
          const isActive = m.id === activeTab;
          return (
            <button
              key={m.id}
              onClick={() => setActiveTab(m.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "bg-[#0A1440] text-white shadow-md shadow-slate-900/10"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-[#0A1440]"
              }`}
            >
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: m.color }}
                aria-hidden
              />
              <span>{m.name}</span>
            </button>
          );
        })}
      </div>

      {/* Contenu détaillé du module sélectionné */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-900/10">
        {/* En-tête de la carte */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="size-3.5 rounded-full"
                style={{ backgroundColor: current.color }}
                aria-hidden
              />
              <h3 className="text-2xl font-black text-[#0A1440]">
                {current.name}
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                vs {current.competitor}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500 font-medium">
              {current.tagline}
            </p>
          </div>

          <Link
            href={current.href}
            className="inline-flex items-center gap-2 self-start sm:self-center px-4 py-2.5 rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-90 shadow-sm"
            style={{ backgroundColor: current.color }}
          >
            <span>Découvrir {current.name}</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Grille : Forces Suite Flow vs Limite honnête */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Bloc Points forts */}
          <div className="rounded-lg bg-emerald-50/50 border border-emerald-200/70 p-5">
            <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-900 uppercase tracking-wider">
              <CheckCircle2 className="size-4 text-emerald-600" />
              Pourquoi les PME choisissent {current.name}
            </h4>
            <ul className="mt-4 space-y-3">
              {current.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                >
                  <span className="mt-1 size-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloc Transparence & honnêteté */}
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-5 flex flex-col justify-between">
            <div>
              <h4 className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
                <Info className="size-4 text-slate-500" />
                Où {current.competitor} reste supérieur
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {current.honestLimitation}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200/70 text-xs text-slate-500 italic">
              💡 Transparence garantie : Si votre équipe a ces besoins très spécifiques, nous vous conseillons de garder cet outil spécialisé.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
