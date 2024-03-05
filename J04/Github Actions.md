# Guide pour le déploiement continu

Le déploiement continu permet de publier automatiquement les nouvelles versions de votre application sur un serveur à chaque fois que vous poussez des changements sur votre dépôt GitHub.

## Étape 1: Configuration

1. **Accès SSH :** Assurez-vous d'avoir un accès SSH configuré à votre serveur. Vous aurez besoin des identifiants SSH pour automatiser le processus de déploiement.

2. **PHP et Composer :** Vérifiez que PHP et Composer sont installés sur votre serveur, car ils sont nécessaires pour déployer une application Symfony.

## Étape 2: Préparation de votre app Symfony

1. **Environnement de Production :** Configurez votre application Symfony pour l'environnement de production. Assurez-vous que toutes les variables d'environnement nécessaires sont configurées correctement.

2. **Dépendances :** Assurez-vous que votre fichier `composer.json` est à jour et que toutes les dépendances nécessaires pour la production sont correctement définies.

## Étape 3: Script de déploiement

1. **Script Bash :** Créez un script bash (`deploy.sh`) dans votre projet Symfony qui contiendra les commandes pour mettre à jour le code sur le serveur, installer les dépendances et effectuer toute autre tâche nécessaire au déploiement (migrations, vidage de cache, etc.).

    ```bash
    #!/bin/bash
    cd /path/pour/votre/projet/symfo
    git pull origin main
    composer install --no-dev --optimize-autoloader
    php bin/console cache:clear --env=prod
    php bin/console doctrine:migrations:migrate --no-interaction
    ```

    **Remarque :** Remplacez `/path/pour/votre/projet/symfo` par le chemin réel de votre projet sur le serveur et `main` par le nom de votre branche principale si différent.

## Étape 4: Configuration du dépôt GitHub

1. **GitHub Actions :** Utilisez GitHub Actions pour automatiser le déploiement. Dans votre dépôt GitHub, créez un nouveau fichier de workflow dans le dossier `.github/workflows` (par exemple, `deploy.yml`).

2. **Workflow de déploiement :** Configurez le workflow pour se connecter à votre serveur via SSH et exécuter le script de déploiement à chaque `push` sur la branche principale. Vous avez par exemple `appleboy/ssh-action` pour exécuter des commandes SSH sur votre serveur : [appleboy/ssh-action](https://github.com/marketplace/actions/ssh-remote-commands)

    ```yaml
    name: Deploy

    on:
      push:
        branches:
          - main

    jobs:
      deploy:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout code
            uses: actions/checkout@v2

          - name: Deploy
            uses: appleboy/ssh-action@master
            with:
              host: ${{ secrets.SERVER_HOST }}
              username: ${{ secrets.SERVER_USER }}
              key: ${{ secrets.SERVER_SSH_KEY }}
              script: deploy.sh
    ```

3. **GitHub Secrets:** Dans les paramètres de votre dépôt GitHub, ajoutez des secrets pour `SERVER_HOST`, `SERVER_USER`, et `SERVER_SSH_KEY` avec les informations correspondantes de votre serveur. Pour les configurer, allez dans "Settings" > "Secrets and variables" > "Actions"

    - `SERVER_HOST` : Adresse IP ou nom de domaine de votre serveur.
    - `SERVER_USER` : Nom d'utilisateur pour se connecter au serveur via SSH.
    - `SERVER_SSH_KEY` : Clé privée SSH à utiliser pour l'authentification.

## Étape 5: Tester le Déploiement

1. **Pusher :** Faites un `push` de vos changements sur la branche configurée (par exemple, `main`) et observez l'exécution de l'action de déploiement dans l'onglet "Actions" de GitHub.

2. **Vérification :** Vérifiez que votre application est bien mise à jour sur le serveur après l'exécution de l'action.
