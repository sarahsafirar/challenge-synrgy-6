import type { Knex } from "knex";
import dotenv from 'dotenv';


dotenv.config({ path: '../../.env' })
dotenv.config();


const { knexSnakeCaseMappers } = require('objection');

// Update with your config settings.

export const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: { 
      directory: '../docs/seeds' 
    },
    ...knexSnakeCaseMappers,
  }
};

module.exports = config;
