const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Itineraire = sequelize.define("Itineraire", {
  longitudePoint1: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  latitudePoint1: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  longitudePoint2: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  latitudePoint2: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Itineraire;
