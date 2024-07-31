import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class Driver extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public phone!: string;
    public address!: string;

}

Driver.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Driver',
    }
);

export default Driver;
