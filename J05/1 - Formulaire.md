# Création d'un formulaire avec React et Axios

Dans ce cours, nous allons créer un formulaire React étape par étape qui envoie des données à une API externe en utilisant Axios. Ce formulaire sera simple, demandant à l'utilisateur de saisir un titre et un contenu (body) pour un post. Après la soumission, les données seront envoyées à une API qu'on a vu,à savoir le jssnplaceholder, et nous afficherons un message de succès si l'opération est réussie.

## Étape 1: Initialisation et structure du component

### Importation des dépendances

On commence par importer les dépendances nécessaires pour notre component :

- **`useState`** : Un Hook React qui nous permet de créer un état local dans notre component fonctionnel. C'est grâce à `useState` que nous pouvons stocker et mettre à jour les valeurs saisies dans le formulaire ainsi que gérer l'affichage d'un message de succès.
- **`axios`** : Une bibliothèque basée sur les promesses pour effectuer des requêtes HTTP. Elle est utilisée ici pour envoyer les données du formulaire à une API externe.

```jsx
import { useState } from 'react';
import axios from 'axios';
```

### Création du component `Form`

On définit notre component `Form` en utilisant la syntaxe des fonctions fléchées ou une déclaration de fonction classique. Pour cet exemple, une fonction classique est utilisée.

### Initialisation de l'État avec `useState`

Dans notre component, nous utilisons le Hook `useState` deux fois pour créer deux états distincts :

- **`form`** : Un objet qui stocke les valeurs des champs de notre formulaire. Ici, `title` et `body` représentent les deux champs que l'utilisateur va remplir. L'objet initial passé à `useState` sert de valeur initiale pour notre état `form`.
- **`success`** : Un booléen qui nous aide à contrôler l'affichage d'un message de succès une fois que les données ont été soumises avec succès à l'API.

```jsx
const [form, setForm] = useState({
    title: '',
    body: ''
});
const [success, setSuccess] = useState(false);
```

### Rendu du Formulaire

Pour l'instant, le rendu de notre component `Form` est simplement une balise `<form>` vide. Le contenu réel du formulaire (les champs de saisie, le bouton de soumission, etc.) sera ajouté dans les prochaines étapes.

```jsx
return <form></form>;
```

### Exportation du component

Finalement, on exporte notre component `Form` pour qu'il puisse être utilisé ailleurs dans notre application React et etre un child compoent par exemple, ou alors le mettre dans notre router dans notre App.jsx.

```jsx
export default Form;
```

## Étape 2: INputs

Pour gérer les entrées utilisateur dans notre formulaire, nous devons mettre à jour notre état `form` à chaque fois que l'utilisateur tape quelque chose dans les champs du formulaire. Pour cela, nous utilisons une fonction appelée `handleChange`. Voici comment cela fonctionne, étape par étape :

### Fonction `handleChange`

La fonction `handleChange` est conçue pour gérer les changements dans les champs de formulaire. Elle fait deux choses principales :

1. **Capture les changements :** À chaque frappe dans un champ de formulaire, l'événement `onChange` déclenche cette fonction.
2. **Met à jour l'état :** La fonction met ensuite à jour l'état `form` avec les nouvelles valeurs saisies par l'utilisateur.

### Utilisation de destructuring

Quand un utilisateur tape dans un champ de formulaire, l'événement `onChange` est déclenché et passe un objet `event` à notre fonction `handleChange`. Cet objet contient des informations sur l'événement, y compris l'élément qui a déclenché l'événement (`event.target`).

Nous utilisons le destructuring JavaScript pour extraire `name` et `value` depuis `event.target` :

- `name` correspond au nom de l'input (`title` ou `body` dans notre cas). Cela nous permet de savoir quel champ de formulaire a été modifié.
- `value` est la valeur saisie dans le champ de formulaire.

### Màj Dynamique du state

Avec `name` et `value` extraits, nous appelons `setForm` pour mettre à jour notre état. L'opérateur de spread (`...prevState`) est utilisé pour copier toutes les valeurs existantes de l'état, garantissant que nous ne perdons pas les données déjà saisies dans l'autre champ.

