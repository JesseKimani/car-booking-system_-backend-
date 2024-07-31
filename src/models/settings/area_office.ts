import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class AreaOffice extends Model {
    public id!: number;
    public name!: string;
    public city!: string;
    public email!: string;
    public phone!: string;
    public address!: string;

}


AreaOffice.init(
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
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'AreaOffice',
    }
);

export default AreaOffice;
