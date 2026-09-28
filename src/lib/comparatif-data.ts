export interface FAQItem {
  question: string;
  answer: string;
}

export const COMPARATIF_FAQS: FAQItem[] = [
  {
    question: "Suite Flow peut-il vraiment remplacer tous mes outils ?",
    answer:
      "Oui, pour 90% des PME de 10 à 250 salariés. Suite Flow regroupe les 5 briques opérationnelles indispensables au quotidien : CRM commercial, facturation & compta, gestion RH & congés, contrats juridiques et gestion de tâches. Si votre entreprise a un besoin d'hyper-spécialisation marketing (ex: scénarios de lead scoring pour des millions d'utilisateurs), vous pouvez conserver cet outil de niche tout en gérant l'intégralité du reste de vos opérations sur Suite Flow.",
  },
  {
    question: "Est-ce que je perds mes données en migrant ?",
    answer:
      "Absolument pas. Notre équipe d'intégration vous accompagne pas à pas pour importer vos contacts, factures, contrats et historiques depuis des exports CSV ou directement depuis vos anciens outils (HubSpot, Pennylane, PayFit, Monday, etc.). Vous conservez 100% de votre historique sans rupture d'activité.",
  },
  {
    question: "Comment se passe la migration depuis mes outils actuels ?",
    answer:
      "Le déploiement moyen prend 2 semaines. Dès la souscription, un spécialiste dédié configure vos 5 modules selon vos processus existants, effectue le mapping de vos données et anime des sessions de prise en main de 45 minutes par équipe métier (commerciaux, comptables, RH, managers de projet).",
  },
  {
    question: "Suite Flow est-il adapté aux entreprises de plus de 100 salariés ?",
    answer:
      "Tout à fait. Suite Flow est conçu pour accompagner les structures jusqu'à 250 salariés. L'architecture supporte une gestion fine des droits d'accès par pôle, le multi-établissements, et traite des milliers d'opérations et de documents mensuels avec une fluidité totale.",
  },
  {
    question: "Y a-t-il un engagement minimum obligatoire ?",
    answer:
      "Non, vous pouvez opter pour une formule mensuelle flexible sans engagement ou pour un abonnement annuel qui vous fait bénéficier de réductions avantageuses. Dans tous les cas, vos données restent strictement votre propriété et sont réexportables à tout instant en un clic.",
  },
];
