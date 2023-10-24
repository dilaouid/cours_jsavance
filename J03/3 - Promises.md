## Promesses : Introduction et utilisation

Les Promesses en JavaScript offrent une approche plus puissante et flexible pour gérer l'asynchronicité par rapport aux callbacks traditionnels. Elles représentent une valeur qui peut ne pas être disponible maintenant, mais qui le sera à un moment donné à l'avenir.

---

### 1. **Qu'est-ce qu'une Promesse?**

Une Promesse est un objet qui représente l'achèvement ou l'échec éventuel d'une opération asynchrone. Une Promesse a trois états:

- **Pending** : L'état initial, la promesse n'est ni accomplie, ni rejetée.
- **Fulfilled** : Signifie que l'opération s'est terminée avec succès.
- **Rejected** : Signifie que l'opération a échoué.

---

### 2. **Création d'une Promesse**

Une Promesse est généralement créée à l'aide du constructeur `Promise`.

**Exemple** :

```js
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data received!');
        //reject('Error occurred!');
    }, 2000);
});
```

Dans cet exemple, après 2 secondes, la promesse est accomplie avec le message 'Data received!'. Si vous commentez `resolve` et décommentez `reject`, la promesse sera rejetée avec 'Error occurred!'.

---

### 3. **Utilisation d'une Promesse**

Une fois que nous avons une Promesse, nous pouvons utiliser `then` pour attacher des callbacks qui seront exécutés une fois la Promesse accomplie, et `catch` pour gérer les erreurs.

**Exemple** :

```js
myPromise
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
```

Dans l'exemple ci-dessus, si la promesse est accomplie, `data` sera affiché. Si elle est rejetée, l'erreur sera capturée et affichée.

---

### 4. **Chaining Promises**

L'un des avantages des Promesses est la possibilité de les chaîner, évitant ainsi l'enchevêtrement de callbacks.

**Exemple** :

```js
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Initial data'), 1000);
    });
}

function fetchMoreData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data + ' and more data'), 1000);
    });
}

fetchData()
    .then(result => fetchMoreData(result))
    .then(finalResult => {
        console.log(finalResult); // 'Initial data and more data'
    })
    .catch(error => {
        console.log(error);
    });
```

---

### 5. **Méthodes utiles de Promesse**

- **Promise.all()** : Attendez que toutes les promesses dans un tableau soient accomplies (ou que l'une d'elles soit rejetée).

  ```js
  const promise1 = Promise.resolve('First promise');
  const promise2 = Promise.resolve('Second promise');
  const promise3 = Promise.reject('Failed third promise');

  Promise.all([promise1, promise2, promise3]).then(dataArray => {
      console.log(dataArray); // ['First promise', 'Second promise']
  });
  ```

- **Promise.race()** : La première promesse à s'accomplir (ou à être rejetée) gagne la course.

  ```js
  const fastPromise = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'Fast one');
  });

  const slowPromise = new Promise((resolve, reject) => {
      setTimeout(resolve, 500, 'Slow one');
  });

  Promise.race([fastPromise, slowPromise]).then(result => {
      console.log(result); // 'Fast one'
  });
  ```

---

### 6. **Erreurs et rejet**

Il est crucial de toujours gérer les erreurs lors de l'utilisation des Promesses. Une Promesse rejetée qui n'est pas gérée peut entraîner des bugs difficiles à traquer.

Utilisez toujours une clause `.catch()` ou le deuxième argument de `.then()` pour gérer les erreurs.

```js
myPromise
    .then(data => {
        console.log(data);
    }, error => {
        console.log('Error in then:', error);
    })

    // ou
    .catch(error => {
        console.log('Error in catch:', error);
    });
```

---

En conclusion, les Promesses offrent une manière plus structurée et puissante de gérer l'asynchronicité en JavaScript. Elles sont particulièrement utiles pour chaîner plusieurs opérations asynchrones et offrent une meilleure gestion des erreurs par rapport aux callbacks traditionnels.