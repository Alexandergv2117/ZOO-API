import Animal from '@models/animal';
import Especie from '@models/especie';
import sequelize from '../database/index';

export default {
  getAll: async (id: number) => {
    try {
      const data = await Animal.findAll({
        attributes: [
          [sequelize.col('nombre'), 'nombre'],
          [sequelize.col('scientific_name'), 'scientific_name'],
          [sequelize.col('Especie.link_foto'), 'imagen'],
        ],
        include: [
          {
            model: Especie,
            attributes: [],
          },
        ],
        where: {
          '$Especie.id$': id,
        },
      });
      return data;
    } catch (error) {
      return { error };
    }
  },
};
