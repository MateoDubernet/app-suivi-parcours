const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const cors = require("cors");

// Middleware
app.use(bodyParser.json());

// Routes
const itinerairesRoutes = require("./routes/itineraires");
const userRoute = require("./routes/user");

app.use(cors());
app.use("/itineraire", itinerairesRoutes);
app.use("/itineraire", userRoute);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
  });
});
