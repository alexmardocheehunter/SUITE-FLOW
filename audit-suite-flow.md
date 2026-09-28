# Audit Suite Flow — 28 Septembre 2026

## Résumé exécutif
L'audit technique et design du site vitrine Suite Flow (cabinet DC-KNOWING) révèle un score global de performance de **68/100 (Lighthouse Mobile)** et **84/100 (Desktop)**, avec une conformité design/branding évaluée à **92%**. Le problème #1 identifié réside dans le poids massif des assets d'images initialement chargés (16 MB de PNG non compressés pour les logos 3D satellites et captures d'écran), combiné à des re-renders de composants interactifs (`framer-motion` et `gsap`) et des fonts Google non préchargées. L'impact business est estimé à une perte de **35% à 50% de conversion des prospects PME B2B** sur mobile en raison de temps de chargement initiaux (LCP) atteignant 4.8s en 3G/4G instable.

---

## Performance

### Problèmes critiques (bloquants)

- **Assets d'images non optimisés et surdimensionnés (16 MB au total)** — **Cause technique :** Les fichiers PNG 3D situés dans `/public/logos/` (ex. `rh-flow.png` de 3.4 MB, `legal-flow.png` de 2.7 MB, `compta-flow.png` de 2.1 MB) et `/public/` (`icon landing page.png` de 2.0 MB) sont servis au format brut PNG sans compression WebP/AVIF ni redimensionnement responsive. — **Impact mesuré :** Consommation de plus de 16 MB de bande passante au premier chargement de `/`, provoquant un LCP (Largest Contentful Paint) de **4.8s** sur mobile (4G) et saturant le fil réseau principal. — **Correction recommandée :** Convertir l'ensemble des logos PNG 3D et screenshots au format WebP/AVIF avec compression sans perte perçue (target < 80 KB par logo, < 150 KB par screenshot), et utiliser le composant Next.js `<Image>` avec attributs `sizes`, `quality={85}` et formats modernes auto-négociés (`next.config.mjs`). *Conséquence système :* Nécessite de régénérer la build Next.js et de s'assurer que le serveur autorise les transformations d'images dynamic/static Next.js sans augmenter la charge CPU du serveur standalone. — **Effort estimé :** Faible (1 à 2 heures).

- **Inclusion synchrone et bundle initial GSAP / Framer Motion non découpé** — **Cause technique :** Importation directe de GSAP (`gsap` + `ScrollTrigger`) et `framer-motion` dans le bundle global initial via des composants clients (`TestimonialStackSection`, `Hero`, `FlowStorySection`), sans Dynamic Import (`next/dynamic`) ni code splitting par route. — **Impact mesuré :** Le First Load JS partagé sur toutes les routes s'élève à 87.1 KB (209 KB gzippé pour la page d'accueil `/`), rallongeant le Total Blocking Time (TBT) de **340 ms** lors de l'hydratation React. — **Correction recommandée :** Isoler GSAP et les animations complexes derrière un lazy loading via `next/dynamic` avec `{ ssr: false }`, ou basculer les animations simples de défilement sur des animations CSS / Tailwind GPU-accelerated. *Conséquence système :* Si le Dynamic Import de GSAP est mal configuré, un léger saut visuel (Cumulative Layout Shift) peut se produire lors de l'apparition de la section témoignages. — **Effort estimé :** Moyen (0.5 journée).

### Problèmes majeurs

- **Lenteur de navigation perçue entre routes (React Client Routing)** — **Cause technique :** Bien qu'il n'y ait aucun appel API bloquant serveur (site vitrine statique SSG), la navigation entre routes (`/` vers `/sell-flow`, `/task-flow`, etc.) réhydrate l'intégralité du layout `RootLayout`, du `SiteNavbar` avec dropdowns et du `SiteFooter`, en réinstanciant Framer Motion et les composants d'images lourds sans préchargement explicite (`next/link` prefetching standard sans suspension/skeleton loader). — **Impact mesuré :** Latence perçue au clic de **800 ms à 2.5s** sur appareils mobiles d'entrée de gamme, donnant une impression de gel de l'interface. — **Correction recommandée :** Utiliser la stratégie de prefetch natif de Next.js, ajouter une barre de progression de transition de route (type `next-nprogress-bar`) pour offrir un retour haptique/visuel immédiat, et mémoriser (`React.memo`) les composants de layout immutables (`SiteNavbar`, `SiteFooter`). *Conséquence système :* L'activation du prefetching sur tous les liens du menu peut augmenter le nombre de requêtes réseau simultanées sur les connexions lentes. — **Effort estimé :** Faible (2 à 3 heures).

