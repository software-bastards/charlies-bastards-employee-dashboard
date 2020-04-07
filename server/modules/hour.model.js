
module.exports= (Sequelize,connector) =>{
    const Hour = connector.define('hour',  {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          hour: {
            type: Sequelize.INTEGER,
         },
          mounth_number: {
            type: Sequelize.INTEGER,
          },
           day_number: {
            type: Sequelize.INTEGER,
         },
         
          upload_id:Sequelize.INTEGER,
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE

     
    },
    { underscored: true}) 
     
  

    return Hour
}
