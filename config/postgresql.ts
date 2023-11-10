import knex from "knex";

const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "postgres",
    user: "postgres",
    password: "admin",
  },
});

export default knexInstance;