require('dotenv').config();
const express = require('express')
const { sequelize } = require('./data/index');
const userRouter = require('./router/user')
const app = express()
const { port } = require('./config');
const cors = require('cors')
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'bike-travel-user',
  port: process.env.DB_PORT || 3306
});

connection.query('CREATE DATABASE IF NOT EXISTS myShop', function(err, results) {
    if (err) {
      console.error(err);
    } else {
      console.log('Database created successfully.');
    }
  });
  connection.end();

(async () => {
    await sequelize.sync({ force: false });
})();
app.use(express.json()) 
app.use(cors())
app.use('/api/user', userRouter)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ mess: "Bienvenue sur Bike-Travel-User" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;
