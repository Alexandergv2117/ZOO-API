import { Sequelize } from 'sequelize';
import configDB from './config';

console.log(configDB);

const sequelize = new Sequelize(
  configDB.DB,
  configDB.username,
  configDB.password,
  {
    host: configDB.host,
    dialect: 'mysql',
  }
);

export default sequelize;
