module.exports = setupDb;

import knex from 'knex';
import { Model } from 'objection';
import { Knex } from 'knex'; // Import Knex types

const knexfile = require('../src/database/knexfile');

// Setup knex and objection
function setupDb(): void {
  const db: Knex = knex(knexfile.development);
  Model.knex(db);
}

export = setupDb;