# Déployer une Application React avec Vite sur GitHub Pages

Déployer votre application React construite avec Vite sur GitHub Pages est un excellent moyen de partager votre travail avec le monde. Voici un guide étape par étape pour vous aider à y parvenir efficacement.

## Étape 1: Préparer votre application

Avant de procéder au déploiement, assurez-vous que votre application fonctionne correctement en local. Testez toutes les fonctionnalités et corrigez les éventuelles erreurs.

## Étape 2: Installer `gh-pages`

Ouvrez votre terminal et naviguez vers le répertoire de votre projet. Exécutez la commande suivante pour installer le package `gh-pages` qui facilitera le déploiement de votre application sur GitHub Pages.

```bash
npm install gh-pages --save-dev
```

## Étape 3: Configurer votre `package.json`

Ajoutez les scripts suivants à votre fichier `package.json`. Ces scripts simplifient le processus de construction et de déploiement de votre application.

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://<username>.github.io/<repo-name>/",
```

Remplacez `<username>` par votre nom d'utilisateur GitHub et `<repo-name>` par le nom de votre dépôt GitHub.

## Étape 4: Construire votre application

Exécutez le script de construction pour créer une version optimisée de votre application.

```bash
npm run build
```

Cette commande génère un dossier `dist` contenant les fichiers de votre application prêts pour le déploiement.

## Étape 5: Déployer sur GitHub Pages

Maintenant que votre application est construite, utilisez le script `deploy` pour la publier sur GitHub Pages.

```bash
npm run deploy
```

Cette commande crée une branche `gh-pages` dans votre dépôt (si elle n'existe pas déjà) et y téléverse le contenu de votre dossier `dist`.

Mais vous êtes malins je vous connais. Donc vous savez qu'on peut directement ajouter un script dans le `package.json` pour éviter de taper cette commande à chaque fois. Vous pouvez ajouter un script `deploy` dans votre `package.json` pour éviter de taper cette commande à chaque fois.

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "npm run build && gh-pages -d dist"
},
```

Ainsi, vous pouvez simplement exécuter `npm run deploy` pour construire et déployer votre application en une seule commande.

## Étape 6: Configurer GitHub Pages

Allez sur la page de votre dépôt GitHub, cliquez sur "Settings" > "Pages". Sous "Source", sélectionnez la branche `gh-pages` et cliquez sur "Save".

Votre application est maintenant en ligne ! Vous devriez voir l'URL de votre site GitHub Pages dans la section "GitHub Pages" des paramètres. Vous devez simplement aller sur l'url que vous avez configuré dans le `package.json` pour voir votre application en ligne (à savoir, `https://<username>.github.io/<repo-name>`).

## Étape 7: Vérifier le déploiement

Ouvrez l'URL fournie par GitHub Pages dans votre navigateur pour voir votre application en action. Félicitations, votre application React est maintenant déployée sur GitHub Pages !

## Conseils supplémentaires

- **Personnalisation de l'URL :** Vous pouvez utiliser un nom de domaine personnalisé avec GitHub Pages en ajoutant un fichier `CNAME` à votre dépôt, si vous avez déjà un nom de domaine à vous.
- **Problèmes de routage :** Si vous utilisez React Router, vous devrez peut-être ajuster votre configuration pour que le routage fonctionne correctement sur GitHub Pages.
