# Explication des Décisions Relatives à l'Accessibilité

Ce document détaille les choix de design et d'implémentation effectués pour garantir une expérience utilisateur inclusive, performante et accessible sur l'application GameDebate, en se basant sur les maquettes Figma et l'implémentation actuelle.

## 1. Contraste et Thème Sombre (Dark Mode)

### Décision
L'application utilise par défaut un thème sombre profond ("Deep Blue" / `#0B2545` et nuances proches).

### Justification Accessibilité
- **Réduction de la fatigue visuelle** : Pour une audience de "gamers" et de développeurs passant beaucoup de temps devant les écrans, le thème sombre réduit l'éblouissement.
- **Rapport de Contraste** : 
  - Le texte principal est en `#f1f5f9` (Slate 100) sur un fond sombre, assurant un ratio de contraste très élevé (supérieur au standard WCAG AA de 4.5:1).
  - Les éléments interactifs (boutons, liens actifs) utilisent des couleurs vives (`#3b82f6` Blue, `#fbbf24` Amber) pour se détacher clairement du fond.

## 2. Typographie et Lisibilité

### Décision
Utilisation de la police **Inter** (via Google Fonts) comme typographie principale.

### Justification Accessibilité
- **Clarté des caractères** : "Inter" est une police sans-serif conçue spécifiquement pour les écrans d'ordinateur. Elle offre une excellente distinction entre des caractères souvent confondus (comme 'I', 'l', et '1').
- **Hiérarchie Visuelle** : L'utilisation de graisses variées (Light, Regular, Bold, Black) permet de structurer l'information sans dépendre uniquement de la couleur, aidant ainsi les utilisateurs daltoniens à comprendre l'importance des éléments.

## 3. Navigation et Structure Sémantique

### Décision
Utilisation stricte des balises sémantiques HTML5 (`<nav>`, `<header>`, `<button>`, etc.) dans les composants React (ex: `Navbar.jsx`).

### Justification Accessibilité
- **Lecteurs d'écran** : Les utilisateurs de lecteurs d'écran peuvent naviguer rapidement entre les régions majeures de la page (Navigation, Contenu principal).
- **Liens explicites** : Les liens de navigation incluent des icônes ET du texte (sur desktop), ou des labels clairs, évitant les ambiguïtés des interfaces "uniquement icônes".

## 4. Interactions et Focus Clavier

### Décision
Implémentation d'un style `:focus-visible` personnalisé dans `index.css`.

```css
:focus-visible {
  outline: 2px solid var(--color-game-primary);
  outline-offset: 2px;
}
```

### Justification Accessibilité
- **Navigation au Clavier** : Les utilisateurs naviguant sans souris (tabulation) voient instantanément quel élément est sélectionné grâce à un contour bleu lumineux distinct.
- **Suppression du "Outline" par défaut uniquement si remplacé** : Nous ne supprimons pas l'outline sans le remplacer par une alternative plus visible et esthétique.

## 5. Responsivité (Mobile et Zoom)

### Décision
Design fluide et menu mobile ("Burger menu").

### Justification Accessibilité
- **Adaptabilité** : Le layout s'adapte aux petits écrans sans perte d'information ni défilement horizontal excessif.
- **Cibles tactiles** : Sur mobile, les éléments interactifs (boutons du menu) ont des zones de clic/toucher agrandies (padding généreux) pour faciliter l'interaction pour les utilisateurs ayant des difficultés motrices.

## 6. Feedback Utilisateur

### Décision
Utilisation d'états `hover` et `active` marqués avec des transitions douces (`transition-all`).

### Justification Accessibilité
- **Retour visuel** : Chaque interaction déclenche un changement visuel (couleur, échelle, lueur), confirmant à l'utilisateur que l'action est prise en compte. C'est crucial pour les utilisateurs ayant des troubles cognitifs ou de l'attention.

---
*Ce document sert de référence pour maintenir les standards d'accessibilité tout au long du développement du projet GameDebate.*
