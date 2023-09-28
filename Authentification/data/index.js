const { Sequelize } = require('sequelize');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    port: process.env.DB_PORT || 3306
  });

connection.query('CREATE DATABASE IF NOT EXISTS bike_travel_user', function(err, results) {
    if (err) {
      console.error(err);
    } else {
      console.log('Database created successfully.');
    }
});

connection.end();

setTimeout(() => {
    const sequelize = new Sequelize('bike_travel_user', process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql'
    });
    
    sequelize.authenticate().then(() => {
    
        console.log('Connection has been established successfully.');
    }).catch(error => {
    
        console.error('Unable to connect to the database:', error);
    })

    module.exports = { sequelize }
}, 1000)


