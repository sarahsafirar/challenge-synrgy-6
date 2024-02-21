'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCar extends Model {

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });

      this.belongsTo(models.Car, {
        foreignKey: "carId",
      });
    }
  }
  UserCar.init({
    userId: DataTypes.INTEGER,
    carId: DataTypes.INTEGER,
    rentStartedAt: DataTypes.DATE,
    rentEndedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'UserCar',
  });
  return UserCar;
};
