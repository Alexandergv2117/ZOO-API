import { type QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('origen', [
      {
        descripcion: 'Especie endémica ',
      },
      {
        descripcion: 'Especie no endémica',
      },
      {
        descripcion: 'Especie introducida',
      },
      {
        descripcion: 'Especie invasora',
      },
      {
        descripcion: 'Especie migratoria',
      },
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('origen', {}, {});
  },
};
