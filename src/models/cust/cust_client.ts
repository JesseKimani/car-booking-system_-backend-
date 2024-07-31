import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class CustClient extends Model {
    public id!: number;
    public first_name!: string;
    public last_name!: string;
    public email!: string;
    public password!: string; 
    public address!: string;
    public phone!: string;
    public company!: string;
    public department!: number;
    public is_active!: boolean;
}


CustClient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        department: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'CustClient',
    }
);

export default CustClient;
