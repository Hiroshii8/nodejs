'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [{
      name: 'hiroshii',
      email: 'hiroshi@gmail.com',
      phone: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'hanamichi',
      email: 'hanamichi@gmail.com',
      phone: '654321',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'sakuragi',
      email: 'sakuragi@gmail.com',
      phone: '13243454678',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contact', null, {})
  }
};
