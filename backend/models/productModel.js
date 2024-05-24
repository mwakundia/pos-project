const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  inventoryQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Product;
