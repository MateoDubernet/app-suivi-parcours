require("dotenv").config();
const express = require("express");
const { sequelize } = require("./data/index");
const userRouter = require("./router/user");
const app = express();
const { port } = require("./config");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  port: process.env.DB_PORT || 3306,
});

connection.query(
  "CREATE DATABASE IF NOT EXISTS bike_travel_user",
  function (err, results) {
    if (err) {
      console.error(err);
    } else {
      console.log("Database created successfully.");
    }
  }
);

connection.query("USE bike_travel_user");
connection.query(
  "CREATE TABLE IF NOT EXISTS utilisateurs (" +
    "`id` BIGINT(20) NOT NULL AUTO_INCREMENT UNIQUE," +
    "`nom` VARCHAR(100) NOT NULL," +
    "`prenom` VARCHAR(100) NOT NULL," +
    "`email` VARCHAR(100) NOT NULL UNIQUE," +
    "`password` VARCHAR(100) NOT NULL," +
    "`phone_number` VARCHAR(20) NOT NULL," +
    "`address` VARCHAR(200) NOT NULL," +
    "PRIMARY KEY (`id`) USING BTREE)"
);

async () => {
  await sequelize?.sync({ force: false });
};

app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/user", (request, response) => {
  res.json({ mess: `GET request` });
});


app.post("/user/connexion", (request, response) => {
  if (!request.body.email || !request.body.password) {
    response
      .status(400)
      .json({ mess: "Champs obligatoires : Email et Password." });
    return;
  }

  return new Promise((result, reject) => {
    connection.query(
      `SELECT * FROM utilisateurs WHERE email = '${request.body.email}'`,
      (error, data) => {
        if (error) {
          response.json(error);
          reject(error);
        } else {
          const user = data[0];

          if (!user || user.password != request.body.password) {
            response
              .status(403)
              .json({ mess: "Utilisateur ou mot de passe incorrect." });
            return;
          }

          var token = jwt.sign({ ...user }, "ma clé");
          response.json({ token });
          result(data);
        }
      }
    );
  });
});

// Route pour récupérer un utilisateur par e-mail
app.get("/user/:email", (request, response) => {
  const userEmail = request.params.email;

  // Votre code pour interagir avec la base de données
  connection.query(
    `SELECT * FROM utilisateurs WHERE email = '${userEmail}'`,
    (error, data) => {
      if (error) {
        response.status(500).json({ error: "Erreur lors de la récupération de l'utilisateur." });
      } else {
        if (data.length === 0) {
          response.status(404).json({ message: "Utilisateur introuvable." });
        } else {
          const user = data[0];
          response.status(200).json(user);
        }
      }
    }
  );
});

app.post("/user/register", (request, response) => {
  return new Promise((result, reject) => {
    let queryRequest = `INSERT INTO utilisateurs (nom, prenom, email, password, phone_number, address) VALUES (
    '${request.body.firstname}', 
    '${request.body.lastname}', 
    '${request.body.email}', 
    '${request.body.password}',
    '${request.body.phoneNumber}',
    '${request.body.address}')`;

    connection.query(
      `SELECT * FROM utilisateurs WHERE email = '${request.body.email}'`,
      (error, data) => {
        if (error) {
          response.json(error);
          reject(error);
        } else {
          const user = data[0];
          if (user) {
            response
              .status(403)
              .json({
                mess: `Un compte avec l'email: ${request.body.email} existe déja`,
              });
            return;
          } else {
            connection.query(queryRequest, (error, data) => {
              if (error) {
                response.json(error);
                reject(error);
              } else {
                response.json(request.body);
                result(data);
              }
            });
          }
        }
      }
    );
  });
});

app.put("/user/update/:id", (request, response) => {
  return new Promise((result, reject) => {
    let queryRequest = `UPDATE utilisateurs SET 
    nom = '${request.body.firstname}', 
    prenom = '${request.body.lastname}', 
    email = '${request.body.email}', 
    password = '${request.body.password}', 
    phone_number = '${request.body.phoneNumber}', 
    address = '${request.body.address}' WHERE utilisateurs.id = '${request.params.id}'`;

    connection.query(`SELECT * FROM utilisateurs WHERE email = '${request.body.email}'`,
      (error, data) => {
        if (error) {
          response.json(error);
          reject(error);
        } else {
          const user = data[0];
          if (user.email === request.body.email) {
            response
              .status(403)
              .json({
                mess: `Un compte avec l'email: ${request.body.email} existe déja`,
              });
            return;
          } else {
            connection.query(queryRequest, (error, data) => {
              if (error) {
                response.json(error);
                reject(error);
              } else {
                response.json(request.body);
                result(data);
              }
            });
          }
        }
      }
    );
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
