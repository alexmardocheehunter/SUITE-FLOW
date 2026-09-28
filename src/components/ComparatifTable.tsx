import { Check, X, AlertTriangle } from "lucide-react";

interface RowData {
  criterion: string;
  suiteFlow: {
    text: string;
    status: "check" | "cross" | "warning";
    detail?: string;
  };
  crmAlone: {
    text: string;
    status: "check" | "cross" | "warning";
  };
  comptaAlone: {
    text: string;
    status: "check" | "cross" | "warning";
  };
  projectAlone: {
    text: string;
    status: "check" | "cross" | "warning";
  };
  stack5: {
    text: string;
    status: "check" | "cross" | "warning";
    detail?: string;
  };
}

const COMPARISON_ROWS: RowData[] = [
  {
    criterion: "CRM & Pipeline commercial",
    suiteFlow: { text: "Natif", status: "check", detail: "Inclus dans Sell Flow" },
    crmAlone: { text: "Oui", status: "check" },
    comptaAlone: { text: "Non", status: "cross" },
    projectAlone: { text: "Non", status: "cross" },
    stack5: { text: "Oui", status: "check" },
  },
  {
    criterion: "Facturation & Comptabilité",
    suiteFlow: { text: "Natif", status: "check", detail: "Inclus dans Compta Flow" },
    crmAlone: { text: "Non", status: "cross" },
    comptaAlone: { text: "Oui", status: "check" },
    projectAlone: { text: "Non", status: "cross" },
    stack5: { text: "Oui", status: "check" },
  },
  {
    criterion: "Gestion RH & Congés",
    suiteFlow: { text: "Natif", status: "check", detail: "Inclus dans RH Flow" },
    crmAlone: { text: "Non", status: "cross" },
    comptaAlone: { text: "Non", status: "cross" },
    projectAlone: { text: "Non", status: "cross" },
    stack5: { text: "Oui", status: "check" },
  },
  {
    criterion: "Contrats & Juridique",
    suiteFlow: { text: "Natif", status: "check", detail: "Inclus dans Legal Flow" },
    crmAlone: { text: "Non", status: "cross" },
    comptaAlone: { text: "Non", status: "cross" },
    projectAlone: { text: "Non", status: "cross" },
    stack5: { text: "Oui", status: "check" },
  },
  {
    criterion: "Gestion de tâches & Projets",
    suiteFlow: { text: "Natif", status: "check", detail: "Inclus dans Task Flow" },
    crmAlone: { text: "Basique", status: "warning" },
    comptaAlone: { text: "Non", status: "cross" },
    projectAlone: { text: "Oui", status: "check" },
    stack5: { text: "Oui", status: "check" },
  },
  {
    criterion: "Données unifiées (1 seule base)",
    suiteFlow: { text: "1 base unique", status: "check", detail: "Zéro double saisie" },
    crmAlone: { text: "Non", status: "cross" },
    comptaAlone: { text: "Non", status: "cross" },
    projectAlone: { text: "Non", status: "cross" },
    stack5: { text: "Silos & ressaisies", status: "cross" },
  },
  {
    criterion: "Prix mensuel moyen",
    suiteFlow: { text: "149€ / mois", status: "check", detail: "Tout inclus pour 10 salariés" },
    crmAlone: { text: "80 - 200€", status: "warning" },
    comptaAlone: { text: "50 - 150€", status: "warning" },
    projectAlone: { text: "40 - 100€", status: "warning" },
    stack5: { text: "300 - 600€", status: "cross" },
  },
  {
    criterion: "Temps de déploiement",
    suiteFlow: { text: "2 semaines", status: "check", detail: "Onboarding guidé inclus" },
    crmAlone: { text: "1 - 3 mois", status: "warning" },
    comptaAlone: { text: "2 - 4 semaines", status: "warning" },
    projectAlone: { text: "2 - 4 semaines", status: "warning" },
    stack5: { text: "3 - 6 mois", status: "cross" },
  },
  {
    criterion: "Support en français",
    suiteFlow: { text: "Inclus & dédié", status: "check", detail: "Équipe basée en France" },
    crmAlone: { text: "Variable", status: "warning" },
    comptaAlone: { text: "Oui", status: "check" },
    projectAlone: { text: "Variable", status: "warning" },
    stack5: { text: "5 interlocuteurs", status: "warning" },
  },
  {
    criterion: "Interconnexions",
    suiteFlow: { text: "Natives en direct", status: "check", detail: "Sans connecteur tiers" },
    crmAlone: { text: "Zapier / Make", status: "cross" },
    comptaAlone: { text: "API payante", status: "cross" },
    projectAlone: { text: "Zapier / Make", status: "cross" },
    stack5: { text: "Bricolage fragile", status: "cross" },
  },
];

