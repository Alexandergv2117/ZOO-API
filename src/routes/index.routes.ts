import authRouter from '@routes/auth';
import type { Application } from 'express-serve-static-core';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const routerAPI = (app: Application) => {
  app.use('/auth', authRouter);
};

export default routerAPI;
