import ProductPageTemplate from "@/components/product-page-template";

export const metadata = {
  title: "Task Flow — CRM & Contrats de mission automatisés | Suite Flow",
  description: "CRM commercial et générateur automatique de contrats, lettres de mission et conventions de prestation. Pilotez vos dossiers clients, suivez la production et mesurez la rentabilité exacte par mission.",
};

export default function TaskFlowPage() {
  return (
    <ProductPageTemplate
      appName="Task Flow"
      tagline="Task Flow — CRM & Contrats automatisés"
      title="CRM & Contrats de mission automatisés"
      subtitle="Bien plus qu'un outil de tâches : votre cockpit CRM et moteur de génération de contrats (lettres de mission, conventions d'honoraires, contrats de prestation). Conçu pour le cabinet DC-KNOWING et les PME de services pour piloter le cycle client du devis à la rentabilité finale."
      icon="board"
      logoSrc="/logos/task-flow.webp"
      moduleColor="#334155"
      features={[
        { icon: "contract", title: "Génération de contrats & lettres de mission", text: "Créez en 1 clic vos contrats de prestation, lettres de mission conformes OHADA et conventions d'honoraires prêtes à signer." },
        { icon: "assign", title: "CRM commercial & Onboarding client", text: "Suivez le cycle de vie complet de vos prospects et clients, centralisez les pièces d'identification (KYC) et les accords commerciaux." },
        { icon: "kanban", title: "Tableaux Kanban de production", text: "Pilotez l'avancement de chaque dossier par étape : instruction, production, contrôle qualité et livraison client." },
        { icon: "pie", title: "Rentabilité analytique par mission", text: "Rapprochez automatiquement les heures passées, les coûts salariaux et les factures émises pour mesurer la marge réelle par contrat." },
        { icon: "bell", title: "Alertes sur les jalons et délais critiques", text: "Notifications automatiques aux collaborateurs et managers avant chaque échéance contractuelle ou réglementaire." },
        { icon: "eye", title: "Portail client & validation des livrables", text: "Donnez à vos clients un espace sécurisé pour valider leurs livrables, échanger des documents et suivre leurs dossiers." },
      ]}
      practiceTitle="Du contrat signé à la marge nette"
      practiceText="Dès qu'un contrat ou une lettre de mission est validé dans Task Flow, les tâches de production se créent automatiquement, la facturation récurrente s'enclenche dans Sell Flow et les écritures se déversent dans Compta Flow."
      practiceBullets={[
        "Moteur de modèles contractuels personnalisables avec clauses juridiques sécurisées",
        "Affectation automatique des équipes et rétroplanning d'exécution",
        "Calcul en temps réel de la rentabilité brute et nette par client et mission",
      ]}
      practiceStats={[
        { value: "3 min", label: "pour générer un contrat complet" },
        { value: "100 %", label: "de visibilité sur les marges" },
        { value: "0", label: "délai contractuel manqué" },
      ]}
      testimonials={[
        { quote: "Task Flow a révolutionné notre gestion contractuelle. Les lettres de mission et conventions sont éditées en quelques clics avec toutes les mentions obligatoires.", name: "Stéphane Adjei", role: "Associé gérant cabinet, Plateau", initials: "SA" },
        { quote: "Le suivi de rentabilité par mission nous a ouvert les yeux. Nous savons au centime près quels clients sont rentables et où réajuster notre temps.", name: "Didier Boka", role: "Chef d'entreprise de services, Abidjan", initials: "DB" },
        { quote: "Nos clients adorent le portail dédié. Ils signent leurs conventions en ligne et suivent l'état de leur dossier en toute transparence.", name: "Grâce Ouattara", role: "Directrice d'agence conseil, Cocody", initials: "GO" },
      ]}
      ctaTitle="Prêt à professionnaliser vos contrats et votre CRM ?"
      ctaButton="Réserver une démo Task Flow"
    />
  );
}
