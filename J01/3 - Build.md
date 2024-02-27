# Build et Déploiement avec Vite

Une fois que vous avez développé votre application React, l'étape suivante consiste à préparer votre code pour la production. C'est là que le processus de build entre en jeu. Vite offre un processus de build optimisé qui prépare votre application pour le déploiement en minimisant la taille du code et en améliorant les performances. Voyons comment cela fonctionne et pourquoi il est important de bien gérer vos dossiers de build.

## Comprendre le Build

Le processus de build transforme votre code de développement (situé dans le dossier `src`) en code de production prêt à être déployé sur un serveur web. Ce processus inclut la transpilation de JSX en JavaScript vanilla, l'optimisation des images et des fichiers CSS, et le bundling de vos modules JavaScript. Vite utilise Rollup sous le capot pour ces tâches, garantissant ainsi une efficacité maximale.

### Étapes du Build avec Vite

1. **Transpilation :** Convertit le JSX et les dernières fonctionnalités JavaScript en code compatible avec la majorité des navigateurs.
2. **Bundling :** Regroupe tous vos fichiers JavaScript, CSS, et autres ressources en un nombre réduit de fichiers pour réduire le nombre de requêtes HTTP nécessaires.
3. **Minification :** Réduit la taille du code en éliminant les espaces blancs inutiles, en raccourcissant les noms de variables, et en supprimant les commentaires.
4. **Tree Shaking :** Élimine le code mort ou inutilisé de votre bundle final, assurant que seul le code nécessaire est inclus.
5. **Optimisation des Assets :** Réduit la taille des images et d'autres ressources pour accélérer le temps de chargement de votre application.

## Exécuter le Build

Pour créer une version de production de votre application React, exécutez la commande suivante dans le terminal :

```sh
npm run build
```

Cette commande indique à Vite de commencer le processus de build. Une fois terminé, Vite génère un dossier `dist` dans la racine de votre projet. Ce dossier contient le code de production optimisé et est ce que vous déploierez sur votre serveur de production.

## Importance de `dist` et `prod`

- **Dossier `dist` :** Le nom `dist` est une abréviation de "distribution". Il s'agit d'une convention courante pour nommer le dossier contenant le code prêt à être déployé. Ce dossier est complètement séparé de votre code source (`src`), ce qui signifie que les modifications apportées au code source n'affectent pas directement le contenu de `dist`.
- **Environnement de Production (`prod`) :** Lorsque vous construisez votre application pour la production, Vite optimise votre build pour cet environnement. Cela signifie activer toutes les optimisations mentionnées ci-dessus pour assurer que votre application est aussi rapide et légère que possible. Il est crucial de tester votre application dans cet environnement avant le déploiement pour s'assurer qu'elle fonctionne comme prévu.

## Bonnes Pratiques

- **Ne Jamais Modifier Directement dans `dist` :** Tout changement doit être effectué dans le dossier `src` et suivi d'un nouveau build pour refléter ces changements dans `dist`.
- **Versionner `src`, Pas `dist` :** Votre code source est ce qui doit être inclus dans votre système de contrôle de version (comme Git), pas le contenu du dossier `dist` qui est généré.

## Conclusion

Le build est une étape essentielle dans le développement d'applications web modernes. Avec Vite, ce processus est rendu aussi simple et efficace que possible, vous permettant de concentrer vos efforts sur le développement plutôt que sur la configuration de l'outil de build. En suivant les bonnes pratiques et en comprenant l'importance des dossiers `dist` et `prod`, vous vous assurez que votre application est prête pour le monde.
