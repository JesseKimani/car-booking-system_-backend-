import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class FuelType extends Model {
    public id!: number;
    public name!: string;
    public description!: string;

}


FuelType.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
       name: {
            type: DataTypes.STRING,
            allowNull: false
       },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'FuelType',
    }
);

export default FuelType;
