'use strict';

const carnames = [
  "Chevrolet Impala",
  "Ford Mustang",
  "Volkswagen Beetle",
  "Nissan Altima",
  "Subaru Outback",
  "Jeep Wrangler",
  "Tesla Model S",
  "Hyundai Sonata",
  "Kia Sportage",
  "Audi Q5",
  "BMW X5",
  "Mercedes-Benz S-Class",
  "Lexus RX",
  "Toyota RAV4",
  "Honda Accord",
  "Mitsubishi Outlander",
  "Porsche Cayenne",
  "Jaguar F-Type",
  "Land Rover Discovery",
  "Chevrolet Tahoe",
]

const sizes = ["SMALL", "MEDIUM", "LARGE"];

module.exports = {
  async up (queryInterface, Sequelize) {
    const cars = [];

    sizes.forEach((size) => {
      cars.push(
        ...carnames.map((name, i) => {
          const accumulator = i.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });

          const timestamp = new Date();

          return ({
            name,
            price: 5000000,
            size,
            image: `https://source.unsplash.com/5${accumulator}x5${accumulator}`, 
            isCurrentlyRented: false,
            createdAt: timestamp,
            updatedAt: timestamp,
          })
        })
      )
    })
    await queryInterface.bulkInsert('Cars', cars, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cars', null, {});
  }
};
