import Link from "next/link";
import {
  ShoppingCart,
  Calculator,
  Users,
  Scale,
  LayoutDashboard,
  Home,
  Tag,
  Network,
  Phone,
} from "lucide-react";

const QUICK_LINKS = [
  { href: "/", label: "Accueil", icon: Home, color: "#0052FF" },
  { href: "/sell-flow", label: "Sell Flow (Facturation FNE)", icon: ShoppingCart, color: "#0052FF" },
  { href: "/compta-flow", label: "Compta Flow (SYSCOHADA)", icon: Calculator, color: "#1E40AF" },
  { href: "/rh-flow", label: "RH Flow (Paie & Pointage)", icon: Users, color: "#0891B2" },
  { href: "/legal-flow", label: "Legal Flow (Bouclier fiscal)", icon: Scale, color: "#7C3AED" },
  { href: "/task-flow", label: "Task Flow (CRM & Contrats)", icon: LayoutDashboard, color: "#334155" },
  { href: "/#tarifs", label: "Grille des Tarifs", icon: Tag, color: "#0052FF" },
  { href: "/#ecosysteme", label: "Écosystème & Banques", icon: Network, color: "#0052FF" },
  { href: "/contact", label: "Réserver une démo", icon: Phone, color: "#0052FF" },
];

export default function NotFound() {
  return (
    <div className="min-h-[85vh] pt-36 pb-24 px-6 flex flex-col items-center justify-center bg-[#050814] text-white text-center">
      <div className="max-w-2xl mx-auto">
        <span className="text-xs font-black uppercase tracking-widest text-blue-400">
          Erreur 404
        </span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
          Page introuvable
        </h1>
        <p className="mt-4 text-base text-slate-300 max-w-lg mx-auto">
          L&apos;adresse demandée n&apos;existe pas ou a été déplacée. Choisissez l&apos;une des rubriques ci-dessous pour continuer votre visite.
        </p>

        {/* Grille de tous les points d'entrée du site */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <span
                className="grid size-9 shrink-0 place-items-center rounded-xl text-white shadow-sm"
                style={{ backgroundColor: link.color }}
              >
                <link.icon className="size-4" />
              </span>
              <span className="text-xs font-bold text-slate-200 group-hover:text-white">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0052FF] px-8 py-3.5 text-sm font-black text-white hover:bg-blue-600 transition shadow-lg shadow-blue-500/25"
          >
            ← Revenir à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
