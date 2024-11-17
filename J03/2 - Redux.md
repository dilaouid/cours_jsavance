# Introduction à Redux Toolkit 🚀

Bienvenue dans le monde merveilleux de Redux Toolkit, votre nouveau meilleur ami pour gérer l'état global de vos applications React de manière simple et efficace.

## Qu'est-ce que Redux Toolkit ?

Redux Toolkit (RTK) est la boîte à outils officielle pour simplifier le travail avec Redux. Redux, c'est comme un immense tableau d'affichage où vous pouvez accrocher les informations que tous vos components React peuvent voir et modifier. Mais parfois, gérer ce tableau peut devenir complexe (balancer des props partout d'un component à un autre, le bordel, comme je vous en avait parlé dans le cours, le `props drilling` c'est vraiment naze à tout niveaux). RTK vient à la rescousse avec des outils et des pratiques recommandées pour rendre ce processus aussi facile que de souffler ! (ou presque haha)

### Pourquoi Redux Toolkit ?

- **Simplicité :** RTK encapsule les meilleures pratiques de Redux, réduisant le code "boilerplate" nécessaire.
- **Productivité :** Avec des fonctions comme `createSlice`, RTK vous permet de faire plus avec moins de code.
- **Performance :** Intègre des mises à jour immuables efficaces avec Immer.
- **Facilité d'utilisation :** Simplifie la configuration du store, la création de reducers, l'exécution d'effets secondaires, et plus encore.

## Premiers pas avec Redux Toolkit 🐾

Pour débuter, installez RTK dans votre projet React :

```bash
npm install @reduxjs/toolkit react-redux
```

(Dans le cours zoom, bizarrement il fallait installer les deux packages séparément, je sais pas pourquoi, mais là, on installe les deux d'un coup, c'est plus simple !)

### Création du Store

Le store est le cœur battant de votre gestion d'état Redux. C'est le moteur de votre véhicule (`Provider`). Avec RTK, sa mise en place est un jeu d'enfant.

```javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Vos reducers ici
  },
});
```

### Création d'un Slice

Un "slice" est une portion de votre état global. Pensez-y comme à une page de votre grimoire. Avec `createSlice`, vous pouvez définir vos actions et reducers en un seul endroit.

```javascript
// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

### Intégrer le Slice au Store

Ajoutez votre slice au store principal pour le rendre disponible dans toute votre application.

```javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

Quand vous créez un slice avec `createSlice`, vous encapsulez logiquement une partie de l'état global et les fonctions reducers qui le gèrent. Voici les détails des options que vous passez à `createSlice` :

- **`name`**: Un identifiant unique pour le slice. Cela sert à générer les types d'action.

- **`initialState`**: L'état initial du slice. Cela définit à quoi ressemble cette portion de l'état global au démarrage de l'application.

- **`reducers`**: Un objet contenant les reducers. Chaque reducer est une fonction qui définit comment l'état change en réponse à une action. Redux Toolkit permet de modifier l'état "directement" grâce à l'usage interne de la bibliothèque Immer, qui applique les modifications de manière immuable.

#### `createSlice` en détail

Voyons plus en détail chaque partie du `createSlice` :

```javascript
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  // Le nom du slice, utilisé pour préfixer les types d'action générés
  name: 'counter',

  // L'état initial du slice, peut être un objet, un tableau, un booléen, etc.
  initialState: {
    value: 0,
  },

  // Les reducers, où chaque clé est une action potentielle sur cet état
  reducers: {
    // Chaque fonction définit comment l'état change en réponse à cette action
    increment: state => {
      // Avec Immer, on peut "modifier" l'état directement
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});
```

#### Utilisation des actions générées

Redux Toolkit génère automatiquement les actions correspondant aux reducers que vous avez définis. Pour les utiliser, vous exportez ces actions de votre fichier slice :

```javascript
export const { increment, decrement } = counterSlice.actions;
```

### Utiliser Redux Toolkit dans un component

Pour accéder à votre état et le modifier, utilisez les hooks `useSelector` et `useDispatch`.

```js
// src/features/counter/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
```

`useSelector` permet de lire une valeur dans le store, et `useDispatch` permet de déclencher une action pour modifier le store. C'est tout ce dont vous avez besoin pour gérer l'état global de votre application avec Redux Toolkit ! 🎉
Pour résumer, vous devez récupérer la valeur de votre état global avec `useSelector`, et déclencher des actions pour le modifier dans tout les components où est appelé notre état global avec `useDispatch`.

