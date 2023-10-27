# Cheatsheet

| Terme              | Définition                                                                      | Exemple                                                                                       |
|--------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| Scope             | Visibilité d'une variable ou fonction dans une partie du code.                  | let x = 10; // scope global                                                      |
| this              | Référence à l'objet actuellement en cours d'exécution.                          | let obj = {name: "Alice", greet: function() { console.log("Hello, " + this.name) }}; |
| HOF               | Fonction qui prend une ou plusieurs fonctions en arguments ou retourne une fonction. | [1,2,3].map(function(x) { return x*2; });                                      |
| Event Listener    | Fonction qui écoute un événement particulier (ex: clic) pour exécuter du code.  | document.addEventListener('click', function() { alert('Clicked!'); });         |
| Map               | Collection de paires clé/valeur.                                                 | let map = new Map(); map.set('key', 'value');                                   |
| Set               | Collection d'éléments uniques.                                                   | let set = new Set(); set.add(1);                                                |
| Promises          | Objet représentant une valeur qui pourrait être disponible dans le futur.       | new Promise((resolve, reject) => { resolve(42); });                             |
| Async/Await       | Facilite l'écriture de code asynchrone comme s'il était synchrone.               | async function fetchData() { let data = await someAsyncFunction(); }            |
| Itération avec for | Boucle permettant de répéter des instructions.                                  | for (let i = 0; i < 3; i++) { console.log(i); }                                 |
| Spread Operator   | Permet de décomposer les éléments d'un objet ou tableau.                        | let nums = [1, 2, 3]; let copy = [...nums];                                      |
| Destructuring     | Extraire des données de tableaux ou objets.                                     | let [a, b] = [1, 2];                                                             |
| Objets            | Ensemble de paires clé/valeur.                                                  | let obj = {name: "Bob", age: 30};                                                |
| Attributs         | Valeurs associées à des noms spécifiques dans un objet.                         | let car = {color: "red"};                                                        |
| Propriétés        | Valeur d'un objet qui peut être de n'importe quel type (équivalent à un attribut). | let person = {name: "Alice", age: 25};                                           |
| Index             | Position d'un élément dans un tableau.                                          | let fruits = ["apple", "banana", "cherry"]; console.log(fruits[1]); // banana   |
| Callback           | Fonction passée en tant qu'argument à une autre fonction.                       | setTimeout(function() { console.log('Hello'); }, 1000);                                        |
| Closure            | Fonction ayant accès à la portée d'une fonction externe englobante.             | function outer() { let x = 10; return function inner() { return x; }; }                        |
| Arrow Function     | Version courte d'une fonction. Pas de `this` propre.                            | const add = (a, b) => a + b;                                                                    |
| Module             | Code regroupé pour réutilisation.                                               | import { myFunction } from 'myModule';                                                         |
| Template Literals  | Chaînes de caractères permettant d'intégrer des expressions.                    | let name = "Alice"; console.log(`Hello, ${name}!`);                                            |
| Class              | Blueprint pour créer des objets avec des propriétés et des méthodes partagées.  | class Car { constructor(brand) { this.carname = brand; } drive() { console.log('Vroom!'); }}  |
| Constructor        | Fonction utilisée pour instancier un objet.                                     | function Car(brand) { this.carname = brand; }                                                  |
| Inheritance        | Mécanisme permettant à une classe de hériter des propriétés d'une autre classe. | class Model extends Car { constructor(brand, mod) { super(brand); this.model = mod; }}        |
| Fetch              | API pour récupérer des ressources à travers le réseau.                          | `fetch('https://api.example.com/data')`.then(response => response.json()).then(data => console.log(data)); |
| Ternary Operator   | Raccourci pour les déclarations `if...else`.                                    | let result = (a > b) ? 'a is greater' : 'b is greater';                                         |
| Truthy & Falsy     | Valeurs qui sont évaluées comme vrai ou faux dans un contexte booléen.          | Truthy: 'string', 1, {}; Falsy: 0, '', null, undefined, NaN                                     |
| Coercion           | Conversion automatique ou explicite d'une valeur d'un type à un autre.          | '5' + 1 = '51'; '5' - 1 = 4                                                                    |
| Polyfill           | Code qui implémente une fonctionnalité sur des navigateurs qui ne la prennent pas en charge. | if (!Array.prototype.includes) { Array.prototype.includes = function() { ... } }               |
| Hoisting           | Déplacer les déclarations de variables et de fonctions en haut de leur portée.  | console.log(x); // undefined var x = 10;                                                      |
| EventListener      | Fonction qui écoute un événement particulier (ex: clic) pour exécuter du code.  | document.addEventListener('click', function() { alert('Clicked!'); });                       |
| Event              | Action qui se produit dans le système (ex: clic, chargement de page).           | document.addEventListener('click', function() { alert('Clicked!'); });                       |
| Event Handler      | Fonction qui s'exécute en réponse à un événement.                               | function handleClick() { alert('Clicked!'); }                                                 |
| Instance           | Objet créé à partir d'une classe.                                               | let myCar = new Car('Ford');                                                                   |
| Prototype          | Propriété d'un objet qui permet d'ajouter des propriétés et des méthodes à un objet. | Car.prototype.color = 'red'; myCar.color; // red                                              |
| Variable          | Nom qui fait référence à une valeur.                                            | let x = 10; // x est une variable qui fait référence à la valeur 10.                        |
| Regex              | Séquence de caractères qui décrit un modèle de recherche.                       | let regex = /ab+c/;                                                                            |
| JSON               | Format de données textuelles pour l'échange de données.                         | let json = '{"name":"John", "age":30, "city":"New York"}';                                    |
| DOM                | Représentation du document HTML sous forme d'arbre.                             | document.getElementById('myDiv');                                                              |
| Node               | Élément dans l'arbre DOM.                                                       | document.getElementById('myDiv');                                                              |
| Element            | Type d'objet représentant un élément HTML.                                      | document.getElementById('myDiv');                                                              |
| Attribute          | Valeur associée à un élément HTML.                                              | `<img src="image.jpg">` // src est un attribut de l'élément `<img>`                              |

