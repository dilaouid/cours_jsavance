# Héritage et Sous-classes en JavaScript

L'héritage est un concept fondamental de la programmation orientée objet (POO). Il permet à une classe d'hériter des propriétés et des méthodes d'une autre classe, favorisant ainsi la réutilisation du code et l'établissement de relations hiérarchiques entre les classes.

## 1. **Principe de l'héritage**

L'idée de base de l'héritage est qu'une "sous-classe" hérite des caractéristiques d'une "classe mère" tout en ayant la possibilité d'ajouter ou de surcharger certaines d'entre elles.

En termes simples :

- Si vous avez une classe "Véhicule" avec des propriétés comme "vitesse" et "taille", vous pouvez avoir une sous-classe "Voiture" qui hérite de toutes les propriétés de "Véhicule" tout en ajoutant d'autres spécifiques comme "nombre de portes".

## 2. **Utilisation de `extends`**

En JavaScript, le mot-clé `extends` est utilisé pour créer une classe qui hérite d'une autre classe.

**Exemple** :

```js
class Vehicule {
  constructor(vitesse, taille) {
    this.vitesse = vitesse;
    this.taille = taille;
  }
  deplacer() {
    console.log("Le véhicule se déplace");
  }
}

class Voiture extends Vehicule {
  constructor(vitesse, taille, nbPortes) {
    super(vitesse, taille); // Appel du constructeur de la classe mère
    this.nbPortes = nbPortes;
  }
  klaxonner() {
    console.log("Tut tut!");
  }
}
```

## 3. **Le mot-clé `super`**

Le mot-clé `super` est utilisé de deux manières principales dans l'héritage:

- **Dans le constructeur de la sous-classe** : Il sert à appeler le constructeur de la classe parente.
  
- **Dans les méthodes de la sous-classe** : Il sert à appeler des méthodes de la classe parente qui ont été surchargées (redéfinies) dans la sous-classe.

**Exemple** :

```js
class Moto extends Vehicule {
  deplacer() {
    super.deplacer(); // Appelle la méthode deplacer de la classe Vehicule
    console.log("La moto roule rapidement!");
  }
}
```

---

## 4. **Redéfinir des méthodes**

La redéfinition des méthodes fait référence à la capacité d'une sous-classe de fournir une implémentation spécifique d'une méthode déjà définie dans sa classe parente. C'est une forme de polymorphisme. Lors de la redéfinition, la sous-classe peut conserver, modifier ou étendre le comportement de la méthode héritée.

**Exemple** :

```js
class Vehicule {
  deplacer() {
    console.log("Le véhicule se déplace");
  }
}

class Avion extends Vehicule {
  deplacer() {
    super.deplacer(); // Appelle la méthode "deplacer" de la classe parente "Vehicule"
    console.log("L'avion vole dans le ciel!");
  }
}
```

Dans cet exemple, la méthode `deplacer` de la classe `Avion` redéfinit la méthode `deplacer` héritée de la classe `Vehicule`. En utilisant `super.deplacer()`, nous conservons le comportement initial de la méthode parente et ajoutons ensuite un comportement supplémentaire spécifique à la classe `Avion`.

Il est recommandé, mais pas toujours obligatoire, d'appeler la méthode parente lors de la redéfinition. Tout dépend du comportement souhaité pour la sous-classe.

## 5. **Polymorphisme**

Le polymorphisme est un concept lié à l'héritage. C'est la capacité d'une sous-classe à être traitée comme si elle était une instance de la classe parente. En JavaScript, grâce à l'héritage, le polymorphisme se manifeste naturellement car une sous-classe est toujours une instance de sa classe parente.

## 6. **Conseils et considérations**

- L'héritage doit être utilisé judicieusement. Tout ne doit pas nécessairement être une sous-classe de quelque chose. Parfois, la composition (combiner des objets simples pour en créer des plus complexes) est une meilleure approche.
- Il est possible d'hériter de classes intégrées comme `Array` ou `Error`, mais cela peut être complexe.
- Assurez-vous de bien comprendre le fonctionnement de la chaîne de prototypes (`prototype chain`) en JavaScript, car elle est intimement liée à l'héritage des classes.

## 7. **Conclusion**

L'héritage et les sous-classes sont des outils puissants en JavaScript pour structurer votre code, favoriser la réutilisation et établir des hiérarchies claires entre les objets. Toutefois, comme pour tout outil, ils doivent être utilisés judicieusement et en connaissance de cause.
