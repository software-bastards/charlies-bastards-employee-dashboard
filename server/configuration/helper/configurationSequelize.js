const enVars = require ("./envVariables")
const Sequelize = require('sequelize');


const connector = new Sequelize(  enVars.database,  enVars.user,  enVars.password,     {
    host: enVars.host,
    dialect: enVars.dialect,
    define:{
        timestamps:false
    }
     });
  
  const authenticate = async connector =>{
      try{
          await connector.authenticate();
          console.log(`connection to db was good`);
      }
      catch(e){
          console.error(e)
      }
  }

  authenticate(connector);

 const db ={ }

db.Sequelize = Sequelize
db.connector=connector 
db.account = require("../../modules/account.model")(Sequelize,connector)
db.upload = require("../../modules/upload.model")(Sequelize,connector)
db.project = require("../../modules/project.model")(Sequelize,connector)
db.hour = require("../../modules/hour.model")(Sequelize,connector)
db.category = require("../../modules/category.model")(Sequelize,connector)

//upload conection 
db.upload.belongsTo(db.account, {foreignKey: 'id', targetKey: 'upload_id'});

//account conection 
db.account.hasMany(db.project, {foreignKey: 'account_id', sourceKey: 'id'}) 
db.account.hasMany(db.hour, {foreignKey: 'account_id', sourceKey: 'id'}) 

// hour conection
db.hour.belongsTo(db.category) 
db.hour.hasOne(db.upload)


 module.exports = db