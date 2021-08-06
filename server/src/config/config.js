  
module.exports={
  port: 8081,
    db:{
        database: process.env.DB_NAME || 'nvWebblogDb',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './nvwebblog-db.sqlite'
        },
  }
}