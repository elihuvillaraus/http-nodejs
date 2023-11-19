module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", true),
      },
      schema: env("DATABASE_SCHEMA", "public"),
    },
    debug: true,
    acquireConnectionTimeout: 600000,
    pool: {
      min: env.int("DATABASE_POOL_MIN", 3),
      max: env.int("DATABASE_POOL_MAX", 10),
    },
  },
});
