# Utilisation avec les tableaux : `map`, `filter`, `reduce`

Quand nous travaillons avec des tableaux en JavaScript, les méthodes `map`, `filter` et `reduce` sont essentielles pour manipuler les données de façon fonctionnelle. Voici comment chacune fonctionne avec des exemples simples et étendus.

---

## 1. `map`

La méthode `.map()` crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau d'origine.

**Syntaxe**:

```js
arr.map(callback(element[, index[, array]])[, thisArg])
```

**Paramètres**:

- **callback**: Fonction qui est appelée pour chaque élément du tableau.
  - **element** (obligatoire): L'élément courant en cours de traitement dans le tableau.
  - **index** (optionnel): L'index de l'élément courant en cours de traitement dans le tableau.
  - **array** (optionnel): Le tableau sur lequel la méthode `map` a été appelée.
  
- **thisArg** (optionnel): Objet à utiliser comme `this` lors de l'exécution de `callback`.

**Objectif** : Transforme chaque élément du tableau selon une fonction donnée.

- **Exemple simple** :

  ```js
  const numbers = [1, 2, 3, 4];
  const squared = numbers.map(num => num * num);
  console.log(squared);  // [1, 4, 9, 16]
  ```

- **Exemple étendu avec tous les paramètres** :

  ```js
  const words = ["apple", "banana", "cherry"];
  const detailedMapping = words.map((word, index, array) => `${index + 1}/${array.length}: ${word.toUpperCase()}`);
  console.log(detailedMapping);  // ["1/3: APPLE", "2/3: BANANA", "3/3: CHERRY"]
  ```

---

## 2. `filter`

La méthode `.filter()` crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie.

**Syntaxe**:

```js
arr.filter(callback(element[, index[, array]])[, thisArg])
```

**Paramètres**:

- **callback**: Fonction de test pour filtrer chaque élément.
  - **element** (obligatoire): L'élément courant du tableau.
  - **index** (optionnel): L'index de l'élément courant dans le tableau.
  - **array** (optionnel): Le tableau sur lequel la méthode `filter` a été appelée.
  
- **thisArg** (optionnel): Objet à utiliser comme `this` lors de l'exécution de `callback`.

**Objectif** : Crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie.

- **Exemple simple** :

  ```js
  const numbers = [1, 2, 3, 4, 5];
  const evens = numbers.filter(num => num % 2 === 0);
  console.log(evens);  // [2, 4]
  ```

- **Exemple étendu avec tous les paramètres** :

  ```js
  const words = ["apple", "banana", "cherry", "date"];
  const longerThanFive = words.filter((word, index, array) => word.length > 5 && index < array.length - 1);
  console.log(longerThanFive);  // ["banana"]
  ```

---

## 3. `reduce`

La méthode `.reduce()` exécute une fonction réductrice sur chaque élément du tableau, aboutissant à une valeur unique.

**Syntaxe**:

```js
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

**Paramètres**:

- **callback**: Fonction pour exécuter sur chaque élément dans le tableau.
  - **accumulator** (obligatoire): Accumule les valeurs de retour du callback. C'est la valeur accumulée précédemment retournée dans le dernier appel du callback, ou `initialValue`, si fourni.
  - **currentValue** (obligatoire): L'élément courant en cours de traitement dans le tableau.
  - **index** (optionnel): L'index de l'élément courant en cours de traitement dans le tableau.
  - **array** (optionnel): Le tableau sur lequel la méthode `reduce` a été appelée.
  
- **initialValue** (optionnel): Valeur à utiliser comme premier argument pour le premier appel du `callback`. Si aucune valeur initiale n'est fournie, le premier élément du tableau sera utilisé comme valeur initiale (et `currentValue` commencera à partir du deuxième).

**Objectif** : Exécute une fonction réductrice sur chaque élément du tableau, résultant en une seule valeur de sortie.

- **Exemple simple** :

  ```js
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, num) => acc + num);
  console.log(sum);  // 10
  ```

- **Exemple étendu avec tous les paramètres** :

  ```js
  const words = ["apple", "banana", "cherry"];
  const longestWord = words.reduce((longest, currentWord, index, array) => {
    if (index === array.length - 1) {
      return longest.length > currentWord.length ? longest : currentWord;
    }
    return longest.length > currentWord.length ? longest : "";
  }, "");
  console.log(longestWord);  // "banana"
  ```

---

En comprenant comment utiliser ces fonctions d'ordre supérieur, vous pouvez écrire du code plus déclaratif et éviter les erreurs courantes. La capacité à traiter les tableaux de manière élégante et efficace est essentielle pour tout développeur JavaScript.
