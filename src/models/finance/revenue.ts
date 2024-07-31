import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class Revenue extends Model {
    public id!: number;
    public booking_type!: string;
    public client_id!: number; 
    public company_id!: number;  
    public asset_id!: number; 
    public driver_id!: number;
    public amount!: number;
    public action_date!: Date;  
    public payment_status!: string;
}

Revenue.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        booking_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        asset_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        driver_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        action_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        payment_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
   
    },
    {
        sequelize,
        modelName: 'Revenue',
    }
);

export default Revenue;