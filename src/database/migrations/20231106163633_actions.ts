import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('cars', (table) => {
      table.string('createdBy').nullable();
      table.string('updatedBy').nullable();
      table.string('deletedBy').nullable();
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('cars', (table) => {
      table.dropColumn('createdBy');
      table.dropColumn('updatedBy');
      table.dropColumn('deletedBy');
    });
}
