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
      body: JSON.stringify(userData),
    };
    console.log(userData);
    // Envoi de la requête à l'API d'authentification
    const response = await fetch(
      `${authApiUrl}/user/connexion`,
      requestOptions,
      console.log(requestOptions)
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

module.exports = router;
