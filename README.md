# Street Art Hunter

Bienvenue dans Street Art Hunter, une application web immersive qui vous permet de partir à la chasse et de découvrir des œuvres de street art en fonction de votre géolocalisation.

## Table des matières

- [À propos](#à-propos)
- [Technologies utilisées](#technologies-utilisées)
- [Capture d'écran](#capture-décran)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contribuer](#contribuer)
- [Licence](#licence)


## À propos

Street Art Hunter est une plateforme interactive conçue pour les amateurs d'art urbain. Explorez votre environnement et découvrez des œuvres étonnantes en utilisant votre ordinateur ou votre appareil mobile. Que vous soyez un passionné de street art ou simplement curieux, Street Art Hunter offre une expérience unique de découverte artistique.

## Technologies utilisées

- **React** - Bibliothèque JavaScript pour la construction d'interfaces utilisateur réactives.
- **Sass** - Langage de feuilles de style en cascade pour une stylisation avancée.
- **Express.js** - Cadre d'application web Node.js pour la création d'API robustes.

## Capture d'écran

![Capture d'écran de Street Art Hunter](https://i.postimg.cc/B6Nhrktq/temp-Image3f-Nl-En.jpg)

## Installation

**Initialisation du projet**

- Dans VSCode, installez les plugins **Prettier - Code formatter** et **ESLint** et configurez-les
- Clonez ce dépôt, entrez dedans
- Exécutez la commande `npm install`
- Créez des fichiers d'environnement (`.env`) dans les dossiers `backend` et `frontend` : vous pouvez copier les fichiers `.env.sample` comme point de départ (**ne les supprimez pas**)

**Commandes disponibles**

- `db:migrate` : Exécute le script de migration de la base de données
- `db:seed` : Exécute le script d'initialisation de la base de données
- `dev` : Lance les deux serveurs (frontend + backend) dans un seul terminal
- `dev-front` : Lance le serveur frontend React
- `dev-back` : Lance le serveur backend Express
- `lint` : Exécute les outils de validation (sera exécuté à chaque *commit*, et refusera un code non propre)

**FAQ**

**Outils**

- *Concurrently* : Permet l'exécution simultanée de plusieurs commandes dans la même interface en ligne de commande (CLI)
- *Husky* : Permet d'exécuter des commandes spécifiques déclenchées par des événements *git*
- *Vite* : Alternative à *Create-React-App*, regroupant moins d'outils pour une expérience plus fluide
- *ESLint* : Outil de "Qualité du code", assure l'application des règles choisies
- *Prettier* : Outil de "Qualité du code" également, axé sur le guide de style
- _ Airbnb Standard_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS

**Déploiement avec Traefik**

> ⚠️ Prérequis : Vous devez avoir installé et configuré Traefik sur votre VPS au préalable. https://github.com/WildCodeSchool/vps-traefik-starter-kit/
> 

Pour le déploiement, vous devez vous rendre dans `secrets` → l'application `actions` sur le dépôt GitHub pour insérer via `Nouveau secret de dépôt` :

- SSH_HOST : Adresse IP de votre VPS
- SSH_USER : Nom d'utilisateur SSH pour votre VPS
- SSH_PASSWORD : Mot de passe de connexion SSH pour votre VPS

Et une variable publique depuis l'onglet `/paramètres/variables/actions` :

- PROJECT_NAME : le nom du projet utilisé pour créer le sous-domaine.

> ⚠️ Attention : les tirets bas ne sont pas autorisés. Ils peuvent causer des problèmes avec le certificat Let's Encrypt.
> 

Utilisez cet onglet pour ajouter d'autres variables d'environnement requises pour le projet, le cas échéant.

Seul le backend sera accessible. Le chemin racine `"/"` redirigera vers le dossier dist sur votre frontend. Pour permettre cela, veuillez décommenter la ligne comme expliqué dans `backend/src/app.js` (Ligne 102). Comme le backend servira le frontend, la variable globale VITE_BACKEND_URL sera définie avec une chaîne vide.

Votre URL sera `https://${PROJECT-NAME}.${sous-domaine}.wilders.dev/`.

**À propos de la base de données**

La base de données est déployée automatiquement avec le nom de votre dépôt. Pendant la construction du projet (`docker-entry.sh`), la commande `node migrate.js` est exécutée dans le backend. Si vous souhaitez initialiser automatiquement votre base de données à l'aide du script `seed.js`, remplacez la commande *build* dans votre `backend/package.json` par `node migrate.js && node seed.js`.

**À propos des ressources publiques (images, polices, etc.)**

N'utilisez aucun dossier public sur votre frontend. Ce dossier ne sera pas accessible en ligne. Vous pouvez déplacer vos ressources publiques dans le dossier `backend/public`. Privilégiez les [ressources statiques](https://vitejs.dev/guide/assets) lorsque cela est possible.

**À propos des journaux (Logs)**

Si vous souhaitez accéder aux journaux de votre projet en ligne (pour suivre le déploiement ou surveiller les erreurs), connectez-vous à votre VPS (`ssh user@host`). Ensuite, accédez à votre projet spécifique et exécutez `docker compose logs -t -f`.

## Utilisation

- **Page d'accueil** : Explorez les œuvres de street art autour de vous en fonction de votre emplacement.
- **Filtres** : Utilisez les filtres pour affiner votre recherche en fonction du style, de l'artiste, etc.
- **Détails de l'œuvre** : Obtenez des informations détaillées sur une œuvre spécifique, y compris son emplacement exact.

## Contribuer

Nous accueillons les contributions de la communauté ! Pour contribuer, veuillez suivre ces étapes :

1. **Fork le projet.**
2. **Créez une branche pour votre fonctionnalité (`git checkout -b fonctionnalite-incroyable`).**
3. **Committez vos modifications (`git commit -m 'Ajouter une fonctionnalité incroyable'`).**
4. **Push vers la branche (`git push origin fonctionnalite-incroyable`).**
5. **Ouvrez une pull request.**

## Licence

Ce projet est sous licence [MIT](LICENSE).

---