function StatusBadge({
  status,
  text,
  isSuiteFlow = false,
}: {
  status: "check" | "cross" | "warning";
  text: string;
  isSuiteFlow?: boolean;
}) {
  if (status === "check") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
          isSuiteFlow
            ? "bg-blue-100 text-[#0052FF]"
            : "bg-emerald-50 text-emerald-700"
        }`}
      >
        <Check className="size-3.5 shrink-0" strokeWidth={2.5} aria-hidden />
        {text}
      </span>
    );
  }

  if (status === "warning") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800">
        <AlertTriangle className="size-3.5 shrink-0" strokeWidth={2.2} aria-hidden />
        {text}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700">
      <X className="size-3.5 shrink-0" strokeWidth={2.5} aria-hidden />
      {text}
    </span>
  );
}

export default function ComparatifTable() {
  return (
    <div className="w-full">
      {/* Indication mobile pour inviter au scroll */}
      <div className="block lg:hidden mb-3 text-right">
        <span className="inline-block text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          ← Faites défiler horizontalement →
        </span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-bold uppercase tracking-wider text-slate-600">
              <th scope="col" className="p-4 sm:p-5 w-[24%]">
                Critère
              </th>
              {/* Colonne Suite Flow mise en avant */}
              <th
                scope="col"
                className="p-4 sm:p-5 w-[22%] bg-blue-50/90 text-[#0052FF] border-x-2 border-t-2 border-[#0052FF] relative"
              >
                <div className="flex flex-col">
                  <span className="inline-block self-start mb-1 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white bg-[#0052FF] rounded-full shadow-sm">
                    Recommandé
                  </span>
                  <span className="text-base font-black tracking-tight text-[#0A1440]">
                    Suite Flow
                  </span>
                  <span className="text-[11px] font-medium text-[#0052FF] normal-case">
                    Plateforme unifiée 5-en-1
                  </span>
                </div>
              </th>
              <th scope="col" className="p-4 sm:p-5 w-[13%]">
                CRM seul
                <span className="block text-[11px] font-normal text-slate-400 normal-case">
                  ex: HubSpot
                </span>
              </th>
              <th scope="col" className="p-4 sm:p-5 w-[13%]">
                Compta seule
                <span className="block text-[11px] font-normal text-slate-400 normal-case">
                  ex: Pennylane
                </span>
              </th>
              <th scope="col" className="p-4 sm:p-5 w-[13%]">
                Gestion projet
                <span className="block text-[11px] font-normal text-slate-400 normal-case">
                  ex: Monday
                </span>
              </th>
              <th scope="col" className="p-4 sm:p-5 w-[15%]">
                Stack 5 outils
                <span className="block text-[11px] font-normal text-slate-400 normal-case">
                  Addition des 5
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[#0A1440]">
            {COMPARISON_ROWS.map((row, idx) => (
              <tr
                key={row.criterion}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}
              >
                {/* Libellé du critère */}
                <th
                  scope="row"
                  className="p-4 sm:p-5 font-semibold text-[#0A1440] align-middle"
                >
                  {row.criterion}
                </th>

                {/* Suite Flow (colonne centrale mise en valeur) */}
                <td className="p-4 sm:p-5 bg-blue-50/60 border-x-2 border-[#0052FF] align-middle font-medium">
                  <div className="flex flex-col gap-1 items-start">
                    <StatusBadge
                      status={row.suiteFlow.status}
                      text={row.suiteFlow.text}
                      isSuiteFlow
                    />
                    {row.suiteFlow.detail && (
                      <span className="text-[11px] text-slate-500 font-normal">
                        {row.suiteFlow.detail}
                      </span>
                    )}
                  </div>
                </td>

                {/* CRM seul */}
                <td className="p-4 sm:p-5 align-middle text-slate-600">
                  <StatusBadge status={row.crmAlone.status} text={row.crmAlone.text} />
                </td>

                {/* Compta seule */}
                <td className="p-4 sm:p-5 align-middle text-slate-600">
                  <StatusBadge
                    status={row.comptaAlone.status}
                    text={row.comptaAlone.text}
                  />
                </td>

                {/* Projet seul */}
                <td className="p-4 sm:p-5 align-middle text-slate-600">
                  <StatusBadge
                    status={row.projectAlone.status}
                    text={row.projectAlone.text}
                  />
                </td>

                {/* Stack 5 outils */}
                <td className="p-4 sm:p-5 align-middle text-slate-600">
                  <div className="flex flex-col gap-1 items-start">
                    <StatusBadge status={row.stack5.status} text={row.stack5.text} />
                    {row.stack5.detail && (
                      <span className="text-[11px] text-rose-600/80 font-normal">
                        {row.stack5.detail}
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-[#0052FF] bg-slate-50/80">
              <td className="p-4 sm:p-5 font-bold text-[#0A1440]">
                Verdict économique & ops
              </td>
              <td className="p-4 sm:p-5 bg-blue-50/90 border-x-2 border-b-2 border-[#0052FF] font-bold text-[#0052FF]">
                1 seule facture · 1 seul login · Gain 65%
              </td>
              <td className="p-4 sm:p-5 text-xs text-slate-500">
                Idéal grands comptes marketing
              </td>
              <td className="p-4 sm:p-5 text-xs text-slate-500">
                Spécialisé pure comptabilité
              </td>
              <td className="p-4 sm:p-5 text-xs text-slate-500">
                Tâches pures sans lien facturation
              </td>
              <td className="p-4 sm:p-5 text-xs font-semibold text-rose-600">
                Budget lourd & frictions permanentes
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <p className="mt-3 text-xs text-slate-500 text-center">
        Note : Les fonctionnalités et prix des concurrents sont basés sur leurs offres
        publiques en septembre 2026. Vérifiez sur leurs sites respectifs pour les
        dernières mises à jour.
      </p>
    </div>
  );
}
