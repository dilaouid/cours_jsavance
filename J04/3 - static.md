# Attributs statiques en JavaScript

Dans la programmation orientée objet, en plus des attributs et méthodes typiques associés à des instances d'une classe, nous pouvons également définir des attributs et méthodes qui sont associés à la classe elle-même plutôt qu'à ses instances. Ces attributs et méthodes sont appelés "statiques".

## 1. **Qu'est-ce qu'un attribut statique ?**

Un attribut statique appartient à la classe elle-même et non à une instance de la classe. Cela signifie qu'il est partagé entre toutes les instances de la classe, et il est accessible sans avoir à créer une instance de la classe.

## 2. **Définir un attribut statique**

En JavaScript, nous utilisons le mot-clé `static` pour définir un attribut statique.

**Exemple**:

```js
class Circle {
  static PI = 3.141592653589793;

  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Circle.PI * this.radius * this.radius;
  }
}

console.log(Circle.PI);  // 3.141592653589793
```

Dans cet exemple, `PI` est un attribut statique de la classe `Circle`. Il est accessible via la classe elle-même (`Circle.PI`) et non via une instance de la classe.

## 3. **Quand utiliser des attributs statiques ?**

Les attributs statiques sont utiles lorsque nous avons une valeur qui est constante pour toutes les instances d'une classe ou qui doit être partagée entre toutes les instances. Dans l'exemple ci-dessus, la valeur de pi (π) est constante pour tous les cercles, il est donc logique d'en faire un attribut statique.

## 4. **Points à retenir**

- Les attributs statiques appartiennent à la classe elle-même et non à ses instances.
- Ils sont partagés entre toutes les instances de la classe.
- Ils sont définis en utilisant le mot-clé `static`.
- Ils peuvent être accessibles directement à partir de la classe et non à partir d'une instance de la classe.

### 5. **Conclusion**

Les attributs statiques sont un outil pratique pour stocker des informations qui sont pertinentes pour une classe dans son ensemble plutôt que pour des instances individuelles. Ils permettent une gestion plus propre et plus logique de ces informations, en évitant d'avoir à les répéter pour chaque instance.
