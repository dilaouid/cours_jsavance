# Cours : Mixins SCSS

## Introduction

En SCSS, un **mixin** est un bloc de code CSS réutilisable que vous pouvez inclure dans d'autres sélecteurs CSS. Ils permettent de regrouper plusieurs propriétés CSS pour les réutiliser à différents endroits de votre feuille de style, offrant une manière efficace d'éviter la duplication de code.

## 1. Définition et utilisation de base d'un mixin

**Définir un mixin** :
Utilisez la directive `@mixin` suivie du nom du mixin.

```scss
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

**Utiliser un mixin** :
Utilisez la directive `@include` suivie du nom du mixin.

```scss
ul, ol {
  @include reset-list;
}
```

Le CSS compilé sera :

```css
ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

Et là, vous vous dites : "Mais c'est quoi l'intérêt ?". Et bien, c'est que vous pouvez réutiliser ce mixin à plusieurs endroits, et si vous voulez changer quelque chose, vous n'avez qu'à le faire dans le mixin, et ça changera partout où vous l'avez utilisé ! :D

## 2. Passer des arguments à un mixin

Les mixins peuvent également accepter des **arguments**, permettant de les personnaliser lors de leur inclusion.

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
```

Utilisation :

```scss
.box {
  @include border-radius(10px);
}
```

Le CSS compilé :

```css
.box {
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
```

Petite note personnel par contre ! Pour le prefixe `-webkit-` il y a des outils qui existent qui permettent de le faire automatiquement, comme [Autoprefixer](https://autoprefixer.github.io/). Ça rends des trucs très longs des fois, mais c'est très utile ! :)

## 3. Arguments par défaut et liste d'arguments

**Arguments par défaut** :

```scss
@mixin border-radius($radius: 5px) {
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
```

Si vous n'indiquez pas d'argument lors de l'utilisation, il utilisera la valeur par défaut.

**Liste d'arguments** avec `...` :

Si vous ne savez pas combien d'arguments peuvent être nécessaires, SCSS vous permet d'utiliser `...` pour spécifier une liste d'arguments.

```scss
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}

.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
```

Alors on a déjà vu les spreads (`...`) en JavaScript, mais là c'est un peu différent. En SCSS, ça permet de passer une liste d'arguments à un mixin. Faut pas tout mélanger !

Le CSS compilé :

```css
.shadows {
  -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
}
```

Bon... En CSS, on répète quand même un peu les choses, c'est pour ça que SCSS est utile ! :)

## 4. Utilisation du mixin avec des directives `@content`

Vous pouvez également passer des blocs de styles à un mixin.

```scss
@mixin media-mobile {
  @media (max-width: 767px) {
    @content;
  }
}

.header {
  font-size: 2em;
  
  @include media-mobile {
    font-size: 1.5em;
  }
}
```

Le CSS compilé cible spécifiquement les écrans de moins de 767px pour ajuster la taille de police.

## 5. Avantages et cas d'utilisation des mixins

- **Éviter la duplication de code** : Les mixins aident à garder votre SCSS DRY (Don't Repeat Yourself).
- **Standardisation** : Ils garantissent que certaines propriétés sont toujours appliquées ensemble.
- **Personnalisation** : Les arguments permettent d'adapter facilement les styles à différents besoins.
