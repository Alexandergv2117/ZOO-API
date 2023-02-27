import { Model, DataTypes } from 'sequelize';
import sequelize from '../index';
import Animal from './animal';

interface RiesgoAttributes {
  id: number;
  descripcion: string;
}

class Riesgo extends Model<RiesgoAttributes> implements RiesgoAttributes {
  public id!: number;
  public descripcion!: string;
}

Riesgo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0',
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Riesgo',
    tableName: 'riesgo',
  }
);

Riesgo.hasMany(Animal, {
  foreignKey: 'riesgo_id',
  sourceKey: 'id',
});

Animal.belongsTo(Riesgo, {
  foreignKey: 'riesgo_id',
  targetKey: 'id',
});

export default Riesgo;
