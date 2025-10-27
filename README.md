# app-suivi-parcours

## Contexte

### Description
Il s'agit d'un projet utilisant Next.js pour le frontend et Express.js pour le backend, il a été réaliser en groupe durant mon alternance dans le cadre d'un devoir maison.\
Le projet est une application web permettant de créer des itinéraires en sélectionnant deux points sur une carte, elle intègre également un système d’authentification (inscription et connexion).

---

## Architecture du projet

L’application est composée de **3 parties** distinctes :

1. **Frontend**
   - Framework : [Next.js](https://nextjs.org/).
   - Affiche la carte et permet la sélection des points.
   - Interagit avec les deux APIs.

2. **API Authentification**
   - Framework : [Express.js](https://expressjs.com).
   - Gère l’inscription et la connexion des utilisateurs.
   - Base de données créée automatiquement lors du lancement.
   - Paramètres de connexion à configurer via :
     - `index.js`
     - `.env`

4. **API Itinéraires**
   - Framework : [Express.js](https://expressjs.com).
   - Gère la création et la récupération des itinéraires.
   - **Base de données à créer manuellement** : un fichier SQL est fourni pour la table `Itineraires`.
   - Paramètres de connexion à configurer via :
     - `config/database.js`
    
---

## Prérequis

- Node.js et npm installés
- MySQL

---

## Installation & Lancement

### 1. Cloner le projet
```bash
   git clone <url-du-repo>
   cd <dossier-projet>
```

- Ouvrir trois terminals, un pour front-end-bike-travel, un pour Authentification et un autre pour Itinary_API
- Se mettre sur les dossiers :
```bash
    cd front-end-bike-travel
```
```bash
   cd Authentification
```
```bash
   cd Itinary_API
```

### 2. Installer les dépendances

Dans touts les terminals lancer la commande :
```bash
   npm install
```
ou
```bash
    npm install --force
```

### 3. Configuration

#### API Authentification
- Fichiers de configuration :
  - .env
  - index.js
- Y renseigner les paramètres de connexion à la base de données.

#### API Itinéraires
- Créer la base de données **itinary_api** avec MySQL
- Exécuter le fichier **itinary_api.sql** dans la base de données **itinary_api**
- Fichier de configuration :
  - config/database.js
  - Y renseigner les paramètres de connexion à la base de données.

### 4. Lancement de l’application
**Important :** lancer les deux APIs avant le client pour éviter un conflit de port.

#### Authentification et Itinary_API

Dans les terminals pour **Authentification** et **Itinary_API** lancer la commande :
```bash
   npm start
```

#### Front-end-bike-travel
Dans le terminal pour front-end :
```bash
   npm run dev
```

## Fonctionnalités

