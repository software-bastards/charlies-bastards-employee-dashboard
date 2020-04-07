
module.exports= (Sequelize,connector) =>{
    const Account = connector.define('account',  {
     /*  firstname: Sequelize.STRING,
      lastname:Sequelize.STRING,
      password:Sequelize.STRING,
      email: Sequelize.STRING */
      
          firstname: {
            type: Sequelize.STRING,
            allowNull: false
          },
          lastname: {
            type: Sequelize.STRING,
            allowNull: false
          },
           password: {
            type: Sequelize.STRING,
            allowNull: false,
         },
          email: {
            type: Sequelize.STRING,
            unique:true,
            allowNull: false,
            validate: {
                notNull: {
                  msg: 'Please enter your email'
                }
          }}, 
       
        },  
         
          { freezeTableName: true, timestamps:false})

          
   

    return Account
}

