import type { Application } from 'express-serve-static-core';
import authRouter from './auth.routes';
import animalRouter from './animal.routes';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const routerAPI = (app: Application) => {
  app.use('/auth', authRouter);
  app.use('/animal', animalRouter);
};

export default routerAPI;
