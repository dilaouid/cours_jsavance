# 04 - Minimify

## Introduction de la minimisation

La minimisation du code JavaScript est un processus important pour améliorer les performances de votre application web.

L'outil de minimisation intégré à _Webpack_ vous permet de réduire la taille du code source en supprimant les espaces vides, les commentaires et en raccourcissant les noms de variables, tout en maintenant le même comportement fonctionnel du code. Cela peut entraîner des temps de chargement plus rapides pour vos utilisateurs et une meilleure expérience globale.

## Pourquoi minimifier

Les fichiers JavaScript non minimisés contiennent souvent des espaces, des retours à la ligne et des commentaires qui ne sont pas nécessaires à l'exécution du code, mais qui sont utiles à la _DX_ (_Developer eXperience_).

En les supprimant, vous réduisez considérablement la taille du fichier, ce qui peut accélérer le temps de chargement.

De plus, les fichiers JavaScript minimisés sont plus rapides à télécharger, ce qui améliore les performances de votre application, en particulier sur les connexions réseau lentes ou sur les appareils mobiles.

Et enfin, minimiser le code peut également rendre plus difficile la compréhension du fonctionnement interne de votre application par des tiers, ce qui peut aider à prévenir certaines formes d'exploitation. On parle alors d'**obfuscation**.

## Exemple de minimifier: terser

_terser_ est un outil populaire utilisé pour la minimisation du code JavaScript. Voici comment l'installer et l'utiliser avec _Webpack_:

1. **Installation via npm:**

  ```shell
  npm i terser-webpack-plugin --save-dev
  ```

2. **Configuration de webpack.config.js:**

  ```js
  const TerserPlugin = require("terser-webpack-plugin");
  // ...
  module.exports = {
    // ...
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    // ...
  };
  ```

Une fois le plugin _terser_ ajouté à votre configuration, Webpack le utilisera pour minimiser le code JavaScript lors de la construction.