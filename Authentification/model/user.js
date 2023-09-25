const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../data/index')

const User = sequelize.define('utilisateurs', {
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Surname: {
        type: Sequelize.STRING,
        allowNull:false
    },
    Address: {
        type: Sequelize.STRING
    },
    Admin: {
        type: Sequelize.BOOLEAN,
        allowNull:false
    }
}, {
});

module.exports = User