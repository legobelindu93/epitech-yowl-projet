# 🧪 2. MVP Specifications

## périmètre Fonctionnel Strict

### 1. Module "Daily Game"
- **Données** : Titre, Image de couverture, Description courte, Genre, Date de sortie.
- **Comportement** : Rotation automatique ou manuelle (admin) du jeu. Pour le MVP, le jeu change chaque fois qu'on reload ou est hardcodé pour la démo.

### 2. Module "Arena" (Débat)
- **Affichage** :
  - Deux listes distinctes : Arguments POSITIFS vs NÉGATIFS.
  - Chaque carte argument contient : Texte, Auteur (Anonyme ou Pseudo), Tag (ex: "Gameplay", "Graphismes").
- **Interaction** :
  - Bouton "J'ai un avis".
  - Modale ou champ simple.
  - Sélecteur binaire : 👍 ou 👎.
  - Champ texte (max 280 caractères pour forcer la synthèse).
  - Bouton "Publier".
  
### 3. Module "Deals"
- **Affichage** :
  - Carte simple avec le prix le plus bas.
  - Bouton "Voir l'offre" (Ouvre dans un nouvel onglet).

### 4. Navigation
- Très simple. Ancre vers "Débat", "Infos", "Deals".
- Pas de router complexe nécessaire pour la version 1, tout tient sur une "Single Page App" scrollable.

## Règles de Gestion (Business Logic)
- **Anti-Toxicité par Design** : 
  - Pas de bouton "Répondre" pour éviter les flamewars.
  - Pas de compteurs de dislikes visibles.
- **Simplicité** : 
  - Pas d'inscription obligatoire pour LIRE.
  - Pseudo invité suffisant pour ÉCRIRE (stocké en LocalStorage).
