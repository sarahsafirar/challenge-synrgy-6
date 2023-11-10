import { Model, ModelObject } from "objection";
import knexInstance from "../../../config/postgreesql";

export class CarEntity extends Model {
  id?: bigint;
  name!: string;
  size!: string;
  price!: number;
  img_url!: string;

  static get tableName() {
    return "cars";
  }
}

Model.knex(knexInstance);

export type Car = ModelObject<CarEntity>;