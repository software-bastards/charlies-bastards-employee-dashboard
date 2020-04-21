
module.exports= (Sequelize,connector) =>{
    const Project = connector.define('project',  {
          project_name:  Sequelize.STRING,
     },  
         
          { underscored: true, freezeTableName: true, timestamps:false})
 
    return Project
}