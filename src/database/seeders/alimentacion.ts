import { type QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('alimentacion', [
      {
        descripcion: 'Carnívoros ',
      },
      {
        descripcion: 'Herbívoros  ',
      },
      {
        descripcion: 'Omnívoros  ',
      },
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('alimentacion', {}, {});
  },
};
