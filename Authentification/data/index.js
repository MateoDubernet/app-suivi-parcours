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

connection.query('USE bike_travel_user')

connection.query("CREATE TABLE IF NOT EXISTS utilisateurs ("
  + "`id` BIGINT(20) NOT NULL AUTO_INCREMENT UNIQUE,"
  + "`nom` VARCHAR(100) NOT NULL,"
  + "`prenom` VARCHAR(100) NOT NULL,"
  + "`email` VARCHAR(100) NOT NULL UNIQUE,"
  + "`password` VARCHAR(100) NOT NULL,"
  + "`phone_number` VARCHAR(20) NOT NULL,"
  + "`address` VARCHAR(200) NOT NULL,"
  + "PRIMARY KEY (`id`) USING BTREE)"
);

// connection.end();

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


