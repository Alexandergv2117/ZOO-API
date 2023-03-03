import { type QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('riesgo', [
      {
        descripcion: 'bajo',
      },
      {
        descripcion: 'medio',
      },
      {
        descripcion: 'alto',
      },
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('riesgo', {}, {});
  },
};
