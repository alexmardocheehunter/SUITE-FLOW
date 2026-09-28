"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingDown } from "lucide-react";

interface ToolItem {
  id: string;
  label: string;
  sublabel: string;
  defaultCost: number;
}

const DEFAULT_TOOLS: ToolItem[] = [
  {
    id: "crm",
    label: "CRM commercial",
    sublabel: "HubSpot, Pipedrive, Salesforce...",
    defaultCost: 120,
  },
  {
    id: "compta",
    label: "Facturation & Comptabilité",
    sublabel: "Pennylane, QuickBooks, Axonaut...",
    defaultCost: 90,
  },
  {
    id: "rh",
    label: "Gestion RH & Congés",
    sublabel: "PayFit, Lucca, Factorial...",
    defaultCost: 80,
  },
  {
    id: "legal",
    label: "Contrats & Signature électronique",
    sublabel: "Yousign, DocuSign, Tomorro...",
    defaultCost: 45,
  },
  {
    id: "task",
    label: "Gestion de tâches & Projets",
    sublabel: "Monday, Asana, Trello, Notion...",
    defaultCost: 65,
  },
];

const SUITE_FLOW_PRICE = 149;

export default function ComparatifCalculator() {
  const [selectedTools, setSelectedTools] = useState<Record<string, boolean>>({
    crm: true,
    compta: true,
    rh: true,
    legal: true,
    task: true,
  });

  const [costs, setCosts] = useState<Record<string, number>>({
    crm: 120,
    compta: 90,
    rh: 80,
    legal: 45,
    task: 65,
  });

  const handleToggle = (id: string) => {
    setSelectedTools((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCostChange = (id: string, value: number) => {
    setCosts((prev) => ({
      ...prev,
      [id]: Math.max(0, value),
    }));
  };

  // Calcul du coût total mensuel
  const totalCurrentMonthly = DEFAULT_TOOLS.reduce((sum, tool) => {
    if (selectedTools[tool.id]) {
      return sum + (costs[tool.id] || 0);
    }
    return sum;
  }, 0);

  const monthlySavings = Math.max(0, totalCurrentMonthly - SUITE_FLOW_PRICE);
  const yearlySavings = monthlySavings * 12;
  const savingsPercent =
    totalCurrentMonthly > 0
      ? Math.round(((totalCurrentMonthly - SUITE_FLOW_PRICE) / totalCurrentMonthly) * 100)
      : 0;

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/10">
      <div className="grid gap-10 lg:grid-cols-12 items-start">
        {/* Colonne gauche : Sélection des outils */}
        <div className="lg:col-span-7 space-y-4">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Sélectionnez les outils que vous payez actuellement
          </p>

          <div className="space-y-3 pt-2">
            {DEFAULT_TOOLS.map((tool) => {
              const isChecked = selectedTools[tool.id] ?? false;
              const cost = costs[tool.id] ?? tool.defaultCost;

              return (
                <div
                  key={tool.id}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border transition-all ${
                    isChecked
                      ? "border-blue-200 bg-blue-50/40"
                      : "border-slate-200 bg-slate-50/50 opacity-60"
                  }`}
                >
                  <label
                    htmlFor={`toggle-${tool.id}`}
                    className="flex items-center gap-3.5 cursor-pointer select-none"
                  >
                    <input
                      id={`toggle-${tool.id}`}
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggle(tool.id)}
                      className="size-5 rounded border-slate-300 text-[#0052FF] focus:ring-[#0052FF]"
                    />
                    <div>
                      <span className="block text-sm font-bold text-[#0A1440]">
                        {tool.label}
                      </span>
                      <span className="block text-xs text-slate-500">
                        {tool.sublabel}
                      </span>
                    </div>
                  </label>

                  {/* Champ de coût modifiable */}
                  {isChecked && (
                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <span className="text-xs text-slate-500">Coût :</span>
                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          step="5"
                          value={cost}
                          onChange={(e) =>
                            handleCostChange(tool.id, Number(e.target.value))
                          }
                          aria-label={`Coût mensuel pour ${tool.label}`}
                          className="w-24 rounded-lg border border-slate-300 px-2.5 py-1.5 text-right text-sm font-bold text-[#0A1440] focus:border-[#0052FF] focus:outline-none focus:ring-1 focus:ring-[#0052FF]"
                        />
                        <span className="absolute right-2 top-1.5 text-sm text-slate-400 pointer-events-none">
                          €
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">/mois</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Colonne droite : Bilan chiffré & Économie */}
        <div className="lg:col-span-5 rounded-xl border-2 border-[#0052FF] bg-gradient-to-br from-blue-50/80 via-white to-blue-50/50 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0052FF]">
            <Sparkles className="size-4" />
            Votre verdict économique
          </div>

          {/* Comparatif direct */}
          <div className="mt-5 space-y-3 pb-6 border-b border-blue-200">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600">Votre stack actuelle :</span>
              <span className="font-bold text-[#0A1440] text-lg">
                {totalCurrentMonthly} € / mois
              </span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-[#0052FF]">Suite Flow (5 modules) :</span>
              <span className="font-black text-[#0052FF] text-lg">
                {SUITE_FLOW_PRICE} € / mois
              </span>
            </div>
          </div>

          {/* Résultat d'économie annuel */}
          <div className="mt-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <TrendingDown className="size-4" />
              Économie nette réalisée
            </div>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">
                {yearlySavings > 0 ? `${yearlySavings.toLocaleString("fr-FR")} €` : "0 €"}
              </span>
              <span className="text-sm font-semibold text-slate-500">
                / an
              </span>
            </div>

            {savingsPercent > 0 && (
              <p className="mt-2 text-xs font-bold text-emerald-700">
                Soit une réduction immédiate de {savingsPercent}% sur votre budget logiciel.
              </p>
            )}

            <p className="mt-4 text-xs text-slate-600 leading-relaxed">
              Sans compter les <strong>4 heures par semaine</strong> économisées par vos équipes sur la double saisie entre logiciels non connectés.
            </p>
          </div>

          {/* CTA vers démo */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#0052FF] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Passer à Suite Flow et économiser</span>
              <ArrowRight className="size-4" />
            </Link>
            <p className="mt-2.5 text-center text-[11px] text-slate-500">
              Démo personnalisée de 30 min · Chiffrage sans engagement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
