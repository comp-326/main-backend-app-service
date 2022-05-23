import type { Knex } from "knex";
import { BASE_DIR, pgConfig } from "./src/config";
import path from "path";

// Update with your config settings.
export type knexEnvType = {
  testing: 'testing',
  staging: 'staging',
  development: 'development',
  production: 'production'
}

const config: { [x: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: pgConfig.DB_NAME,
      user: pgConfig.DB_USER,
      password: pgConfig.DB_PASSWORD,
      port: pgConfig.DB_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(path.dirname(BASE_DIR), '.')
    },
    seeds: {
      directory: path.join(BASE_DIR, 'seeds')
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: pgConfig.DB_NAME,
      user: pgConfig.DB_USER,
      password: pgConfig.DB_PASSWORD,
      port: pgConfig.DB_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(path.dirname(BASE_DIR), '.')
    },
    seeds: {
      directory: path.join(BASE_DIR, 'seeds')
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: pgConfig.DB_NAME,
      user: pgConfig.DB_USER,
      password: pgConfig.DB_PASSWORD,
      port: pgConfig.DB_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(path.dirname(BASE_DIR), '.')
    },
    seeds: {
      directory: path.join(BASE_DIR, 'seeds')
    }
  }

};

export default config
