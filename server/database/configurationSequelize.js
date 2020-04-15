const enVars = require("./envVariables");
const Sequelize = require("sequelize");

const connector = new Sequelize(
  enVars.development.database,
  enVars.development.user,
  enVars.development.password,
  {
    host: enVars.development.host,
    dialect: enVars.development.dialect,
    define: {
      timestamps: false,
    },
  }
);

const authenticate = async (connector) => {
  try {
    await connector.authenticate();
    console.log(`connection to db was good`);
  } catch (e) {
    console.error(e);
  }
};

authenticate(connector);

const db = {};

db.Sequelize = Sequelize;
db.connector = connector;
db.account = require("../models/account.model")(Sequelize, connector);
db.upload = require("../models/upload.model")(Sequelize, connector);
db.project = require("../models/project.model")(Sequelize, connector);
db.hour = require("../models/hour.model")(Sequelize, connector);
db.category = require("../models/category.model")(Sequelize, connector);

//upload conection
db.upload.belongsTo(
  db.account /* , {foreignKey: 'id', targetKey: 'upload_id'} */
);

//account conection

db.project.belongsTo(db.account);
db.account.hasMany(
  db.project /* , { foreignKey: "account_id", sourceKey: "id" } */
);
db.hour.belongsTo(db.account);
db.account.hasMany(
  db.hour /* , { foreignKey: "account_id", sourceKey: "id" } */
);

// hour conection
db.hour.belongsTo(db.category);lsof -i:5000
db.hour.hasOne(db.upload);

module.exports = db;
