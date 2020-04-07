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
/* db.upload = require("../../modules/account.model")(Sequelize,connector)
db.account.hasMany(db.upload) */


 module.exports = db