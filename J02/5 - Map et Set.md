# Structures de données : Map et Set

JavaScript offre un ensemble riche de structures de données, dont deux sont particulièrement uniques et utiles : `Map` et `Set`.

---

## 1. Map

Un objet `Map` stocke des paires clé-valeur. Contrairement aux objets ordinaires, les clés d'une Map peuvent être des objets, des fonctions ou n'importe quel autre type primitif.

### Caractéristiques de Map

- La **clé** dans `Map` est ordonnée, c'est-à-dire que les clés sont arrangées dans l'ordre de leur insertion.
- Il est possible d'utiliser des **objets** comme clés.

### Exemples de Map

```js
const myMap = new Map();

myMap.set('name', 'Gregoire');
myMap.set(1, 'UNO');
myMap.set({}, 'empty');

console.log(myMap.get('name')); // Gregoire
console.log(myMap.get(1));      // UNO
```

### Méthodes principales de Map

- **set(key, value)** : Ajoute une paire clé-valeur à la Map.
- **get(key)** : Récupère la valeur associée à une clé.
- **has(key)** : Retourne `true` si la clé existe, `false` sinon.
- **delete(key)** : Supprime la paire clé-valeur spécifiée.
- **clear()** : Supprime toutes les paires clé-valeur de la Map.
- **size** : Retourne le nombre de paires clé-valeur.

---

## 2. Set

Un objet `Set` est une collection de valeurs où chaque valeur doit être unique. Autrement dit, la même valeur ne peut pas apparaître plus d'une fois dans un Set.

### Caractéristiques de Set

- Les éléments dans `Set` sont **ordonnés**. L'ordre des éléments est basé sur l'ordre de leur insertion.
- Les **doublons** sont automatiquement **supprimés**.

### Exemples de Set

```js
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // Ceci n'ajoute rien car 2 est déjà présent

console.log(mySet.has(1));  // true
console.log(mySet.size);    // 2
```

### Méthodes principales de Set

- **add(value)** : Ajoute une nouvelle valeur au Set.
- **delete(value)** : Supprime la valeur spécifiée.
- **has(value)** : Retourne `true` si la valeur existe, `false` sinon.
- **clear()** : Supprime tous les éléments du Set.
- **size** : Retourne le nombre d'éléments dans le Set.

---

Ces deux structures offrent des fonctionnalités distinctes qui ne sont pas disponibles avec les objets ou tableaux JavaScript ordinaires. Elles peuvent être essentielles pour résoudre des problèmes spécifiques où des contraintes de clé unique (dans le cas de Set) ou des clés non-string (dans le cas de Map) sont nécessaires.
