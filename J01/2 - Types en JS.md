# Types en JavaScript

JavaScript est un langage dynamiquement typé, ce qui signifie que les types sont associés aux valeurs et non aux variables elles-mêmes. Cependant, il est essentiel de comprendre les différents types en JS pour écrire du code fiable et robuste.

## Table des matières

- [Types primitifs](#types-primitifs)
- [Symbol (introduit dans ES6)](#symbol-introduit-dans-es6)
- [Conversion de types (Type Coercion)](#conversion-de-types-type-coercion)
- [Valeurs "truthy" et "falsy"](#valeurs-truthy-et-falsy)

## Types primitifs

Les types primitifs sont les types de données de base fournis par le langage. En JavaScript, il existe sept types primitifs :

1. **Number**: Représente les nombres entiers et flottants.

   ```js
   let age = 25; // un nombre entier
   let average = 5.6; // un nombre flottant
   ```

2. **String**: Représente une séquence de caractères.

   ```js
   let name = "John";
   ```

3. **Boolean**: Représente une valeur `true` ou `false`.

   ```js
   let isActive = true;
   ```

4. **undefined**: Valeur assignée à une variable non initialisée.

   ```js
   let test;
   console.log(test); // affiche "undefined"
   ```

5. **null**: Représente une absence de valeur ou une valeur "vide".

   ```js
   let emptyValue = null;
   ```

6. **Symbol** (introduit dans ES6): Permet de créer des valeurs uniques.

   ```js
   let sym1 = Symbol();
   ```

7. **BigInt** (récent): Représente des entiers de grande taille.

   ```js
   const bigNumber = 1234567890123456789012345678901234567890n;
   ```

## Opérateur `typeof`

L'opérateur `typeof` permet de déterminer le type d'une valeur.

```js
console.log(typeof 5); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (c'est un comportement connu, mais trompeur)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 10n); // "bigint"
```

## Symbol (introduit dans ES6)

Un `Symbol` est un type primitif unique introduit dans ECMAScript 6. Sa caractéristique principale est de produire une valeur qui est garantie d'être unique, ce qui peut être utile, par exemple, pour créer des clés d'objet qui ne confluent pas avec d'autres clés.

### Création d'un Symbol

La fonction `Symbol()` est utilisée pour créer un nouveau symbole.

```js
let sym1 = Symbol();
let sym2 = Symbol();

console.log(sym1 === sym2); // false
```

Même si vous créez deux symboles avec la même description, ils seront toujours uniques.

```js
let sym3 = Symbol("description");
let sym4 = Symbol("description");

console.log(sym3 === sym4); // false
```

### Utiliser Symbol comme propriétés d'objet

Un des usages courants des symboles est de les utiliser comme clés d'objets pour garantir que la clé est unique et ne sera pas accidentellement écrasée ou récupérée sans intention spécifique.

```js
let symKey = Symbol("key");

let obj = {
    [symKey]: "value"
};

console.log(obj[symKey]); // "value"
```

Notez que les propriétés Symbol ne sont pas énumérées avec des méthodes comme `Object.keys` mais peuvent être récupérées avec `Object.getOwnPropertySymbols`.

```js
console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(key) ]
```

## Conversion de types (Type Coercion)

En JavaScript, les valeurs peuvent parfois être converties automatiquement d'un type à un autre, ce qu'on appelle la "coercition de type".

```js
let num = "5" + 1; // "51" (la number est convertie en string)
let subtraction = "5" - 1; // 4 (la string est convertie en number)
```

## Valeurs "truthy" et "falsy"

En JS, certaines valeurs sont considérées comme "falsy" lorsqu'elles sont évaluées dans un contexte booléen (comme une condition). Les valeurs "falsy" incluent : `0`, `""` (chaîne vide), `NaN`, `null`, `undefined`, et `false`. Toutes les autres valeurs sont "truthy".

```js
if (0) {
  // Ce bloc ne s'exécutera pas
}

if ("hello") {
  // Ce bloc s'exécutera
}
```

---

## Mutabilité et Immuabilité en JavaScript

La mutabilité et l'immuabilité sont des concepts centraux en programmation, surtout lorsqu'il s'agit de gestion des états et de prévention des effets secondaires indésirables.

### Types Primitifs (Immuables)

Les types primitifs en JavaScript sont **immuables**. Cela signifie qu'une fois qu'une valeur d'un type primitif est créée, elle ne peut pas être modifiée.

Prenons l'exemple d'une string :

```js
let str = "hello";
str = str.toUpperCase();
console.log(str); // "HELLO"
```

Il pourrait sembler que la string est modifiée. Mais en réalité, une **nouvelle** string est créée et assignée à la variable `str`. La valeur originale "hello" reste inchangée.

### Objets (Mutables)

Contrairement aux types primitifs, les objets en JavaScript sont **mutables**. Vous pouvez changer leurs propriétés ou ajouter de nouvelles propriétés après leur création.

```js
let person = { name: "John" };
person.name = "Jane"; // Modification de la propriété 'name'
person.age = 30; // Ajout d'une nouvelle propriété 'age'
console.log(person); // { name: "Jane", age: 30 }
```

### Pourquoi est-ce important ?

La mutabilité peut entraîner des effets secondaires involontaires. Si vous passez un objet à une fonction, et que cette fonction modifie l'objet, ces modifications se répercutent partout où cet objet est référencé.

```js
function growOlder(person) {
    person.age += 1;
}

let john = { name: "John", age: 25 };
growOlder(john);
console.log(john.age); // 26, car l'objet a été modifié à l'intérieur de la fonction
```

### Approches pour éviter les mutations involontaires

#### 1. Cloner l'objet

Avant de modifier un objet, vous pouvez le cloner. De cette façon, l'objet original reste inchangé.

```js
let john = { name: "John", age: 25 };
let olderJohn = Object.assign({}, john);
olderJohn.age += 1;
console.log(john.age); // 25
console.log(olderJohn.age); // 26
```

Avec le spread operator (introduit dans ES6), vous pouvez également cloner un objet :

```js
let olderJohn = { ...john };
```

#### 2. Utiliser des structures de données immuables

Il existe des bibliothèques, comme [Immutable.js](https://immutable-js.com/), qui fournissent des structures de données immuables. Ces structures ne peuvent pas être modifiées une fois créées. Au lieu de cela, chaque modification crée une nouvelle version de la structure.

---
