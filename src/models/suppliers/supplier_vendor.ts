import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class SupplierVendor extends Model {
    public id!: number;
    public name!: string;
    public category!: number;
    public email!: string;
    public mobile!: string;
    public location!: string;
    public website!: string;  
}


SupplierVendor.init(
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
        category: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'SupplierVendor',
    }
);

export default SupplierVendor;