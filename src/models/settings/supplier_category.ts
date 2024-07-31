import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class SupplierCategory extends Model {
    public id!: number;
    public name!: string;
    public description!: string;

}

SupplierCategory.init(
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
        modelName: 'SupplierCategory',
    }
);

export default SupplierCategory;
