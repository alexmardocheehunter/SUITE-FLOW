import Link from "next/link";
import Image from "next/image";

const PRODUITS = [
  { href: "/sell-flow", label: "Sell Flow" },
  { href: "/compta-flow", label: "Compta Flow" },
  { href: "/rh-flow", label: "RH Flow" },
  { href: "/legal-flow", label: "Legal Flow" },
  { href: "/task-flow", label: "Task Flow" },
];

const SITE = [
  { href: "/#ecosysteme", label: "Écosystème" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/comparatif", label: "Comparatif vs Concurrents" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/#ecosysteme", label: "Réseau ONECCA Côte d'Ivoire" },
  { href: "/#ecosysteme", label: "Centres de Gestion Agréés (CGA)" },
  { href: "#confidentialite", label: "Politique de Confidentialité" },
  { href: "#securite", label: "Sécurité des Données Cloud" },
];

const CABINET = [
  { href: "/a-propos", label: "À propos du cabinet" },
  { href: "/a-propos", label: "Notre équipe d'experts" },
  { href: "/contact", label: "Réserver une démo" },
  { href: "https://wa.me/2250767131993", label: "Discuter sur WhatsApp" },
  { href: "/#ecosysteme", label: "Partenaires bancaires & DGI" },
];

/**
 * Pied de page officiel reprenant le dégradé emblématique du Hero (effet sandwich de marque).
 */
export default function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-gradient-to-r from-[#030B2A] via-[#002288] to-[#0052FF] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        {/* Colonne 1 : Identité & Cabinet DC-KNOWING avec liens de navigation complétés */}
        <div>
          <div className="flex items-center gap-3">
            <div className="relative size-10 shrink-0">
              <Image
                src="/icon-landing-page.webp"
                alt="Logo Suite Flow"
                width={40}
                height={40}
                quality={80}
                className="size-full object-contain drop-shadow-[0_4px_12px_rgba(0,82,255,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white leading-none">
                Suite Flow
              </span>
              <span className="text-[11px] font-semibold text-blue-200/80 tracking-wide mt-1">
                Cabinet DC-KNOWING
              </span>
            </div>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-blue-100/85">
            Toute l&apos;expertise d&apos;un cabinet réunie dans une seule suite logicielle interconnectée pour les PME ivoiriennes.
          </p>
          
          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="text-xs font-black uppercase tracking-widest text-blue-200">
              Cabinet DC-KNOWING
            </p>
            <ul className="mt-3 space-y-2 text-sm text-blue-100/80">
              {CABINET.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Colonne 2 : Logiciels */}
        <nav aria-label="Logiciels Suite Flow">
          <p className="text-xs font-black uppercase tracking-widest text-blue-200">
            Logiciels
          </p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium text-blue-100/80">
            {PRODUITS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-white hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Colonne 3 : Site & Conformité */}
        <nav aria-label="Site et conformité">
          <p className="text-xs font-black uppercase tracking-widest text-blue-200">
            Site & Conformité
          </p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium text-blue-100/80">
            {SITE.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-white hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Colonne 4 : Contact Abidjan */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-blue-200">
            Contact Abidjan
          </p>
          <ul className="mt-4 space-y-2 text-sm text-blue-100/85">
            <li className="font-bold text-white">Cocody Riviera Bonoumin</li>
            <li>Abidjan, Côte d&apos;Ivoire</li>
            <li>+225 27 22 42 14 43</li>
            <li>+225 07 67 13 19 93</li>
            <li className="text-xs text-blue-200/70 pt-1">Lun – Ven · 8h00 – 18h00</li>
          </ul>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-3 px-6 py-5 text-xs text-blue-200/70 md:px-10">
          <p>
            © 2026 DC-KNOWING · Cabinet d&apos;expertise comptable — Abidjan, Côte d&apos;Ivoire.
          </p>
          <p className="font-semibold text-white/90">
            Conforme SYSCOHADA Révisé & FNE-DGI
          </p>
        </div>
      </div>
    </footer>
  );
}
