
module.exports= (Sequelize,connector) =>{
    const Account = connector.define('account',  {
         
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
            allowNull: true,
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
          upload_id: Sequelize.INTEGER, 

           acount_type: Sequelize.STRING
        },
         
          { underscored: true, freezeTableName: true})

          
   

    return Account
}

