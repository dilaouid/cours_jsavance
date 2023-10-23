# TDZ (Temporal Dead Zone)

Le concept de "Temporal Dead Zone" (TDZ) en JavaScript est un aspect souvent méconnu mais essentiel pour comprendre certains comportements des variables déclarées avec `let` et `const` (et non `var`). Le TDZ se réfère à la période pendant laquelle une variable est inaccessible, même si elle a déjà été déclarée dans le code.

## Pourquoi TDZ existe-t-elle ?

Le TDZ a été introduit pour rendre le code JavaScript plus prévisible et pour éviter les erreurs subtiles. Avant l'introduction de `let` et `const` en ES6, nous avions `var`, qui était sujet à des comportements parfois déroutants en raison de la "hoisting" (élévation).

## Hoisting

En JavaScript, toutes les déclarations de variables (avec `var`) sont "hoisted", c'est-à-dire qu'elles sont déplacées vers le haut de leur portée. Cependant, leur initialisation n'est pas hoisted.

```js
console.log(foo); // undefined
var foo = "hello";
console.log(foo); // hello
```

Ici, la déclaration de `foo` est hoisted, mais pas son initialisation. Cela peut entraîner des erreurs subtiles et déroutantes.

En revanche, les fonctions sont hoisted avec leur initialisation.

```js
console.log(foo); // [Function: foo]
function foo() {
  console.log("hello");
}
console.log(foo); // [Function: foo]
```

Car en JavaScript, les fonctions sont des objets de première classe. Cela signifie qu'elles peuvent être traitées comme des variables et peuvent être passées en tant qu'arguments, retournées par d'autres fonctions, etc. Lorsque vous déclarez une fonction, la déclaration entière (y compris le corps de la fonction) est remontée. C'est pourquoi vous pouvez appeler une fonction avant qu'elle ne soit déclarée dans le code.

Autre exemple :

```js
console.log(foo); // undefined
var foo = function() {
  console.log("hello");
};
console.log(foo); // [Function: foo]
```

Dans cet exemple, `foo` est une variable dont la valeur est une fonction. Seule la déclaration de la variable foo est hoisted, pas son initialisation (l'expression de fonction). C'est pourquoi la première sortie est undefined, et la seconde sortie est l'objet fonction après son initialisation

## TDZ et `let`/`const`

Avec l'introduction de `let` et `const` en ES6, le TDZ a été introduit pour éviter ce genre de confusion. Les variables déclarées avec `let` et `const` sont également "hoisted", mais elles entrent dans la TDZ jusqu'à ce qu'elles soient effectivement initialisées.

Cela signifie que toute référence à ces variables avant leur initialisation entraînera une erreur.

```js
console.log(bar); // ReferenceError: Cannot access 'bar' before initialization
let bar = "hello";
console.log(bar); // hello
```

## Comment fonctionne la TDZ ?

La Temporal Dead Zone commence au début du bloc de code où la variable est définie et se termine à la ligne où la variable est initialisée.

```js
{
  // Début de la TDZ pour 'baz'
  console.log(baz); // ReferenceError
  let baz = "world";
  // Fin de la TDZ pour 'baz'
  console.log(baz); // world
}
```

Dans cet exemple, dès que nous entrons dans le bloc de code (délimité par les accolades `{}`), la variable `baz` est en TDZ. Cela signifie qu'elle existe d'une certaine manière, mais elle n'est pas encore accessible. Lorsque nous essayons de `console.log(baz)` avant son initialisation, JavaScript nous lance une `ReferenceError`, car nous sommes dans la TDZ de `baz`. Après l'initialisation de baz, nous sortons de la TDZ et nous pouvons accéder à la variable sans erreur.

## Pourquoi est-ce important ?

Comprendre le TDZ est essentiel pour éviter les erreurs de référence et pour écrire un code JavaScript fiable. C'est également un excellent exemple de la manière dont JavaScript évolue pour rendre le langage plus robuste et prévisible.

### Conclusion

La Temporal Dead Zone est un concept introduit pour rendre le comportement des variables en JavaScript plus prévisible. En comprenant le TDZ et en l'ayant à l'esprit lors de la rédaction du code, les développeurs peuvent éviter des erreurs courantes et écrire un code plus robuste.
