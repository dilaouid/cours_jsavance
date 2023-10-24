# Introduction aux classes en JavaScript

Le concept de classes est fondamental dans de nombreux langages de programmation orientés objet. En JavaScript, bien que les objets et les prototypes aient toujours été au cœur du langage, la syntaxe des classes a été introduite dans ES6 (ES2015) pour offrir une manière plus structurée et claire de créer des objets et de gérer l'héritage.

---

## 1. **Qu'est-ce qu'une classe?**

Une classe est un "modèle" pour créer des objets. Elle encapsule les données pour l'objet et fournit des méthodes pour traiter ces données.

---

## 2. **Déclaration d'une classe**

Pour déclarer une classe, vous utilisez le mot-clé `class` suivi du nom de la classe.

**Exemple** :

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

Dans l'exemple ci-dessus, la classe `Person` a un constructeur (une méthode spéciale appelée lors de la création d'un objet) et une méthode `greet`.

---

## 3. **Création d'un objet à partir d'une classe**

Une fois que vous avez défini une classe, vous pouvez créer un nouvel objet à partir de cette classe en utilisant le mot-clé `new`.

**Exemple** :

```js
const john = new Person('John', 25);
john.greet();  // "Hello, my name is John and I am 25 years old."
```

---

## 4. **Héritage**

Les classes en JavaScript supportent le concept d'héritage, ce qui permet à une classe d'hériter des propriétés et des méthodes d'une autre classe. On utilise le mot-clé `extends` pour cela.

**Exemple** :

```js
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);  // Appel au constructeur de la classe parent
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}.`);
  }
}

const alice = new Student('Alice', 20, 'Mathematics');
alice.greet();  // "Hello, my name is Alice and I am 20 years old."
alice.study();  // "Alice is studying Mathematics."
```

Dans l'exemple ci-dessus, la classe `Student` hérite de la classe `Person` et ajoute une propriété supplémentaire (`course`) ainsi qu'une nouvelle méthode (`study`).

---

## 5. **Getters et Setters**

Les classes en JavaScript peuvent avoir des méthodes particulières appelées getters et setters, qui permettent de définir comment obtenir ou définir la valeur des propriétés.

**Exemple** :

```js
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log("Invalid width value.");
    }
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area);  // 50
rect.width = 15;
console.log(rect.area);  // 75
```

Notez que la notation `this._width` est une convention pour indiquer que la propriété est privée et ne doit pas être modifiée directement. Cependant, depuis ES2022, il existe une nouvelle syntaxe pour définir des propriétés privées, qui utilise le caractère `#` au début du nom de la propriété. Par exemple:

```js
class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get area() {
    return this.#width * this.#height;
  }

  set width(value) {
    if (value > 0) {
      this.#width = value;
    } else {
      console.log("Invalid width value.");
    }
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area);  // 50
console.log(rect.height);  // undefined
```

---

## 6. **Conclusion**

Les classes en JavaScript fournissent une syntaxe claire et structurée pour créer et gérer des objets, tout en intégrant les concepts fondamentaux de la programmation orientée objet tels que l'héritage. Bien que JavaScript ait une nature prototypale, les classes offrent une approche plus conventionnelle et accessible pour de nombreux développeurs venant d'autres langages
