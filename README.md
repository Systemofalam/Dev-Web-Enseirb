# Dev-Web-Enseirb

## lancer le projet 

Prérequis : Node.js 22.18+ et une clé d'API TMDB.

- `cp back/.env.example back/.env` : créer le fichier d'environnement, puis y remplir `JWT_SECRET`, `JWT_REFRESH_SECRET` et `TMDB_API_KEY`
(pour remplir les valeurs de jwt faire `openssl rand -hex 32`)
- `npm run setup` : installer les dépendances, créer la base et le compte de démo
- `npm run dev` : lancer le front (http://localhost:5173) et l'API (http://localhost:3000)

Compte de démo : `alice@example.org` / `Passw0rd!`

Autres commandes : `npm run lint`, `npm test`, `npm run db:reset -w back` (vide et recrée la base).

## où modifier quoi

- `front/src/` : le front React (`App.jsx` est le composant racine)
- `back/src/` : l'API Express (`index.js` est le point d'entrée), les routes commencent par `/api`
- `back/prisma/schema.prisma` : les modèles de la base ; après une modification, lancer `npm run db:migrate -w back` puis `npm run db:generate -w back`
- `back/prisma/seed.js` : les données de démo
- `back/.env` : les secrets locaux (jamais commité) ; toute nouvelle variable va aussi dans `back/.env.example`

---

Matériel d’enseignement pour le module de développement web (R&I, 2A).

## Contenu

- `ProjetWeb.md` : sujet détaillé du projet SeenFlix.
- `ProjetWeb.pdf` : version PDF du sujet (à télécharger / consulter).

## Projet des étudiants

Chaque trinôme doit créer **son propre dépôt** pour développer le projet SeenFlix  
et ajouter `@Systemofalam` comme collaboratrice.
