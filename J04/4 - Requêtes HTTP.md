# Requêtes HTTP

## Introduction

HTTP (Hypertext Transfer Protocol) est le protocole sous-jacent utilisé par le Web. Il permet la communication entre les navigateurs Web (clients) et les serveurs. Une requête HTTP est un message envoyé par le client au serveur pour obtenir ou soumettre des données.

## Structure d'une requête HTTP

Chaque requête HTTP est composée de trois parties principales :

1. **Méthod** : Indique l'action que le client souhaite effectuer. Les méthodes HTTP les plus courantes sont :
    - `GET` : Demande une ressource.
    - `POST` : Soumet des données à traiter à une ressource spécifique.
    - `PUT` : Met à jour une ressource existante ou en crée une nouvelle.
    - `DELETE` : Supprime une ressource.
    - `PATCH`: Applique des modifications partielles à une ressource.
    - Il existe d'autres méthodes, mais celles-ci sont les plus courantes.

2. **En-têtes (Headers)** : Fournissent des informations supplémentaires sur la requête ou sur les données envoyées. Par exemple, l'en-tête `Content-Type` indique le type de données envoyées (comme `application/json` pour un objet JSON).

3. **Body** : Contient les données envoyées au serveur (dans le cas des méthodes comme POST ou PUT). Pour une méthode `GET`, le corps est généralement vide.

## Exemple de requête HTTP

```http
POST /data HTTP/1.1
Host: api.example.com
User-Agent: Mozilla/5.0
Content-Type: application/json
Content-Length: 81

{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

Dans cet exemple :

- La **method** est `POST`.
- L'URL ciblée est `/data`.
- Il y a plusieurs **headers**, dont `Host`, `User-Agent`, `Content-Type` et `Content-Length`.
- Le **body** contient un objet JSON.

## Réponse HTTP

Après avoir envoyé une requête HTTP, le serveur renvoie une réponse. Tout comme les requêtes, les réponses HTTP ont une structure, comprenant un statut, des en-têtes et un corps.

1. **Statut** : Il s'agit d'un code à trois chiffres indiquant le résultat de la requête. Les plus courants sont :
    - `200 OK` : La requête a réussi.
    - `404 Not Found` : La ressource demandée n'existe pas.
    - `500 Internal Server Error` : Erreur côté serveur.
    - Il existe de nombreux autres codes de statut, chacun ayant une signification spécifique.

2. **Headers** : Tout comme pour les requêtes, les en-têtes fournissent des informations supplémentaires sur la réponse.

3. **Body** : Contient les données renvoyées par le serveur, si applicable.

## Conclusion

Les requêtes HTTP sont essentielles au fonctionnement du Web. Elles permettent aux clients et aux serveurs de communiquer et d'échanger des informations. Une compréhension approfondie des requêtes HTTP est essentielle pour quiconque travaille dans le développement Web ou les domaines connexes.
