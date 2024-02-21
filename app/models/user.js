'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      this.belongsTo(models.Role, {
        foreignKey: 'roleId',
      });
    }

    toJSON() {
      return {
        id: this.id,
        name: this.name,
        email: this.email,
        image: this.image,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
      }
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    encryptedPassword: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
