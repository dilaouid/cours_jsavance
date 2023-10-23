# Scope de variables en JavaScript

Le concept de "scope" ou "portée" d'une variable est l'un des fondements essentiels du langage de programmation JavaScript. La compréhension de ce concept est cruciale car elle affecte comment et où les variables sont utilisées, mises à jour ou masquées. La maîtrise du scope garantit que les développeurs peuvent écrire un code plus propre, éviter des erreurs courantes et exploiter pleinement les fonctionnalités du langage.

Lorsqu'une variable est déclarée, elle n'est pas simplement jetée dans un grand bassin global où toutes les autres variables résident. Elle est placée dans un environnement spécifique, ou "scope", qui détermine où cette variable peut être accédée ou modifiée. Si vous essayez d'accéder à une variable en dehors de son scope, JavaScript générera une erreur, car il ne peut pas la trouver.

## Table des matières

- [Définition du Scope](#définition-du-scope)
- [Types de Scope](#types-de-scope)
  - [Global Scope](#global-scope)
  - [Function Scope](#function-scope)
  - [Block Scope](#block-scope)
- [Mot-clés `var`, `let` et `const`](#mot-clés-var-let-et-const)

## Définition du Scope

Le **Scope** d'une variable est essentiellement la région du code où elle est "visible" et peut être accédée. Imaginons le scope comme une série de boîtes imbriquées. Chaque fois que vous créez une fonction, vous créez une nouvelle "boîte". Les variables déclarées dans cette fonction sont contenues dans cette boîte et ne peuvent pas être vues ou touchées de l'extérieur, à moins que vous ne fournissiez un moyen d'y accéder.

## Types de Scope

Il y a principalement trois types de scope en JavaScript :

### Global Scope

Quand une variable est déclarée en dehors d'une fonction ou d'un bloc, elle est globale et peut être accessible de n'importe où dans le code.

```js
var globalVar = "Je suis une variable globale";
```

### Function Scope

Quand une variable est déclarée à l'intérieur d'une fonction, elle n'est accessible qu'à l'intérieur de cette fonction.

```js
function maFonction() {
  var varInFunction = "Je suis à l'intérieur de la fonction";
  console.log(varInFunction); // fonctionne
}

console.log(varInFunction); // génère une ReferenceError
```

### Block Scope

Avec l'introduction d'ES6, les déclarations `let` et `const` permettent de définir une portée de bloc. Cela signifie qu'une variable est limitée à l'intérieur du bloc, de la boucle ou de la méthode où elle est définie.

```js
if (true) {
  let blockVar = "Je suis dans un bloc";
  console.log(blockVar); // fonctionne
}

console.log(blockVar); // génère une ReferenceError
```

Pour `const` par exemple, cela signifie que la variable ne peut pas être réassignée. Cependant, si la variable est un objet, ses propriétés peuvent être modifiées.

```js
const obj = { name: "John" };
obj.name = "Jane"; // fonctionne
obj = {}; // génère une TypeError
```

Quant à sa **scope**, la variable `obj` est limitée au bloc où elle est définie. Tout comme pour `let`:

```js
if (true) {
  const obj = { name: "John" };
  console.log(obj); // fonctionne
}

console.log(obj); // génère une ReferenceError
```

## Mot-clés `var`, `let` et `const`

- `var`: Déclare une variable et lui attribue la portée de la fonction, ou la portée globale si déclarée en dehors d'une fonction.
- `let`: Déclare une variable avec la portée du bloc, de la déclaration, ou de l'expression dans laquelle elle est utilisée.
- `const`: Semblable à `let` mais une fois qu'une valeur lui est attribuée, elle ne peut pas être réassignée.
