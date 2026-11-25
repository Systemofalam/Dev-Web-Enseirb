# SeenFlix

SeenFlix est le socle d'une application web permettant de rechercher des films et des séries, puis de gérer une liste personnelle de favoris.

Ce dépôt est volontairement initialisé avec une architecture minimale. Les pages sont navigables, mais les fonctionnalités métier (authentification, TMDB, favoris, Prisma et tests) restent à développer.

## Prérequis

- Node.js 20.19 ou supérieur
- npm 10 ou supérieur

## Installation et lancement

```bash
npm install
copy backend\.env.example backend\.env
copy frontend\.env.example frontend\.env
npm run dev
```

Sous macOS ou Linux, remplacez `copy` par `cp`.

Une fois les deux serveurs démarrés :

- frontend : http://localhost:5173
- backend : http://localhost:3000
- vérification de l'API : http://localhost:3000/api/health

## Scripts disponibles

```bash
npm run dev      # lance le frontend et le backend
npm run build    # compile les deux applications
npm run start    # lance le backend compilé
```

Chaque workspace possède également ses propres scripts `dev`, `build` et `typecheck`.

## Architecture

```text
seenflix/
├── backend/
│   ├── src/
│   │   ├── routes/          # endpoints Express à ajouter
│   │   ├── controllers/     # adaptation HTTP à ajouter
│   │   ├── services/        # logique métier à ajouter
│   │   ├── middlewares/     # auth, validation et erreurs à ajouter
│   │   ├── lib/             # clients partagés à ajouter
│   │   ├── app.ts           # configuration de l'application Express
│   │   └── server.ts        # démarrage du serveur HTTP
│   ├── prisma/              # futur schéma et seed Prisma
│   └── tests/               # futurs tests backend
├── frontend/
│   ├── src/
│   │   ├── components/      # futurs composants réutilisables
│   │   ├── pages/           # pages placeholder de la SPA
│   │   ├── router/          # routes Vue
│   │   ├── stores/          # futurs stores Pinia
│   │   ├── services/        # futurs appels HTTP
│   │   ├── App.vue          # structure commune de l'interface
│   │   └── main.ts          # initialisation de Vue
│   └── index.html           # point d'entrée Vite
└── package.json             # scripts communs et workspaces npm
```

## Rôle des couches futures

- `routes` déclare les URL et associe chaque endpoint à un contrôleur.
- `controllers` lit les requêtes HTTP et construit les réponses.
- `services` contient la logique métier, indépendante d'Express.
- `middlewares` mutualise les contrôles comme les JWT, Zod et la gestion des erreurs.
- `lib` centralise les instances partagées telles que Prisma, le cache et le logger.
- `pages` assemble les écrans complets du frontend.
- `components` contient les éléments d'interface réutilisables.
- `stores` conserve l'état global avec Pinia.
- `services` côté frontend centralise les appels vers l'API backend.

Les fichiers métier seront ajoutés progressivement afin d'éviter du code vide ou prématuré dans le premier commit.
