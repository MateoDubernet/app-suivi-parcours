require('dotenv').config();
const express = require('express');
const { sequelize } = require('./data/index');
const userRouter = require('./router/user');
const app = express();
const { port } = require('./config');
const cors = require('cors')
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  port: process.env.DB_PORT || 3306
});

connection.query('CREATE DATABASE IF NOT EXISTS Bike_Travel_User', function(err, results) {
    if (err) {
      console.error(err);
    } else {
      console.log('Database created successfully.');
    }
});

connection.query('USE Bike_Travel_User')

connection.query("CREATE TABLE IF NOT EXISTS users ("
  + "`id` BIGINT(20) NOT NULL AUTO_INCREMENT,"
  + "`nom` VARCHAR(100) NOT NULL,"
  + "`prenom` VARCHAR(100) NOT NULL,"
  + "`email` VARCHAR(100) NOT NULL,"
  + "`password` VARCHAR(100) NOT NULL,"
  + "`phone_number` VARCHAR(20) NOT NULL,"
  + "`address` VARCHAR(200) NOT NULL,"
  + "PRIMARY KEY (`id`) USING BTREE)"
);

(async () => {
    await sequelize?.sync({ force: false });
});

app.use(express.json()) 
app.use(cors())
app.use('/api/user', userRouter)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/user/:id', (request, response) => {
    res.json({ mess: `GET request` })
})

app.post('/user/connexion', (request, response) => {
  res.json({ mess: `Login user request` })
  console.log(req.body);
})

app.post('/user/register', (request, response) => {

  return new Promise((result, reject) => {
    let queryRequest = `INSERT INTO users (nom, prenom, email, password, phone_number, address) VALUES (
    '${request.body.firstname}', 
    '${request.body.lastname}', 
    '${request.body.email}', 
    '${request.body.password}',
    '${request.body.phoneNumber}',
    '${request.body.address}')`

    connection.query(queryRequest, (error, data) => {
        if (error){ 
            response.json(error);
            reject(error) 
        } else { 
            response.json(data);
            result(data) 
        } 
    })
  })
})

app.put('/user/update', (request, response) => {

})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

module.exports = app;
