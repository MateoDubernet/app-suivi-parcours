const express = require('express');
const router = express.Router();
const Itineraire = require('../models/Itineraire');

// Créer un nouvel itinéraire
router.post('/creer', async (req, res) => {
  try {
    const { longitudePoint1, latitudePoint1, longitudePoint2, latitudePoint2 ,userId} =
      req.body;
    const itineraire = await Itineraire.create({
      longitudePoint1,
      latitudePoint1,
      longitudePoint2,
      latitudePoint2,
      userId,
    });
    res.status(201).json(itineraire);
  } catch (error) {
    console.error('Erreur lors de la création de l\'itinéraire :', error);
    res.status(500).json({ message: 'Une erreur s\'est produite.' });
  }
});

// Obtenir tous les itinéraires
router.get('/tous', async (req, res) => {
  try {
    const itineraires = await Itineraire.findAll();
    res.status(200).json(itineraires);
  } catch (error) {
    console.error('Erreur lors de la récupération des itinéraires :', error);
    res.status(500).json({ message: 'Une erreur s\'est produite.' });
  }
});

router.get('/tous/:id', async (req, res) => {
  try {
    const itineraires = await Itineraire.findOne({where: {Id:req.params.id}});
    res.status(200).json(itineraires);
  } catch (error) {
    console.error('Erreur lors de la récupération des itinéraires :', error);
    res.status(500).json({ message: 'Une erreur s\'est produite.' });
  }
});

module.exports = router;