OK, vous avez peut-être rien capté, **on re-explique**.

### Accéder à l'état avec `useSelector`

Lorsque vous utilisez Redux dans une application React, il est fréquent de vouloir accéder à des données spécifiques depuis votre store Redux. Le hook `useSelector` vous permet de faire exactement cela de manière très intuitive.

#### Comment ça marche ?

`useSelector` prend en argument une fonction. Cette fonction, appelée "fonction de sélection, d'où `useSelector`", reçoit l'état global de Redux comme son seul argument. Vous pouvez alors retourner une partie spécifique de cet état que vous souhaitez utiliser dans votre component. React Redux s'occupera ensuite de s'abonner au store Redux pour vous et de s'assurer que votre component est mis à jour chaque fois que la partie de l'état que vous avez sélectionnée change.

**Exemple:**

```js
const count = useSelector((state) => state.counter.value);
```

Dans cet exemple, `state.counter.value` permet de récupérer la valeur actuelle du compteur depuis l'état global de Redux. La variable `count` sera automatiquement mise à jour par React Redux chaque fois que `state.counter.value` change dans le store.

### Modifier l'état avec `useDispatch`

Pour modifier l'état dans Redux, vous devez dispatcher une action. Les actions sont des objets simples qui contiennent généralement deux choses : un type d'action et des données (payload). Les reducers écoutent ces actions pour savoir quand et comment modifier l'état.

#### Comment que ça marche ?

Le hook `useDispatch` vous donne accès à la méthode `dispatch` du store Redux. Vous pouvez l'utiliser pour envoyer des actions à votre store. Redux Toolkit simplifie la création d'actions grâce à `createSlice`, qui génère automatiquement des action creators basés sur les reducers que vous avez définis.

**Exemple:**

```js
const dispatch = useDispatch();

// Pour incrémenter le compteur
<button onClick={() => dispatch(increment())}>Increment</button>

// Pour décrémenter le compteur
<button onClick={() => dispatch(decrement())}>Decrement</button>
```

Dans cet exemple, `increment()` et `decrement()` sont des action creators générés par `createSlice`. En appelant ces fonctions, vous créez une action que vous passez ensuite à `dispatch`. Redux Toolkit s'occupe du reste, et le state est mis à jour en conséquence.

### Intégrer Redux Toolkit dans votre application qui a un Router

Si vous utilisez un router dans votre application, vous devez envelopper votre application avec le `Provider` de Redux. Cela permet à votre application d'accéder au store Redux et de le mettre à jour.

Dans votre application React, vous utiliserez `BrowserRouter` pour envelopper votre application et `Routes` pour définir les différents chemins d'accès. Chaque `Route` spécifie un component à rendre en fonction de l'URL, comme on l'a déjà évoqué dans le cours (J02)

```js
// App.js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import TestAPI from './components/TestAPI';

import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
        <nav>
            <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/api">Test API</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/api" element={<TestAPI />} />
        </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
```

Ici, nous avons enveloppé notre application avec le `Provider` de Redux, qui prend le store comme prop. Cela permet à tous les components de l'application d'accéder au store Redux et de le mettre à jour. Vous pouvez maintenant utiliser `useSelector` et `useDispatch` dans n'importe quel component de votre application pour accéder et modifier l'état global.

### Résumé imagé

Imaginez que vous jouez à un jeu vidéo où `useSelector` est votre moyen de vérifier votre score ou vos points de vie, et `useDispatch` est la manière d'effectuer des actions dans le jeu (comme sauter ou attaquer). Redux Toolkit aide à gérer les règles du jeu (le store et les reducers), tandis que `useSelector` et `useDispatch` vous permettent d'interagir avec ce jeu.

En combinant `useSelector` pour lire l'état et `useDispatch` pour modifier l'état, vous avez tout ce dont vous avez besoin pour créer des applications dynamiques et interactives avec Redux Toolkit et React.

## Conclusion 🌟

Redux Toolkit est un puissant allié dans la gestion d'état de vos applications React. Il rend Redux plus accessible, moins verbeux, et intègre les meilleures pratiques par défaut. Embarquez dans l'aventure RTK et découvrez comment il peut rendre votre code plus propre, plus simple, et plus joyeux à écrire. Bon codage ! 🚀
