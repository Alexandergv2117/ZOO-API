import { Model, DataTypes } from 'sequelize';
import sequelize from '../index';
import Animal from './animal';

interface RiesgoAttributes {
  id: number;
  descripcion: string;
}

class Alimentacion extends Model<RiesgoAttributes> implements RiesgoAttributes {
  public id!: number;
  public descripcion!: string;
}

Alimentacion.init(
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
    modelName: 'Alimentacion',
    tableName: 'alimentacion',
  }
);

Alimentacion.hasMany(Animal, {
  foreignKey: 'alimentacion_id',
  sourceKey: 'id',
});

Animal.belongsTo(Alimentacion, {
  foreignKey: 'alimentacion_id',
  targetKey: 'id',
});

export default Alimentacion;
