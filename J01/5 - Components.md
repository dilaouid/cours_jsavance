# Création et Import d'un Component

Dans React, un component permet de découper l'interface utilisateur en éléments indépendants et réutilisables, facilitant ainsi la gestion et la maintenance de votre application. Nous allons nous concentrer sur la création et l'utilisation de components fonctionnels, la méthode recommandée dans les versions récentes de React.

## Création d'un Component Fonctionnel

Un component fonctionnel en React est simplement une fonction JavaScript qui retourne un élément React, qui est généralement écrit en JSX. Ce type de component est apprécié pour sa simplicité et son efficacité, notamment avec l'introduction des Hooks qui permettent d'utiliser un état local et d'autres fonctionnalités de React sans écrire une classe.

### Exemple de component Fonctionnel

```jsx
function Greeting() {
  return (<h1>Bonjour, monde !</h1>);
}
```

Dans cet exemple, `Greeting` est un component qui retourne un élément JSX représentant un titre `<h1>`. Ce component peut être réutilisé à travers l'application pour afficher ce message de salutation.

## Exportation et Importation de Components

Pour utiliser un component dans d'autres parties de votre application, vous devez l'exporter depuis son fichier source, puis l'importer là où vous souhaitez l'utiliser.

### Exporter un component

Utilisez le mot-clé `export` devant la déclaration de votre fonction pour la rendre disponible à l'extérieur de son module :

```jsx
// Dans Greeting.js
export function Greeting() {
  return <h1>Bonjour, monde !</h1>;
}
```

Ou alors, vous pouvez exporter le component à la fin du fichier :

```jsx
// Dans Greeting.js
function Greeting() {
  return <h1>Bonjour, monde !</h1>;
}

export { Greeting };
```

Différence avec `export default` : Lorsque vous exportez un component avec `export default`, vous pouvez l'importer avec n'importe quel nom dans le fichier d'importation. Avec `export`, vous devez utiliser le nom exact du component lors de l'importation. Cependant, vous pouvez exporter plusieurs components avec `export` dans un seul fichier, ce qui n'est pas possible avec `export default`. Par exemple :

```jsx
// Dans Greeting.js
export function Greeting() {
  return <h1>Bonjour, monde !</h1>;
}

export function Farewell() {
  return <h1>Au revoir, monde !</h1>;
}
```

Et pour `export default` :

```jsx
// Dans Greeting.js
function Greeting() {
  return <h1>Bonjour, monde !</h1>;
}

function ComponentRandom() {
  return <h1>Random Component</h1>;
}

export default Greeting; // Un seul export default par fichier
export default ComponentRandom; // Erreur : un seul export default par fichier
```

### Importer un component

Lorsque vous souhaitez utiliser le component dans un autre fichier, importez-le en utilisant le mot-clé `import` :

```jsx
// Dans App.js
import { Greeting } from './Greeting'; // Importe le component Greeting depuis le fichier Greeting.js, attention, s'il y a des accolades, ça veut dire que l'on a pas utilisé export default !!!

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}
```

Dans cet exemple, `App` est un autre component fonctionnel qui utilise le component `Greeting`. Cela montre comment les components peuvent être composés pour former des UI complexes.

## Bonnes Pratiques de Nomination

- **Nommez vos components avec des noms descriptifs et en CamelCase :** Cela rend votre code plus lisible et facilite la compréhension de la structure de votre application.
- **Gardez un component par fichier :** Cela améliore la réutilisabilité et la testabilité de vos components.

## Utilisation Avancée : Components Composés

Les components peuvent être imbriqués pour créer des structures d'interface utilisateur plus complexes. Par exemple, vous pourriez créer un component `App` qui utilise plusieurs fois le component `Greeting` ou d'autres components pour former une page complète.

### Exemple

```jsx
// Dans App.js
import { Greeting } from './Greeting';

function App() {
  return (
    <div>
      <Greeting />
      <Greeting />
    </div>
  );
}
```

Ce modèle de composition est au cœur de la création d'applications avec React, permettant de construire des interfaces utilisateurs dynamiques et réactives à partir de petits components réutilisables et maintenables.
