import authRouter from "./auth";

const routerAPI = (app: any) => {
  app.use("/auth", authRouter);
};

export default routerAPI;
