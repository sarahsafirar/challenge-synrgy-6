// userModels.ts

import { Model } from 'objection';

class User extends Model {
  id!: number;
  email!: string;
  password!: string;
  role!: string;
  created_at?: string;
  updated_at?: string;

  // Add any other required properties or methods here

  static tableName = 'users';
}

export default User;
