'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Products', // source models name
        'CategoryId', // name of the key
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Categories', //target models
            key: 'id', // key in target models reference
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Products', //source models
        'CategoryId' // key to remove
    );
  }
};
