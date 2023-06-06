// Update with your config settings.　バージョン変更できた？

require("dotenv").config({
  path: "./.env",
})
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "buying_list",
      user: process.env.DB_USER,
      // password: "password",
    },
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.query('SET timezone="UTC";', (err) => {
          done(err, conn);
        });
      },
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connection: {
        user: process.env.DB_USER, // e.g. 'my-user'
        password: process.env.DB_PASS, // e.g. 'my-user-password'
        database: "buying_list", // e.g. 'my-database'
        host: process.env.INSTANCE_UNIX_SOCKET, // e.g. '/cloudsql/project:region:instance'
      },
    },
    // connection: process.env.DATABASE_URL,
    // connection: process.env.INSTANCE_CONNECTION_NAME,
    // pool: {
    //   min: 2,
    //   max: 10,
    // },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
  },
};
