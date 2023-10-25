# 01 - Webpack

## Introduction à Webpack

_Webpack_ est un outil de construction (bundler) largement utilisé dans le développement web moderne (essentiellement dans des frameworks et libraries, comme _Angular_ ou _ReactJS_ par exemple).

Son objectif principal est de regrouper et de transformer différents fichiers source, tels que JavaScript, CSS, images, en un ensemble optimisé et prêt à être utilisé dans une application web.

_Webpack_ permet également de résoudre des problématiques courantes liées à la gestion des dépendances et de simplifier le flux de travail du développement front-end.

## Exemples de problématiques résolues

- **Gestion des dépendances:** Le plus gros problème qu'à résolu _Webpack_, c'est la gestion des dépendances.
Avant _Webpack_, la gestion des dépendances dans les projets front-end pouvait devenir complexe et entraîner des conflits (noms de variables ou de fonctions identiques par exemple). _Webpack_ simplifie cette gestion en permettant l'importation de modules et en résolvant les dépendances de manière efficace.

- **Bundling**: Les applications front-end sont constituées de nombreux fichiers (modules) qui doivent être téléchargés individuellement par le navigateur. Webpack permet de les regrouper en un seul fichier (bundle), ce qui améliore les performances de chargement.
Cependant, cela peut produire un effet inverse si l'application web n'a pas beaucoup de code Javascript de base : le temps de chargement moyen risque donc d'être plus long. Il faut donc savoir quand et comment utiliser cette technologie de la façon la plus optimale possible.

- **Transformation du code:** _Webpack_ offre la possibilité de transformer le code à l'aide de "_loaders_". Par exemple, il peut transformer des fichiers _SASS_ en _CSS_, ou convertir du code **ES6** en code compatible avec les navigateurs plus anciens.

- **Optimisation:** _Webpack_ optimise automatiquement le code, notamment en réduisant la taille des fichiers, en éliminant les parties inutilisées et en générant des noms de fichiers uniques pour éviter les problèmes de mise en cache.

## Installation de Webpack

Vous avez maintenant déjà lancé la commande `npm init`, dans ce même dossier où se trouve votre fichier `package.json`, installez simplement `webpack` et `webpack-cli` qui permet d'utiliser _Webpack_ depuis le terminal en ligne de commande (CLI).

```shell
npm i webpack webpack-cli --save-dev
```

Ici, le flag `--save-dev` indique que ces librairies seront des dépendances de développement.

Une fois l'installation terminée, vous pouvez commencer à configurer et à utiliser _Webpack_ pour votre projet.

## Configuration de base de Webpack

La configuration de _Webpack_ se fait via un fichier nommé `webpack.config.js`. Voici un exemple de configuration de base:

```js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Point d'entrée
  output: {
    filename: 'bundle.js', // Nom du fichier de sortie
    path: path.resolve(__dirname, 'dist') // Répertoire de sortie
  }
};
```

## Premier pas avec Webpack

Une fois que _Webpack_ est installé et configuré, voici comment créer votre premier code en utilisant _Webpack_:

1. **Créez un fichier source:** Créez un fichier source JavaScript (par exemple `index.js`) dans le répertoire `src`.

2. **Importez des modules:** Dans votre fichier source, importez d'autres modules ou fichiers dont vous avez besoin dans votre application. Par exemple :

```js
import { helloWorld } from './utils';
helloWorld();
```

3. **Créez le fichier HTML:** Créez un fichier HTML (par exemple `index.html`) dans le répertoire.

4. **Lancez Webpack:** Utilisez la commande `npx webpack` pour lancer _Webpack_. Celui-ci va créer le fichier bundle en fonction de votre configuration.
L'utilisation de `npx` plutôt que `npm` est recommandée, car elle vous permet d'exécuter les commandes associées aux packages installés localement, évitant ainsi d'installer les outils globalement et garantissant une cohérence entre les environnements de développement. Si vous avez installé _Webpack_ localement (`--save-dev`), vous pouvez utiliser `npx webpack` pour lancer le processus de construction sans avoir à vous soucier de l'emplacement de l'exécutable.

5. **Vérifier le résultat:** Ouvrez le fichier HTML dans votre navigateur. Si tout est configuré correctement, vous devriez voir le résultat de votre code.

### Petit conseil: le watch mode

Lorsque vous développez une application, il est souvent fastidieux de lancer manuellement la commande `npx webpack` chaque fois que vous apportez des modifications à votre code source. 
Heureusement, _Webpack_ propose un mode de surveillance (**watch mode**) qui surveille en permanence vos fichiers source et reconstruit automatiquement le bundle à chaque modification.

Pour se faire, ajoutez simplement le flag `--watch` à votre execution de _Webpack_, ce qui donne:

```shell
npx webpack --watch --mode development
```

## Serve mode

Vous pouvez également lancer votre projet _Webpack_ en mode serveur (recommandé). Pour cela, il suffit d'ajouter l'option `serve` à votre commande de lancement. Comme ceci:

```shell
npx webpack serve --watch --mode development
```

Notez que pour pouvoir utiliser ce flag, vous devez installer la devDependencies `webpack-dev-server` :

```shell
npm i webpack-dev-server --D
```

En exécutant cette commande, _Webpack_ lancera un serveur de développement qui surveille vos fichiers sources. Si vous apportez des modifications à votre code, le serveur se rechargera automatiquement pour refléter ces modifications. Cela accélère considérablement votre processus de développement en éliminant le besoin de recharger manuellement la page à chaque modification.
