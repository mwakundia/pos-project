const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Order = sequelize.define('Order', {
  user: {
    type: DataTypes.STRING,
    allowNull: false
  },
  products: {
    type: DataTypes.JSON,
    allowNull: false
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Order;
