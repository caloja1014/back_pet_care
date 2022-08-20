'use strict';
const fakeData= require('../fakeData/data');
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('owners', fakeData.owner, {});
    await queryInterface.bulkInsert('products', fakeData.product, {});
    await queryInterface.bulkInsert('locals', fakeData.local, {});
    await queryInterface.bulkInsert('inventories', fakeData.inventory, {});
    await queryInterface.bulkInsert('petowners', fakeData.petOwner, {});
    await queryInterface.bulkInsert('pets', fakeData.pet, {});
    await queryInterface.bulkInsert('services', fakeData.service, {});
    await queryInterface.bulkInsert('sales', fakeData.sale, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
