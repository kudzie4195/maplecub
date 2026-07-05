// MapleCub landing copy — bilingual (EN / FR-CA). Single source of strings for the
// landing page + signup form. Toggle is wired in app/page.tsx (header EN/FR select).

export type Lang = "en" | "fr";

export const copy = {
  en: {
    nav: { daycares: "Daycares", events: "Events", guides: "Guides", saved: "Saved" },
    hero: {
      badge: "LICENSED LISTINGS ONLY",
      titleA: "Not every daycare",
      titleB: "across Canada is verified.",
      subhead:
        "Every licensed centre, dayhome, and Montessori on MapleCub is cross-checked against your province's official childcare registry.",
      searchPlaceholder: "Postal code or neighbourhood…",
      searchCta: "Show licensed daycares",
    },
    ageGroups: [
      "Infants (0–12 mo)",
      "Toddlers (1–2)",
      "Preschool (2–3)",
      "Pre-K (4–5)",
      "School-age",
    ],
    trust: {
      licensed: { label: "Licensed listings only", value: "Every centre is verified" },
      ratings: { label: "Parent ratings included", value: "Verified Google reviews" },
      coverage: { label: "13 provinces & territories", value: "Updated daily" },
      subsidy: { label: "$10-a-day child care tracker", value: "Find participating centres" },
    },
    cards: {
      childcareTag: "CHILDCARE",
      childcareTitle: "Find licensed daycares",
      childcareDesc: "5,000+ verified centres across all provinces",
      eventsTag: "FAMILY ACTIVITIES",
      eventsTitle: "Events & activities",
      eventsDesc: "Storytimes, classes, camps & weekend fun",
    },
    matchCta: {
      title: "✨ Not sure where to start?",
      desc: "Answer 4 questions to get a personalized shortlist of the best daycares for your area.",
      button: "Find My Match →",
    },
    categories: {
      heading: "What are you looking for?",
      daycares: "Daycares",
      thingsToDo: "Things To Do",
      camps: "Camps",
      guides: "Guides",
    },
    weekend: {
      heading: "This Weekend Near You",
      sub: "Updated this week",
      seeAll: "See all →",
    },
    testimonial: {
      joining: "Joining families across Canada",
      quote:
        "We applied to fourteen daycares and managed a separate group chat just for weekend events. MapleCub pulls it all together — no more spreadsheets or chaos.",
      attribution: "Priya M. · Toronto · Mum of two",
    },
    signup: {
      tag: "SAVE YOUR SPOT",
      title: "Be the first family in.",
      desc: "Get the launch invite the day MapleCub goes live in your province.",
    },
    footer: {
      tagline: "Licensed daycares, events, and family life for Canadian parents.",
      product: "Product",
      productLinks: ["Search daycares", "Find events", "Guides"],
      company: "Company",
      companyLinks: ["About", "Blog", "Contact"],
      legal: "Legal",
      legalLinks: ["Privacy", "Terms", "PIPEDA"],
      madeIn: "© 2026 MapleCub. Made in Canada 🇨🇦",
    },
    form: {
      name: "YOUR NAME",
      namePlaceholder: "Alex Tremblay",
      email: "EMAIL",
      emailPlaceholder: "you@example.com",
      province: "PROVINCE / TERRITORY",
      provincePlaceholder: "Select your province…",
      submit: "Reserve my spot",
      submitting: "Reserving your spot…",
      successTitle: "You're on the list.",
      successBody: "We'll email you the moment MapleCub launches in your province.",
      errorFill: "Please fill out every field.",
      errorGeneric: "Something went wrong. Try again, or email hello@maplecub.ca.",
    },
  },

  fr: {
    nav: { daycares: "Garderies", events: "Activités", guides: "Guides", saved: "Favoris" },
    hero: {
      badge: "SERVICES AGRÉÉS SEULEMENT",
      titleA: "Toutes les garderies",
      titleB: "au Canada ne sont pas vérifiées.",
      subhead:
        "Chaque CPE, garderie, service en milieu familial et école Montessori sur MapleCub est vérifié auprès du registre officiel des services de garde de votre province.",
      searchPlaceholder: "Code postal ou quartier…",
      searchCta: "Voir les garderies agréées",
    },
    ageGroups: [
      "Poupons (0–12 mois)",
      "Bambins (1–2 ans)",
      "Préscolaire (2–3 ans)",
      "Prématernelle (4–5 ans)",
      "Âge scolaire",
    ],
    trust: {
      licensed: { label: "Services agréés seulement", value: "Chaque service est vérifié" },
      ratings: { label: "Avis de parents inclus", value: "Avis Google vérifiés" },
      coverage: { label: "13 provinces et territoires", value: "Mis à jour chaque jour" },
      subsidy: { label: "Repère des garderies à 10 $/jour", value: "Trouvez les services participants" },
    },
    cards: {
      childcareTag: "GARDE D'ENFANTS",
      childcareTitle: "Trouvez des garderies agréées",
      childcareDesc: "Plus de 5 000 services vérifiés partout au pays",
      eventsTag: "ACTIVITÉS FAMILIALES",
      eventsTitle: "Activités et événements",
      eventsDesc: "Heures du conte, cours, camps et sorties de fin de semaine",
    },
    matchCta: {
      title: "✨ Vous ne savez pas par où commencer?",
      desc: "Répondez à 4 questions pour obtenir une sélection personnalisée des meilleures garderies de votre secteur.",
      button: "Trouver ma sélection →",
    },
    categories: {
      heading: "Que cherchez-vous?",
      daycares: "Garderies",
      thingsToDo: "Sorties",
      camps: "Camps",
      guides: "Guides",
    },
    weekend: {
      heading: "Cette fin de semaine près de chez vous",
      sub: "Mis à jour cette semaine",
      seeAll: "Voir tout →",
    },
    testimonial: {
      joining: "Des familles partout au Canada se joignent à nous",
      quote:
        "Nous avons fait une demande à quatorze garderies et géré une discussion de groupe juste pour les activités de fin de semaine. MapleCub réunit tout — fini les feuilles de calcul et le chaos.",
      attribution: "Priya M. · Toronto · Maman de deux enfants",
    },
    signup: {
      tag: "RÉSERVEZ VOTRE PLACE",
      title: "Soyez la première famille inscrite.",
      desc: "Recevez l'invitation de lancement dès que MapleCub arrive dans votre province.",
    },
    footer: {
      tagline: "Garderies agréées, activités et vie de famille pour les parents canadiens.",
      product: "Produit",
      productLinks: ["Rechercher une garderie", "Trouver des activités", "Guides"],
      company: "Entreprise",
      companyLinks: ["À propos", "Blogue", "Contact"],
      legal: "Mentions légales",
      legalLinks: ["Confidentialité", "Conditions", "LPRPDE"],
      madeIn: "© 2026 MapleCub. Conçu au Canada 🇨🇦",
    },
    form: {
      name: "VOTRE NOM",
      namePlaceholder: "Alex Tremblay",
      email: "COURRIEL",
      emailPlaceholder: "vous@exemple.com",
      province: "PROVINCE / TERRITOIRE",
      provincePlaceholder: "Choisissez votre province…",
      submit: "Réserver ma place",
      submitting: "Réservation en cours…",
      successTitle: "Vous êtes sur la liste.",
      successBody: "Nous vous écrirons dès que MapleCub sera lancé dans votre province.",
      errorFill: "Veuillez remplir tous les champs.",
      errorGeneric: "Une erreur s'est produite. Réessayez ou écrivez à hello@maplecub.ca.",
    },
  },
} as const;
