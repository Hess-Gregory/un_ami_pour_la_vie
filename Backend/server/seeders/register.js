'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      return queryInterface.bulkInsert('user', [{
        username: 'John Does',
        email: 'email@mail.cosm',
        password:'test1',	
        role:	6, 
        isActive: 0

      }], {});

  },

  down: (queryInterface, Sequelize) => {


      Example:
      return queryInterface.bulkDelete('user', null, {});

  }
};
