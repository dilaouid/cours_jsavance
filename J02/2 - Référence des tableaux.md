# Référence des tableaux

Les tableaux sont l'une des structures de données les plus couramment utilisées. Toutefois, une source fréquente de confusion, en particulier pour les personnes novices dans certains langages de programmation comme JavaScript, est la manière dont les tableaux sont référencés et assignés.

---

## 1. **Référence vs Copie**

Lorsque nous parlons de variables et d'objets en programmation, nous devons comprendre deux concepts essentiels :

- **Valeur Primitive** : Une donnée simple, comme un nombre ou une chaîne de caractères.
- **Référence** : Une adresse mémoire où les données sont stockées.

Les tableaux, comme les objets, sont stockés en mémoire comme des références. Cela a d'importantes implications sur la manière dont ils sont manipulés.

---

## 2. **Affectation par référence**

Lorsque vous affectez un tableau à une nouvelle variable, vous ne créez pas une nouvelle copie de ce tableau. Vous créez simplement une nouvelle référence au tableau original.

```js
const array1 = [1, 2, 3];
const array2 = array1;

array2[0] = 99;

console.log(array1);  // [99, 2, 3]
console.log(array2);  // [99, 2, 3]
```

Dans cet exemple, en modifiant `array2`, nous avons également modifié `array1`, car les deux pointent vers la même référence en mémoire.

---

## 3. **Copier un tableau**

Si vous voulez éviter de modifier le tableau original en manipulant sa référence, vous devez créer une copie "superficielle" du tableau :

**Méthodes courantes pour copier un tableau en JavaScript** :

- **Spread Operator** :

  ```js
  const newArray = [...originalArray];
  ```

- **Méthode slice()** :

  ```js
  const newArray = originalArray.slice();
  ```

- **Méthode concat()** :

  ```js
  const newArray = [].concat(originalArray);
  ```

A savoir également, une chaîne de caractères peut être convertie en tableau avec la méthode `split()` :

```js
const str = "Hello";
const arr = str.split("");  // ["H", "e", "l", "l", "o"]
```

Et les chaînes de caractères peuvent également être traitées comme des tableaux, ce qui signifie que vous pouvez utiliser les méthodes `slice()`, `concat()` et `spread operator` sur les chaînes de caractères :

```js
const str = "Hello";
const newStr = str.slice(1);  // "ello"
```

Vous pouvez donc par exemple, utiliser un **spread operator** pour convertir une chaîne de caractères en tableau :

```js
const str = "Hello";
const arr = [...str];  // ["H", "e", "l", "l", "o"]
```

Et utiliser la méthode `join()` pour convertir un tableau en chaîne de caractères :

```js
const arr = ["H", "e", "l", "l", "o"];
const str = arr.join("");  // "Hello"
```

Bien que les chaînes de caractères et les tableaux soient similaires, ils ne sont pas identiques. Les chaînes de caractères sont des valeurs primitives, tandis que les tableaux sont des objets. Les tableaux ont des méthodes supplémentaires qui ne sont pas disponibles pour les chaînes de caractères, comme `push()` et `pop()`.

---

## 4. **Limitations de la copie superficielle**

Les méthodes mentionnées ci-dessus créent des copies superficielles. Si le tableau original contient des objets, ces objets ne seront pas dupliqués, mais seront référencés. Si l'un de ces objets est modifié dans le tableau copié, il sera également modifié dans le tableau original.

Par exemple :

```js
const originalArray = [{ name: "John" }];
const newArray = [...originalArray];

newArray[0].name = "Jane";

console.log(originalArray);  // [{ name: "Jane" }]
console.log(newArray);  // [{ name: "Jane" }]
```

Pour éviter cela, vous devez effectuer une "copie profonde" du tableau, ce qui signifie que vous devez également dupliquer les objets internes.

Par exemple comme ceci:
  
```js
const originalArray = [{ name: "John" }];
const newArray = JSON.parse(JSON.stringify(originalArray));

newArray[0].name = "Jane";

console.log(originalArray);  // [{ name: "John" }]
console.log(newArray);  // [{ name: "Jane" }]
```

---

## 5. **Copie profonde**

Si un tableau contient des objets ou d'autres tableaux et que vous voulez créer une copie entièrement indépendante (où même les objets internes sont dupliqués), vous devez effectuer une "copie profonde". Des bibliothèques comme Lodash offrent des fonctions pour cela (`_.cloneDeep()`), ou vous pouvez utiliser des méthodes spécifiques selon le langage de programmation.

---

## 6. **Method chaining**

Il est possible d'enchaîner plusieurs méthodes sur un tableau. Cela signifie que vous pouvez appeler une méthode sur le tableau, puis appeler une autre méthode sur le résultat de la première méthode, et ainsi de suite.

Par exemple :

```js
const arr = [1, 2, 3];

const result = arr
  .map(x => x * 2)
  .filter(x => x > 2)
  .reduce((acc, x) => acc + x, 0);

console.log(result);  // 10
```

Bien entendu, vous pouvez également enchaîner des méthodes même sur une chaîne de caractères, ou sur tout autre objet.

```js
const str = "Hello";

const result = str
  .split("")
  .reverse()
  .join("");

console.log(result);  // "olleH"
```

---

### Conclusion

Comprendre la distinction entre la référence et la valeur est crucial lorsque l'on travaille avec des tableaux et des objets. Il est essentiel de savoir si vous modifiez une copie d'une structure de données ou la structure originale elle-même. Connaître cette différence vous évitera des erreurs et des comportements inattendus dans vos programmes.
