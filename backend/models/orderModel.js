module.exports = ( sequelize, DataTypes ) => {
const Order = sequelize.define('Order', {
  user_id:{
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
  products: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

return Order;
}
