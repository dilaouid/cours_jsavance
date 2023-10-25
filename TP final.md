# TP Final - Exploration d'API Dynamique

**Objectif :** Créez une application Web monopage qui exploite les données d'une API publique unique en réalisant des appels API imbriqués. Du coup, pas besoin de faire 60 pages pour ce projet, ce n'est pas dans le barème !

**Fonctionnalités :**

1. **Sélection d'une donnée :** Lorsque l'utilisateur arrive sur votre site, il doit pouvoir choisir ou rechercher une donnée spécifique (cela pourrait être un album, un livre, un film, des recettes de cuisines, des jeux vidéos, etc., selon l'API que vous choisissez).
2. **Requête imbriquée :** Une fois qu'une donnée est sélectionnée, réalisez un second appel API pour récupérer des détails ou des éléments associés en utilisant une clé ou un identifiant de la donnée initiale. Affichez ces éléments sur votre page. Bien entendu, il faut pouvoir faire ça plusieurs fois, donc si l'utilisateur change de donnée, il faut que ça change aussi. **Et donc pouvoir afficher plusieurs éléments à la fois en simultané.**

**Critères techniques :**

- **High Order Functions (HOF) :** Utilisez des _HOF_ dans votre code, par exemple pour afficher la liste des éléments ou pour filtrer des résultats.
- **Fonctions fléchées :** Utilisez des _fonctions fléchées_ là où c'est pertinent.
- **Destructuring :** Lorsque vous manipulez des objets ou des tableaux, utilisez le _destructuring_ pour en extraire les données.
- **Spread Operator :** Si vous copiez ou fusionnez des objets ou des tableaux, utilisez le _spread operator_.
- **Pas de "callback hell" :** Assurez-vous que votre code est propre et lisible, en particulier lorsque vous travaillez avec des promesses ou des fonctions de rappel. **Un malus sera appliqué si votre code a trop de niveaux d'imbrication qui le rend illisible.**
- **Design :** Créez une mise en page attrayante et intuitive.
- **Pas de Hardcoding :** Assurez-vous que votre code ne contient pas de valeurs codées en dur (hardcoded) qui pourraient être des variables ou des constantes pour l'utilisation de votre API. L'utilisateur doit pouvoir changer de donnée sans avoir à modifier le code.

**Structure HTML :**

Seul un élément d'ancrage, comme une balise `<main>` ou `<div>`, est autorisé dans le body de votre HTML. Tout le contenu doit être généré dynamiquement via JavaScript.

**Accessibilité et responsive :** Votre application doit être adaptative et accessible. Vérification avec Lighthouse.

**Bonus :**

- **SCSS :** Utilisez SCSS pour styliser votre application.
- **Map & Set :** Essayez d'intégrer l'utilisation de Map et Set si cela s'applique à votre application.
- **Autres API :** Intégrez une autre API dans votre application.

**Considérations supplémentaires :**

- Si vous choisissez d'utiliser **React** ou **Angular**, sachez que cela pourrait compliquer le respect de certains critères. De plus, les points sur la structure HTML ne seront donc pas applicables. Assurez vous donc de faire un maximum de bonus pour compenser.
- Si vous choisissez d'utiliser une librairie CSS comme **Bootstrap** (c'est permis), le bonus SCSS ne sera pas applicable, et des points seront retirés sur le design si vous ne personnalisez pas le style de Bootstrap par défaut.

**Remise :** Soumettez un lien vers votre dépôt GitHub publique.
