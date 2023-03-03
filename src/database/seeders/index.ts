/* eslint-disable @typescript-eslint/no-floating-promises */
import sequelize from '../index';

// MODELS
import User from '../models/user';
import Comment from '../models/comentario';
import Calificacion from '../models/calificacion';
import Animal from '../models/animal';
import Foto from '../models/foto';
import Riesgo from '../models/riesgo';
import TipoReproduccion from '../models/tipo_reproduccion';
import Alimentacion from '../models/alimentacion';
import Especie from '../models/especie';

// SEEDERS
import riesgo from './riesgo';

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });

    await Calificacion.findAll();
    await User.findAll();
    await Comment.findAll();

    await Riesgo.findAll();
    await TipoReproduccion.findAll();
    await Alimentacion.findAll();
    await Especie.findAll();
    await Animal.findAll();
    await Foto.findAll();

    await riesgo.up(sequelize.getQueryInterface());

    console.log('Correcto');
  } catch (e) {
    console.log({ e });
  }
})();
