// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: '/src/database/database.db'
    },
  migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  }
};