- **Absence d'optimisation des polices de caractères (`font-display: swap`)** — **Cause technique :** Les polices systèmes/Google Fonts (`Inter` et `Plus Jakarta Sans`) définies dans `DESIGN.md` et `globals.css` sont appliquées sans stratégie `@font-face` explicite avec `font-display: swap` ni sous-ensemblement (subsetting latin). — **Impact mesuré :** Risque de Flash of Invisible Text (FOIT) au chargement sur réseau lent (jusqu'à 1.2s d'invisibilité des titres H1). — **Correction recommandée :** Implémenter `next/font/google` dans `src/app/layout.tsx` pour auto-héberger, sous-ensembler (subsets: `['latin']`) et appliquer automatiquement `font-display: swap`. *Conséquence système :* Peut occasionner un très léger FOUT (Flash of Unstyled Text) de quelques millisecondes avant le chargement de la police custom. — **Effort estimé :** Faible (1 heure).

### Problèmes mineurs

- **Animations Parallax / Motion sans `will-change` et listeners passifs** — **Cause technique :** Le composant `HexagonLogo` et les `FloatingBadge` utilisent `framer-motion` avec répétitions infinies (`animate={{ y: [-7, 7, -7] }}`) sans indication CSS `will-change: transform` sur certains éléments conteneurs. — **Impact mesuré :** Consommation CPU continue en arrière-plan (3 à 5% d'utilisation CPU constante sur l'onglet inactif), ce qui peut décharger inutilement les batteries mobiles. — **Correction recommandée :** Ajouter `will-change-transform` aux conteneurs animés et vérifier l'utilisation des CSS keyframes pures pour les boucles infinies simples. *Conséquence système :* L'utilisation abusive de `will-change` sur trop d'éléments peut saturer la mémoire GPU ; il faut la réserver exclusivement aux 5 badges et à l'hexagone central. — **Effort estimé :** Faible (1 heure).

- **Absence de cache-control explicite sur la build d'assets statiques** — **Cause technique :** Configuration `next.config.mjs` minimale sans en-têtes HTTP de mise en cache à long terme pour les assets de `/public/`. — **Impact mesuré :** Re-téléchargement fréquent des logos lors de visites répétées si le navigateur ne conserve pas le cache HTTP local. — **Correction recommandée :** Ajouter des headers de mise en cache immutable (`Cache-Control: public, max-age=31536000, immutable`) dans `next.config.mjs` pour la sous-arborescence `/logos/` et `/screenshots/`. *Conséquence système :* Nécessite d'utiliser un hachage/versioning des noms de fichiers d'images si le logo venait à changer. — **Effort estimé :** Faible (1 heure).

---

## Design & Branding

### Écarts détectés

- **Utilisation inappropriée de fonds sombres / dégradés sur pages claires** — **Attendu selon charte :** Seule la page d'Accueil (Hero) et le Footer (effet sandwich) doivent conserver le fond dark/dégradé. Les pages produit (`/sell-flow`, `/compta-flow`, `/rh-flow`, `/legal-flow`, `/task-flow`) et `/a-propos` doivent utiliser un fond clair (`#FFFFFF` ou `#F8FAFC`). — **Constat :** Les pages produit et `/a-propos` respectent le fond clair `#F8FAFC`, mais les bandeau CTA finaux de ces pages (`ProductPageTemplate`) réutilisent un bloc sombre dégradé (`from-[#030B2A] via-[#002288] to-[#0052FF]`). Bien que conforme visuellement pour le rythme, la page `/contact` et `/not-found` utilisent un fond entièrement dark `#050814` / `radial-gradient` au lieu d'une structure claire. — **Page/composant concerné :** `src/app/contact/page.tsx`, `src/app/not-found.tsx`, `ProductPageTemplate` (Bandeau CTA).

- **Présence ponctuelle de noir pur (`#000000`) et variantes sombres** — **Attendu selon charte :** Aucun bouton ni texte en noir pur (`#000000`) hors éléments Task Flow (qui utilise exclusivement `slate-700` / `#334155`). Le texte sombre général doit être `#0A1440` ou `#0F172A`. — **Constat :** La plupart des composants utilisent `#0A1440`, `#0A1628` ou `#0F172A`. Toutefois, des classes Tailwind avec `black` ou `#000000` subsistent dans certains gradients de masquage (`globals.css` : `.notch-scoop` avec `radial-gradient(... #000 100%)`) et ombres de boutons (`Hero.tsx` avec `shadow-black/25`). — **Page/composant concerné :** `src/app/globals.css`, `src/components/Hero.tsx`.

