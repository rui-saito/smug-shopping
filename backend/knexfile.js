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
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      host: "35.200.74.73", // 修正: IPアドレスを指定
      database: "buying_list", // 修正: データベース名を指定
      user: process.env.DB_USER, // 修正: ユーザー名を指定
      // password: "password", // 修正: パスワードを指定
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
