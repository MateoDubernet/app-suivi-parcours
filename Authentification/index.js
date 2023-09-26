require('dotenv').config();
<<<<<<< Updated upstream
const express = require('express')
const { sequelize } = require('sequelize');
const userRouter = require('./router/user')
const app = express()
=======
const express = require('express');
const { sequelize } = require('./data/index');
const userRouter = require('./router/user');
const app = express();
>>>>>>> Stashed changes
const { port } = require('./config');
const cors = require('cors')
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  // database: 'bike_travel_user',
  port: process.env.DB_PORT || 3306
});

<<<<<<< Updated upstream
connection.query('CREATE DATABASE IF NOT EXISTS bike_travel_user', function(err, results) {
=======
connection.query('CREATE DATABASE IF NOT EXISTS bike-travel-user', function(err, results) {
>>>>>>> Stashed changes
    if (err) {
      console.error(err);
    } else {
      console.log('Database created successfully.');
    }
});

connection.end();

(async () => {
    await sequelize?.sync({ force: false });
});

app.use(express.json()) 
app.use(cors())
app.use('/api/user', userRouter)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ mess: "Bienvenue sur Bike_Travel_User" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;
