// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/src/database/database.db`
    },
  migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
   seeds: {
      directory: `${__dirname}/src/database/seeds`
    },useNullAsDefault:true
  }
  
};