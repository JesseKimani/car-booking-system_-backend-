import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class Lease extends Model {
    public id!: number;
    public status!: string;
    public client_id!: number;
    public client_mobile!: string;
    public client_email!: string;
    public client_company!: string;
    public asset_id!: number;
    public driver_name!: string;
    public start_date!: Date;
    public end_date!: Date;
    public contract_number!: string;
    public amount!: number;
    public action_date!: Date;
    public description!: string;
}


Lease.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        client_mobile: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        client_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        client_company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        asset_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        driver_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        contract_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        action_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
       
    },
    {
        sequelize,
        modelName: 'Lease',
    }
);

export default Lease;
