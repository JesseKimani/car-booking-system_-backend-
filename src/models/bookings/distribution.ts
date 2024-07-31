import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class Distribution extends Model {
    public id!: number;
    public status!: string;
    public client_id!: number;
    public client_mobile!: string;
    public client_email!: string;
    public client_address!: string;
    public asset_id!: number;
    public driver_name!: string;
    public origin!: string;
    public destination!: string;
    public requested_on!: Date;
    public delivery_date!: Date;
    public amount!: number;
    public action_date!: Date;
    public description!: string;
}


Distribution.init(
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
        client_address: {
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
        origin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        requested_on: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        delivery_date: {
            type: DataTypes.DATE,
            allowNull: false,
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
        modelName: 'Distribution',
    }
);

export default Distribution;
