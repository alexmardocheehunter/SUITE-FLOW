import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import ProgressBarProvider from "@/components/ProgressBarProvider";

// Polices Google auto-hébergées par Next.js au build, zéro requête bloquante, display: swap pour 0s de FOIT
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Suite Flow — La suite logicielle pour gérer votre PME en Côte d'Ivoire",
  description:
    "Facturation normalisée FNE, comptabilité SYSCOHADA et paie aux normes locales. Enregistrez vos opérations une seule fois : nos applications connectées transmettent l'information automatiquement.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-white text-[#0F172A] font-sans antialiased">
        <ProgressBarProvider>
          <SiteNavbar />
          {children}
          <SiteFooter />
        </ProgressBarProvider>
      </body>
    </html>
  );
}
