module.exports = ( sequelize, DataTypes ) => {
const Product = sequelize.define('Product', {
  product_id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  inventoryQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

return Product;
}