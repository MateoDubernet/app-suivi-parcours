# app-suivi-parcours

Cette application permet de créer des itinéraires en sélectionnant deux points sur une carte.
Elle intègre également un système d’authentification (inscription et connexion).

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

## Base de données

### Itinéraires
Un fichier SQL est fourni (`itineraires.sql`) afin de créer la table `Itineraires`.
Il faut exécuter ce script manuellement dans votre SGBD avant de démarrer l’API Itinéraires.

---

## Installation

### 1. Cloner le projet
```bash
git clone <url-du-repo>
cd <dossier-projet>
```

### 2. Installer les dépendances
```bash
cd front-end-bike-travel
npm install
```

```bash
cd Authentification
npm install
```

```bash
cd Itinary_API
npm install
```

---

## Lancement de l’application

**Important :** lancer les deux APIs avant le client pour éviter un conflit de port.

### API Authentification
```bash
cd Authentification
npm start
```

### API Itinéraires
```bash
cd Itinary_API
npm start
```

### Client (Next.js)
```bash
cd front-end-bike-travel
npm run dev
```

---

## Configuration
### API Authentification
- Fichiers de configuration :
  - .env
  - index.js
- Y renseigner les paramètres de connexion à la base de données.

### API Itinéraires
- Fichier de configuration :
  - config/database.js
  - Y renseigner les paramètres de connexion à la base de données.
- Exécuter le script SQL pour créer la table Itineraires.
