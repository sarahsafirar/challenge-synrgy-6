'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      this.hasOne(models.UserCar, {
        foreignKey: "carId",
        as: "userCar",
      })
    }

  }
  Car.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    size: DataTypes.STRING,
    image: DataTypes.STRING,
    isCurrentlyRented: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};
