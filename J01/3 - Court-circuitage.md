# Le court-circuitage en JavaScript

Le court-circuitage fait référence à une technique utilisée dans les opérations logiques pour optimiser l'évaluation des expressions. En JavaScript, cela se produit principalement avec les opérateurs `&&` (ET) et `||` (OU). Grâce au court-circuitage, JavaScript peut déterminer la valeur d'une expression logique sans nécessairement évaluer tous ses termes.

## 1. Opérateur ET (`&&`)

L'opérateur `&&` évalue les opérandes de gauche à droite. Si le premier opérande est évalué comme `falsy`, il arrête l'évaluation et renvoie cet opérande sans évaluer les opérandes suivants.

```js
let result = false && console.log("Ce message ne sera pas affiché");
```

Dans l'exemple ci-dessus, puisque `false` est une valeur `falsy`, `console.log` n'est jamais exécuté.

## 2. Opérateur OU (`||`)

L'opérateur `||` fonctionne d'une manière similaire, mais inversement. Il évalue aussi les opérandes de gauche à droite, mais si le premier opérande est évalué comme `truthy`, il arrête l'évaluation et renvoie cet opérande.

```js
let result = true || console.log("Ce message ne sera pas affiché");
```

Ici, puisque `true` est une valeur `truthy`, l'évaluation s'arrête et `console.log` n'est pas exécuté.

## Utilisations courantes du court-circuitage

1. **Définition de valeurs par défaut** :

   Vous pouvez utiliser le court-circuitage pour attribuer une valeur par défaut à une variable si la première valeur est `falsy`.

   ```js
   let name = userInput || "Invité";
   ```

   Si `userInput` est `falsy` (par exemple, une chaîne vide, `null`, `undefined`, etc.), alors `name` recevra la valeur "Invité".

2. **Exécution conditionnelle** :

   Le court-circuitage peut être utilisé pour exécuter un morceau de code seulement si une certaine condition est remplie.

   ```js
   isLogged && showDashboard();
   ```

   `showDashboard()` ne sera exécuté que si `isLogged` est `truthy`.

## Points à retenir

- Le court-circuitage peut rendre le code plus concis, mais aussi potentiellement plus difficile à lire si utilisé de manière excessive. Utilisez-le judicieusement.
- Puisque le court-circuitage renvoie une des valeurs de l'opération, et non nécessairement un booléen, il peut être utilisé de manière créative pour sélectionner l'une des deux valeurs. Par exemple, `let foo = a || b;` assignera à `foo` la valeur de `a` si elle est `truthy`, sinon celle de `b`.

## Coalescence des nuls (`??`)

L'opérateur de coalescence des nuls (`??`) est un opérateur logique qui renvoie son opérande de droite lorsqu'il est `null` ou `undefined`, et son opérande de gauche dans tous les autres cas.

```js
let foo = null ?? "bar";
console.log(foo); // "bar"
```

La différence entre `??` et `||` est que `??` ne renvoie pas son opérande de droite si son opérande de gauche est `falsy` (par exemple, `0` ou `""`).

```js
let foo = 0 ?? "bar";
let bar = 0 || "bar";
console.log(foo); // 0
console.log(bar); // "bar"
```

## Bonus, chaînage optionnel (`?.`) (optional chaining)

L'opérateur de chaînage optionnel (`?.`) permet d'accéder à des propriétés d'un objet sans avoir à vérifier si l'objet existe. Si l'objet est `null` ou `undefined`, l'expression renvoie `undefined`.

```js
let foo = { bar: 1 };
let baz = foo?.bar;
console.log(baz); // 1

console.log(foo?.qux?.baz); // undefined
console.log(foo.qux.baz); // TypeError: Cannot read property 'baz' of undefined
```
