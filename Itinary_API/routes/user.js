const express = require("express");
const router = express.Router();
const fetch = require("node-fetch"); // Assurez-vous que 'node-fetch' est installé si vous l'exécutez côté serveur

// URL de votre API d'authentification
const authApiUrl = "http://localhost:4000"; // Remplacez par l'URL réelle de votre API d'authentification

// Route pour l'inscription
router.post("/register", async (req, res) => {
  try {
    // Les données à envoyer dans la requête POST vers l'API d'authentification
    const userData = req.body;

    // Configuration de la requête
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    // Envoi de la requête à l'API d'authentification
    const response = await fetch(`${authApiUrl}/user/register`, requestOptions);

    if (!response.ok) {
      console.log(JSON.stringify(userData));
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();

    // Répond à la demande de l'API de localisation avec la réponse de l'API d'authentification
    res.status(200).json(data);
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(500).json({ error: "Erreur lors de l'inscription" });
  }
});

router.post("/login", async (req, res) => {
  try {
    // Les données à envoyer dans la requête POST vers l'API d'authentification
    const userData = req.body;

    // Configuration de la requête
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData), // Inclure les données de l'utilisateur dans le corps de la requête
    };

    // Envoi de la requête à l'API d'authentification
    const response = await fetch(
      `${authApiUrl}/user/connexion`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();

    // Répond à la demande de l'API de localisation avec la réponse de l'API d'authentification
    res.status(200).json(data);
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(500).json({ error: "Erreur lors de la connexion" });
  }
});

router.get("/user/:email", async (req, res) => {
  try {
    const userEmail = req.params.email;

    // Configuration de la requête
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Envoi de la requête à l'API d'authentification avec l'e-mail en tant que paramètre
    const response = await fetch(
      `${authApiUrl}/user/${userEmail}`, // Notez l'utilisation de ${userEmail} pour insérer la valeur dynamique de l'e-mail
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();

    // Répond à la demande de l'API avec la réponse de l'API d'authentification
    res.status(200).json(data);
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(500).json({ error: "Erreur lors de la connexion" });
  }
});

router.put("/user/update/:email", async (req, res) => {
  try {
    // Les données à envoyer dans la requête POST vers l'API d'authentification
    const userData = req.body;
    console.log(userData);
    // Configuration de la requête
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    // Envoi de la requête à l'API d'authentification
    const response = await fetch(
      `${authApiUrl}/user/update/${req.params.email}`,
      requestOptions
    );

    if (!response.ok) {
      console.log(JSON.stringify(userData));
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();

    // Répond à la demande de l'API de localisation avec la réponse de l'API d'authentification
    res.status(200).json(data);
  } catch (error) {
    console.error("Erreur lors de la modification :", error);
    res.status(500).json({ error: "Erreur lors de la modification" });
  }
});

module.exports = router;
