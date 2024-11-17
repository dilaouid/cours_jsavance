# Découverte des `useState` en React 🪄

Aujourd'hui, nous allons (enfin, nous avons du coup, là il est tard et vous devez, j'espère, être en train de vous reposer!) jouer avec l'un des outils les plus pratiques et les plus utilisés de React : `useState`. Préparez-vous à devenir le magicien de votre propre royaume de components avec juste une pincée de sortilège useState. 🧙‍♂️✨

## Qu'est-ce que `useState` ? 🤔

Imaginez que vous avez une boîte magique 🎁. Chaque fois que vous ouvrez cette boîte, vous pouvez changer ce qu'il y a à l'intérieur. Dans React, cette boîte magique s'appelle `useState`. Il vous permet de stocker et de modifier des valeurs dans vos components, comme transformer une grenouille en prince ou une page web statique en une fête interactive.

Ca s'appelle un **Hook**, et c'est une des fonctionnalités les plus puissantes de React. Les Hooks sont des fonctions qui vous permettent d'utiliser l'état et d'autres fonctionnalités de React sans écrire de classes. Ils sont introduits dans **React 16.8** et sont la meilleure façon de réutiliser la logique d'état entre les components.

### Comment ça fonctionne ?

Dans le royaume de React, chaque component peut avoir son propre état. L'état, c'est juste une façon chic de dire "les données que le component garde en mémoire".

```jsx
import React, { useState } from 'react';

function App() {
  // Voici notre boîte magique : useState!
  const [ magicNumber, setMagicNumber ] = useState(0);

  // Tout ce qui est au-dessus de cette ligne est comme les coulisses d'un spectacle.
  // Tout ce qui est en dessous est le spectacle lui-même.

  return (
    <div>
      <h1>Le Nombre Magique est : {magicNumber}</h1>
      <button onClick={() => setMagicNumber(magicNumber + 1)}>
        Augmente le Nombre Magique 🧚‍♂️
      </button>
    </div>
  );
}

export default App;
```

Dans cet acte de magie, `useState` est invoqué avec `0` comme valeur initiale. Il nous retourne deux choses très spéciales :

- `magicNumber` est la valeur actuelle.
- `setMagicNumber` est une fonction qui nous permet de changer cette valeur.

