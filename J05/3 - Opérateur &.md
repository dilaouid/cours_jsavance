# Cours sur l'opérateur `&` en SCSS

## 1. Introduction à `&`

En SCSS, l'opérateur `&` est un raccourci qui fait référence au sélecteur parent d'une règle imbriquée. C'est un outil puissant pour écrire des styles de manière concise et maintenable, tout en évitant des répétitions inutiles.

Pas confondre avec le `&` en JavaScript qui est un opérateur binaire qui renvoie un 1 dans chaque bit de la représentation binaire de l'opérande si celui-ci est 0 dans l'opérande, et un 0 dans chaque bit de l'opérande si celui-ci est 1 dans l'opérande (oui je suis parti loin dans mon explication, désolé!)

---

## 2. Utilisations basiques de `&`

L'utilisation la plus courante de `&` est de définir des états ou des variations pour un sélecteur donné.

```scss
.button {
    background-color: blue;

    &.active {
        background-color: green;
    }
}
```

Pour résumer ce que ça fait, c'est que si on a un bouton avec la classe `button` et la classe `active`, il aura un fond vert.

Ce code SCSS sera compilé en CSS comme ça :

```css
.button {
    background-color: blue;
}

.button.active {
    background-color: green;
}
```

Pour faire appel à ça en HTML, il faudra écrire :

```html
<button class="button active">Bouton</button>
```

---

## 3. `&` avec des pseudos-classes et pseudos-éléments

`&` est souvent utilisé avec des pseudos-classes comme `:hover`, `:active`, `:focus`, etc., et des pseudos-éléments comme `::before` et `::after`.

```scss
.link {
    color: blue;

    &:hover {
        color: red;
    }

    &::before {
        content: '→';
        padding-right: 5px;
    }
}
```

C'est pareil que précédemment, mais cette fois-ci, on a ajouté un pseudo-élément `::before` pour ajouter un chevron avant le texte, et non pas le nom de la classe.

Le CSS compilé sera :

```css
.link {
    color: blue;
}

.link:hover {
    color: red;
}

.link::before {
    content: '→';
    padding-right: 5px;
}
```

Et en HTML on a :

```html
<a href="#" class="link">Lien</a>
```

Au moment du survol, le lien deviendra rouge et un chevron sera ajouté avant le texte. Et tout ça sans répéter le sélecteur `.link` !
Le `::before` est un pseudo-élément qui permet d'ajouter du contenu avant le texte d'un élément. Il est souvent utilisé pour ajouter des icônes ou des décorations. Du coup, pour ce lien, on a ajouté un chevron avant le texte. Avec un padding pour l'espacer un peu.

---

## 4. Imbrications avancées avec `&`

`&` peut être utilisé de manière créative pour des imbrications plus complexes.

**a) Combinaisons de sélecteurs :**

```scss
.article {
    & + & {
        margin-top: 20px;
    }
}
```

C'est le bordel ! Bon ! Pas de quoi s'inquiéter, on va décortiquer ça ensemble.
Ça veut simplement dire que si on a deux articles consécutifs, on va ajouter une marge entre les deux. En HTML, ça donnerait :

```html
<div class="article"></div>
<!-- Marge de 20px -->
<div class="article"></div>
```

Le code ci-dessus ajoute une marge entre deux articles consécutifs.

**b) Modification du sélecteur parent :**

```scss
.icon {
    width: 50px;
    height: 50px;

    .dark-theme & {
        filter: invert(1);
    }
}
```

Et ça, ça veut dire quoi en fait ?
Ça veut dire que si on a une icône dans un thème sombre, on va inverser les couleurs. Et comment ça se déclare le thème sombre ? Et bien en ajoutant une classe `dark-theme` sur un élément parent. Comme en CSS, on peut imbriquer des sélecteurs, on peut faire ça en SCSS.

Ici on utilise `&` pour inverser le sélecteur parent de notre `.icon`, car `dark-theme` est un sélecteur parent de `.icon`.

Dans un thème sombre (`dark-theme`), les icônes seront inversées.
En HTML ça nous donne :

```html
    <div class="icon"></div>
    <div class="dark-theme">
        <div class="icon"></div>
    </div>
```

En CSS, ce n'est pas possible de faire ça. Il faudrait écrire :

```css
.icon {
    width: 50px;
    height: 50px;
}

.dark-theme .icon {
    filter: invert(1);
}
```

Et pour le HTML :

```html
<div class="icon dark-theme"></div>
```

Comme vous voyez, on a dû répéter le sélecteur `.icon` dans le CSS et ajouter une classe `dark-theme` dans le HTML. Avec SCSS, on peut éviter ça en utilisant `&`.

---

## 5. Conseils et précautions d'utilisation

- **Ne pas en abuser** : Bien que `&` soit puissant, l'utiliser excessivement peut rendre le code difficile à lire.
- **Maintenir la lisibilité** : Assurez-vous que l'utilisation de `&` n'obscurcit pas la structure du CSS.
- **Tester le CSS généré** : Toujours vérifier le CSS généré pour s'assurer qu'il fonctionne comme prévu, surtout avec des imbrications complexes.

---

## 6. Conclusion

L'opérateur `&` en SCSS est un outil polyvalent qui permet des imbrications efficaces et des combinaisons de sélecteurs. Bien utilisé, il peut rendre le code SCSS plus concis et maintenable. Comme avec tous les outils, la clé est de l'utiliser judicieusement, en gardant toujours à l'esprit la lisibilité et la structure du CSS généré.
