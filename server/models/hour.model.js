
module.exports= (Sequelize,connector) =>{
    const Hour = connector.define('hour',  {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          hour_logged: {
            type: Sequelize.INTEGER,
         },
          mounth_number: {
            type: Sequelize.INTEGER,
          },
           day_number: {
            type: Sequelize.INTEGER,
         },
         
          upload_id:Sequelize.INTEGER,
         
     
    },
    { underscored: true, freezeTableName: true}) 
     
  

    return Hour
}
