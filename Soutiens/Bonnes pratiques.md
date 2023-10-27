# Liste de bonnes pratiques en JavaScript

## Table des matières

- [Table des matières](#table-des-matières)
- [Variables](#variables)
- [Fonctions](#fonctions)
- [Objets](#objets)
- [Tableaux](#tableaux)
- [Conditions](#conditions)
- [Boucles](#boucles)

### Variables

- Utilisez `const` pour déclarer une variable qui ne sera pas réassignée et `let` pour une variable qui le sera.
- Évitez d'utiliser `var`.
- Déclarez chaque variable sur une ligne séparée.
- Déclarez les variables au début de leur portée.
- Initialisez les variables lors de leur déclaration.
- Utilisez des noms de variables explicites.
- Utilisez des noms de variables en anglais.

```js
// ✅
const name = 'John Doe';
let age = 30;

// ❌
const name = 'John Doe', age = 30;
let name = 'John Doe', age = 30;

// ✅
function sayHi() {
  let name = 'John Doe';
  console.log(`Hi! My name is ${name}.`);
}

// ❌
function sayHi() {
  console.log(`Hi! My name is ${name}.`);
  let name = 'John Doe';
}

// ✅
const name = 'John Doe';

// ❌
let name;
name = 'John Doe';

// ✅
const name = 'John Doe';

// ❌
let name = 'John Doe', age;
age = 30;
```

### Fonctions

- Utilisez des noms de fonctions explicites.
- Utilisez des noms de fonctions en anglais.
- Utilisez des fonctions fléchées `=>` pour les fonctions anonymes.
- Utilisez des fonctions nommées pour les fonctions récursives.
- Utilisez des fonctions nommées pour les fonctions qui se rappellent elles-mêmes.
- Utilisez des fonctions pour éviter la duplication de code.
- Utilisez des fonctions pour améliorer la lisibilité du code.
- Utilisez des fonctions pour améliorer la maintenabilité du code.
- Utilisez des fonctions pour améliorer la testabilité du code.
- Utilisez des fonctions pour améliorer la réutilisabilité du code.
- Choissisez des paramètres de fonction utiles et explicites.

```js
// ✅
function sum(a, b) {
  return a + b;
}

// ❌
function s(a, b) {
  return a + b;
}

// ✅
const sum = (a, b) => a + b;

// ❌
const sum = (a, b) => {
  return a + b;
};

// ✅
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// ❌
const factorial = n => n === 0 ? 1 : n * factorial(n - 1);
```

### Objets

- Utilisez des noms de propriétés explicites.
- Utilisez des noms de propriétés en anglais.
- Utilisez des noms de propriétés valides.
- Utilisez des noms de propriétés qui ne sont pas des mots-clés réservés.
- Évitez de faire trop de niveaux de profondeur dans les objets.
- Utilisez des objets pour éviter la duplication de code.
- Utilisez des objets pour renseigner et traiter des données.

### Tableaux

- Utilisez des noms de tableaux explicites.
- Utilisez des noms de tableaux en anglais.
- Utilisez des tableaux pour éviter la duplication de code.
- Utilisez des tableaux pour renseigner et traiter des données.

### Conditions

- Évitez les conditions imbriquées et/ou trop longues.
- Évitez de mettre trop de conditions dans une seule ligne.
- Ne mettez pas de conditions inutiles qui pourraient être remplacées par des optionals chaining (`?.`) ou des nullish coalescing (`??`).
- Pas de fonctions dans les conditions.

```js
// ✅
if (a === 1 && b === 2) {
  // ...
}

// ❌
if (a === 1 && b === 2 && c === 3 && d === 4) {
  // ...
}

// ✅
if (a === 1) {
  // ...
}

// ❌
if (a === 1) {
  if (b === 2) {
    // ...
  }
}

// ✅
if (a === 1) {
  // ...
} else {
  // ...
}

// ❌
if (a === 1) {
  // ...
} else if (b === 2) {
  // ...
} else if (b === 3) {
  // ...
} else if (b === 4) {
  // ...
} else if (b === 5) {
  // ...
} else if (b === 6) {
  // ...
} else if (b === 7) {
  // ...
} else {
  // ...
}
```

### Boucles

- Évitez les boucles imbriquées et/ou trop longues.
- Évitez de mettre trop de boucles dans une seule ligne.
- Ne mettez pas de boucles inutiles qui pourraient être remplacées par des méthodes de tableaux.
- Pas de fonctions dans les boucles.

```js
// ✅
for (let i = 0; i < 10; i++) {
  // ...
}

// ❌
for (let i = 0; i < 10; i++) for (let j = 0; j < 10; j++) for (let k = 0; k < 10; k++) {
  // ...
}

// ✅
for (let i = 0; i < 10; i++) {
  // ...
}

// ❌
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    // ...
  }
}

// ✅
for (let i = 0; i < 10; i++) {
  // ...
}

// ❌
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    // ...
  }
}

// ✅
const array = [1, 2, 3, 4, 5];
for (const item of array) {
  // ...
}

// ❌
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  // ...
}
```
