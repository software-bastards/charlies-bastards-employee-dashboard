module.exports= (Sequelize,connector) =>{
    const Upload = connector.define('upload',  {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          upload_name:{
              type:Sequelize.STRING,
          },
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE
            },
            {
                underscored: true,
              
              })
              
              Account.associate= models =>{
                Account.belongsTo(models.Hour,{
                  onDelete:"cascade"
                })
              }

    return Upload}
   
     