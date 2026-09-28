import ProductPageTemplate from "@/components/product-page-template";

export const metadata = {
  title: "Legal Flow — Conformité fiscale et juridique | Suite Flow",
  description: "Suivi de la conformité légale et administrative de l'entreprise. Calendrier fiscal selon votre régime (RSI ou Réel Normal) et alertes WhatsApp proactives.",
};

export default function LegalFlowPage() {
  return (
    <ProductPageTemplate
      appName="Legal Flow"
      tagline="Legal Flow — Conformité légale & fiscale"
      title="Conformité fiscale et juridique ivoirienne"
      subtitle="Suivi de la conformité légale et administrative de l'entreprise. Le calendrier fiscal intègre vos obligations selon votre régime (RSI ou Réel Normal) et vous envoie des alertes WhatsApp proactives avant chaque échéance pour éviter les pénalités."
      icon="scale"
      logoSrc="/logos/legal-flow.webp"
      moduleColor="#7C3AED"
      features={[
        { icon: "calendar", title: "Calendrier fiscal personnalisé", text: "Échéances filtrées selon votre régime fiscal (RSI, Réel Normal) pour ne suivre que vos obligations réelles." },
        { icon: "chat", title: "Alertes WhatsApp proactives", text: "Rappels automatiques à J-30, J-15, J-3 puis la veille : impossible de manquer une date limite de déclaration." },
        { icon: "archive", title: "Registre juridique centralisé", text: "Statuts, procès-verbaux d'assemblée générale et contrats commerciaux archivés et sécurisés en un seul lieu." },
        { icon: "percent", title: "Suivi des acomptes IS & TVA", text: "Vos acomptes provisionnels et crédits de TVA sont répertoriés pour anticiper votre trésorerie fiscale." },
        { icon: "radar", title: "Veille réglementaire OHADA & CGI", text: "Les évolutions de la loi de finances et du Code Général des Impôts traduites en consignes concrètes." },
        { icon: "send", title: "Préparation des télédéclarations", text: "Vos déclarations fiscales et sociales préparées à temps avec les bons montants avant télépaiement." },
      ]}
      practiceTitle="Anticipez chaque échéance légale"
      practiceText="Le 10, le 15, le 20 du mois : Legal Flow intègre votre calendrier d'obligations et vous alerte avant chaque échéance pour vous prémunir des pénalités."
      practiceBullets={[
        "Alertes ciblées : TVA, CNPS, acompte de l'impôt sur les bénéfices industriels et commerciaux (BIC)",
        "Registre juridique centralisé pour vos documents légaux et administratifs",
        "Veille sur les dispositions du droit OHADA et du Code Général des Impôts ivoirien",
      ]}
      practiceStats={[
        { value: "J-30", label: "première alerte préventive" },
        { value: "100 %", label: "des échéances suivies" },
        { value: "0 F", label: "de majoration de retard" },
      ]}
      testimonials={[
        { quote: "Les alertes WhatsApp m'ont permis d'anticiper nos déclarations de TVA sans stress. Nous n'avons payé aucune majoration depuis que nous utilisons Legal Flow.", name: "Aminata Cissé", role: "Gérante services, Marcory", initials: "AC" },
        { quote: "Le calendrier fiscal calé sur notre régime Réel Normal nous donne une visibilité parfaite sur les décaissements à venir.", name: "Jean-Marc Ebrotie", role: "Dirigeant d'entreprise, San Pedro", initials: "JE" },
        { quote: "Tous nos statuts et procès-verbaux d'AG sont classés et disponibles immédiatement. Lors de notre contrôle administratif, tout était ordonné.", name: "Prisca N'Da", role: "Secrétaire générale, PME", initials: "PN" },
      ]}
      ctaTitle="Prêt à sécuriser votre conformité fiscale ?"
      ctaButton="Réserver une démo Legal Flow"
    />
  );
}
