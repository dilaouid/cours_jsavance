# Introduction au SCSS

## 1. Qu'est-ce que le SCSS ?

Le SCSS, aussi appelé "Sassy CSS", est un préprocesseur CSS. Il permet d'écrire des styles en utilisant une syntaxe plus avancée et plus expressive, qui est ensuite compilée en CSS pur, afin que les navigateurs puissent l'interpréter. En d'autres termes, le SCSS étend les capacités du CSS en ajoutant des fonctionnalités puissantes qui ne sont pas disponibles en CSS natif.

---

## 2. Avantages du SCSS par rapport au CSS pur

- 😀 **Réutilisabilité et modularité** : grâce aux variables, mixins et fonctions, vous pouvez définir des styles réutilisables.
- 📜 **Organisation** : grâce à la possibilité de diviser vos styles en plusieurs fichiers et de les importer.
- 🔬 **Fonctionnalités avancées** : telles que les opérations mathématiques, les boucles et les conditions.
- ⚙️ **Maintenabilité** : Il est plus facile de maintenir un grand codebase en SCSS grâce à sa structure et ses fonctionnalités organisées.
- 🔨 **Compatibilité** : le SCSS est compatible avec tous les fichiers CSS. Tout code CSS valide est également un code SCSS valide.

---

## 3. Comment utiliser le SCSS

Le SCSS n'est pas interprété directement par les navigateurs comme le CSS. Il doit d'abord être "compilé" en CSS. Pour cela, vous aurez besoin d'un outil ou d'un compilateur comme Sass, qui est le préprocesseur derrière SCSS.

1. **Installation** : Installez Sass via npm ou d'autres gestionnaires de paquets (**voir l'annexe de cours de ORGA2**).
2. **Compilation** : Compilez vos fichiers `.scss` en `.css` en utilisant la commande appropriée. 🚨 **VOUS DEVEZ TOUJOURS COMPILER VOS FICHIERS SCSS EN CSS AVANT DE LES INTÉGRER À VOTRE DOCUMENT HTML** 🚨
3. **Intégration** : Liez le fichier CSS compilé à votre document HTML comme vous le feriez avec n'importe quel fichier CSS.

Sass s'installe donc globalement sur votre machine, et vous permet de compiler vos fichiers SCSS en CSS. Avec npm, vous pouvez l'installer avec la commande suivante :

```bash
npm install -g sass
```

_(Comme vu sur l'annexe ORGA2, le flag `-g` permet d'installer le paquet globalement sur votre machine, et non pas seulement dans le dossier courant.)_

Je précise qu'une fois installé, la commande à utiliser sur votre terminal est la suivante :

```bash
sass ./assets/scss/main.scss ./assets/css/main.css
```

Pour entrer en **watch mode** (ne pas avoir à compiler à chaque changement) :

```bash
sass --watch ./assets/scss/main.scss ./assets/css/main.css
```

Bien entendu, vous pouvez changer les chemins des fichiers selon votre structure de projet.

Du coup, votre fichier HTML ne doit pas pointer vers le fichier SCSS, mais bien vers le fichier CSS compilé.

```html
<link rel="stylesheet" href="./assets/css/main.css" />
```

---

## 4. Caractéristiques principales du SCSS

- **Variables** : Permet de stocker des valeurs réutilisables comme les couleurs, tailles de police, etc.

  ```scss
  $font-color: #333;
  ```

  Pour changer la valeur d'une variable, il suffit de la réassigner.

    ```scss
    $font-color: #333;
    ```

- **Nesting (Imbrication)** : Permet d'imbriquer vos sélecteurs, ce qui rend le code plus lisible.

  ```scss
  nav {
    ul {
      margin: 0;
    }
  }
  ```

    En CSS, cela donnerait :

    ```css
    nav ul {
        margin: 0;
    }
    ```

- **Mixins** : Blocs de code réutilisables qui peuvent accepter des arguments.

    ```scss
    @mixin reset-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    ```

- **Héritage** : Permet à un sélecteur d'hériter des styles d'un autre sélecteur.

    ```scss
    .message {
        border: 1px solid black;
    }
    .success {
        @extend .message;
        border-color: green;
    }
    ```

    En CSS, cela donnerait :

    ```css
        .message, .success {
            border: 1px solid black;
        }
        .success {
            border-color: green;
        }
    ```

- **Opérations & Fonctions** : Effectuez des calculs et utilisez des fonctions prédéfinies pour manipuler des valeurs.

    ```scss
    $double-padding: 10px * 2;

    .box {
        padding: $double-padding;
    }
    ```

  En CSS, cela donnerait :

    ```css
    .box {
        padding: 20px;
    }
     ```

- **Importation & Organisation** : Divisez votre code en plusieurs fichiers et importez-les.

    ```scss
    @import 'reset';
    ```

    Le code du fichier `reset.scss` sera inséré à cet endroit. Cela permet de diviser votre code en plusieurs fichiers et de l'organiser de manière plus efficace. Vous pouvez également importer des fichiers CSS normaux. Cela permet de migrer progressivement votre code CSS vers SCSS.
ouveau fichier `main.scss` :


    Par exemple, si vous avez un fichier `style.css` existant, vous pouvez le renommer en `style.scss` et l'importer dans un nouveau fichier scss.

    ```scss
    @import 'style';
    ```

    Vous pouvez ensuite compiler `main.scss` en CSS, qui contiendra le code de `style.css` et de `main.scss`.

- **Commentaires** : Utilisez `//` pour les commentaires qui ne seront pas inclus dans le CSS compilé, et `/* */` pour les commentaires qui le seront.

    ```scss
    // Ce commentaire ne sera pas inclus dans le CSS compilé

    /* Ce commentaire sera inclus dans le CSS compilé */
    ```

- **Conditions** : Utilisez des conditions pour appliquer des styles en fonction de certaines conditions.

    ```scss
    $theme: 'dark';

    .box {
        @if $theme == 'dark' {
            background-color: black;
            color: white;
        } @else {
            background-color: white;
            color: black;
        }
    }
    ```

    En CSS, cela donnerait :

    ```css
    .box {
        background-color: black;
        color: white;
    }
    ```

- **Boucles** : Utilisez des boucles pour générer du code CSS répétitif.

    ```scss
    @for $i from 1 through 3 {
        .box-#{$i} {
            width: 20px * $i;
        }
    }
    ```

    En CSS, cela donnerait :

    ```css
    .box-1 {
        width: 20px;
    }
    .box-2 {
        width: 40px;
    }
    .box-3 {
        width: 60px;
    }
    ```

---

## 5. Conclusion

Le SCSS est un puissant préprocesseur qui ajoute une couche d'abstraction au CSS, le rendant plus maintenable, modulaire et réutilisable. Grâce à ses fonctionnalités avancées, il offre aux développeurs la possibilité d'écrire des styles de manière plus efficace et organisée. Pour tirer le meilleur parti du SCSS, il est essentiel de comprendre ses caractéristiques et d'adopter des pratiques de codage propres.
