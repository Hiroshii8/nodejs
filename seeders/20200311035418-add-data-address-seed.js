'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [{
      city: 'Mississippi',
      zip_code: '96522',
      street: '711-2880 Nulla St',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      city: 'Roseville',
      zip_code: '11523',
      street: '606-3727 Ullamcorper Street',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      city: 'Nebraska',
      zip_code: '20620',
      street: '8562 Fusce Rd',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {})
  }
};
