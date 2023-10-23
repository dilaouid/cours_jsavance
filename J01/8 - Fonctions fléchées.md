# Fonctions fléchées

Les fonctions fléchées, introduites avec ECMAScript 6 (ou ES6), sont une nouvelle manière d'écrire des fonctions en JavaScript. Elles offrent une syntaxe plus concise que les fonctions traditionnelles et comportent quelques différences importantes en matière de portée et de comportement.

## Syntaxe

**Forme basique** :

```js
const functionName = (param1, param2) => {
  // corps de la fonction
};
```

**Si la fonction n'a qu'un seul paramètre** :

```js
const functionName = param => {
  // corps de la fonction
};
```

**Pour les fonctions renvoyant directement une valeur** :

```js
const add = (a, b) => a + b;
```

## Différences principales avec les fonctions traditionnelles

1. **Pas de `this` propre** :

   Considérons un objet avec une méthode qui utilise une fonction fléchée :

   ```js
   const obj = {
     name: 'John',
     sayHello: () => {
       console.log(`Hello, my name is ${this.name}`);
     }
   };

   obj.sayHello();  // "Hello, my name is undefined"
   ```

   Dans cet exemple, `this.name` est `undefined` car la fonction fléchée `sayHello` capture `this` du contexte englobant (qui est `window` dans un navigateur) plutôt que l'objet `obj`.

    Pour une fonction non fléchée (aussi appelée fonction traditionnelle ou fonction régulière), la valeur de `this` est déterminée par la manière dont la fonction est appelée. Si une méthode régulière est appelée sur un objet, `this` se réfère à l'objet sur lequel la méthode a été appelée.

    Voici un exemple utilisant une fonction régulière dans le contexte de l'objet précédent :

    ```js
    const obj = {
      name: 'John',
      sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };

    obj.sayHello();  // "Hello, my name is John"
    ```

    Dans cet exemple, lorsque vous appelez `obj.sayHello()`, `this` à l'intérieur de la méthode `sayHello` se réfère à `obj`. C'est pourquoi `this.name` renvoie correctement "John".

    En revanche, avec une fonction fléchée, `this` n'est pas lié au moment de l'appel, mais plutôt au moment de la déclaration de la fonction. C'est pourquoi dans l'exemple précédent avec la fonction fléchée, `this.name` était `undefined` : la fonction fléchée a capturé le `this` de son contexte englobant (en l'occurrence `window` dans un navigateur, où `name` n'est pas défini).

2. **Pas d' `arguments` propre** :

   Prenons une fonction classique qui contient une fonction fléchée :

   ```js
   function outerFunction() {
     return () => {
       console.log(arguments[0]);
     };
   }

   const arrowFunc = outerFunction('Hello');
   arrowFunc();  // "Hello"
   ```

   Ici, la fonction fléchée affiche `Hello` car elle utilise l'objet `arguments` de la `outerFunction`, son contexte englobant.

    En revanche, si nous remplaçons la fonction fléchée par une fonction classique, nous obtenons une erreur :
  
    ```js
    function outerFunction() {
      return function() {
        console.log(arguments[0]);
      };
    }

    const regularFunc = outerFunction('Hello');
    regularFunc();  // TypeError: arguments is not defined
    ```

    Cela est dû au fait que les fonctions fléchées n'ont pas leur propre objet `arguments`. Si vous essayez d'accéder à `arguments` à l'intérieur d'une fonction fléchée, vous obtiendrez une erreur.

3. **Non constructibles** :

   Si nous essayons d'utiliser une fonction fléchée comme constructeur, cela générera une erreur.

   ```js
   const ArrowFunction = () => {};

   const instance = new ArrowFunction();  // TypeError: ArrowFunction is not a constructor
   ```

    Les fonctions fléchées ne peuvent pas être utilisées avec `new` car elles n'ont pas de `prototype`. Les fonctions fléchées sont toujours anonymes et ne peuvent pas être nommées, ce qui signifie qu'elles ne peuvent pas être utilisées comme constructeurs.

    En revanche, les fonctions traditionnelles peuvent être utilisées comme constructeurs :

    ```js
    function RegularFunction() {}
    
    const instance = new RegularFunction();
    ```

    Cela fonctionne car les fonctions traditionnelles ont un `prototype` et peuvent être nommées.

4. **Pas de `prototype`** :

   Les fonctions fléchées n'ont pas de propriété `prototype` contrairement aux fonctions traditionnelles.

   ```js
   const ArrowFunction = () => {};
   console.log(ArrowFunction.prototype);  // undefined
   ```

   Si vous tentez d'accéder à `prototype` sur une fonction fléchée, vous obtiendrez `undefined`.

    En revanche, les fonctions traditionnelles ont un `prototype` :
  
    ```js
    function RegularFunction() {}

    console.log(RegularFunction.prototype);  // RegularFunction {}
    ```

    Cela est dû au fait que les fonctions fléchées ne peuvent pas être utilisées comme constructeurs, contrairement aux fonctions traditionnelles.

## Avantages

1. **Syntaxe concise** : Elles permettent une écriture plus succincte, en particulier pour des fonctions courtes.

2. **Gestion simplifiée de `this`** : Elles sont très utiles dans des situations où vous souhaitez conserver le contexte `this` du code englobant, comme avec les fonctions de rappel.

## Exemples

**Fonction traditionnelle vs fonction fléchée** :

```js
// Fonction traditionnelle
function add(a, b) {
  return a + b;
}

// Fonction fléchée
const add = (a, b) => a + b;
```

**Gestion de `this` avec les fonctions fléchées** :

```js
const timer = {
  seconds: 5,
  start: function() {
    setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        console.log("Time's up!");
      }
    }, 1000);
  }
};

timer.start();
```

Dans cet exemple, la fonction fléchée à l'intérieur de `setInterval` conserve le `this` de la méthode `start`, ce qui signifie que `this.seconds` fait référence à `timer.seconds`.

Néanmoins, si nous remplaçons la fonction fléchée par une fonction traditionnelle, cela ne fonctionnera pas :

```js
const timer = {
  seconds: 5,
  start: function() {
    setInterval(function() {
      this.seconds--;
      if (this.seconds === 0) {
        console.log("Time's up!");
      }
    }, 1000);
  }
};

timer.start();  // TypeError: Cannot read property 'seconds' of undefined
```

Cela est dû au fait que la fonction traditionnelle à l'intérieur de `setInterval` a son propre `this` qui n'est pas lié à `timer`. C'est pourquoi `this.seconds` est `undefined` et nous obtenons une erreur.

### En conclusion

Les fonctions fléchées apportent une syntaxe plus moderne et concise à JavaScript. Tout en étant pratiques, il est essentiel de comprendre leurs particularités, en particulier en ce qui concerne le comportement de `this`, afin d'éviter les pièges courants et d'utiliser ces fonctions de manière efficace.
