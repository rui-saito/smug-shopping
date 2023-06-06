// Update with your config settings.

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
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    // connection: process.env.DATABASE_URL,
    connection: process.env.INSTANCE_CONNECTION_NAME,
    // connection: "p520269180137-ezzhc6@gcp-sa-cloud-sql.iam.gserviceaccount.com",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
    // "build": "npm install && npx knex migrate:latest --knexfile db/knexfile.js && npx knex seed:run --knexfile db/knexfile.js"
