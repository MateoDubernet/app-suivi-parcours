const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const cors = require("cors");

// Middleware
app.use(bodyParser.json());

// Routes
const itinerairesRoutes = require("./routes/itineraires");

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST"], // Vous pouvez spécifier les méthodes HTTP que vous souhaitez autoriser
    allowedHeaders: ["Content-Type"],
  })
);
app.use("/itineraire", itinerairesRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
  });
});