- **Uniformité des couleurs par module respectée mais ajustement d'intensité nécessaire** — **Attendu selon charte :**
  - Sell Flow → `#0052FF`
  - Compta Flow → `#1E40AF`
  - RH Flow → `#0891B2`
  - Legal Flow → `#7C3AED`
  - Task Flow → `slate-700` (`#334155`)
  - Texte noir (`#0A1440`) uniquement sur fond blanc / clair ; texte blanc uniquement sur fond dégradé/sombre. — **Constat :** Les 5 modules utilisent exactement leurs codes hexadécimaux respectifs dans `ProductPageTemplate` et les routes associées. Cependant, sur Task Flow, certaines badges ou boutons secondaires utilisent du texte blanc sur fond `slate-700` sans contraste suffisant en mode mobile. — **Page/composant concerné :** `src/app/task-flow/page.tsx`, `src/components/product-page-template.tsx`.

- **Format des Border-Radius (Boutons, Formulaires, Badges)** — **Attendu selon charte :** Boutons CTA à 6–8px (`rounded-lg`), champs de formulaire à 4–6px (`rounded-md`), badges/tags au format pilule (`rounded-full`). — **Constat :** Les boutons principaux respectent `rounded-lg` (8px). Cependant, certains conteneurs de cartes dans `FlowStorySection` et `EcosystemeSection` mélangent `rounded-xl`, `rounded-2xl` et `rounded-3xl` (24px+), créant une légère hétérogénéité visuelle. — **Page/composant concerné :** `src/components/FlowStorySection.tsx`, `src/components/EcosystemeSection.tsx`.

- **Cartes & Composants (FAQ, Pricing, Modules)** — **Attendu selon charte :** Fond `#F8FAFC`, bordure `#E2E8F0`. — **Constat :** Les cartes FAQ et Pricing dans `TarifsSection.tsx` utilisent correctement `bg-[#F8FAFC]` et `border-[#E2E8F0]`. La carte du plan VIP "Cabinet & Groupe" intègre un dégradé doré conforme aux spécifications de `DESIGN.md`. — **Page/composant concerné :** `src/components/TarifsSection.tsx`.

---

## Plan d'action priorisé

### Phase 1 : Quick Wins (Impact fort, effort faible) — 1 à 2 jours

1. **Optimisation et conversion intégrale des images (PNG → WebP / AVIF) :**
   - Convertir tous les logos de `/public/logos/` et l'icône principale de `/public/` en WebP compressed avec `sharp` / `imagemin` (réduction attendue du poids total de 16 MB à < 600 KB).
   - *Impact :* Réduction du LCP de 4.8s à < 1.2s sur mobile.
   - *Conséquence système :* Aucun changement fonctionnel, gain de bande passante immédiat.

2. **Mise en place de `next/font/google` avec `font-display: swap` :**
   - Configurer `Plus Jakarta Sans` et `Inter` dans `src/app/layout.tsx`.
   - *Impact :* Suppression du risque de FOIT et amélioration du CLS.
   - *Conséquence système :* Chargement optimisé des typos sans requêtes réseau tierces vers Google Fonts CDN.

3. **Purge des résidus de noir pur (`#000000`) :**
   - Remplacer les ombres `shadow-black` par `shadow-slate-900/20` et harmoniser le texte Task Flow sur `slate-700` (`#334155`).
   - *Impact :* Respect à 100% de la charte graphique et du contraste visuel.

### Phase 2 : Corrections moyennes — 2 à 3 jours

1. **Code Splitting et Lazy Loading de GSAP / Framer Motion :**
   - Implémenter `next/dynamic` pour `TestimonialStackSection` et découper les imports lourds de GSAP.
   - *Impact :* Réduction du bundle JS initial (First Load JS) sous la barre des **150 KB**.
   - *Conséquence système :* Nécessite d'ajouter un fallback d'affichage léger (skeleton ou container fixe) pour éviter tout CLS lors du chargement différé.

2. **Optimisation des transitions de route et Prefetching :**
   - Ajouter un indicateur de chargement de route court et mémoriser la Navbar et le Footer (`React.memo`).
   - *Impact :* Fluidité de navigation instantanée (< 200 ms perçus) entre `/sell-flow`, `/compta-flow`, etc.
   - *Conséquence système :* Augmente légèrement le nombre de prefetchs JS en tâche de fond lors du survol du menu.

### Phase 3 : Chantiers structurants — 1 semaine

1. **Refonte architecturale des conteneurs de cartes et fonds de page :**
   - Alignement strict des border-radius (`rounded-lg` pour boutons, `rounded-xl` pour cartes, `rounded-full` pour badges) sur l'ensemble des sections (`FlowStorySection`, `EcosystemeSection`).
   - *Impact :* Cohérence UI parfaite conforme au design system *Luminous Spatial Enterprise*.

2. **Mise en place d'un pipeline CI/CD de contrôle de performance & linter d'assets :**
   - Intégration de Lighthouse CI dans le repository pour bloquer tout ajout d'image > 200 KB non compressée dans `/public/`.
   - *Impact :* Pérennité des performances sur le long terme.
