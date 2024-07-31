import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class CarRental extends Model {
    public id!: number;
    public status!: string;
    public client_id!: number;
    public client_mobile!: string;
    public client_email!: string;
    public asset_id!: number;
    public driver_name!: string;
    public from_address!: string;
    public to_address!: string;
    public start_date!: Date;
    public start_time!: number;
    public end_date!: Date;
    public end_time!: number;
    public mileage!: number;
    public fuel_level!: string;
    public amount!: number;
    public vehicle_park_fee!: number;
    public driver_charges!: number;
    public delivery_charges!: number;
    public supplier_price!: number;
    public client_address!: string;
    public client_company_id!: string;
    public client_department!: string;
    public action_date!: Date;
    public description!: string;
}


CarRental.init(
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
        asset_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        driver_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        from_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        to_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        start_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        mileage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fuel_level: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vehicle_park_fee: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        driver_charges: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        delivery_charges: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        supplier_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        client_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        client_company_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        client_department: {
            type: DataTypes.STRING,
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
        modelName: 'CarRental',
    }
);

export default CarRental;
