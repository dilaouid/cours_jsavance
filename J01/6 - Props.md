# Les Props en React

Les props (abréviation de "properties") constituent le système de passage de données entre components dans React. Elles permettent de transmettre des informations d'un component parent à un component enfant, rendant ainsi les components réutilisables et dynamiques. Dans ce chapitre, nous explorerons comment utiliser les props, y compris la puissante fonctionnalité `props.children`.

## Qu'est-ce que les Props ?

Les props sont des objets contenant des valeurs que l'on passe à un component. Elles sont l'équivalent des attributs HTML mais pour les components React. Les props sont immuables dans le component enfant, ce qui signifie que vous ne pouvez pas les modifier directement.

### Exemple Basique de Props

```jsx
function Greeting(props) {
  return <h1>Bonjour, {props.name} !</h1>;
}

function App() {
  return <Greeting name="Greg" />;
}
```

Dans cet exemple, le component `Greeting` reçoit une prop `name` et l'utilise pour afficher un message personnalisé. Le component `App` passe la valeur "Greg" à la prop `name` du component `Greeting`.

## Utilisation de `props.children`

`props.children` est une prop spéciale fournie par React pour chaque component. Elle contient le contenu entre les balises ouvrantes et fermantes d'un component lorsqu'il est utilisé dans un autre component. Cela permet aux components de recevoir des enfants et de les rendre comme une partie de leur sortie, offrant ainsi une grande flexibilité dans la composition des components.

### Exemple avec `props.children`

```jsx
function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Titre de la Carte</h2>
      <p>Ceci est un contenu à l'intérieur d'une carte.</p>
    </Card>
  );
}
```

Dans cet exemple, le component `Card` utilise `props.children` pour afficher tout contenu qui est placé entre ses balises JSX dans le component `App`. Cela permet au component `Card` d'être réutilisé avec différents contenus.

## Bonnes Pratiques avec les Props

- **Déstructuration des Props :** Pour une meilleure lisibilité et simplicité, vous pouvez déstructurer les props dans la signature de la fonction du component.
  
  ```jsx
  function Greeting({ name }) {
    return (<h1>Bonjour, {name} !</h1>);
  }
  ```

  Pour rappel, vous pouvez vous renseigner sur la déstructuration dans le chapitre [Destructuration en JavaScript](https://github.com/dilaouid/cours_jsavance/blob/main/J01/4%20-%20Destructuring.md). Allez vraiment voir ces cours, ils sont très importants !!

- **Composition plutôt que Héritage :** Favorisez l'utilisation de la composition de components et des props pour réutiliser le code entre les components plutôt que l'héritage (nous verrons cela plus en détail dans un chapitre ultérieur).

Les props sont un mécanisme fondamental dans React pour construire des components interactifs et réutilisables. En les utilisant judicieusement, vous pouvez créer des applications modulaires et maintenables, facilitant la gestion de l'état et le flux de données dans votre application.