Le bouton a un attribut `onClick` qui appelle `setMagicNumber` (onClick est un événement, et il attend une fonction à appeler lorsqu'il est déclenché). Lorsque le bouton est cliqué, `setMagicNumber` est appelé avec une nouvelle valeur, et le component est mis à jour pour refléter ce changement.

C'est comme avoir un assistant dans votre spectacle qui peut rapidement changer le décor à votre commande.

Néanmoins, vous devez vous demander très certainement, chers élèves, c'est quoi cette syntaxe bizarre avec des crochets ? 🤔
C'est, comme je l'ai dis dans un md précédent, et comme je vous le **SPAM EN CLASSE** de la [Destructuration en JavaScript](https://github.com/dilaouid/cours_jsavance/blob/main/J01/4%20-%20Destructuring.md). Allez vraiment voir ces cours, ils sont très importants !! J'insiste encore, oui.

La syntaxe `const [magicNumber, setMagicNumber] = useState(0);` est une forme de déstructuration. Elle nous permet de déballer les valeurs retournées par `useState` dans des variables distinctes. C'est comme ouvrir la boîte magique et en sortir les deux objets qu'elle contient.

**Prenez le temps de bien comprendre cette syntaxe, elle est très importante pour la suite de votre apprentissage, vraiment vraiment, genre, promis, c'est important.**

## Pourquoi utiliser `useState` ? 🌟

Sans `useState`, nos components seraient comme des statues : belles mais incapables de bouger ou de réagir. Avec `useState`, nos components peuvent danser, chanter et réagir au public (les utilisateurs). Cela rend notre spectacle (l'application) vivant et mémorable.

### Exemple Interactif : Changer de Thème 🌓

Regardez cet autre tour de magie. Nous allons créer un interrupteur qui change le thème de la page entre "clair" et "sombre".

```jsx
function ThemeSwitcher() {
  // Lumos Maxima! Un sort pour la lumière.
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    // Un sort simple pour basculer entre la lumière et l'obscurité.
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // Un peu de CSS pour ajouter de la magie visuelle.
  const themeStyles = {
    backgroundColor: theme === 'light' ? '#FFF' : '#333',
    color: theme === 'light' ? '#333' : '#FFF',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div style={themeStyles}>
      <button onClick={toggleTheme}>
        Changer de Thème 🌗
      </button>
    </div>
  );
}
```

Dans ce tour, `useState` contrôle l'éclairage de notre scène. Un simple clic, et la lumière se transforme en obscurité, et vice-versa. On change le thème en appelant `setTheme`, une méthode magique qui nous permet de modifier l'état de `theme` à volonté.

## Les règles du jeu 📜

Tout comme dans tout bon jeu de société, il y a des règles à suivre avec `useState` pour éviter le chaos.

1. **Au sommet de votre component :** Placez `useState` en haut de votre component, pas dans des boucles ou des conditions. Sinon, React risque de se perdre dans son propre jeu de magie.

   ```javascript
   // Ne faites PAS ça :
   if (userIsWizard) {
     const [spell, setSpell] = useState('Expecto Patronum');
   }
   // VERY BAD IDEA 🚫 (c'est 0 D-I-R-E-C-T, même si je ne peux pas vous noter)
   ```

2. **Un seul état par variable :** Chaque appel à `useState` crée un état indépendant. Si vous avez plusieurs données à stocker, invoquez `useState` plusieurs fois.

   ```javascript
   const [ owls, setOwls ] = useState(0);
   const [ wands, setWands ] = useState(0);
   ```

3. **L'immuabilité est reine :** Ne modifiez jamais directement l'état. Utilisez toujours la fonction de mise à jour que `useState` vous donne. C'est comme écrire une nouvelle page dans votre livre de sorts plutôt que de gribouiller sur l'ancienne.

## Mettre en Pratique : Un Sort de Liste 📚

Mettons en œuvre un sortilège pour afficher une liste d'éléments magiques et permettre à l'utilisateur de les ajouter à volonté.

```javascript
function MagicItems() {
  const [items, setItems] = useState(['Baguette', 'Chaudron']);

  function addItem() {
    // Nous prenons la liste actuelle et ajoutons un nouvel élément.
    setItems([...items, 'Pierre philosophale']);
  }

  return (
    <div>
      <button onClick={addItem}>Ajouter un Item</button>
      {items.map((item, index) => (
        <p key={index}>{item}</p> // Un peu de magie pour chaque élément unique.
      ))}
    </div>
  );
}
```

Avec chaque clic, notre sort `addItem` ajoute un nouvel élément à notre liste. Notez l'utilisation de l'opérateur de décomposition `...` pour copier les éléments existants dans un nouveau tableau avant d'ajouter le nouvel élément.

Et je répète encore ce que j'ai dis à l'oral, les HOF (Higher Order Functions) sont très importantes, et vous devez les maîtriser. Allez voir le cours sur les [HOF](https://github.com/dilaouid/cours_jsavance/tree/main/J02), c'est très important (encore une fois, oui, je sais, je suis lourd, mais c'est important).

## Conclusion : Le pouvoir des états 🎩✨

Avec le sort `useState`, nous avons le pouvoir de créer des components réactifs et interactifs. Il transforme notre application d'une toile statique à une peinture en mouvement où chaque interaction est une touche de pinceau qui anime l'œuvre.

Rappelez-vous, utilisez ce pouvoir à bon escient, et vous serez capable de créer des applications React qui enchantent les utilisateurs avec chaque clic. Laissez votre imagination (et vos components) s'envoler ! 🚀
