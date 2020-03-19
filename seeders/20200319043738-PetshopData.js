'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
          return Promise.all([queryInterface.bulkInsert('owner', [
            {name: "Hiroshi", role: "admin"},
            {name: "Satoshi", role: "user"},
            {name: "BTS", role: "disabled"}
          ], {}),
            queryInterface.bulkInsert('pet', [
              {name: "Hiro", owner_id: 1, type:"dog"},
              {name: "Garry", owner_id: 2, type:"cat"},
              {name: "Chiyo", owner_id: 3, type:"dog"}
            ])]);
        }
    );
  },

  down: (queryInterface, Sequelize) => {

  }
};
