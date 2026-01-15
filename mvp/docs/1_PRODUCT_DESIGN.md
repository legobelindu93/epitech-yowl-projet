# 🎯 1. Product Design - GameDebate

## 🧩 Problem Statement
Les joueurs d'aujourd'hui sont noyés sous l'information. Entre les reviews sponsorisées, les fils Twitter toxiques et les scores Metacritic sans nuance, il est difficile de se faire un avis éclairé sur un jeu. Ils manquent d'un espace *safe*, structuré et calme pour débattre du fond, tout en ayant accès aux meilleures offres pour passer à l'acte d'achat.

## 👤 Persona : "Alex, le joueur avisé"
- **Age** : 22 ans
- **Statut** : Étudiant en fin de cursus
- **Habitudes** : Joue 1h par jour, budget limité.
- **Frustrations** :
  - Déteste la "Guerre des consoles" stérile.
  - Perd du temps à chercher si un jeu vaut son prix actuel.
  - Veut lire des arguments, pas juste des insultes.
- **But** : Trouver des jeux qui valent vraiment le coup (et le coût) et partager son avis constructif.

## 🛤️ User Journey (Le "Happy Path")
1. **Découverte** : Alex arrive sur GameDebate. Il voit le "Jeu du Jour" : *Hades II*.
2. **Exploration** : Le design est immersif (artworks du jeu en fond). Il voit deux colonnes claires : "POURQUOI Y JOUER" vs "POURQUOI PASSER".
3. **Lecture** : Il lit les top arguments. L'interface est apaisée, pas de compteurs de likes agressifs.
4. **Contribution** : Il a joué. Il clique sur "Ajouter un argument". Il choisit son camp (POUR), écrit une phrase concise.
5. **Action** : Convaincu par les arguments PRO, il regarde la section "Offres". Il voit une promo à -20% sur Steam. Il clique.

## 🖼️ Wireframes & UI Concept

### Écran Principal (Le seul écran du MVP)
- **Header** : Logo minimaliste "GameDebate", bouton "Connexion" (discret).
- **Hero Section (Jeu du Jour)** :
  - Grand visuel de fond flouté (Glassmorphism).
  - Titre du jeu, Genre, Plateformes.
  - Un compte à rebours discret "Prochain débat dans 14h".
- **Le Débat (Cœur du produit)** :
  - Disposition en "Split View" (50/50 sur desktop, Tabulation sur mobile).
  - **Gauche (Vert pastel / Neon)** : Arguments POUR.
  - **Droite (Rouge pastel / Orange)** : Arguments CONTRE.
  - Au centre ou en bas (Sticky) : Bouton d'action "Participer au débat".
- **Sidebar / Footer (Deals)** :
  - "Meilleur prix actuel : 19.99€".
  - Liste simple de liens (Steam, Epic, GOG).

## 🔮 Priorisation (MoSCoW pour le MVP)
- **MUST HAVE** (Indispensable) :
  - Affichage "Jeu du Jour".
  - Liste arguments Pour/Contre.
  - Formulaire d'ajout d'argument.
  - Section Deals (liens statiques).
- **SHOULD HAVE** (Important) :
  - Système de vote simple (Pertinent / Pas pertinent) pour trier les arguments.
  - Filtre par plateforme.
- **COULD HAVE** (Bonus) :
  - Auth utilisateur réelle.
  - Historique des jeux passés.
- **WON'T HAVE** (Hors scope) :
  - Réponses aux arguments (pas de threads infinis).
  - Profils utilisateurs publics.
  - Messagerie privée.

## 🧪 Plan de Tests
1. **Test d'usabilité (5 utilisateurs)** : Est-ce qu'ils comprennent le concept "1 jour = 1 jeu" en moins de 5 secondes ?
2. **Test de contribution** : Est-ce facile de poster sans s'inscrire (ou auth très rapide) ?
3. **Test de lisibilité** : Les couleurs Pour/Contre sont-elles accessibles aux daltoniens ?
