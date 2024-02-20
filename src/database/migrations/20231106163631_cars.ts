import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("cars", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.decimal("price").notNullable();
        table.string("size");
        table.string("image");
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("cars");
}

