# Sujet de TP - React

**Objectif :** Créer une application React simple qui revoit toutes les notions abordées depuis mardi (sauf Redux). Vous êtes libre de choisir le thème de votre application, suivez votre inspiration ! Mais ça serait bien de faire une base sur laquelle rebondir pour un de vos projets perso pour impressionner les recruteurs, mais surtout vous-même, voir les progrès que vous avez fait en une semaine !

## Spécifications Techniques

- **Utilisation de React Router :** Votre application doit inclure au moins 3 routes/pages différentes :
  1. Une page d'accueil (`/`) qui présente l'application.
  2. Une page qui réalise un appel API au chargement (n'importe lequel, mais il faut que ce soit un appel API). En cours, nous avons utilisé  [https://jsonplaceholder.typicode.com/](JSONPlaceholder), mais vous pouvez utiliser n'importe quelle API. Vous pouvez par exemple afficher une liste de posts, de photos, de commentaires, etc...
  Des exemples d'APIs, seraient par exemple : [https://jsonplaceholder.typicode.com/](JSONPlaceholder), [https://pokeapi.co/](PokeAPI), [https://swapi.dev/](Star Wars API), [https://www.thecocktaildb.com/](The Cocktail DB), [https://www.themealdb.com/](The Meal DB), [https://www.thecocktaildb.com/](The Cocktail DB), [https://www.themoviedb.org/](The Movie DB), [https://www.weatherapi.com/](Weather API), [https://www.metaweather.com/](MetaWeather), [https://www.openbrewerydb.org/](Open Brewery). Ou alors une au choix, comme vous voulez !
  3. Une page qui a un component enfant auquel vous passer une `props` (c'est à dire une page avec un component, et à l'intérieur de ce component, un autre component)

- **Components :** Utilisez le plus de components possibles pour organiser votre application. Par exemple, vous pourriez avoir un composant `Navbar` pour faire votre barre de navigation, un composant `Footer` pour faire un pied de page, etc...

- **useState et useEffect :** Utilisez `useState` au moins une fois. Employez `useEffect` pour charger les données de l'API lorsque le composant est monté ou lorsque des dépendances changent.

## Livrables

- Code source de l'application sur GitHub

Une question ? Besoin d'un code review ? Comme je vous l'ai dis, envoyez moi un mail ! (je ne l'écris pas ici pour pas que mon adresse ne leak, mais demandez à vos camarades ! 😉)

---

**Conseil :** Commencez petit, assurez-vous que les bases fonctionnent bien avant d'ajouter des fonctionnalités supplémentaires. Bon codage ! 🚀
Le sujet est simple, partez d'une base nouvelle, et ne vous limitez pas aux consignes si vous voulez allez plus loin. Par exemple, faites du css pourquoi pas ! Une petite homepage sympathique.
Mais l'essentiel, reste sur les acquis des components, du routing, de certains hooks, et des appels API. C'est le but de ce TP !
