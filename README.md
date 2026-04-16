# app-suivi-parcours

## Présentation
Cette application web permet de créer et d'enregistrer des itinéraires personnalisés en sélectionnant deux points sur une carte interactive. Ce projet a été réalisé en équipe durant mon alternance dans le cadre d'un devoir maison pour démontrer la gestion d'une architecture en microservices.

### Stack Technique
- **Next.js**
- **Expressjs**
- **Docker**

---

## Installation & Lancement
### 1. Clonage du dépôt
```bash
   git clone https://github.com/MateoDubernet/app-suivi-parcours.git
```

### 2. Lancement (Docker)
**Prérequis :** [Docker Desktop](https://www.docker.com/products/docker-desktop) installé et lancé.

[!IMPORTANT]
Assurez-vous que les ports 80, 3001 et 3002 ne sont pas déjà utilisés par une autre application sur votre machine avant de lancer le conteneur.

```bash
    cd ./app-suivi-parcours
    docker-compose up --build
```

### 3. Accès
Ouvrir un navigateur web et aller à l'adresse: http://localhost

---

## Fonctionnalités
1. **Authentification sécurisée** : Inscription et connexion avec gestion de session.

2. **Cartographie** : Sélection de lieux et tracé d'itinéraires sur carte.

3. **Profil Utilisateur** : Consultation, modification du profil et historique des parcours enregistrés.

4. **Microservices** : Communication fluide entre le client Next.js et les deux APIs Express.