import ProductPageTemplate from "@/components/product-page-template";

export const metadata = {
  title: "Sell Flow — Ventes et facturation FNE | Suite Flow",
  description: "Gestion des ventes, des achats, des stocks multi-magasins et de la caisse. Facturation normalisée FNE-DGI avec génération instantanée du QR code fiscal.",
};

export default function SellFlowPage() {
  return (
    <ProductPageTemplate
      appName="Sell Flow"
      tagline="Sell Flow — Facturation normalisée FNE"
      title="Ventes et facturation FNE"
      subtitle="Gestion des ventes, des achats, des stocks multi-magasins et de la caisse. Émettez vos factures conformes à la facturation normalisée (FNE-DGI) avec génération instantanée du QR code fiscal, sans double saisie."
      icon="cart"
      logoSrc="/logos/sell-flow.png"
      moduleColor="#0052FF"
      features={[
        { icon: "qr", title: "Facturation FNE certifiée DGI", text: "QR code et sticker fiscal générés automatiquement sur chaque facture. Zéro double saisie sur le portail DGI." },
        { icon: "store", title: "Multi-caisses & multi-magasins", text: "Pilotez vos points de vente d'Abidjan à l'intérieur du pays depuis une interface tactile unique, en magasin comme sur le terrain." },
        { icon: "wallet", title: "Mobile Money & espèces en temps réel", text: "Chaque encaissement Wave, Orange Money, MTN ou espèces est comptabilisé et rapproché immédiatement." },
        { icon: "doc", title: "Devis & bons de commande professionnels", text: "Des pièces commerciales propres, numérotées et suivies rigoureusement jusqu'à l'émission de la facture." },
        { icon: "stock", title: "Stocks avec alertes de seuil", text: "Surveillez vos inventaires en temps réel et recevez des alertes avant toute rupture de stock." },
        { icon: "stats", title: "Statistiques par vendeur & article", text: "Suivez le chiffre d'affaires, les marges et les volumes par produit pour piloter votre activité commerciale." },
      ]}
      practiceTitle="En caisse comme sur le terrain"
      practiceText="Le vendeur encaisse, Sell Flow génère la facture normalisée : le document certifié part au client pendant que les écritures de vente et les stocks se mettent à jour automatiquement."
      practiceBullets={[
        "Intégration directe de l'API de Facturation Normalisée Électronique (FNE-DGI)",
        "Envoi automatique des factures par WhatsApp & e-mail aux clients",
        "Gestion synchronisée des stocks et inventaires multi-dépôts",
      ]}
      practiceStats={[
        { value: "30 s", label: "par facture normalisée" },
        { value: "100 %", label: "conforme FNE-DGI" },
        { value: "0 F", label: "d'amende fiscale" },
      ]}
      testimonials={[
        { quote: "Avant, je passais mes soirées à ressaisir chaque facture sur le portail DGI. Maintenant tout part certifié directement depuis la caisse.", name: "Awa Koné", role: "Commerce & Distribution, Plateau", initials: "AK" },
        { quote: "Nos trois magasins facturent de façon harmonisée à Abidjan et Bouaké. Lors du contrôle fiscal, tout a été validé immédiatement.", name: "Yao Kouassi", role: "Réseau distribution, Abidjan", initials: "YK" },
        { quote: "Le suivi Mobile Money instantané a totalement supprimé nos écarts de caisse en fin de journée.", name: "Fatou Diarra", role: "Supermarché, Cocody", initials: "FD" },
      ]}
      ctaTitle="Prêt à sécuriser votre facturation FNE ?"
      ctaButton="Réserver une démo Sell Flow"
    />
  );
}
