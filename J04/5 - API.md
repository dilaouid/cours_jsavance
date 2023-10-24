# Requêtes API côté front en JavaScript

## Introduction

Les API (Application Programming Interface) sont un moyen de permettre à des applications de communiquer entre elles. Dans le contexte du développement Web, le terme API est souvent utilisé pour désigner des services Web qui renvoient des données, généralement au format JSON ou XML.

Pour faire des requêtes à ces services Web, nous avons besoin de moyens pour envoyer des requêtes HTTP depuis notre code JavaScript. Dans ce cours, nous examinerons comment le faire en utilisant plusieurs méthodes disponibles en JavaScript.

## 1. L'objet `XMLHttpRequest` (XHR)

Avant l'avènement des Promises et de l'API `fetch`, `XMLHttpRequest` était la principale méthode pour effectuer des requêtes AJAX.

**Exemple** :

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
    console.log(response);
  }
};
xhr.send();
```

### Inconvénients

- API complexe et nécessite beaucoup de code pour des opérations simples.
- Gestion d'erreur pas toujours intuitive.
- Pas basé sur des promesses, rendant la composition de requêtes difficile.

## 2. L'API `fetch`

`fetch` est une méthode moderne pour effectuer des requêtes réseau. Elle est basée sur les Promises, rendant le code plus lisible et facile à gérer.

**Exemple** :

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erreur:', error));
```

### Avantages

- Syntaxe concise.
- Basé sur les Promises, facilitant la gestion des erreurs et la composition.
- Peut être utilisé avec `async/await` pour un code encore plus propre.

## 3. Utilisation des paramètres et des en-têtes

Avec `fetch`, vous pouvez facilement ajouter des en-têtes ou envoyer des données avec une méthode `POST`.

**Exemple** :

```js
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erreur:', error));
```

## 4. Bibliothèques tierces

Il existe de nombreuses bibliothèques tierces qui offrent des fonctionnalités supplémentaires ou une syntaxe différente pour effectuer des requêtes. Exemples : Axios, jQuery.ajax, etc.

**Exemple avec Axios** :

```js
axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Erreur:', error));
```

## Conclusion

Effectuer des requêtes API côté front en JavaScript est essentiel pour créer des applications Web interactives modernes. Bien que `XMLHttpRequest` soit toujours disponible et utilisé, la méthode `fetch` et les bibliothèques tierces comme Axios sont généralement préférées pour leur syntaxe propre et leurs fonctionnalités avancées.

## Liste d'API publiques

- https://talks.freelancerepublik.com/api-publiques-gratuites-developpement-site-app/
- https://pokeapi.co/
- https://api-docs.igdb.com/#account-creation
etc...