## Notes

**Différences entre attributs et propriétés d'un objet**
En JavaScript, lorsqu'on parle d'**objets** :

- Une **propriété** est une valeur associée à une clé au sein de cet objet.
- L'**attribut** est un terme qui n'est généralement pas utilisé pour les objets standards en JavaScript, sauf quand on parle d'éléments DOM (c'est-à-dire des éléments de la page Web).

Quand on travaille avec des éléments DOM :

- Un **attribut** est une valeur que vous pouvez voir directement dans le code HTML (comme `src` dans `<img src="image.jpg">`).
- Une **propriété** est une caractéristique de l'objet JavaScript qui représente cet élément DOM dans le navigateur.

Exemple :
Si on a une image `<img id="myImg" src="image.jpg">` dans le HTML :

- `src` est un **attribut** de l'élément `<img>`.
- Si on accède à cet élément en JavaScript avec `document.getElementById("myImg")`, cet élément a une **propriété** `src` qui reflète l'attribut `src` mais peut avoir une valeur différente si elle a été modifiée après le chargement initial de la page.

En résumé, dans le contexte de JavaScript pur, on parle généralement de **propriétés**. Dans le contexte des éléments DOM, les **attributs** sont ce que vous voyez dans le code HTML, tandis que les **propriétés** sont des caractéristiques de l'objet JavaScript correspondant à cet élément.

**Différences entre `==` et `===`**
`==` compare les valeurs, tandis que `===` compare les valeurs et les types.

```js
1 == '1' // true
1 === '1' // false
```

**Différences entre `null` et `undefined`**

`null` est une valeur spéciale qui signifie "aucune valeur". `undefined` est une valeur spéciale qui signifie "valeur non définie".

```js
let x = null;
console.log(x); // null

let y;
console.log(y); // undefined
```

**Différences entre `let`, `const` et `var`**

`let` et `const` sont des variables déclarées avec un scope de bloc. `var` est une variable déclarée avec un scope de fonction.

```js
if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}

console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
console.log(z); // 30
```

**Différences entre `var` et `let`**

`var` peut être redéclaré et mis à jour. `let` peut être mis à jour mais pas redéclaré.

```js
var x = 10;
var x = 20; // OK

let y = 10;
let y = 20; // SyntaxError: Identifier 'y' has already been declared
```
