
module.exports= (Sequelize,connector) =>{
    const category = connector.define('category',  {
          category_description:  Sequelize.STRING,
     },  
         
          { underscored: true, freezeTableName: true, timestamps:false})
 
    return category
}