# 03 - Loader

## C'est quoi un Loader ?

Il est courant d'utiliser divers types de fichiers tels que le code JavaScript, le CSS, les images et bien d'autres. Cependant, ces fichiers ne sont pas toujours prêts à être directement intégrés dans une application, c'est pour ça qu'on a besoin de ce qu'on appelle des _loaders_.

Les _loaders_ dans _Webpack_ sont des modules qui permettent de transformer et de traiter différents types de fichiers avant qu'ils ne soient inclus dans le bundle final de votre application. Ils agissent comme des outils de prétraitement, vous permettant d'effectuer des tâches telles que la conversion de code, l'optimisation d'images, le transpilage de langages, ...... Les loaders ouvrent la porte à la personnalisation et à l'amélioration de votre flux de développement.

Par exemple, vous pouvez utiliser des loaders pour transformer du code ES6+ en JavaScript compatible avec les anciens navigateurs, pour optimiser et compresser des images, pour convertir des fichiers SASS en CSS, et bien d'autres tâches. Les loaders vous offrent la flexibilité de préparer vos fichiers de manière à ce qu'ils répondent aux besoins spécifiques de votre application.

Il est également important de garantir que votre code fonctionne correctement sur les navigateurs plus anciens qui ne prennent pas en charge ces fonctionnalités. _Babel_, par exemple, est un outil couramment utilisé pour convertir le code JavaScript moderne en une version compatible avec les anciens navigateurs.

## Introduction de Babel Loader

_Babel Loader_ est un module qui permet à _Webpack_ de traiter les fichiers JavaScript à l'aide de _Babel_. Voici comment l'installer et le configurer:

1. **Installation via npm:** Exécutez la commande suivante pour installer _Babel Loader_:

  ```shell
  npm i babel-loader @babel/core @babel/preset-env --save-dev
  ```

- **babel-loader** : Le loader qui permet à _Webpack_ de traiter les fichiers à l'aide de _Babel_.
- **@babel/core** : Le coeur de _Babel_ qui gère la conversion du code.
- **@babel/preset-env** : Un preset de _Babel_ qui sélectionne automatiquement les plugins nécessaires pour la compatibilité des navigateurs.

2. **Configuration dans webpack.config.js:** Dans votre fichier `webpack.config.js`, ajoutez le code suivant pour configurer _Babel Loader_:

  ```json
  module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        // ...
      ],
    },
    // ...
  };
  ```

Une fois que _Babel Loader_ est installé et configuré, il sera utilisé automatiquement par Webpack pour traiter les fichiers JavaScript lors de la construction. Il convertira le code moderne en une version compatible avec les navigateurs cibles spécifiés dans la configuration de Babel.

## Du CSS avec style-loader et css-loader

En plus de traiter les fichiers JavaScript, les loaders Webpack peuvent également être utilisés pour gérer les fichiers CSS. Vous pouvez utiliser les loaders `style-loader` et `css-loader` pour importer et appliquer des fichiers CSS à votre projet.

1. **Installation via npm:** Exécutez la commande suivante pour installer ces deux dépendances:

  ```shell
  npm i style-loader css-loader --save-dev
  ```

2. **Configuration dans webpack.config.js:** Dans votre fichier `webpack.config.js`, ajoutez les règles pour les fichiers CSS:

  ```json
  module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        // Autres règles de loaders...
      ],
    },
    // ...
  };
  ```
