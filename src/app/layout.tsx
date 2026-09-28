import type { Metadata } from "next";
import "./globals.css";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Suite Flow — La suite logicielle pour gérer votre PME en Côte d'Ivoire",
  description:
    "Facturation normalisée FNE, comptabilité SYSCOHADA et paie aux normes locales. Enregistrez vos opérations une seule fois : nos applications connectées transmettent l'information automatiquement.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-[#0F172A] antialiased">
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
