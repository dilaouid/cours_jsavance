# Async/Await : Introduction, comment et pourquoi l'utiliser (complété)

L'asynchronicité est un concept fondamental en JavaScript, en particulier dans le contexte du développement web où les opérations comme le chargement de données peuvent prendre du temps. Si les Promesses ont fourni une manière plus propre de gérer l'asynchronicité par rapport aux callbacks, `async/await` amène cette simplicité à un tout autre niveau.

---

## 1. **Qu'est-ce qu'Async/Await?**

`async/await` est une fonctionnalité introduite avec ES2017 qui permet d'écrire du code asynchrone comme s'il était synchrone, rendant le code plus lisible et plus facile à suivre. Cette syntaxe fonctionne par-dessus les Promesses.

---

## 2. **Comment utiliser `async/await`**

Pour utiliser `await`, la fonction englobante doit être marquée comme `async`.

**Exemple** :

```js
async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
}
```

Dans cet exemple, `fetchData` est une fonction `async`. La ligne `await fetch('https://api.example.com/data')` envoie une requête au serveur et attend que la Promesse soit résolue (c'est-à-dire que la réponse soit reçue). Une fois la réponse reçue, elle est assignée à la variable `response`.

La ligne suivante, `await response.json()`, prend la réponse (qui est au format stream) et la convertit en format JSON. C'est aussi une opération asynchrone, donc nous utilisons `await` pour attendre qu'elle soit terminée. Une fois que la conversion est terminée, le résultat est assigné à la variable `data`.

---

## 3. **Gestion des erreurs**

Avec `async/await`, on utilise généralement des blocs `try/catch` pour gérer les erreurs.

**Exemple** :

```js
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}
```

---

## 4. **Pourquoi utiliser `async/await`?**

- **Lisibilité** : Le code asynchrone ressemble à du code synchrone, ce qui le rend plus lisible et plus simple à suivre.

- **Gestion d'erreur simplifiée** : Utilisation des blocs `try/catch` traditionnels pour la gestion des erreurs.

- **Évite le "callback hell"** : Comme les Promesses, mais en améliorant encore la lisibilité.

---

## 5. **Points à retenir**

- Une fonction marquée comme `async` retourne toujours une Promesse. Si vous retournez une valeur, elle sera enveloppée dans une Promesse résolue. Si vous lancez une erreur, elle sera enveloppée dans une Promesse rejetée.

```js
async function hello() {
    return 'Hello!';
}

hello().then(console.log);  // "Hello!"
```

- `await` ne fonctionne que dans les fonctions `async`.

- Vous pouvez utiliser `await` avec n'importe quelle Promesse, pas seulement avec des fonctions natives comme `fetch`.

- Lorsque vous utilisez `console.log` sans parenthèses dans le contexte de `.then(console.log)`, vous passez en réalité une référence à la fonction `console.log` et non le résultat de son exécution. En JavaScript, les fonctions sont des objets de première classe, ce qui signifie qu'elles peuvent être passées en tant qu'arguments, stockées dans des variables, etc. Dans le cas de `.then(console.log)`, vous indiquez à la Promesse d'appeler `console.log` avec la valeur résolue une fois que la Promesse est terminée. C'est essentiellement un raccourci pour `.then(value => console.log(value))`.

---

## 6. **Inconvénients du `async/await`**

- **Performance** : L'utilisation excessive de `await` peut rendre votre code séquentiel. Si plusieurs opérations peuvent être exécutées en parallèle, il serait préférable d'utiliser `Promise.all()` plutôt que d'attendre séquentiellement.

- **Complexité cachée** : Même si le code semble synchrone, il est toujours asynchrone en coulisse, ce qui peut induire en erreur certains développeurs moins familiers avec les concepts asynchrones.

- **Compatibilité** : `async/await` est disponible uniquement à partir d'ES2017. Les anciens navigateurs ou environnements peuvent ne pas le prendre en charge, bien que des transpileurs comme Babel puissent aider à contourner ce problème.

---

En conclusion, `async/await` offre une manière élégante de gérer l'asynchronicité en JavaScript, rendant le code plus clair et plus facile à maintenir. Toutefois, comme toute fonctionnalité, elle doit être utilisée judicieusement et en connaissance de ses avantages et inconvénients.
