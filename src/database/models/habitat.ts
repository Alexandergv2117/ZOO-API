import { Model, DataTypes } from 'sequelize';
import sequelize from '../index';
import Animal from './animal';

interface RiesgoAttributes {
  id: number;
  descripcion: string;
}

class Habitat extends Model<RiesgoAttributes> implements RiesgoAttributes {
  public id!: number;
  public descripcion!: string;
}

Habitat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Habitat',
    tableName: 'habitat',
  }
);

Habitat.hasMany(Animal, {
  foreignKey: 'especie_id',
  sourceKey: 'id',
});

Animal.belongsTo(Habitat, {
  foreignKey: 'especie_id',
  targetKey: 'id',
});

export default Habitat;