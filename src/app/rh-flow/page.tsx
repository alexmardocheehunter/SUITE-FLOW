import ProductPageTemplate from "@/components/product-page-template";

export const metadata = {
  title: "RH Flow — Paie et gestion sociale | Suite Flow",
  description: "Gestion de la paie, du personnel, des congés et du pointage mobile (QR code/GPS). Calculez les bulletins de salaire, l'ITS, la CNPS et la CMU selon la législation ivoirienne en vigueur.",
};

export default function RhFlowPage() {
  return (
    <ProductPageTemplate
      appName="RH Flow"
      tagline="RH Flow — Paie & gestion sociale"
      title="Paie et gestion sociale ivoirienne"
      subtitle="Gestion de la paie, du personnel, des congés et du pointage mobile (QR code/GPS). Calculez les bulletins de salaire, l'ITS, la CNPS et la CMU selon la législation ivoirienne en vigueur pour sécuriser vos déclarations."
      icon="users"
      logoSrc="/logos/rh-flow.webp"
      moduleColor="#263e88"
      features={[
        { icon: "badge", title: "Bulletins conformes Code du Travail", text: "Des bulletins de salaire nets et opposables, pour les PME de 5 à plus de 500 salariés." },
        { icon: "percent", title: "Calcul automatique ITS (barème DGI)", text: "Retenues à la source calculées avec exactitude sur les barèmes fiscaux ivoiriens en vigueur." },
        { icon: "shield", title: "Cotisations CNPS & CMU intégrées", text: "Cotisations sociales et couverture maladie calculées sans omission de déclaration." },
        { icon: "qr", title: "Pointage mobile QR Code & GPS", text: "Contrôle des présences et des heures supplémentaires par scan et géolocalisation fiable." },
        { icon: "leave", title: "Congés & absences digitalisés", text: "Demandes, validations par les managers et compteurs de congés à jour en temps réel." },
        { icon: "download", title: "Bordereaux et état DISA en 1 clic", text: "Livre de paie, état 301 / DISA et bordereaux de cotisations téléchargeables instantanément." },
      ]}
      practiceTitle="Du pointage au bulletin certifié"
      practiceText="Le collaborateur pointe, ses heures alimentent le calcul des salaires, et les bulletins sortent certifiés conformes : un flux maîtrisé et opposable aux contrôles sociaux."
      practiceBullets={[
        "Calcul automatique : CNPS, CMU, ITS et cotisations patronales",
        "Bordereaux de cotisation CNPS téléchargeables en 1 clic",
        "Bulletins de paie dématérialisés et relevé des heures par QR Code",
      ]}
      practiceStats={[
        { value: "100 %", label: "conforme CNPS & DGI" },
        { value: "0", label: "erreur de calcul" },
        { value: "301", label: "état DISA certifié" },
      ]}
      testimonials={[
        { quote: "180 bulletins de salaire générés en une matinée, retenues ITS et CNPS calculées avec précision. Notre déclaration DISA a été éditée sans accroc.", name: "Mariam Touré", role: "DRH, BTP Abidjan", initials: "MT" },
        { quote: "Le pointage par QR Code a sécurisé le suivi des présences sur nos chantiers. Les heures effectives alimentent directement la paie.", name: "Ibrahim Sylla", role: "Conducteur travaux, Bouaké", initials: "IS" },
        { quote: "Les journaliers et salariés permanents sont rémunérés sans contestation. La clarté des bulletins a consolidé le climat social.", name: "Nadia Ahoua", role: "Gérante négoce, Yopougon", initials: "NA" },
      ]}
      ctaTitle="Prêt à fiabiliser votre paie sociale ?"
      ctaButton="Réserver une démo RH Flow"
    />
  );
}
