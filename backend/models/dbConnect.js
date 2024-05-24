const dbConfig = require("../config/dbConfig.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect
    }
);


sequelize
    .authenticate()
    .then(() => {
        console.log("Database Connection Successful...");
    })
    .catch((err) => {
        console.log("Error: " + err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('re-sync done');
    });

db.order = require('./orderModel.js')(sequelize, DataTypes);
db.product = require('./productModel.js')(sequelize, DataTypes);
db.user = require('./userModel.js')(sequelize, DataTypes);

module.exports = db;
