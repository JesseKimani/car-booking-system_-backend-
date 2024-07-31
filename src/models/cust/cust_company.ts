import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class CustCompany extends Model {
    public id!: number;
    public name!: string;
    public contact_person!: string;
    public email!: string;
    public phone!: string;
    public address!: string;
}


CustCompany.init(
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
        contact_person: {
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
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'CustCompany',
    }
);

export default CustCompany;
