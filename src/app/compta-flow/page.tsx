import ProductPageTemplate from "@/components/product-page-template";

export const metadata = {
  title: "Compta Flow — Comptabilité SYSCOHADA automatisée | Suite Flow",
  description: "Tenue de la comptabilité sous référentiel SYSCOHADA révisé. L'OCR extrait automatiquement les factures, rapprochement bancaire multi-banques en quelques minutes.",
};

export default function ComptaFlowPage() {
  return (
    <ProductPageTemplate
      appName="Compta Flow"
      tagline="Compta Flow — SYSCOHADA révisé"
      title="Comptabilité SYSCOHADA automatisée"
      subtitle="Tenue de la comptabilité sous référentiel SYSCOHADA révisé. L'OCR extrait automatiquement les données de vos factures pour générer les écritures, et les rapprochements bancaires multi-banques se réalisent en quelques minutes."
      icon="calc"
      logoSrc="/logos/compta-flow.png"
      moduleColor="#1E40AF"
      features={[
        { icon: "book", title: "Plan SYSCOHADA révisé pré-configuré", text: "Imputations proposées automatiquement selon le référentiel OHADA, sans erreur d'écriture." },
        { icon: "scan", title: "OCR intelligent des factures", text: "Photographiez vos pièces : montants, TVA et tiers sont extraits et imputés directement." },
        { icon: "refresh", title: "Rapprochement bancaire intelligent", text: "Vos relevés bancaires se rapprochent ligne à ligne en quelques minutes sans ressaisie manuelle." },
        { icon: "sheet", title: "Balance, Grand Livre & états financiers", text: "Vos états financiers se construisent au fil de l'eau, prêts pour la clôture et la liasse." },
        { icon: "upload", title: "Import relevés multi-banques", text: "BICICI, SGBCI, NSIA, Ecobank, Coris : importez vos relevés pour un traitement immédiat." },
        { icon: "send", title: "Export vers expert-comptable", text: "Écritures révisées exportables directement vers Sage 100 pour une collaboration fluide." },
      ]}
      practiceTitle="Scannez, contrôlez, clôturez"
      practiceText="Chaque pièce comptable alimente vos journaux : les écritures sont générées, vos comptes s'équilibrent et vos déclarations avancent au fil des jours."
      practiceBullets={[
        "Plan comptable SYSCOHADA révisé pré-configuré pour la Côte d'Ivoire",
        "Rapprochement bancaire intelligent et multi-comptes en quelques clics",
        "Export conforme vers les outils de votre expert-comptable (Sage 100)",
      ]}
      practiceStats={[
        { value: "-90 %", label: "de temps de saisie" },
        { value: "45 min", label: "de rapprochement" },
        { value: "+80", label: "PME accompagnées" },
      ]}
      testimonials={[
        { quote: "La clôture mensuelle ne nous fait plus peur : tout est imputé au fil de l'eau, la balance sort équilibrée.", name: "Koffi Mensah", role: "Gérant négoce, Treichville", initials: "KM" },
        { quote: "L'OCR extrait fidèlement les informations de nos factures d'achat. Nos écritures sont nettes et traçables.", name: "Aïcha Bah", role: "Comptable interne, PME BTP", initials: "AB" },
        { quote: "J'exporte vers mon expert-comptable en un clic. Nos échanges sont rapides et sans aucune ressaisie.", name: "Serge N'Guessan", role: "DAF, Marcory", initials: "SN" },
      ]}
      ctaTitle="Prêt à automatiser votre comptabilité SYSCOHADA ?"
      ctaButton="Réserver une démo Compta Flow"
    />
  );
}
