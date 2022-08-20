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
    await queryInterface.bulkInsert('owner', fakeData.owner, {});
    await queryInterface.bulkInsert('product', fakeData.product, {});
    await queryInterface.bulkInsert('local', fakeData.local, {});
    await queryInterface.bulkInsert('inventory', fakeData.inventory, {});
    await queryInterface.bulkInsert('pet', fakeData.p, {});
    await queryInterface.bulkInsert('service', fakeData.service, {});
    await queryInterface.bulkInsert('sale', fakeData.sale, {});
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
