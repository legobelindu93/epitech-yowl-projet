# 💻 3. Tech Strategy & Stack

## 🏗️ Architecture
**Choix : JAMstack (JavaScript, APIs, Markup)**
Architecture client-side riche, sans backend lourd à gérer pour le MVP.

### Frontend : React + Vite
- **Pourquoi ?** : Standard de l'industrie, rapide à mettre en place, écosystème riche.
- **Langage** : JavaScript (ou TypeScript pour la robustesse, on partira sur JS/JSX pour la vitesse d'itération si besoin, ou TSX par défaut pour la qualité). *Decision: React + JSX pour flexibilité immédiate.*

### Styling : TailwindCSS + Framer Motion
- **TailwindCSS** : Pour un développement ultra-rapide et un design system cohérent (couleurs, espacements).
- **Framer Motion** : Pour ajouter les "micro-interactions" et l'aspect "Premium" (animations d'entrée, hover effects fluides) demandés dans le brief.
- **Glassmorphism** : Utilisation de `backdrop-blur`, `bg-opacity`, et bordures subtiles.

### Data Layer : Mock Service Pattern
- Pour le MVP et la soutenance, nous n'allons pas perdre de temps avec une base de données SQL complexe.
- **Solution** : Un fichier `GameService.js` qui simule les appels API.
- **Avantage** : Zéro latence, fonctionne hors ligne, prédictible pour la démo.
- **Structure des données (JSON)** :
  ```json
  {
    "game": { "id": 1, "title": "Hades II", "image": "..." },
    "comments": [
      { "id": 101, "type": "pro", "text": "Le système de combat est encore plus nerveux.", "author": "ZagFan" }
    ]
  }
  ```

### Deployment
- Vercel ou Netlify (Support natif de Vite).

## 🛡️ Justification des choix (Soutenance)
- "Nous avons choisi React pour sa componentisation qui permet d'isoler la logique de débat."
- "Nous avons opté pour Tailwind afin de garantir une UI responsive sans écrire des centaines de lignes de CSS custom."
- "Le choix du Mock Data nous permet de garantir une démo fluide à 100% le jour J, tout en ayant une structure de code prête à être branchée sur une API REST réelle."
