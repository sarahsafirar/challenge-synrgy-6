import { Knex } from "knex";
import * as fs from "fs";
import * as path from "path";

export async function seed(knex: Knex): Promise<void> {
  // Deletes all existing entries in the "cars" table
  await knex("cars").del();

  // Specify the full path to the JSON file by navigating up two levels
  const jsonFilePath = path.join(__dirname, "../../data/cars.json");

  // Read data from the JSON file
  const data = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

  // Insert the records into the "cars" table
  await knex("cars").insert(data);
}
