# 02 - Plugins Webpack

## Introduction aux plugins

Lorsque vous travaillez avec _Webpack_, l'élargissement de votre champs de travail est essentielle pour répondre à des besoins spécifiques tels que la transformation de fichiers, l'optimisation, la gestion des images, etc.

Les plugins _Webpack_ sont des modules supplémentaires à cette technologique qui vous permettent d'étendre les fonctionnalités de base en ajoutant des fonctionnalités spécifiques.

Ce qui vous permets de personnaliser le processus de construction en fonction de vos besoins.

## Installation d'un plugin

L'installation d'un plugin Webpack implique deux étapes principales : l'installation du plugin via `npm` et sa configuration dans le fichier `webpack.config.js`.

Voici comment procéder :

1. **Installation via npm:** Utilisez la commande

```shell
npm i <nom-du-plugin> --save-dev
```

pour installer le plugin souhaité en tant que dépendance de développement. Remplacez `<nom-du-plugin>` par le nom du plugin que vous souhaitez installer.

2. **Configuration dans webpack.config.js:** Une fois le plugin installé, importez-le dans votre fichier de configuration `webpack.config.js` en utilisant le mot-clef `require` ou `import`.

Ensuite, ajoutez le plugin à la liste des plugins dans votre configuration. La documentation du plugin vous indiquera généralement comment le configurer.

### Exemple avec le plugin MiniCssExtractPlugin

1. **Installation via npm:**

```shell
npm i mini-css-extract-plugin --save-dev
```

2. **Configuration dans webpack.config.js:**

Dans votre fichier `webpack.config.js`, ajoutez le code suivant pour importer et configurer le plugin :

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // ...
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    // ...
  ],
  // ...
};
```

### Du HTML avec html-webpack-plugin

Avec Webpack, il est recommandé de faire le moins de HTML possible pour pouvoir tout générer en Javascript.
Néanmoins, si vous voulez utiliser du HTML, vous allez avoir besoin d'un plugin, `html-webpack-plugin`. Du coup, comme on l'a vu précédement, on installe le plugin comme ceci:

```shell
npm i html-webpack-plugin --save-dev
```

Puis, on retourne dans notre fichier `webpack.config.js` pour importer ce plugin, pour avoir au final quelque chose comme ceci:

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Chemin vers votre fichier HTML modèle
      favicon: 'src/assets/img/favicon.ico' // Chemin vers votre favicon */
    })
    // ...
  ],
  // ...
};
```

Notez que vous n'êtes bien entendu pas obligé de mettre un favicon, mais je vous le recommande tout de même !
