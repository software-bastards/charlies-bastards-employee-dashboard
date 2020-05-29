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
          upload_image:{
           
              type:Sequelize.BLOB('long')
            
          },
          account_id:{
           
            type:Sequelize.INTEGER
          
        },  
        month:{
           
            type:Sequelize.INTEGER
          
        }
       
            },
            {underscored: true,
              freezeTableName: true,
              timestamps:false
              
              })
              
                 

  return Upload;
};