Ensuite, nous utilisons la syntaxe `[]` pour accéder dynamiquement à une propriété de l'objet `form` basée sur la valeur de `name`. Cela nous permet de mettre à jour la valeur correcte dans notre état, que ce soit `title` ou `body`, en fonction du champ que l'utilisateur a modifié.

### Exemple

```jsx
const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prevState => ({
        ...prevState,
        [name]: value // Mise à jour dynamique basée sur le champ modifié
    }));
}
```

## Étape 3: Submit du form

La fonction `handleSubmit` est appelée lorsque le formulaire est soumis. Elle empêche le comportement par défaut du formulaire (rechargement de la page), envoie les données à l'API via `axios.post`, et gère la réponse ou l'erreur.

```jsx
const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', form)
        .then(response => {
            console.log(response.data);
            setForm({ title: '', body: '' });
            setSuccess(true);
        })
        .catch(error => {
            console.error(error);
        });
}
```

Ce code n'est peut-être pas familier si vous n'avez pas travaillé avec des requêtes HTTP en JavaScript auparavant. Voici une explication étape par étape de ce qui se passe ici :

#### Empêcher le rechargement de la page

```javascript
event.preventDefault();
```

Cette ligne empêche le comportement par défaut d'un formulaire qui consiste à envoyer les données du formulaire quelque part (ce qui entraîne généralement un rechargement de la page dans un contexte sans JavaScript ou une requête non AJAX en JavaScript traditionnel). Elle n'est pas spécifique à React, mais est une fonctionnalité standard des formulaires HTML.

#### Envoyer les données avec Axios

```javascript
axios.post('https://jsonplaceholder.typicode.com/posts', form)
```

Ici, `axios.post()` est utilisé pour envoyer une requête POST à l'API. La méthode `post()` d'Axios prend deux arguments principaux :

- L'URL de l'API où envoyer les données.
- L'objet `form` contenant les données à envoyer. Dans notre cas, `form` contient les champs `title` et `body` que nous avons recueillis à partir des entrées de l'utilisateur (au début du code, on a fait `const [form, setForm] = useState({ title: '', body: '' });`).

#### Gestion de la réponse et des erreurs

```javascript
axios.post('https://jsonplaceholder.typicode.com/posts', form)
    .then(response => {
        console.log(response.data);
        setForm({ title: '', body: '' });
        setSuccess(true);
    })
```

Si la requête est réussie, `.then()` est appelé avec la réponse de l'API. Ici, nous faisons trois choses :

1. **Affichage des données de réponse :** `console.log(response.data)` affiche la réponse de l'API dans la console, ce qui est utile pour le débogage et la vérification des données renvoyées.
2. **Réinitialisation du formulaire :** `setForm({ title: '', body: '' })` réinitialise les champs du formulaire à leur état vide, prêts pour une nouvelle saisie.
3. **Affichage du message de succès :** `setSuccess(true)` modifie l'état `success` pour indiquer que la soumission a été réussie, ce qui pourra être utilisé plus tard pour afficher un message de confirmation à l'utilisateur.

```javascript
axios.post('https://jsonplaceholder.typicode.com/posts', form)
    .then(response => {
        console.log(response.data);
        setForm({ title: '', body: '' });
        setSuccess(true);
    })
    .catch(error => {
        console.error(error);
    });
```

En cas d'erreur lors de la soumission (par exemple, l'API n'est pas accessible, les données envoyées ne sont pas valides selon l'API, blablabla...), `.catch()` est appelé. Ici, `console.error(error)` affiche l'erreur dans la console.

## Étape 4: Construction HTML du form

Nous construisons le formulaire HTML avec deux champs `input` pour le titre et le contenu, et un bouton `submit`. Les valeurs des champs sont liées à l'état `form`, et les modifications sont gérées par `handleChange`.

```jsx
return(
    <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Titre</label>
        <input type="text" id="title" name="title" value={form.title} onChange={handleChange} placeholder='Titre du post' />

        <label htmlFor='body'>Contenu</label>
        <input type="text" id="body" name="body" value={form.body} onChange={handleChange} placeholder='Contenu du post' />
        <button type="submit">Envoyer</button>
        {success && <span>Super ça a bien envoyé</span>}
    </form>
);
```
