const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('sequelize')

const User = sequelize?.define('utilisateurs', {
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Lastname: {
        type: Sequelize.STRING,
        allowNull:false
    },
    Address: {
        type: Sequelize.STRING
    },
    PhoneNumber: {
        type: Sequelize.STRING,
        allowNull:false
    }
}, {
});

module.exports = User