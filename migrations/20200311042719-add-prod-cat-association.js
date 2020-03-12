'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Products', // source model name
        'CategoryId', // name of the key
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Categories', //target model
            key: 'id', // key in target model reference
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Products', //source model
        'CategoryId' // key to remove
    );
  }
};
