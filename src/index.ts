import express from 'express';
import cors from 'cors';
import routerAPI from '@routes/index.routes';
import * as dotenv from 'dotenv';

import sequelize from './database/index';
import User from '@models/user';
import Comment from '@models/comentario';
import Calificacion from '@models/calificacion';
import Animal from '@models/animal';
import Riesgo from '@models/riesgo';
import TipoReproduccion from '@models/tipo_reproduccion';
import Alimentacion from '@models/alimentacion';
import Especie from '@models/especie';

const createdDB = async (): Promise<void> => {
  await sequelize.sync({ force: true });
  await Calificacion.findAll();
  await User.findAll();
  await Comment.findAll();

  await Riesgo.findAll();
  await TipoReproduccion.findAll();
  await Alimentacion.findAll();
  await Especie.findAll();
  await Animal.findAll();
};

void createdDB();

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

routerAPI(app);

app.use((_req, res, next) => {
  res.status(404).send({ message: 'Page not found' });
  next();
});

app.listen(PORT, () => {
  console.log('Server running on port: ', PORT);
});
