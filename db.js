const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("classicmodels", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
const db = {};
db.sequelize = sequelize;
db.employee = require("./model/Employee")(DataTypes, sequelize);
db.offices = require("./model/Offices")(DataTypes, sequelize);
db.sequelize.sync({force:false})
module.exports = db;