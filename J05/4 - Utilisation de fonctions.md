# Cours sur l'utilisation des fonctions en SCSS

## 1. Introduction aux fonctions en SCSS

En SCSS, une fonction est une manière d'encapsuler un ensemble d'instructions pour effectuer une tâche particulière, souvent avec des valeurs variables (ou paramètres). Elles peuvent retourner une valeur, ce qui les rend particulièrement utiles pour des calculs ou transformations répétitifs.

---

## 2. Fonctions intégrées en SCSS

SCSS offre un ensemble riche de fonctions intégrées, spécialement conçues pour traiter et manipuler des propriétés CSS.

**a) Fonctions de couleur :**

- `lighten($color, $amount)`: éclaircit une couleur.
- `darken($color, $amount)`: assombrit une couleur.
- `saturate($color, $amount)`: augmente la saturation d'une couleur.

```scss
button {
    background-color: darken(red, 10%);
}
```

**b) Fonctions de chaîne de caractères :**

- `str-length($string)`: retourne la longueur d'une chaîne.

    Exemple d'utilisation :

    ```scss
    $string: "Hello world!";

    .length {
        content: str-length($string);
    }
    ```

    En CSS, cela donnerait :

    ```css
    .length {
        content: 12;
    }
    ```

    Ce qui permettrait d'afficher le nombre de caractères de la chaîne dans le contenu de l'élément. Par exemple :

    ```html
    <div class="length">abc</div>
    ```

    Donnerait en résultat :

    ```css
    .length {
        content: 3;
    }
    ```

    Ca peut être utile pour définir la largeur d'un élément en fonction de la longueur de son contenu.

    ```scss
    $string: "Hello world!";

    .length {
        width: str-length($string) * 10px;
    }
    ```

- `str-insert($string, $insert, $index)`: insère une sous-chaîne à un index donné.

    Par exemple :

    ```scss
    $string: "Hello world!";

    .insert {
        content: str-insert($string, "beautiful ", 6);
    }
    ```

    En CSS, cela donnerait :

    ```css
    .insert {
        content: "Hello beautiful world!";
    }
    ```

    Ce qui permettrait d'insérer une sous-chaîne à un index donné. Par exemple :

    ```html
    <div class="insert"></div>
    ```

    Afficherait donc à l'intérieur de l'élément la chaîne de caractères "Hello beautiful world!".
    Le premier paramètre est la chaîne de caractères dans laquelle on veut insérer une sous-chaîne, le deuxième paramètre est la sous-chaîne à insérer et le troisième paramètre est l'index à partir duquel on veut insérer la sous-chaîne.

**c) Fonctions numériques :**

- `percentage($number)`: convertit un nombre en pourcentage.
- `round($number)`: arrondit un nombre à l'entier le plus proche.

---

## 3. Créer ses propres fonctions

Vous pouvez également définir vos propres fonctions en SCSS en utilisant la directive `@function`.

```scss
@function double($number) {
    @return $number * 2;
}

.container {
    width: double(150px);
}
```

Ce code définit une fonction `double` qui prend un nombre en paramètre et retourne le double de cette valeur. Elle est ensuite utilisée pour définir la largeur d'un conteneur.

---

## 4. Appel et retour de fonctions

L'appel d'une fonction se fait en utilisant son nom suivi de ses arguments entre parenthèses.

L'instruction `@return` détermine la valeur que la fonction renvoie. Cette valeur peut ensuite être utilisée comme n'importe quelle autre valeur dans votre SCSS.

```scss
@function half($number) {
    @return $number / 2;
}

.paragraph {
    font-size: half(32px);
}
```

Ça peut être pertinent d'utiliser des variables pour stocker les valeurs retournées par des fonctions.

```scss
$half: half(32px);

.paragraph {
    font-size: $half;
}
```

Ou d'utiliser des variables pour stocker les arguments passés à une fonction.

```scss
$size: 32px;

.paragraph {
    font-size: half($size);
}
```

---

## 5. Conseils et précautions d'utilisation

- **Spécificité**: Utilisez des noms de fonction explicites pour décrire ce que la fonction fait réellement.
- **Réutilisabilité**: Essayez de rendre vos fonctions aussi génériques que possible pour maximiser leur réutilisabilité.
- **Simplicité**: Gardez vos fonctions simples et évitez d'y intégrer une logique trop complexe.
- **Documentation**: Commentez vos fonctions, surtout si elles sont destinées à être utilisées par d'autres ou dans des projets plus importants.

---

## 6. Conclusion

Les fonctions en SCSS offrent une manière puissante de modulariser et d'abstraire des logiques récurrentes dans votre code de style. Qu'il s'agisse d'utiliser des fonctions intégrées pour manipuler des propriétés ou de créer vos propres fonctions personnalisées, elles peuvent grandement améliorer la lisibilité et la maintenabilité de votre SCSS.
