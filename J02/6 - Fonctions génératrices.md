# Introduction aux fonctions génératrices en JavaScript

---

## 1. **Qu'est-ce qu'une fonction génératrice?**

Les fonctions génératrices sont un type spécial de fonction en JavaScript qui permettent de générer une série de valeurs, une à la fois, au lieu d'une seule valeur finale. Contrairement aux fonctions régulières qui exécutent tout leur code et terminent, une fonction générateur peut être mise en pause à un endroit précis, puis reprise ultérieurement à partir du même endroit.

---

## 2. **Comment définir une fonction génératrice?**

Une fonction génératrice est définie de la même manière qu'une fonction régulière, à l'exception du fait qu'elle utilise le mot-clé `function*` (notez l'astérisque).

**Exemple** :

```js
function* generatorExample() {
    yield 1;
    yield 2;
    return 3;
}
```

---

## 3. **Comprendre le mot-clé `yield`**

Dans une fonction génératrice, le mot-clé `yield` est utilisé pour spécifier la valeur produite lorsque la fonction est mise en pause. Chaque fois que la fonction générateur est appelée par la suite, elle reprend son exécution après le dernier `yield`.

**Exemple** :

```js
function* countUpToThree() {
    yield 1;
    yield 2;
    yield 3;
}
```

---

## 4. **Utilisation et communication avec une fonction générateur**

- **Créer un objet générateur** : Lorsqu'une fonction génératrice est appelée, elle ne s'exécute pas immédiatement. Au lieu de cela, elle renvoie un objet générateur qui contrôle son exécution.

```js
const generatorObject = countUpToThree();
```

- **Utilisation de `next()`** : Pour extraire les valeurs d'une fonction génératrice, utilisez la méthode `next()` sur l'objet générateur.

```js
console.log(generatorObject.next()); // { value: 1, done: false }
console.log(generatorObject.next()); // { value: 2, done: false }
console.log(generatorObject.next()); // { value: 3, done: false }
console.log(generatorObject.next()); // { value: undefined, done: true }
```

---

## 5. **Applications pratiques**

Les fonctions générateur peuvent être utilisées pour :

- Créer des séquences infinies.
- Simplifier la gestion des itérables personnalisés.
- Gérer des tâches asynchrones (bien que les Promises et async/await soient plus couramment utilisés aujourd'hui).

---

## 6. **Conclusion**

Les fonctions générateur sont un outil puissant en JavaScript qui offre une flexibilité inégalée en termes de contrôle de l'exécution des fonctions. Bien qu'elles ne soient pas toujours nécessaires pour toutes les applications, comprendre leur fonctionnement et leur potentiel peut être un atout majeur pour tout développeur JavaScript
